import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  source?: string;
  sourceUrl?: string;
}

export interface Post {
  metadata: PostMetadata;
  content: string;
  slug: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getPostBySlug(category: string, slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, category, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      metadata: data as PostMetadata,
      content,
      slug
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(category: string): Post[] {
  try {
    const categoryPath = path.join(contentDirectory, category);
    const fileNames = fs.readdirSync(categoryPath);
    
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const post = getPostBySlug(category, slug);
        return post;
      })
      .filter((post): post is Post => post !== null)
      .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
    
    return posts;
  } catch (error) {
    console.error(`Error reading posts from category ${category}:`, error);
    return [];
  }
}

export function getPostSlugs(category: string): string[] {
  try {
    const categoryPath = path.join(contentDirectory, category);
    const fileNames = fs.readdirSync(categoryPath);
    
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error(`Error reading slugs from category ${category}:`, error);
    return [];
  }
}

export function getPostsByCategory(category: string, limit?: number): Post[] {
  const posts = getAllPosts(category);
  return limit ? posts.slice(0, limit) : posts;
} 