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
    window.history.pushState({}, '', newUrl);
  };

  const handleCoreSwitch = (index: number) => {
    setActiveCore(index);
    // URL 업데이트
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('core', String(index));
    window.history.pushState({}, '', newUrl);
  };

  return (
    <div className={styles.main}>
      <Header />
      
      {/* 페이지 타이틀 섹션 */}
      <section className={styles.pageTitleSection}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>연구소</h1>
          <p className={styles.pageText}>
            메디AI컴퍼니는 자사 핵심 기술 플랫폼인 SOFIA를 기반으로 <br className={styles.notMobile} />
            인공지능·빅데이터연구소에서 <br className={styles.notMobile} />
            다양한 솔루션 및 서비스를 제공하기 위한 연구 개발을 끊임없이 진행하고 있습니다.
          </p>
        </div>
      </section>

      {/* 탭 네비게이션 */}
      <section className={styles.tabSection}>
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
                  <button onClick={() => handleCoreSwitch(0)}>SOFIA</button>
                </li>
                <li className={`${styles.coreSwitchItem} ${activeCore === 1 ? styles.active : ''}`}>
                  <button onClick={() => handleCoreSwitch(1)}>VAIVGeM</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 탭 컨텐츠 */}
      <div className={styles.tabContent}>
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
                    
                    <article className={styles.coreInfoContent}>
                      <div className={styles.coreInfoTitle}>
                        <h3>빅데이터 분석을 통한 초대용량 지식맵 구성과 탐색 기술</h3>
                      </div>
                      <ul className={styles.coreInfoList}>
                        <li className={styles.listItem}>
                          <div className={styles.listIcon}>
                            <i className="ri-stack-line"></i>
                          </div>
                          <div className={styles.listText}>
                            <h4>Data</h4>
                            <ul className={styles.listDepth2}>
                              <li>데이터수집 확장성 보유</li>
                              <li>누적 데이터 520억 건</li>
                              <li>일 평균 1,300만 건 이상의 데이터 안정적 수집을 통한 최신성 유지</li>
                            </ul>
                          </div>
                        </li>
                        <li className={styles.listItem}>
                          <div className={styles.listIcon}>
                            <i className="ri-grid-line"></i>
                          </div>
                          <div className={styles.listText}>
                            <h4>Big Data Processing</h4>
                            <ul className={styles.listDepth2}>
                              <li>메디AI컴퍼니 고유 색인 기술 Big Index를 통한 데이터 처리</li>
                              <li>중복, 유사 문서 처리, 스팸 필터링 등 강력한 후처리를 통해 신뢰성 확보</li>
                            </ul>
                          </div>
                        </li>
                        <li className={styles.listItem}>
                          <div className={styles.listIcon}>
                            <i className="ri-layout-2-line"></i>
                          </div>
                          <div className={styles.listText}>
                            <h4>Trend Map</h4>
                            <ul className={styles.listDepth2}>
                              <li>사람들의 삶과 역사를 지식화한 초대용량 지식맵</li>
                              <li>10년 이상 데이터를 분석해 지식맵을 구성</li>
                              <li>실시간 탐색 제공</li>
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
                    <div className={styles.coreGemTitle}>
                      <h6>생성형 AI 파운데이션 모델 VAIVGeM 2</h6>
                      <h4>20년 이상 축적한 <br className={styles.mobileBreak} />자연어처리 기술을 토대로 만든</h4>
                      <h3>국내 최고의 <br className={styles.mobileBreak} />sLLM(초거대언어모델) 솔루션</h3>
                    </div>
                    <div className={styles.coreGemText}>
                      <p>
                        최대 72B(720억개)의 파라미터로 구성된 메디GeM(Medi Generative Model for language)은 <br/>
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
                        <p>성능 비교 차트 영역</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className={`${styles.subSection} ${styles.bgGray}`}>
                  <div className={styles.contentsInner}>
                    <div className={styles.coreGemTitle}>
                      <h4>VAIVGeM 2 주요 특징</h4>
                    </div>
                    <div className={styles.coreGem3Area}>
                      <div className={styles.coreGem3Con}>
                        <h6>응용 지향적 LLM</h6>
                        <ul>
                          <li>태스크 맞춤형 instruction 생성 및 학습</li>
                          <li>검색 기반 모델과 결합한 생성형 기술로 환각 현상을 최소화한 다중 문서 요약 수행</li>
                          <li>데이터 요약 기능 및 각종 문서 작성 기능 향상을 위한 맞춤 instruction 학습</li>
                        </ul>
                      </div>
                      <div className={styles.coreGem3Con}>
                        <h6>도메인 전문적 LLM</h6>
                        <ul>
                          <li>공공기관, 도서관, 행정 문서 등 다양한 전문 도메인의 데이터 학습</li>
                          <li>금융 도메인에 관련된 다량의 데이터 학습</li>
                          <li>텍스트 외 그래프, 표 등 경제/공공 부문 다양한 비정형 데이터 처리 및 이해 기능 향상</li>
                        </ul>
                      </div>
                      <div className={styles.coreGem3Con}>
                        <h6>한국어 특화 LLM</h6>
                        <ul>
                          <li>한국어의 특성을 반영한 독자적인 instruction 생성 및 학습 (Wizard 방식)</li>
                          <li>거대 한국어 코퍼스 기반 튜닝</li>
                          <li>한국어의 모든 음절을 OOV 없이 강건하게 처리 가능한 BBPE tokenizer 기반 학습</li>
                        </ul>
                      </div>
                      <div className={styles.coreGem3Con}>
                        <h6>강화학습 기반 LLM</h6>
                        <ul>
                          <li>사용자의 의도에 부합하는 답변 생성을 위한 instruction-following 모델</li>
                          <li>생성한 답변에 대한 사람의 피드백 점수를 reward model로 학습</li>
                          <li>사용자 만족도 점수가 높은 출력을 생성하도록 policy model 최적화</li>
                        </ul>
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
                  <p>인공지능·빅데이터연구소의 목표는 메디AI컴퍼니의 핵심 기술의 개발 및 발전 동력의 발굴입니다. 2000년 설립 초기에는 주로 자연언어처리와 검색 기술, 대화 에이전트 연구가 주를 이루다가 초대용량의 빅데이터 처리, 정형 데이터 분석, 핀테크, 딥러닝을 비롯한 기계학습에 대한 심도 있는 연구 등 새로운 기술이 떠오름에 따라 해당 분야의 연구개발 수행 역시 연구소의 목표가 되고 있습니다. 그 중에서도 인공지능 및 빅데이터 분야에서 신기술을 모색하고 현재의 기술 성능을 높일 수 있는 방법을 연구하며, 시장의 패러다임을 바꿀 수 있는 제품을 개발하기 위해 노력하고 있습니다.</p>
                </div>
              </div>
            </section>

            <section className={`${styles.subSection} ${styles.bgGray} ${styles.aiLabStudy}`}>
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
                  <li className={styles.listItem}>
                    <div className={styles.listIcon}>
                      <i className="ri-database-2-line"></i>
                    </div>
                    <div className={styles.listText}>
                      <h4>빅데이터 처리</h4>
                      <p>데이터의 폭발적 증가 속도에 대응해 효율적으로 데이터를 처리하고 저장 공간과 탐색을 최적화합니다. 빅데이터 기술을 통해 데이터의 저장과 초대용량의 지식맵 구성 및 탐색, 응용 기술을 개발합니다.</p>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listIcon}>
                      <i className="ri-pie-chart-line"></i>
                    </div>
                    <div className={styles.listText}>
                      <h4>시각화</h4>
                      <p>데이터 분석의 최종 산출물로 사람이 눈으로 보고 이해할 수 있도록 다양한 시각화 기술을 개발합니다. 인포그래픽 기술을 서비스에 접목해 사용성을 높이고 있습니다.</p>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listIcon}>
                      <i className="ri-line-chart-line"></i>
                    </div>
                    <div className={styles.listText}>
                      <h4>금융 분석</h4>
                      <p>기계학습 및 빅데이터를 기반으로 금융 모델링, 금융 감성 분석, 주가 추이 분석, 금융 시장 분석, 국내/해외 주식 분석, 가상화폐 분석 및 이를 위한 데이터 처리를 수행합니다.</p>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listIcon}>
                      <i className="ri-file-chart-line"></i>
                    </div>
                    <div className={styles.listText}>
                      <h4>AI 리포트</h4>
                      <p>AI 리포트는 정형/비정형 데이터 분석 및 AI를 기반으로 자동으로 리포트를 작성하는 기술을 연구합니다. AI 리포트는 보고서 작성에 소요되는 노력과 시간을 대폭 줄여줍니다.</p>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.listIcon}>
                      <i className="ri-robot-line"></i>
                    </div>
                    <div className={styles.listText}>
                      <h4>AI 어시스턴트</h4>
                      <p>자연어 대화, 전문 분야 지식, 자료의 정리, 보고서 작성 등 전문적인 업무를 도와주는 가상 비서를 개발합니다. 사용자는 AI 어시스턴트를 활용해 빠르고 쉽게 필요한 업무에서 도움을 받을 수 있습니다.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
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
                  <div id="salesmap-web-form" data-web-form="https://salesmap.kr/web-form/f2d659b9-8969-48eb-bb0b-e69cae9bfe6a">
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `
                          !(function (window, document) {
                            var currentScript = document.currentScript;
                            var scriptElement = document.createElement('script');
                            scriptElement.onload = function () {
                              window.SmFormSettings.loadForm();
                            };
                            scriptElement.id = 'loadFormScript';
                            scriptElement.src = 'https://salesmap.kr/web-form-loader-v3.js';
                            currentScript.parentNode.insertBefore(scriptElement, currentScript);
                          })(window, document);
                        `
                      }}
                    />
                  </div>
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