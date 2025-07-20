import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getPostSlugs } from '@/lib/markdown';
import styles from './page.module.css';
import Link from 'next/link';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function PressReleaseDetailPage({ params }: PageProps) {
  const post = getPostBySlug('press-releases', params.slug);
  
  if (!post) {
    notFound();
  }

  // 이전/다음 글 찾기
  const allSlugs = getPostSlugs('press-releases');
  const currentIndex = allSlugs.indexOf(params.slug);
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
            <div className={styles.markdownContent}>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>

          <div className={styles.navigationButtons}>
            <div className={styles.buttonWrapper}>
              {prevSlug && (
                <Link href={`/promote/prcenterPressrelease/${prevSlug}`} className={styles.navButton}>
                  <i className="zmdi zmdi-chevron-left"></i> 이전글
                </Link>
              )}
              
              {nextSlug && (
                <Link href={`/promote/prcenterPressrelease/${nextSlug}`} className={styles.navButton}>
                  다음글 <i className="zmdi zmdi-chevron-right"></i>
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
  const { getPostSlugs } = require('@/lib/markdown');
  const slugs = getPostSlugs('press-releases');
  return slugs.map((slug: string) => ({
    slug,
  }));
} 