'use client';

import { useState } from 'react';
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
              <a href="/" title="home">
                <img src="/images/vaiv/company_ci_re.png" alt="VAIV" />
              </a>
            </h1>
            <nav id="gnb" className={`${styles.gnb} ${isMobileMenuOpen ? styles.active : ''}`}>
              <ul className={styles.gnbDepthList}>
                <li className={styles.listItem}>
                  <a href="/company" title="기업정보 바로가기">기업정보</a>
                </li>
                <li className={styles.listItem}>
                  <a href="/laboratory" title="연구소 바로가기">연구소</a>
                </li>
                <li className={styles.listItem}>
                  <a href="/business" title="비즈니스 바로가기">비즈니스</a>
                </li>
                <li className={styles.listItem}>
                  <a href="/promote/prcenterNoticelist" title="홍보센터 바로가기">홍보센터</a>
                </li>
                <li className={styles.listItem}>
                  <a href="/recruit/recruitmentNoticelist" title="채용정보 바로가기">채용정보</a>
                </li>
                <li className={styles.listItem}>
                  <a href="/partner" title="파트너 바로가기">파트너</a>
                </li>
              </ul>
              
              <div className={styles.gnbBg}>
                <div className={styles.contentsInner}>
                  <ul className={`${styles.gnbDepth2List} ${styles.companyMenu}`}>
                    <li className={styles.listItem}>
                      <a href="/company" title="회사소개 바로가기">회사소개</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/companyHistory" title="연혁 바로가기">연혁</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/customer" title="주요 고객사 바로가기">주요 고객사</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/promote/prcenterIR" title="투자정보 바로가기">투자정보</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/companyInquiry" title="문의하기 바로가기">문의하기</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/company#map" title="오시는 길 바로가기">오시는 길</a>
                    </li>
                  </ul>
                  <ul className={`${styles.gnbDepth2List} ${styles.laboratoryMenu}`}>
                    <li className={styles.listItem}>
                      <a href="/laboratory?tab=1" title="핵심기술 바로가기">핵심기술</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/laboratory?tab=2" title="AI·빅데이터연구소 바로가기">AI·빅데이터연구소</a>
                    </li>
                  </ul>
                  <ul className={`${styles.gnbDepth2List} ${styles.businessMenu}`}>
                    <li className={styles.listItem}>
                      <a href="/business?tab=solution" title="VAIV Solution 바로가기">VAIV Solution</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/business?tab=service" title="VAIV Service 바로가기">VAIV Service</a>
                    </li>
                  </ul>
                  <ul className={`${styles.gnbDepth2List} ${styles.promoteMenu}`}>
                    <li className={styles.listItem}>
                      <a href="/promote/prcenterNoticelist" title="공지사항 바로가기">공지사항</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/promote/prcenterPressreleaselist" title="보도자료 바로가기">보도자료</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/promote/prcenterVideo" title="홍보영상 바로가기">홍보영상</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="https://blog.naver.com/vaiv_company" title="블로그 바로가기" target="_blank" rel="noopener noreferrer">블로그</a>
                    </li>
                  </ul>
                  <ul className={`${styles.gnbDepth2List} ${styles.recruitMenu}`}>
                    <li className={styles.listItem}>
                      <a href="/recruit/recruitmentNoticelist" title="채용공고 바로가기">채용공고</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/recruit/recruitmentInformation" title="채용안내 바로가기">채용안내</a>
                    </li>
                    <li className={styles.listItem}>
                      <a href="/recruit/recruitmentWelfare" title="복지제도 바로가기">복지제도</a>
                    </li>
                  </ul>
                  <ul className={`${styles.gnbDepth2List} ${styles.partnerMenu}`}>
                    <li className={styles.listItem}>
                      <a href="/partner" title="파트너 바로가기">파트너</a>
                    </li>
                  </ul>
                </div>
              </div>
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