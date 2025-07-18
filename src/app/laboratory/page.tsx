'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import styles from './page.module.css';

export default function LaboratoryPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCore, setActiveCore] = useState(0);

  useEffect(() => {
    // URL 파라미터에서 탭 정보 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    const coreParam = urlParams.get('core');

    if (tabParam) {
      setActiveTab(Number(tabParam) - 1);
    }
    if (coreParam) {
      setActiveCore(Number(coreParam));
    }
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    // URL 업데이트
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('tab', String(index + 1));
    window.history.pushState({}, '', newUrl.toString());
  };

  const handleCoreClick = (index: number) => {
    setActiveCore(index);
    // URL 업데이트
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('core', String(index));
    window.history.pushState({}, '', newUrl.toString());
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* 페이지 타이틀 섹션 */}
          <section className={styles.pageTitleSection}>
            <div className={styles.contentsInner}>
              <h2 className={styles.pageTitle}>연구소</h2>
              <p className={styles.pageText}>
                메디AI컴퍼니는 자사 핵심 기술 플랫폼인 SOFIA를 기반으로 <br className={styles.notMobile} />
                인공지능·빅데이터연구소에서 <br className={styles.notMobile} />
                다양한 솔루션 및 서비스를 제공하기 위한 연구 개발을 끊임없이 진행하고 있습니다.
              </p>
            </div>
          </section>

          {/* 탭 네비게이션 */}
          <section className={styles.tabSection}>
            <div className={styles.contentsInner}>
              <div className={styles.tabContainer}>
                <ul className={styles.tabList}>
                  <li className={`${styles.tabItem} ${activeTab === 0 ? styles.active : ''}`}>
                    <button onClick={() => handleTabClick(0)}>핵심기술</button>
                  </li>
                  <li className={`${styles.tabItem} ${activeTab === 1 ? styles.active : ''}`}>
                    <button onClick={() => handleTabClick(1)}>인공지능·빅데이터연구소</button>
                  </li>
                </ul>

                {/* 핵심기술 서브 탭 */}
                {activeTab === 0 && (
                  <div className={styles.coreSwitch}>
                    <ul className={styles.coreSwitchList}>
                      <li className={`${styles.coreSwitchItem} ${activeCore === 0 ? styles.active : ''}`}>
                        <button onClick={() => handleCoreClick(0)}>SOFIA</button>
                      </li>
                      <li className={`${styles.coreSwitchItem} ${activeCore === 1 ? styles.active : ''}`}>
                        <button onClick={() => handleCoreClick(1)}>VAIVGeM</button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 탭 컨텐츠 */}
          <section className={styles.tabContent}>
            {/* 핵심기술 탭 */}
            {activeTab === 0 && (
              <div className={styles.coreSection}>
                {/* SOFIA 섹션 */}
                {activeCore === 0 && (
                  <>
                    <section className={styles.coreSofia}>
                      <div className={styles.coreSofiaBg}>
                        <div className={styles.bgShape1}></div>
                        <div className={styles.bgShape2}></div>
                        <div className={styles.bgShape3}></div>
                      </div>
                      <div className={styles.contentsInner}>
                        <div className={styles.coreSofiaTitle}>
                          <h6>빅데이터 인공지능 플랫폼 SOFIA</h6>
                          <h4>
                            데이터에서 <span className={styles.titleBracket}>[</span>
                            <div className={styles.titleMotionWrap}>
                              <span className={styles.titleMotion}>
                                <i>정보</i>
                              </span>
                            </div>
                            <span className={styles.titleBracket}>]</span> 를 발굴하는
                          </h4>
                          <h3>인공지능 · 빅데이터 기술의 집약체</h3>
                        </div>
                        <div className={styles.coreSofiaText}>
                          <p>
                            그리스어로 '지혜'를 뜻하는 빅데이터 인공지능 플랫폼 SOFIA는 <br/>
                            데이터에서 정보, 지식, 지혜를 발굴하는 인공지능 · 빅데이터 기술의 집약체입니다. <br/>
                            SOFIA는 데이터의 수집에서 분석, 인사이트 발굴 그리고 <br className={styles.tabletBreak} />의사결정에 이르는 비즈니스 전 과정을 수행합니다.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section className={`${styles.subSection} ${styles.bgGray}`}>
                      <div className={styles.contentsInner}>
                        <article className={styles.coreInfoContent}>
                          <div className={styles.coreInfoTitle}>
                            <h3>심층적 의미 이해 기반의 설명가능한 인공지능 기술</h3>
                          </div>
                          <ul className={styles.coreInfoList}>
                            <li className={styles.listItem}>
                              <div className={styles.listIcon}>
                                <i className="ri-folder-info-line"></i>
                              </div>
                              <div className={styles.listText}>
                                <h4>Knowledge Base</h4>
                                <ul className={styles.listDepth2}>
                                  <li>언어지식, 실세계지식, 감성지식으로 구분</li>
                                  <li>비정형 데이터로부터 가치 있는 정보 추출</li>
                                </ul>
                              </div>
                            </li>
                            <li className={styles.listItem}>
                              <div className={styles.listIcon}>
                                <i className="ri-focus-2-line"></i>
                              </div>
                              <div className={styles.listText}>
                                <h4>Core NLP</h4>
                                <ul className={styles.listDepth2}>
                                  <li>모듈화를 통해 단계별 성능 개선 가능</li>
                                  <li>높은 유연성, 적용성</li>
                                  <li>복잡한 텍스트에서 정확한 지식 추출 가능</li>
                                </ul>
                              </div>
                            </li>
                            <li className={styles.listItem}>
                              <div className={styles.listIcon}>
                                <i className="ri-focus-3-line"></i>
                              </div>
                              <div className={styles.listText}>
                                <h4>Deep AI</h4>
                                <ul className={styles.listDepth2}>
                                  <li>추론, 예측, 분류 등 다양한 문제 해결 가능</li>
                                  <li>60개 이상 기계학습 및 통계프로그램 탑재</li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </article>
                      </div>
                    </section>
                  </>
                )}

                {/* VAIVGeM 섹션 */}
                {activeCore === 1 && (
                  <>
                    <section className={styles.coreGem}>
                      <div className={styles.coreGemBg}>
                        <div className={styles.bgShape1}></div>
                        <div className={styles.bgShape2}></div>
                        <div className={styles.bgShape3}></div>
                      </div>
                      <div className={styles.contentsInner}>
                        <div className={styles.coreSofiaTitle}>
                          <h6>생성형 AI 파운데이션 모델 VAIVGeM 2</h6>
                          <h4>20년 이상 축적한 <br className={styles.mobileBreak}/>자연어처리 기술을 토대로 만든</h4>
                          <h3>국내 최고의 <br className={styles.mobileBreak}/>sLLM(초거대언어모델) 솔루션</h3>
                        </div>
                        <div className={styles.coreSofiaText}>
                          <p>
                            최대 72B(720억개)의 파라미터로 구성된 바이브GeM(VAIV Generative Model for language)은 <br/>
                            메디AI컴퍼니의 자체 기술력으로 개발한 국내 최고 수준의 한국어 특화 초거대 언어모델로, <br/>
                            응용지향적이고 공공기관, 도서관, 금융 등 도메인에 특화된 LLM을 제공합니다.
                          </p>
                          <em>#초거대 #언어모델 #국내최고 #응용지향적 #LLM</em>
                        </div>
                      </div>
                    </section>

                    <section className={styles.subSection}>
                      <div className={styles.contentsInner}>
                        <div className={styles.coreGemTitle}>
                          <h4>한국어 작업 성능 <br className={styles.mobileBreak} />미세조정(Fine-tunning) 실험 결과</h4>
                        </div>
                        <div className={styles.coreGemImage}>
                          <div className={styles.placeholderImage}>
                            <p>성능 비교 차트 이미지</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                )}
              </div>
            )}

            {/* 인공지능·빅데이터연구소 탭 */}
            {activeTab === 1 && (
              <div className={styles.aiLabSection}>
                <section className={`${styles.subSection} ${styles.subInfo}`}>
                  <div className={styles.contentsInner}>
                    <div className={styles.subInfoTitle}>
                      <h3>인공지능·빅데이터연구소</h3>
                    </div>
                    <div className={styles.subInfoBox}>
                      <div className={`${styles.boxItem} ${styles.boxText}`}>
                        <p>인공지능 및 빅데이터 분야에서의 신기술을 모색하고 현재 기술의 성능을 높일 수 있는 방법 연구, 시장의 패러다임을 바꿀 수 있는 제품을 개발하고자 합니다.</p>
                      </div>
                      <figure className={`${styles.boxItem} ${styles.boxImage}`}>
                        <div className={styles.placeholderImage}>
                          <p>연구소 이미지</p>
                        </div>
                      </figure>
                    </div>
                    <div className={styles.subInfoText}>
                      <p>인공지능·빅데이터연구소의 목표는 메디AI컴퍼니의 핵심 기술의 개발 및 발전 동력의 발굴입니다. 2000년 설립 초기에는 주로 자연언어처리와 검색 기술, 대화 에이전트 연구가 주를 이루다가 초대용량의 빅데이터 처리, 정형 데이터 분석, 핀테크, 딥러닝을 비롯한 기계학습에 대한 심도 있는 연구 등 새로운 기술이 떠오름에 따라 해당 분야의 연구개발 수행 역시 연구소의 목표가 되고 있습니다.</p>
                    </div>
                  </div>
                </section>

                <section className={`${styles.subSection} ${styles.bgGray}`}>
                  <div className={styles.contentsInner}>
                    <div className={styles.aiLabStudyTitle}>
                      <h3>연구분야</h3>
                    </div>
                    <ul className={styles.aiLabStudyList}>
                      <li className={styles.listItem}>
                        <div className={styles.listIcon}>
                          <i className="ri-hard-drive-line"></i>
                        </div>
                        <div className={styles.listText}>
                          <h4>데이터 수집</h4>
                          <p>핵심 기술이나 서비스 플랫폼을 위해 필요한 다양한 데이터를 수집하고, 데이터 가공을 통해 누구나 사용 가능한 형태로 만듭니다.</p>
                        </div>
                      </li>
                      <li className={styles.listItem}>
                        <div className={styles.listIcon}>
                          <i className="ri-database-line"></i>
                        </div>
                        <div className={styles.listText}>
                          <h4>지식베이스</h4>
                          <p>매일 생겨나는 신규 어휘의 반영, 온톨로지 항목 관리, 감성 표현 및 분류 체계 지식 구축 등을 수행하며 이를 실서비스에 반영하고 필요한 인터페이스 프로그램을 개발합니다.</p>
                        </div>
                      </li>
                      <li className={styles.listItem}>
                        <div className={styles.listIcon}>
                          <i className="ri-donut-chart-line"></i>
                        </div>
                        <div className={styles.listText}>
                          <h4>자연어처리</h4>
                          <p>전통적인 규칙 및 통계 기반의 자연어처리와 대규모의 PLM(Pretrained Language Model) 및 기계학습 기반 언어 처리 그리고 이를 이용한 다양한 응용 시스템 개발을 수행합니다.</p>
                        </div>
                      </li>
                      <li className={styles.listItem}>
                        <div className={styles.listIcon}>
                          <i className="ri-brain-line"></i>
                        </div>
                        <div className={styles.listText}>
                          <h4>기계학습 및 모델링</h4>
                          <p>빠르게 발전하는 딥러닝 분야 기술을 적용하고 특징을 살펴 자사의 Deep AI에 반영하며, 응용 섹터별 인덱스 개발 및 통계 분석 등 다양한 통계 모델링을 수행합니다.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            )}
          </section>
        </div>
      </main>
      <FooterSection />
    </>
  );
} 