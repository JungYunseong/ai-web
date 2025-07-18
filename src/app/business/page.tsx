'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import styles from './page.module.css';

export default function BusinessPage() {
  const [activeTab, setActiveTab] = useState('solution');

  const [formData, setFormData] = useState({
    inquiryType: '',
    inquiryDetail: '',
    companyName: '',
    department: '',
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    content: ''
  });

  const [agreements, setAgreements] = useState({
    personalInfo: false,
    marketing: false
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgreements(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreements.personalInfo) {
      alert('개인정보 수집 및 이용에 동의하셔야 합니다.');
      return;
    }

    // 여기에 실제 제출 로직을 추가할 수 있습니다
    alert('문의가 정상적으로 제출되었습니다.');
    
    // 폼 초기화
    setFormData({
      inquiryType: '',
      inquiryDetail: '',
      companyName: '',
      department: '',
      name: '',
      jobTitle: '',
      email: '',
      phone: '',
      content: ''
    });
    setAgreements({
      personalInfo: false,
      marketing: false
    });
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

      {/* 문의하기 섹션 */}
      <section className={styles.inquirySection}>
        <div className={styles.contentsInner}>
          <div className={styles.inquiryWrap}>
            <div className={styles.row}>
              <div className={styles.colMd6}>
                <div className={styles.inquiryTxt}>
                  <div>
                    <p className={styles.title}>문의하기</p>
                    <p className={styles.text}>
                      궁금하신 사항이 있으시면<br /> 
                      오른쪽의 문의하기를 이용해주세요.<br />
                      담당자가 자세하게 안내해드리겠습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.colMd6}>
                <div className={styles.inquiryWrite}>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.inquiryRow}>
                      <p className={styles.inquiryTitle}>문의 유형 *</p>
                      <div className={styles.inquiryCon}>
                        <div className={styles.inquirySelect}>
                          <select 
                            name="inquiryType" 
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">문의 유형을 선택해 주세요</option>
                            <option value="solution">VAIV Solution</option>
                            <option value="service">VAIV Service</option>
                            <option value="consulting">AI 컨설팅</option>
                            <option value="technical">기술/영업</option>
                            <option value="partnership">파트너십</option>
                            <option value="recruitment">채용</option>
                            <option value="lecture">강연</option>
                            <option value="other">기타</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className={styles.inquiryRow}>
                      <p className={styles.inquiryTitle}>문의 내용 *</p>
                      <div className={styles.inquiryCon}>
                        <textarea 
                          name="content"
                          value={formData.content}
                          onChange={handleInputChange}
                          placeholder="문의 내용을 입력해주세요."
                          required
                        />
                        <p className={styles.inquiryGuide}>
                          솔루션 또는 서비스명(예: VAIV Search, VAIV Chatbot, VAIV AIR, Sometrend Us, VAIV Stock 등)을 명시하고, 
                          도입 목적과 사용자 수 등 구체적인 내용을 기재해 주시면 더욱 상세한 상담이 가능합니다.
                        </p>
                      </div>
                    </div>

                    <div className={styles.inquiryRow}>
                      <p className={styles.inquiryTitle}>회사명 *</p>
                      <div className={styles.inquiryCon}>
                        <input 
                          type="text" 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.inquiryRow}>
                      <p className={styles.inquiryTitle}>부서 *</p>
                      <div className={styles.inquiryCon}>
                        <input 
                          type="text" 
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.inquiryRow}>
                      <p className={styles.inquiryTitle}>이름 *</p>
                      <div className={styles.inquiryCon}>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.inquiryRow}>
                      <p className={styles.inquiryTitle}>직함</p>
                      <div className={styles.inquiryCon}>
                        <input 
                          type="text" 
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className={styles.inquiryRow}>
                      <p className={styles.inquiryTitle}>이메일 *</p>
                      <div className={styles.inquiryCon}>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.inquiryRow}>
                      <p className={styles.inquiryTitle}>휴대번호 *</p>
                      <div className={styles.inquiryCon}>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.btnArea}>
                      <div className={styles.checkBtn}>
                        <span className={styles.checkbox2}>
                          <input 
                            type="checkbox" 
                            name="personalInfo"
                            checked={agreements.personalInfo}
                            onChange={handleAgreementChange}
                            required
                          />
                          <label htmlFor="personalInfo">개인정보 수집 및 이용에 동의합니다.</label>
                          <span className={styles.noticeText}>
                            <a href="/privacy">자세히 보기</a>
                          </span>
                        </span>
                      </div>
                      <div className={styles.checkBtn}>
                        <span className={styles.checkbox2}>
                          <input 
                            type="checkbox" 
                            name="marketing"
                            checked={agreements.marketing}
                            onChange={handleAgreementChange}
                          />
                          <label htmlFor="marketing">
                            <span className={styles.red}>(선택)</span>마케팅 이용 및 뉴스레터 수신에 동의합니다.
                          </label>
                        </span>
                      </div>
                      <button type="submit" className={styles.btnL}>
                        제출하기
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.inquiryBg}>
            <object type="image/svg+xml" data="/images/bg_polygon.svg" className={styles.inquiryBg01} />
            <object type="image/svg+xml" data="/images/bg_polygon.svg" className={styles.inquiryBg02} />
          </span>
        </div>
      </section>

      <FooterSection />
    </div>
  );
} 