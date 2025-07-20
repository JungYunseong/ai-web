'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import styles from './page.module.css';

export default function PrcenterPressreleaselistPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  const [totalCount, setTotalCount] = useState(515);

  const pressItems = [
    {
      id: 'press-001',
      type: '보도자료',
      title: '메디AI컴퍼니, 의료 AI 진단 정확도 95% 달성... FDA 승인 신청',
      date: '2024.12.18',
      link: '/promote/prcenterPressrelease/press-001'
    }
  ];

  const mediaItems = [
    {
      id: 'media-001',
      type: '언론 속 모습',
      title: '[의료신문] 메디AI컴퍼니, 의료 AI 혁신으로 의료 접근성 향상 이끈다',
      date: '2024.12.16',
      link: '/promote/prcenterMedia/media-001'
    }
  ];

  const itemsPerPage = 10;
  const allItems = [...pressItems, ...mediaItems];
  
  const getFilteredItems = () => {
    switch (activeTab) {
      case 'release':
        return pressItems;
      case 'other':
        return mediaItems;
      default:
        return allItems;
    }
  };

  const filteredItems = getFilteredItems();
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  useEffect(() => {
    setTotalCount(filteredItems.length);
    setCurrentPage(1);
  }, [activeTab]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const getTitleText = () => {
    switch (activeTab) {
      case 'release':
        return '보도자료';
      case 'other':
        return '언론 속 모습';
      default:
        return '전체';
    }
  };

  return (
    <div className={styles.main}>
      <Header />
      
      {/* 페이지 타이틀 섹션 */}
      <div className={styles.pageTitleWrap}>
        <div className={styles.pageTitleInner}>
          <h2 className={styles.pageTitle}>보도자료</h2>
          <p className={styles.pageDesc}>
            언론 속 <em className={styles.vaivColor}>바이브</em> 이야기를 소개합니다.
          </p>
        </div>
      </div>

      {/* 컨텐츠 섹션 */}
      <div className={styles.content}>
        <div className={styles.conWrap}>
          {/* 정렬 및 필터 */}
          <div className={styles.noticeWrap}>
            <div className={styles.noticeSortText}>
              <span id="titleText">{getTitleText()}</span> 총 <span className={styles.colorText} id="cnt">{totalCount}</span>개가 있습니다.
            </div>
            <div className={styles.noticeSortBox}>
              <button 
                className={`${styles.noticeSortMenu} ${activeTab === 'all' ? styles.active : ''}`}
                onClick={() => handleTabChange('all')}
              >
                전체
              </button>
              <button 
                className={`${styles.noticeSortMenu} ${activeTab === 'release' ? styles.active : ''}`}
                onClick={() => handleTabChange('release')}
              >
                보도자료
              </button>
              <button 
                className={`${styles.noticeSortMenu} ${activeTab === 'other' ? styles.active : ''}`}
                onClick={() => handleTabChange('other')}
              >
                언론 속 모습
              </button>
            </div>
          </div>

          {/* 보도자료 리스트 */}
          <div className={styles.noticeList}>
            <table>
              <caption className={styles.skip}>보도자료 전체목록</caption>
              <colgroup>
                <col width="100" />
                <col />
                <col width="120" />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>제목</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.type}</td>
                      <td>
                        <a href={item.link}>{item.title}</a>
                      </td>
                      <td className={styles.date}>{item.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className={styles.emptyMessage}>
                      자료가 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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

      <FooterSection />
    </div>
  );
} 