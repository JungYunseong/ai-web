'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import styles from './page.module.css';

export default function CompanyHistoryPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeYearTab, setActiveYearTab] = useState(0);

  const historyData = {
    service: {
      recent: [
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
        },
        {
          year: '2019',
          items: [
            'Sometrend Review+ Beauty 오픈',
            '동작구와 스마트시티 조성을 위한 업무협약 체결',
            '2019년 스마트시티 시범도시(세종, 부산) 디지털트윈 마스터플랜 수립',
            '국가암센터 / 소상공인시장진흥공단 VAIV Chatbot 구축',
            '과학기술정보통신부 \'2019 본인정보 활용 지원(My Data) 실증서비스 사업\' 에너지 부문 수행기업으로 선정',
            '과학기술정보통신부 \'2019 데이터바우처 지원사업\' 공급기업 선정',
            '삼성자산운용 AI 기반의 위험관리 조기 경보시스템 개발',
            '관세청 AI 기반 무역금융사기 위험징후 포착 지원 시스템 구축',
            '생활변화 콘텐츠 연구소 \'생활변화 관측소\' 개소'
          ]
        },
        {
          year: '2018',
          items: [
            '국회도서관 지능형 의회 정보 융합분석 시스템 \'아르고스\' 개발',
            '금융감독원 빅데이터·AI 기반 대부업 상시 감시 및 민원 지원 시스템 구축',
            '우정사업본부 우체국 금융 VAIV Chatbot 구축',
            '대홍기획 소셜 빅데이터 분석 솔루션 \'디빅스2.0(D-BIGS 2.0)\' 개발',
            '신한은행 산업별 예측 모형 및 정보활용도 제고 프로젝트',
            '보험개발원 AI를 이용한 상품 위험률 확인시스템 구축',
            '한국정보통신진흥협회 이동통신 맞춤형 요금제 추천 빅데이터 분석 솔루션 개발',
            '삼성전자 가전 제품군별 전략 컨설팅',
            '경기관광공사 AI Report서비스 제공',
            '세계 최초 AI Report 상용화'
          ]
        },
        {
          year: '2017',
          items: [
            '로봇저널리즘 기반 지능형 관광길라잡이 서비스 출시',
            '한국철도공사 빅데이터에 기반한 운행정보기록 자동분석시스템 구축',
            '연합뉴스 평창 뉴스 서비스 네트워크(PNN) 구축',
            '국민건강보험공단 개인별 건강알람서비스 시범사업',
            '현대캐피탈/서울교통공사 지식관리 시스템 구축',
            '기아자동차 신차 타겟 발굴 및 포지셔닝 컨설팅',
            'AI 기반 로보 어드바이저(Robo Advisor) 기술 개발',
            'AI Fund Everest V2(KOSPI, S&P500) 기술 개발'
          ]
        },
        {
          year: '2016',
          items: [
            '세계 최초 AI Report 개발',
            'KISTI 특허지식기반 제품, 기업 관계망 분석 시스템 구축',
            'BC카드 소셜 데이터 기반 소비 트렌드 분석 플랫폼 구축',
            '법무부 AI 기반 대화형 생활법률 지식서비스 구축',
            '보건복지부 부내행정지원 시스템 및 대국민 홈페이지 운영',
            'KT 밀레니얼 라이프스타일 분석 컨설팅',
            'BC카드 브랜드 커뮤니케이션 전략 컨설팅'
          ]
        },
        {
          year: '2015',
          items: [
            '문화체육관광부 정책 여론 수렴 시스템 구축',
            '국립중앙도서관 정보시스템 통합유지관리',
            'MBC소셜 리스닝 플랫폼 구축',
            '롯데카드 쇼핑 트렌드 분석을 통한 신제품 기획 컨설팅',
            'KDB생명보험 콜센터 상담원 관리시스템(Smart Helper) 고도화 솔루션',
            '로보어드바이저 개발'
          ]
        },
        {
          year: '2014',
          items: [
            '연합뉴스 미디어융합 인프라 구축사업 Open API 시범구축/구축 강화',
            '국립재난안전연구원 소셜빅데이터 의미 기반 모니터링 기술 개발',
            '농림수산식품교육문화정보원 농식품 공공데이터 포털 및 빅데이터 서비스 기반 구축'
          ]
        }
      ],
      past: [
        {
          year: '2013',
          items: [
            '국립재난안전연구원 빅데이터 수집/분석모델 구축',
            'KB국민카드 소셜미디어분석 시스템 구축/운영',
            'SBS통합리스닝 플랫폼 구축',
            '연합뉴스 통합검색 구축',
            '미래에셋생명, 푸르덴셜생명 VOC관리시스템 개선',
            '데이터 구조화 및 시각화를 위한 통계적 분석 기술 개발',
            'AI Fund Everest V1기술 개발'
          ]
        },
        {
          year: '2012',
          items: [
            '소셜 큐레이션 서비스 \'트윗몹\' 개발',
            '현대카드/현대캐피탈/우리은행/경남은행 상담지식관리시스템 구축',
            '19대 총선/18대 대선 트윗분석 서비스',
            '아모레퍼시픽 미백 트렌드 및 커뮤니케이션 인사이트 도출 컨설팅',
            '웅진코웨이 CS포털 시스템 구축'
          ]
        },
        {
          year: '2011',
          items: [
            'live talk 앱 서비스 개시',
            '온라인 민원 정보 분석 시스템 2단계 구축',
            '아모레퍼시픽 캠페인 모니터링 시스템',
            '멜론 검색 자동완성 시스템 구축',
            'SK마케팅앤컴퍼니 피클 쇼핑 검색 및 분석 시스템 운영',
            '현대해상 / 메리츠화재 / 신한은행 상담지식관리시스템 구축'
          ]
        },
        {
          year: '2010',
          items: [
            'Sometrend Biz 론칭',
            'T world/EBS 포탈 통합검색 고도화',
            'SK M&C 오피니언마이닝 기반 검색 시스템 구축',
            '현대카드/캐피탈, 국민연금공단 VOC 관리시스템 구축',
            '기계 번역(영어-한국어, 중국어-한국어) 기술 개발'
          ]
        },
        {
          year: '2007 ~2009',
          items: [
            '멜론 감성 검색 구축',
            'SK M&C CLA e-Gateway 검색 솔루션',
            '서울시/알리안츠생명/동양생명/BC카드/농협/신한은행 등 상담지식관리시스템 구축',
            '소셜빅데이터 분석 시스템 \'트렌드맵\' 세계 최초 개발',
            '텍스트 마이닝 엔진(Talkro Analyzer 3.0) 개발 / 검색엔진(Talkro IR 4.0) 개발',
            '지식관리 시스템(Talkro Helper 2.0) 개발 / 웹 분석 엔진(Talkro Analyzer 2.0) 개발',
            'VOC 관리 솔루션 Talkro CVMS v2.0 개발',
            'KT TDMS 글로벌 해킹 탐지 시스템'
          ]
        },
        {
          year: '2004 ~2006',
          items: [
            'UCC지원 초대용량 대화홈피 검색시스템 Talkro IR 3.0 개발',
            'AI 기반 대화홈피 \'aAwoo\' 서비스 개시(챗봇 기술 국내 최초 완성)',
            '국내 최초 시나리오 기반 업무 수행 대화에이전트 기술 개발',
            '삼성전자 글로벌 고객센터 ERMS 구축',
            'Microsoft MSN메신저 대화형 에이전트(i-Buddy) 서비스',
            '대화 에이전트(Conversational Agent) 기술 개발',
            '다음커뮤니케이션 통합검색 시스템 개발 및 운영'
          ]
        },
        {
          year: '2000 ~2003',
          items: [
            'Core NLP / Knowledge Base / Conversational Agent / Search Engine / Mining Spider / Deep AI 등 핵심 기술 개발',
            '세계 최초 오피니언 마이닝 솔루션 Talkro Analyzer 개발',
            'SKT 자동 QA 시스템 \'NeNe\'',
            'SKT CIMS (Competitive Intelligence Management System)',
            'HPESSP파트너 선정',
            '행정 업무용 소프트웨어 선정(민원처리시스템)',
            '정보화 촉진 계속 사업자 선정(AI 기반 쇼핑 도우미)',
            '교보생명/현대자동차/기아자동차 상담지식관리시스템 구축',
            '국가종합전자조달(G2B) 사업 구축(통합검색, 고객센터)(AI Solver)',
            '대화 로봇 프로그램 가상 에이전트(Virtual Representative) 기술 개발',
            '검색엔진 기술 개발',
            '자연언어처리 연구소(NLP Lab) 설립',
            '다음소프트 설립',
            '㈜다음커뮤니케이션 기술사업부서 사내 인큐베이팅'
          ]
        }
      ]
    },
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
      },
      {
        year: '2021',
        items: [
          '바이브컴퍼니-롯데백화점, 메타버스 커머스 플랫폼 개발을 위한 MOU 체결',
          '바이브컴퍼니-HS애드, 상호 협력을 위한 MOU 체결',
          '바이브컴퍼니-KMAC 플랫폼 비즈니스 공동 론칭을 위한 전략적 파트너십 체결',
          '바이브컴퍼니-신한DS 메타버스 플랫폼 사업 협력을 위한 MOU 체결',
          '바이브컴퍼니-청운대학교, 교육사업 협력 MOU 체결',
          '바이브컴퍼니-인천테크노파크 스타트업 발굴 및 육성을 위한 MOU 체결',
          '바이브컴퍼니-녹스 독점 파트너십 계약 체결',
          '바이브컴퍼니-금성계전 업무협약 MOU 체결'
        ]
      },
      {
        year: '2020',
        items: [
          '지능정보산업협회 \'2021 Emerging AI+X TOP100\' 기업 선정',
          '바이브컴퍼니-새한항업 업무협력 MOU 체결',
          '바이브컴퍼니-펜타시스템 업무협력 MOU 체결',
          '바이브컴퍼니-광양시-POSCO, 광양 스마트 도시 조성을 위한 업무협약',
          '다음소프트-NICE지니데이타, 신기술 기반 데이터 사업화를 위한 업무협력 MOU 체결',
          '다음소프트-나래ICT 업무협약 체결',
          '다음소프트-고려대 빅데이터 연구개발 및 기술사업화 MOU 체결',
          '다음소프트-렉시스넥시스 Legal tech challenage korea 성공적 개최를 위한 업무협약 체결',
          '고용노동부 청년친화 강소기업 선정(임금, 일/생활/균형 부문)'
        ]
      },
      {
        year: '2019',
        items: [
          '다음소프트-제주특별자치도 ICT기술 분야 민관 상생을 위한 업무협약 체결',
          '다음소프트-서울특별시 서울시 도시생활 데이터 제작을 통한 데이터 경제 활성화를 위한 민간기업 다자 간 민관 협력 빅데이터 MOU 체결',
          '다음소프트-CUPIA-KCNET AI 활용 사업 등의 상호협력과 전략적 제휴를 위한 MOU 체결',
          '다음소프트-고려대학교 빅데이터 연구 개발 및 기술사업화를 위한 MOU 체결',
          '다음소프트-경희대학교 H&T 애널리틱스센터 설립을 위한 MOU 체결',
          '다음소프트-선린인터넷고 산학협력 MOU 체결',
          'Contextual CA™ GS 1등급 품질 인증 획득',
          '일하기 좋은 SW 전문기업 선정(경영진 리더십 부문)',
          '대한상공회의소 \'일하기 좋은 중소기업\' 2년 연속 선정',
          '고용노동부 강소기업 선정',
          '한국기업데이터 기술역량 우수기업 인증(T2)',
          '한국IT서비스학회 춘계학술대회 공로상 수상',
          '초연결 지능화 시대를 이끌 DNA 분야 100대 혁신 기업 선정'
        ]
      },
      {
        year: '2018',
        items: [
          '다음소프트-세종특별자치시 투자 MOU 체결',
          '다음소프트-HPC이노베이션허브 간 업무협약',
          '2018년도 대한민국 ICT INNOVATION 대상 과학기술정통부 장관 표창 수상',
          '2018 대한민국 소프트웨어 기술 대상 수상',
          '2018년 대한상공회의소 \'일하기 좋은 중소기업\' 선정',
          'KDB-TECH 기업 선정(KDB산업은행)',
          '신용등급 우수기업 인증(BBB-)',
          '소프트웨어 프로세스 품질 인증 2등급 획득(nipa)',
          'Contextual Finder™ GS 1등급 품질 인증 획득'
        ]
      },
      {
        year: '2016 ~2017',
        items: [
          'BC카드-다음소프트 MOU 체결'
        ]
      },
      {
        year: '2012 ~2015',
        items: [
          '마이닝서치 IR 소프트웨어 품질 인증 획득 TTA'
        ]
      },
      {
        year: '2007 ~2011',
        items: [
          '경영혁신형 중소기업(Main-biz) 선정',
          '기술혁신형 중소기업(Inno-biz) 선정'
        ]
      },
      {
        year: '2004 ~2006',
        items: [
          'RED HERRING 100 ASIA SHORT LIST(아시아의 가장 유망한 100대 비상장 기업) 선정',
          'Kibo A+ Members 선정(기술보증기금)',
          '제5회 디지털 이노베이션 대상 국무총리상 수상',
          '기술신용보증기금 우량기술기업 선정'
        ]
      },
      {
        year: '2000 ~2003',
        items: [
          '벤처기업확인(신기술)',
          '벤처기업인증(연구개발투자기업)'
        ]
      }
    ]
  };

  const yearTabs = ['현재~2014', '2013~2000'];

  const getCurrentData = () => {
    if (activeTab === 0) {
      return activeYearTab === 0 ? historyData.service.recent : historyData.service.past;
    } else {
      return historyData.award;
    }
  };

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
                        {historyData.service.recent.map((yearData, index) => (
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
                      
                      <div className={`${styles.tabView} ${activeYearTab === 1 ? styles.on : ''}`}>
                        {historyData.service.past.map((yearData, index) => (
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