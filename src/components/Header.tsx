'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDesktopMenuOpen(false);
  };

  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.contentsInner}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerLogo}>
              <Link href="/ai-web/" title="home">
                <img src="/images/nc/company_ci_re.png" alt="NEXT.CLINIC" />
              </Link>
            </h1>
            <nav id="gnb" className={`${styles.gnb} ${isMobileMenuOpen ? styles.active : ''}`}>
              <ul className={styles.gnbDepthList}>
                <li className={styles.listItem}>
                  <a href="/ai-web/company" title="기업정보 바로가기">기업정보</a>
                  <ul className={styles.gnbDepth2List}>
                    <li className={styles.listItem}>
                      <a href="/ai-web/company" title="회사소개 바로가기">회사소개</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/ai-web/companyHistory" title="연혁 바로가기">연혁</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/ai-web/customer" title="주요 고객사 바로가기">주요 고객사</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/ai-web/companyInquiry" title="문의하기 바로가기">문의하기</a>
                    </li>
                    {/* <li className={styles.listItem}>
                      <a href="/ai-web/company#map" title="오시는 길 바로가기">오시는 길</a>
                    </li> */}
                  </ul>
                </li>
                <li className={styles.listItem}>
                  <a href="/ai-web/laboratory" title="연구소 바로가기">연구소</a>
                  <ul className={styles.gnbDepth2List}>
                    <li className={styles.listItem}>
                      <a href="/ai-web/laboratory?tab=1" title="핵심기술 바로가기">핵심기술</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/ai-web/laboratory?tab=2" title="의료 AI·빅데이터연구소 바로가기">의료 AI·빅데이터연구소</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.listItem}>
                  <a href="/ai-web/business" title="비즈니스 바로가기">비즈니스</a>
                  <ul className={styles.gnbDepth2List}>
                    <li className={styles.listItem}>
                      <a href="/ai-web/business?tab=solution" title="MediAI Solution 바로가기">MediAI Solution</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/ai-web/business?tab=service" title="MediAI Service 바로가기">MediAI Service</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.listItem}>
                  <a href="/ai-web/promote/prcenterNoticelist" title="홍보센터 바로가기">홍보센터</a>
                  <ul className={styles.gnbDepth2List}>
                    <li className={styles.listItem}>
                      <a href="/ai-web/promote/prcenterNoticelist" title="공지사항 바로가기">공지사항</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/ai-web/promote/prcenterPressreleaselist" title="보도자료 바로가기">보도자료</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/ai-web/promote/prcenterVideo" title="홍보영상 바로가기">홍보영상</a>
                    </li>
                    {/* <li className={styles.listItem}>
                      <a href="https://blog.naver.com/vaiv_company" title="블로그 바로가기" target="_blank" rel="noopener noreferrer">블로그</a>
                    </li> */}
                  </ul>
                </li>
              </ul>
              <div className={styles.gnbBg}></div>
            </nav>
            <button 
              type="button" 
              className={`${styles.headerToggle} ${isMobileMenuOpen ? styles.active : ''}`}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className={`${styles.headerDim} ${isMobileMenuOpen || isDesktopMenuOpen ? styles.active : ''}`} onClick={closeMenus}></div>
        <div className={`${styles.desktopGnbModal} ${isDesktopMenuOpen ? styles.active : ''}`}>
          <button type="button" className={styles.modalClose} onClick={closeMenus}>
            <span>×</span>
          </button>
        </div>
      </header>
    </>
  );
} 