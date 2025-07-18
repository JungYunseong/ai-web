'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import styles from './page.module.css';

export default function CompanyHistoryPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeYearTab, setActiveYearTab] = useState(0);

  const historyData = {
    service: [
      {
        year: '2025',
        items: [
          '글로벌 인플루언서 발굴 서비스 \'WHOTAG\' 출시',
          '멀티모달 AI 기반 \'GPT 프로파일링\' 기술 개발',
          '데이터 기반 트렌드 구독 서비스 \'생활변화관측소 멤버십\' 출시'
        ]
      },
      {
        year: '2024',
        items: [
          '대표이사 변경(김경서 대표이사)',
          'AI 기반 시장조사 서비스 \'썸트렌드 VAIV AIR(Sometrend VAIV AIR)\' 출시',
          '2024년 유망 SaaS 개발·육성 지원 사업 선정',
          '2024년 초거대 AI 기반 플랫폼 이용지원 사업 공급기업 선정',
          '외교부 \'재외공관 클라우드 기반의 해외정보 범정부 활용체계 구축(3차) 사업\' 추진',
          '생성형AI 파운데이션 모델 \'바이브GeM 2\' 출시',
          '생성 AI 선도인재양성 사업 수행 기관 선정',
          '2024 AI 바우처·데이터 바우처·클라우드 바우처 지원사업 공급기업 선정'
        ]
      },
      {
        year: '2023',
        items: [
          '\'민간의 첨단 초거대 AI(인공지능) 활용지원 사업\' 공급기업 선정',
          '\'썸트렌드 클라우드(Sometrend Cloud)\' 출시',
          'AI 검색 솔루션 \'바이브 서치(VAIV Search)\' 출시',
          '외교부 \'재외공관 클라우드 기반의 해외정보 범정부 활용체계 구축(2차) 사업\' 추진',
          '초거대 AI 언어모델 \'바이브GeM(VAIVGeM)\' 공개',
          '대표이사 변경(김성언 대표이사)'
        ]
      },
      {
        year: '2022',
        items: [
          '디지털 트윈 기반 메타버스 플랫폼 \'듀플래닛\' 서비스 출시',
          '해양수산부 해양 공간 디지털 트윈 사업 참여',
          '식약처 데이터 융합 및 분석 플램폼 구축 사업'
        ]
      },
      {
        year: '2021',
        items: [
          'AI 기반 뷰티 전문 분석 보고서 \'썸트렌드 에이셉 뷰티(ASAP Beauty)\' 출시',
          '\'디지털트윈 포럼\' 출범',
          '\'메타버스 드림팀\' 출범',
          '의료 분야 마이데이터 사업 참여',
          'AI 기반 주식 정보 서비스 \'썸머니\' 오픈',
          'LH 디지털 트윈 플랫폼 2단계 구축',
          '대표이사 변경(이재용 대표이사)',
          '스마트헬퍼 ASP 출시',
          '썸트렌드 유튜브 분석 서비스 개시',
          '국세청 빅데이터 활용 분석 모델 개발',
          '세종시 자율주행 빅데이터 관제 시스템 구축 및 운영 사업 참여'
        ]
      },
      {
        year: '2020',
        items: [
          '미래예측 정책지원사업 플랫폼 개발',
          '캠코 차세대 채권관리시스템 개발 사업 참여',
          '지역 단위 다중이용시설 코로나19 감염 위험도 추정 모델 개발',
          'AI 기반 일자리매칭시스템 구축 2차 사업 참여',
          'AI 기반 조종사 피로도 측정 시스템 구축',
          '우체국 차세대 종합금융시스템 구축',
          '코스닥 상장(IPO)',
          '㈜바이브컴퍼니(VAIV company)로 사명 변경',
          'LH 디지털 트윈 플랫폼 1단계 구축',
          '썸트렌드(Sometrend, 구 소셜메트릭스) BI 변경',
          '기술평가 AA 등급 획득',
          'B2C 빅데이터 분석 플랫폼 \'썸트렌드(Sometrend)\' 리뉴얼 오픈',
          '과학기술정보통신부 \'2020 데이터바우처 지원사업\' 공급기업 선정'
        ]
      }
    ],
    award: [
      {
        year: '2025',
        items: [
          '지능정보산업협회 \'2025 Emerging AI+X TOP100\' 기업 선정'
        ]
      },
      {
        year: '2024',
        items: [
          '바이브컴퍼니-SKT 데이터 사업 협력 MOU 체결',
          '바이브컴퍼니-한국퀀텀컴퓨팅, 초거대 AI 사업 관련 MOU 체결',
          '지능정보산업협회 \'2024 Emerging AI+X TOP100\' 기업 선정'
        ]
      },
      {
        year: '2023',
        items: [
          '디지털플랫폼정부 표창(과학기술정보통신부 장관상)',
          '한국일보 디지털 이노베이션 대상 수상(바이브 서치)',
          '바이브컴퍼니-다큐다, 전략적 파트너십 체결',
          '지능정보산업협회 \'2023 Emerging AI+X TOP100\' 기업 선정'
        ]
      },
      {
        year: '2022',
        items: [
          '올해의 디지털 전환 우수기업 선정(과기정통부 주관/NIA 원장상)',
          '바이브컴퍼니-P&K피부임상연구센터, 뷰티 컨설팅 사업 협력을 위한 MOU 체결',
          '바이브컴퍼니-씨웨이브, 디지털 트윈 사업 협력을 위한 MOU 체결',
          '바이브컴퍼니-펫미, 듀플래닛 플램폼 내 메타커머스 구현을 위한 MOU 체결',
          '바이브컴퍼니-한국예총, 메타버스 사업 협력 위한 MOU 체결',
          '지능정보산업협회 \'2022 Emerging AI+X TOP100\' 기업 선정',
          '제21회 대한민국 소프트웨어(SW)기업경쟁력 대상(일자리창출 기여 부문/과학기술정보통신부 장관상)',
          '2022 고용노동부 청년친화강소기업 선정(임금, 일생활균형 우수)',
          '바이브컴퍼니-스파이더아이앤씨, 메타버스 플랫폼 내 퀵커머스 사업 협력 MOU 체결'
        ]
      }
    ]
  };

  const yearTabs = ['현재~2014', '2013~2000'];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.pageTitleWrap}>
          <div className={styles.pageTitleInner}>
            <h2 className={styles.pageTitle}>연혁</h2>
            <p className={styles.pageDesc}>
              바이브는 비즈니스 혁신과 더불어 <br className={styles.onlyMo} />사람을 위한 기술을 제공합니다.
            </p>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.conwrap}>
            <div className={styles.contentsInner}>
              <div className={styles.con3}>
                <ul className={styles.historyTab}>
                  <li 
                    className={`${styles.tabMenu} ${activeTab === 0 ? styles.on : ''}`}
                    onClick={() => setActiveTab(0)}
                  >
                    서비스 출시 / 주요 계약
                  </li>
                  <li 
                    className={`${styles.tabMenu} ${activeTab === 1 ? styles.on : ''}`}
                    onClick={() => setActiveTab(1)}
                  >
                    수상 / 인증 / MOU
                  </li>
                </ul>
                
                <div className={styles.tabViewArea}>
                  <div className={`${styles.tabSel} ${activeTab === 0 ? styles.on : ''}`}>
                    <div className={styles.yearHistoryArea}>
                      <ul className={styles.yearTab}>
                        {yearTabs.map((tab, index) => (
                          <li 
                            key={index}
                            className={`${styles.tabMenu} ${activeYearTab === index ? styles.on : ''}`}
                            onClick={() => setActiveYearTab(index)}
                          >
                            {tab}
                          </li>
                        ))}
                      </ul>
                      
                      <div className={`${styles.tabView} ${activeYearTab === 0 ? styles.on : ''}`}>
                        {historyData.service.map((yearData, index) => (
                          <div key={index} className={styles.row}>
                            <div className={styles.year}>{yearData.year}</div>
                            <div className={styles.content}>
                              <ul>
                                {yearData.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${styles.tabSel} ${activeTab === 1 ? styles.on : ''}`}>
                    <div className={styles.tabView}>
                      <div className={styles.yearHistoryArea}>
                        {historyData.award.map((yearData, index) => (
                          <div key={index} className={styles.row}>
                            <div className={styles.year}>{yearData.year}</div>
                            <div className={styles.content}>
                              <ul>
                                {yearData.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
} 