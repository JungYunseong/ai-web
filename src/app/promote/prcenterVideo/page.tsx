'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import styles from './page.module.css';

export default function PrcenterVideoPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{
    id: number;
    title: string;
    category: string;
    date: string;
    thumbnail: string;
    videoUrl: string;
    description: string;
  } | null>(null);

  const videoItems = [
    {
      id: 3591,
      title: '새로운 의료 AI 시대에 함께할 NEXT.CLINIC Diagnosis를 소개합니다.',
      category: '홍보영상',
      date: '2023.08.18',
      thumbnail: '/images/video_thumbnails/NEXT.CLINIC_diagnosis_thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/example1',
      description: '새로운 의료 AI 시대, NEXT.CLINIC Diagnosis를 통해 더욱 정확하고 빠른 진단 경험을 제공합니다.'
    },
    {
      id: 3571,
      title: '[NEXT.CLINIC 후생] 주 1회 재택 & 다회 재택 비교',
      category: '홍보영상',
      date: '2023.06.23',
      thumbnail: '/images/video_thumbnails/NEXT.CLINIC_welfare_thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/example2',
      description: 'NEXT.CLINIC의 재택근무 제도를 소개합니다. 주 1회 재택과 다회 재택의 차이점을 비교해보세요.'
    },
    {
      id: 3546,
      title: '[JOB다한] NEXT.CLINIC 의료AI개발그룹 의료 AI 개발자 직무 소개',
      category: '홍보영상',
      date: '2023.05.23',
      thumbnail: '/images/video_thumbnails/job_intro_thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/example3',
      description: 'NEXT.CLINIC의 의료 AI 개발자 직무를 소개합니다. 의료 AI 기술로 환자들을 돕는 개발자의 일상을 만나보세요.'
    },
    {
      id: 3545,
      title: '이게 진짜 의료 AI 기업의 사옥이 맞습니까...?',
      category: '홍보영상',
      date: '2023.05.21',
      thumbnail: '/images/video_thumbnails/office_tour_thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/example4',
      description: 'NEXT.CLINIC의 사옥을 소개합니다. 의료 AI 기업이라고 믿기지 않는 멋진 사옥을 둘러보세요.'
    },
    {
      id: 3530,
      title: '의료 AI로 진화하는 의료기관, 여기가 미래인 이유?',
      category: '홍보영상',
      date: '2023.05.12',
      thumbnail: '/images/video_thumbnails/NEXT.CLINIC_future_thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/example5',
      description: '의료 AI의 미래를 탐구합니다. 왜 많은 의료기관들이 의료 AI를 도입하는지 알아보세요.'
    },
    {
      id: 3518,
      title: '국내 최초 의료 AI Assistant, NEXT.CLINIC Assistant',
      category: '홍보영상',
      date: '2023.04.27',
      thumbnail: '/images/video_thumbnails/NEXT.CLINIC_assistant_thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/example6',
      description: '국내 최초 의료 AI 어시스턴트, NEXT.CLINIC Assistant를 소개합니다. 혁신적인 의료 AI 기술로 진료 서비스를 혁신합니다.'
    }
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(videoItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = videoItems.slice(startIndex, endIndex);

  useEffect(() => {
    // URL 파라미터에서 posts_id 확인
    const urlParams = new URLSearchParams(window.location.search);
    const postsId = urlParams.get('posts_id');
    
    if (postsId) {
      const video = videoItems.find(item => item.id.toString() === postsId);
      if (video) {
        setSelectedVideo(video);
        setShowPopup(true);
      }
    }
  }, []);

  const handleVideoClick = (video: {
    id: number;
    title: string;
    category: string;
    date: string;
    thumbnail: string;
    videoUrl: string;
    description: string;
  }) => {
    setSelectedVideo(video);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedVideo(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.main}>
      <Header />
      
      {/* 페이지 타이틀 섹션 */}
      <div className={styles.pageTitleWrap}>
        <div className={styles.pageTitleInner}>
          <h2 className={styles.pageTitle}>홍보영상</h2>
          <p className={styles.pageDesc}>
            영상 속 <em className={styles.vaivColor}>바이브</em> 이야기를 소개합니다.
          </p>
        </div>
      </div>

      {/* 컨텐츠 섹션 */}
      <div className={styles.content}>
        <div className={styles.conWrap}>
          {/* 비디오 리스트 */}
          <div className={styles.videoList}>
            <ul className={styles.prVideoList}>
              {currentItems.map((video) => (
                <li key={video.id} className={styles.listItem}>
                  <div className={styles.video}>
                    <div 
                      className={styles.thumbnail} 
                      onClick={() => handleVideoClick(video)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        onError={(e) => {
                          e.currentTarget.src = '/images/video_thumbnails/placeholder.jpg';
                        }}
                      />
                      <div className={styles.playButton}>
                        <i className="ri-play-circle-fill"></i>
                      </div>
                    </div>
                    <p 
                      className={styles.title} 
                      onClick={() => handleVideoClick(video)}
                      style={{ cursor: 'pointer' }}
                    >
                      {video.title}
                    </p>
                    <span className={styles.category}>{video.category}</span>
                    <span className={styles.date}>{video.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <ul>
                <li>
                  <a 
                    href="#" 
                    className={styles.pprev}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(1);
                    }}
                  >
                    처음으로
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className={styles.prev}
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) {
                        handlePageChange(currentPage - 1);
                      }
                    }}
                  >
                    이전으로
                  </a>
                </li>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <li key={page}>
                    <a 
                      href="#" 
                      className={page === currentPage ? styles.on : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                    >
                      {page}
                    </a>
                  </li>
                ))}
                
                <li>
                  <a 
                    href="#" 
                    className={styles.next}
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) {
                        handlePageChange(currentPage + 1);
                      }
                    }}
                  >
                    다음으로
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className={styles.nnext}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(totalPages);
                    }}
                  >
                    마지막으로
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 비디오 팝업 */}
      {showPopup && selectedVideo && (
        <div className={styles.videoPopup}>
          <div className={styles.popupContent}>
            <div className={styles.videoPlay}>
              <iframe 
                src={selectedVideo.videoUrl} 
                width="778" 
                height="500" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title={selectedVideo.title}
              />
            </div>
            <div className={styles.videoInfo}>
              <p className={styles.popTitle}>{selectedVideo.title}</p>
              <p className={styles.popDate}>{selectedVideo.date}</p>
              <p className={styles.popInfo}>{selectedVideo.description}</p>
            </div>
            <button className={styles.videoClose} onClick={handleClosePopup}>
              닫기
            </button>
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
} 