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
                            <option value="solution">MediAI Solution</option>
                            <option value="service">MediAI Service</option>
                            <option value="consulting">의료 AI 컨설팅</option>
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
                          솔루션 또는 서비스명(예: MediAI Diagnosis, MediAI Assistant, MediAI Research, MediAI Analytics 등)을 명시하고, 
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