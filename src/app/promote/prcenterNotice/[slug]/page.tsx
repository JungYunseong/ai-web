'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getPostSlugs, Post } from '@/lib/markdown';
import styles from './page.module.css';

export default function NoticeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [prevSlug, setPrevSlug] = useState<string | null>(null);
  const [nextSlug, setNextSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (params.slug) {
        const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
        const postData = getPostBySlug('notices', slug);
        
        if (postData) {
          setPost(postData);
          
          // 이전/다음 글 찾기
          const allSlugs = getPostSlugs('notices');
          const currentIndex = allSlugs.indexOf(slug);
          
          if (currentIndex > 0) {
            setNextSlug(allSlugs[currentIndex - 1]); // 날짜 역순이므로 인덱스 반대
          }
          if (currentIndex < allSlugs.length - 1) {
            setPrevSlug(allSlugs[currentIndex + 1]); // 날짜 역순이므로 인덱스 반대
          }
        }
        setLoading(false);
      }
    };

    loadPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>게시물을 찾을 수 없습니다.</div>
      </div>
    );
  }

  const handlePrevClick = () => {
    if (prevSlug) {
      router.push(`/promote/prcenterNotice/${prevSlug}`);
    }
  };

  const handleNextClick = () => {
    if (nextSlug) {
      router.push(`/promote/prcenterNotice/${nextSlug}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button 
          className={styles.listButton}
          onClick={() => router.push('/promote/prcenterNoticelist')}
        >
          목록으로
        </button>
        
        <div className={styles.postWrapper}>
          <div className={styles.postHeader}>
            <span className={styles.category}>
              <em>{post.metadata.category}</em>
            </span>
            <span className={styles.date}>{post.metadata.date}</span>
            <h1 className={styles.title}>{post.metadata.title}</h1>
          </div>
          
          <div className={styles.postContent}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <div className={styles.postFiles}>
            <span className={styles.file}>
              {/* 첨부파일이 있다면 여기에 표시 */}
            </span>
          </div>
        </div>

        <div className={styles.navigationButtons}>
          <div className={styles.buttonWrapper}>
            {prevSlug && (
              <button 
                className={styles.navButton}
                onClick={handlePrevClick}
              >
                <i className="zmdi zmdi-chevron-left"></i> 이전글
              </button>
            )}
            
            {nextSlug && (
              <button 
                className={styles.navButton}
                onClick={handleNextClick}
              >
                다음글 <i className="zmdi zmdi-chevron-right"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 