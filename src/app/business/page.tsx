'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
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
      title: 'VAIV Search',
      description: 'AI 검색 엔진',
      icon: 'ri-seo-line',
      link: 'https://ai.vaiv.kr/ai-solution/search'
    },
    {
      title: 'VAIV Chatbot',
      description: 'AI 대화형 챗봇',
      icon: 'ri-message-3-line',
      link: 'https://ai.vaiv.kr/ai-solution/chatbot'
    },
    {
      title: 'VAIV AIR',
      description: 'AI 리서치·리포트',
      icon: 'ri-file-chart-line',
      link: 'https://ai.vaiv.kr/ai-solution/air'
    },
    {
      title: 'VAIV KMS',
      description: 'AI 통합 지식 관리',
      icon: 'ri-hotel-line',
      link: 'https://ai.vaiv.kr/ai-solution/kms'
    }
  ];

  const serviceItems = [
    {
      title: 'Sometrend Us',
      description: '범용 소셜 데이터 간편 분석',
      icon: 'ri-pie-chart-line',
      link: 'https://some.co.kr/'
    },
    {
      title: 'Sometrend Cloud',
      description: '비즈니스 특화 빅데이터 분석',
      icon: 'ri-cloud-line',
      link: 'https://cloud.some.co.kr/'
    },
    {
      title: 'Sometrend Data+',
      description: '소셜, 금융, 상권 등 데이터 API',
      icon: 'ri-folder-cloud-line',
      link: 'https://data.some.co.kr/'
    },
    {
      title: '생활변화관측소',
      description: '빅데이터 기반 인사이트 발굴',
      icon: 'ri-lightbulb-line',
      link: 'https://lifechange.ai/'
    },
    {
      title: 'WHOTAG',
      description: 'AI 글로벌 인플루언서 발굴',
      icon: 'ri-chat-thread-line',
      link: 'https://whotagged.me/'
    },
    {
      title: 'VAIV Stock',
      description: 'AI 금융 정보 서비스',
      icon: 'ri-stock-line',
      link: 'https://stock.vaiv.kr/'
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
            바이브는 고객사의 비즈니스 가치를 높일 수 있는 <br className={styles.notMobile} />
            AI 기반 솔루션 및 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* 탭 네비게이션 */}
      <section className={styles.tabSection}>
        <div className={styles.tabContainer}>
          <ul className={styles.tabList}>
            <li className={`${styles.tabItem} ${activeTab === 'solution' ? styles.active : ''}`}>
              <button onClick={() => handleTabClick('solution')}>VAIV Solution</button>
            </li>
            <li className={`${styles.tabItem} ${activeTab === 'service' ? styles.active : ''}`}>
              <button onClick={() => handleTabClick('service')}>VAIV Service</button>
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
                  <h3>VAIV Solution</h3>
                </div>
                <div className={styles.businessInfoText}>
                  <p>
                    공공과 민간에서 검증된 AI 기술력. <br className={styles.mobileBreak} />
                    <em>비즈니스 혁신과 AX를 지원하는 솔루션</em>을 제공합니다.
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
                  <h3>VAIV Service</h3>
                </div>
                <div className={styles.businessInfoText}>
                  <p>
                    빅데이터로 시장을 읽고, 기업의 <br className={styles.mobileBreak} />
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

      <FooterSection />
    </div>
  );
} 