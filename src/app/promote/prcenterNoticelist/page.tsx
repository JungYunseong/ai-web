'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import styles from './page.module.css';

export default function PrcenterNoticelistPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('notice');

  const noticeItems = [
    {
      id: 'notice-001',
      type: '공지',
      title: 'NEXT.CLINIC, 의료 AI 솔루션 개발자 모집 공고',
      date: '2024.12.20',
      link: '/promote/prcenterNotice/notice-001'
    },
    {
      id: 'notice-002',
      type: '공지',
      title: 'NEXT.CLINIC, 의료 AI 플랫폼 베타 서비스 오픈 안내',
      date: '2024.12.15',
      link: '/promote/prcenterNotice/notice-002'
    }
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(noticeItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = noticeItems.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className={styles.main}>
      <Header />
      
      {/* 페이지 타이틀 섹션 */}
      <div className={styles.pageTitleWrap}>
        <div className={styles.pageTitleInner}>
          <h2 className={styles.pageTitle}>공지사항</h2>
          <p className={styles.pageDesc}>
            <em className={styles.vaivColor}>바이브</em>의 새로운 소식을 전달합니다.
          </p>
        </div>
      </div>

      {/* 컨텐츠 섹션 */}
      <div className={styles.content}>
        <div className={styles.conWrap}>
          {/* 공지사항 탭 */}
          {activeTab === 'notice' && (
            <div className={styles.noticeList}>
              <table>
                <caption className={styles.skip}>공지 전체목록</caption>
                <colgroup>
                  <col width="70" />
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
                  {currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.type}</td>
                      <td>
                        <a href={`/promote/prcenterNotice/${item.id}`}>{item.title}</a>
                      </td>
                      <td className={styles.date}>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 보도자료 탭 */}
          {activeTab === 'press' && (
            <div className={styles.pressList}>
              <p className={styles.emptyMessage}>보도자료가 없습니다.</p>
            </div>
          )}

          {/* 홍보영상 탭 */}
          {activeTab === 'video' && (
            <div className={styles.videoList}>
              <p className={styles.emptyMessage}>홍보영상이 없습니다.</p>
            </div>
          )}

          {/* 페이지네이션 */}
          {activeTab === 'notice' && (
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