import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getPostSlugs } from '@/lib/markdown';
import styles from './page.module.css';
import Link from 'next/link';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MediaCoverageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug('media-coverage', slug);
  
  if (!post) {
    notFound();
  }

  // 이전/다음 글 찾기
  const allSlugs = getPostSlugs('media-coverage');
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const nextSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;

  return (
    <div className={styles.main}>
      <Header />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headerSection}>
            <div className={styles.metaInfo}>
              <span className={styles.category}>{post.metadata.category}</span>
              <span className={styles.date}>{post.metadata.date}</span>
            </div>
            <Link href="/promote/prcenterPressreleaselist" className={styles.listButton}>
              목록으로
            </Link>
          </div>
          
          <div className={styles.postContent}>
            <h1 className={styles.title}>{post.metadata.title}</h1>
            {post.metadata.source && (
              <div className={styles.source}>
                출처: {post.metadata.source}
              </div>
            )}
            <div className={styles.markdownContent}>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            {post.metadata.sourceUrl && (
              <div className={styles.sourceLink}>
                <a href={post.metadata.sourceUrl} target="_blank" rel="noopener noreferrer">
                  기사 전문 보러 가기
                </a>
              </div>
            )}
          </div>

          <div className={styles.navigationButtons}>
            <div className={styles.buttonWrapper}>
              {prevSlug && (
                <Link href={`/promote/prcenterMedia/${prevSlug}`} className={styles.navButton}>
                  <span className={styles.arrowLeft}></span> 이전글
                </Link>
              )}
              
              {nextSlug && (
                <Link href={`/promote/prcenterMedia/${nextSlug}`} className={styles.navButton}>
                  다음글 <span className={styles.arrowRight}></span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

// 정적 생성을 위한 함수
export function generateStaticParams() {
  const slugs = getPostSlugs('media-coverage');
  return slugs.map((slug: string) => ({
    slug,
  }));
} 