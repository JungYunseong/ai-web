'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import InquirySection from '@/components/InquirySection';
import styles from './page.module.css';

export default function BusinessPage() {
  const [activeTab, setActiveTab] = useState('solution');

  useEffect(() => {
    // URL 파라미터에서 탭 정보 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');

    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // URL 업데이트
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('tab', tab);
    window.history.pushState({}, '', newUrl);
  };

  const solutionItems = [
    {
      title: 'MediAI Diagnosis',
      description: '의료 영상 AI 진단 시스템',
      icon: 'ri-heart-pulse-line',
      link: '/business/solution/diagnosis'
    },
    {
      title: 'MediAI Assistant',
      description: '의료진 AI 어시스턴트',
      icon: 'ri-user-voice-line',
      link: '/business/solution/assistant'
    },
    {
      title: 'MediAI Research',
      description: '의료 데이터 AI 분석',
      icon: 'ri-file-chart-line',
      link: '/business/solution/research'
    },
    {
      title: 'MediAI Platform',
      description: '의료 AI 통합 플랫폼',
      icon: 'ri-hospital-line',
      link: '/business/solution/platform'
    }
  ];

  const serviceItems = [
    {
      title: 'MediAI Analytics',
      description: '의료 빅데이터 분석 서비스',
      icon: 'ri-pie-chart-line',
      link: '/business/service/analytics'
    },
    {
      title: 'MediAI Cloud',
      description: '의료 AI 클라우드 플랫폼',
      icon: 'ri-cloud-line',
      link: '/business/service/cloud'
    },
    {
      title: 'MediAI Data+',
      description: '의료 데이터 API 서비스',
      icon: 'ri-folder-cloud-line',
      link: '/business/service/data'
    },
    {
      title: 'MediAI Insights',
      description: '의료 인사이트 분석 서비스',
      icon: 'ri-lightbulb-line',
      link: '/business/service/insights'
    },
    {
      title: 'MediAI Connect',
      description: '의료기관 연동 서비스',
      icon: 'ri-hospital-line',
      link: '/business/service/connect'
    },
    {
      title: 'MediAI Report',
      description: '의료 리포트 생성 서비스',
      icon: 'ri-file-text-line',
      link: '/business/service/report'
    }
  ];

  return (
    <div className={styles.main}>
      <Header />
      
      {/* 페이지 타이틀 섹션 */}
      <section className={styles.pageTitleSection}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>비즈니스</h1>
          <p className={styles.pageText}>
            메디AI는 의료기관의 디지털 혁신을 위한 <br className={styles.notMobile} />
            의료 AI 기반 솔루션 및 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* 탭 네비게이션 */}
      <section className={styles.tabSection}>
        <div className={styles.tabContainer}>
          <ul className={styles.tabList}>
            <li className={`${styles.tabItem} ${activeTab === 'solution' ? styles.active : ''}`}>
              <button onClick={() => handleTabClick('solution')}>MediAI Solution</button>
            </li>
            <li className={`${styles.tabItem} ${activeTab === 'service' ? styles.active : ''}`}>
              <button onClick={() => handleTabClick('service')}>MediAI Service</button>
            </li>
          </ul>
        </div>
      </section>

      {/* 탭 컨텐츠 */}
      <div className={styles.tabContent}>
        {/* VAIV Solution 탭 */}
        {activeTab === 'solution' && (
          <section className={styles.solutionSection}>
            <div className={styles.contentsInner}>
              <div className={styles.businessInfo}>
                <div className={styles.businessInfoTitle}>
                  <h3>MediAI Solution</h3>
                </div>
                <div className={styles.businessInfoText}>
                  <p>
                    공공과 민간에서 검증된 의료 AI 기술력. <br className={styles.mobileBreak} />
                    <em>의료 혁신과 디지털 헬스케어를 지원하는 솔루션</em>을 제공합니다.
                  </p>
                </div>
              </div>
              <ul className={styles.businessList}>
                {solutionItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className={styles.listLink} target="_blank" rel="noopener noreferrer">
                      <div className={styles.listBox}>
                        <div className={styles.listIcon}>
                          <i className={item.icon}></i>
                        </div>
                        <div className={styles.listCon}>
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                          <button type="button" className={styles.listArrow}>
                            <i className="ri-arrow-up-right-line"></i>
                          </button>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* VAIV Service 탭 */}
        {activeTab === 'service' && (
          <section className={styles.serviceSection}>
            <div className={styles.contentsInner}>
              <div className={styles.businessInfo}>
                <div className={styles.businessInfoTitle}>
                  <h3>MediAI Service</h3>
                </div>
                <div className={styles.businessInfoText}>
                  <p>
                    의료 빅데이터로 건강을 읽고, 의료기관의 <br className={styles.mobileBreak} />
                    <em>전략적 의사결정을 지원하는 서비스</em>를 제공합니다.
                  </p>
                </div>
              </div>
              <ul className={styles.businessList}>
                {serviceItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className={styles.listLink} target="_blank" rel="noopener noreferrer">
                      <div className={styles.listBox}>
                        <div className={styles.listIcon}>
                          <i className={item.icon}></i>
                        </div>
                        <div className={styles.listCon}>
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                          <button type="button" className={styles.listArrow}>
                            <i className="ri-arrow-up-right-line"></i>
                          </button>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* 문의하기 섹션 */}
      <InquirySection />

      <FooterSection />
    </div>
  );
} 