import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getPostSlugs } from '@/lib/markdown';
import styles from './page.module.css';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function MediaCoverageDetailPage({ params }: PageProps) {
  const post = getPostBySlug('media-coverage', params.slug);
  
  if (!post) {
    notFound();
  }

  // 이전/다음 글 찾기
  const allSlugs = getPostSlugs('media-coverage');
  const currentIndex = allSlugs.indexOf(params.slug);
  const prevSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const nextSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/promote/prcenterPressreleaselist" className={styles.listButton}>
          목록으로
        </Link>
        
        <div className={styles.postWrapper}>
          <div className={styles.postHeader}>
            <span className={styles.category}>
              <em>{post.metadata.category}</em>
            </span>
            <span className={styles.date}>{post.metadata.date}</span>
            <h1 className={styles.title}>{post.metadata.title}</h1>
            {post.metadata.source && (
              <div className={styles.source}>
                출처: {post.metadata.source}
              </div>
            )}
          </div>
          
          <div className={styles.postContent}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <div className={styles.postFiles}>
            <span className={styles.file}>
              {/* 첨부파일이 있다면 여기에 표시 */}
            </span>
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
                <i className="zmdi zmdi-chevron-left"></i> 이전글
              </Link>
            )}
            
            {nextSlug && (
              <Link href={`/promote/prcenterMedia/${nextSlug}`} className={styles.navButton}>
                다음글 <i className="zmdi zmdi-chevron-right"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// 정적 생성을 위한 함수
export function generateStaticParams() {
  const { getPostSlugs } = require('@/lib/markdown');
  const slugs = getPostSlugs('media-coverage');
  return slugs.map((slug: string) => ({
    slug,
  }));
} 