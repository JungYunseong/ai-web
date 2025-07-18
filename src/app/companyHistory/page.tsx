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
            'AI 기반 의료 진단 보조 시스템 \'MediAI Assistant\' 출시',
            '의료 영상 분석 AI 플랫폼 \'RadiologyAI\' 상용화',
            '개인 맞춤형 건강 관리 AI 서비스 \'HealthAI Care\' 출시'
          ]
        },
        {
          year: '2024',
          items: [
            '대표이사 변경(김의사 대표이사)',
            'AI 기반 약물 상호작용 분석 시스템 \'DrugAI\' 출시',
            '2024년 의료 AI 혁신 기술 개발 지원 사업 선정',
            '2024년 AI 의료기기 인증 획득',
            '보건복지부 \'AI 기반 의료진단 정확도 향상 사업\' 추진',
            '의료 AI 전문 모델 \'MediAI 2.0\' 출시',
            '의료 AI 윤리 가이드라인 개발 기관 선정',
            '2024 AI 의료기기 바우처 지원사업 공급기업 선정'
          ]
        },
        {
          year: '2023',
          items: [
            '\'의료 AI 기술 개발 및 상용화 지원 사업\' 공급기업 선정',
            '\'MediAI Cloud\' 의료 AI 클라우드 플랫폼 출시',
            'AI 기반 의료 문서 자동화 시스템 \'MediDoc AI\' 출시',
            '식약처 \'AI 의료기기 임상시험 가이드라인\' 개발 참여',
            '의료 AI 언어모델 \'MediAI(MedicalAI)\' 공개',
            '대표이사 변경(박의료 대표이사)'
          ]
        },
        {
          year: '2022',
          items: [
            'AI 기반 의료 진단 플랫폼 \'MediDiagnosis\' 서비스 출시',
            '식약처 AI 의료기기 허가 획득',
            '의료 빅데이터 분석 플랫폼 구축 사업'
          ]
        },
        {
          year: '2021',
          items: [
            'AI 기반 의료 영상 분석 보고서 \'MediImage AI\' 출시',
            '\'의료 AI 포럼\' 출범',
            '\'디지털 헬스케어 AI 팀\' 출범',
            '의료 분야 AI 마이데이터 사업 참여',
            'AI 기반 의료 정보 서비스 \'MediInfo\' 오픈',
            '국립암센터 AI 진단 시스템 2단계 구축',
            '대표이사 변경(이의료 대표이사)',
            '스마트 의료 AI ASP 출시',
            'MediAI 의료 영상 분석 서비스 개시',
            '국민건강보험공단 AI 기반 진료 분석 모델 개발',
            '세종시 AI 기반 의료 관제 시스템 구축 및 운영 사업 참여'
          ]
        },
        {
          year: '2020',
          items: [
            'AI 기반 의료 예측 모델 개발',
            '의료 AI 기반 환자 관리 시스템 개발 사업 참여',
            'AI 기반 코로나19 진단 시스템 개발',
            'AI 기반 의료진 매칭 시스템 구축 2차 사업 참여',
            'AI 기반 의료진 피로도 측정 시스템 구축',
            '국립의료원 AI 기반 의료정보시스템 구축',
            '의료 AI 스타트업 상장(IPO)',
            '㈜메디AI컴퍼니(MediAI company)로 사명 변경',
            '국립암센터 AI 진단 시스템 1단계 구축',
            'MediAI(Medical AI, 구 의료메트릭스) BI 변경',
            '의료 AI 기술평가 AA 등급 획득',
            'B2B 의료 AI 분석 플랫폼 \'MediAI Platform\' 리뉴얼 오픈',
            '과학기술정보통신부 \'2020 의료 AI 바우처 지원사업\' 공급기업 선정'
          ]
        },
        {
          year: '2019',
          items: [
            'MediAI Review+ 진단 오픈',
            '서울대병원과 AI 의료진단 시스템 구축을 위한 업무협약 체결',
            '2019년 스마트 병원 시범사업(세종, 부산) AI 의료시스템 마스터플랜 수립',
            '국립암센터 / 국립중앙의료원 AI 챗봇 구축',
            '과학기술정보통신부 \'2019 의료 AI 활용 지원 실증서비스 사업\' 수행기업으로 선정',
            '과학기술정보통신부 \'2019 의료 AI 바우처 지원사업\' 공급기업 선정',
            '삼성서울병원 AI 기반의 의료진단 조기 경보시스템 개발',
            '식약처 AI 기반 의료기기 안전성 위험징후 포착 지원 시스템 구축',
            '의료 AI 연구소 \'MediAI Lab\' 개소'
          ]
        },
        {
          year: '2018',
          items: [
            '국립의료원 지능형 의료 정보 융합분석 시스템 \'MediArgo\' 개발',
            '보건복지부 AI 기반 의료기관 상시 감시 및 민원 지원 시스템 구축',
            '국립중앙의료원 AI 기반 의료 챗봇 구축',
            '서울대병원 의료 빅데이터 분석 솔루션 \'MediBIGS 2.0\' 개발',
            '연세대병원 의료별 예측 모형 및 정보활용도 제고 프로젝트',
            '의료개발원 AI를 이용한 의료기기 위험률 확인시스템 구축',
            '한국의료정보학회 AI 기반 맞춤형 진료 추천 시스템 개발',
            '삼성서울병원 의료 제품군별 전략 컨설팅',
            '서울대병원 의료보고서 서비스 제공',
            '세계 최초 AI 의료진단 시스템 상용화'
          ]
        },
        {
          year: '2017',
          items: [
            'AI 기반 지능형 의료 길라잡이 서비스 출시',
            '국립의료원 의료 빅데이터에 기반한 진료정보기록 자동분석시스템 구축',
            '연합뉴스 의료 뉴스 서비스 네트워크(MNN) 구축',
            '국민건강보험공단 개인별 건강알람서비스 시범사업',
            '서울대병원/연세대병원 의료지식관리 시스템 구축',
            '고려대병원 신기술 타겟 발굴 및 포지셔닝 컨설팅',
            'AI 기반 의료 어드바이저(Medical Advisor) 기술 개발',
            'AI 의료 Fund Everest V2(KOSPI, S&P500) 기술 개발'
          ]
        },
        {
          year: '2016',
          items: [
            '세계 최초 AI 의료진단 시스템 개발',
            'KISTI 의료지식기반 제품, 병원 관계망 분석 시스템 구축',
            '서울대병원 의료 데이터 기반 진료 트렌드 분석 플랫폼 구축',
            '보건복지부 AI 기반 대화형 의료 지식서비스 구축',
            '국립의료원 부내행정지원 시스템 및 대국민 홈페이지 운영',
            '연세대병원 의료 라이프스타일 분석 컨설팅',
            '고려대병원 의료 커뮤니케이션 전략 컨설팅'
          ]
        },
        {
          year: '2015',
          items: [
            '보건복지부 의료 정책 여론 수렴 시스템 구축',
            '국립의료원 의료정보시스템 통합유지관리',
            '서울대병원 의료 리스닝 플랫폼 구축',
            '연세대병원 의료 트렌드 분석을 통한 신기술 기획 컨설팅',
            '고려대병원 의료 콜센터 상담원 관리시스템(Smart Medical Helper) 고도화 솔루션',
            '의료 AI 어드바이저 개발'
          ]
        },
        {
          year: '2014',
          items: [
            '연합뉴스 의료융합 인프라 구축사업 Open API 시범구축/구축 강화',
            '국립의료원 의료빅데이터 의미 기반 모니터링 기술 개발',
            '의료정보원 의료 공공데이터 포털 및 빅데이터 서비스 기반 구축'
          ]
        }
      ],
      past: [
        {
          year: '2013',
          items: [
            '국립의료원 의료 빅데이터 수집/분석모델 구축',
            '서울대병원 의료미디어분석 시스템 구축/운영',
            '연세대병원 통합의료리스닝 플랫폼 구축',
            '연합뉴스 의료 통합검색 구축',
            '고려대병원, 연세대병원 의료 VOC관리시스템 개선',
            '의료 데이터 구조화 및 시각화를 위한 통계적 분석 기술 개발',
            'AI 의료 Fund Everest V1기술 개발'
          ]
        },
        {
          year: '2012',
          items: [
            '의료 큐레이션 서비스 \'MediMob\' 개발',
            '서울대병원/연세대병원/고려대병원/국립의료원 의료지식관리시스템 구축',
            '19대 총선/18대 대선 의료 트렌드 분석 서비스',
            '아모레퍼시픽 의료 트렌드 및 커뮤니케이션 인사이트 도출 컨설팅',
            '웅진코웨이 의료 CS포털 시스템 구축'
          ]
        },
        {
          year: '2011',
          items: [
            'live medical talk 앱 서비스 개시',
            '온라인 의료 민원 정보 분석 시스템 2단계 구축',
            '아모레퍼시픽 의료 캠페인 모니터링 시스템',
            '멜론 의료 검색 자동완성 시스템 구축',
            'SK마케팅앤컴퍼니 의료 쇼핑 검색 및 분석 시스템 운영',
            '서울대병원 / 연세대병원 / 고려대병원 의료지식관리시스템 구축'
          ]
        },
        {
          year: '2010',
          items: [
            'MediAI Biz 론칭',
            'T world/EBS 의료 포탈 통합검색 고도화',
            'SK M&C 의료 오피니언마이닝 기반 검색 시스템 구축',
            '서울대병원/연세대병원, 국민건강보험공단 의료 VOC 관리시스템 구축',
            '의료 기계 번역(영어-한국어, 중국어-한국어) 기술 개발'
          ]
        },
        {
          year: '2007 ~2009',
          items: [
            '멜론 의료 감성 검색 구축',
            'SK M&C 의료 CLA e-Gateway 검색 솔루션',
            '서울시/서울대병원/연세대병원/고려대병원/국립의료원 등 의료지식관리시스템 구축',
            '의료빅데이터 분석 시스템 \'MediTrend\' 세계 최초 개발',
            '의료 텍스트 마이닝 엔진(MediAnalyzer 3.0) 개발 / 의료 검색엔진(MediIR 4.0) 개발',
            '의료 지식관리 시스템(MediHelper 2.0) 개발 / 의료 웹 분석 엔진(MediAnalyzer 2.0) 개발',
            '의료 VOC 관리 솔루션 MediCVMS v2.0 개발',
            'KT 의료 TDMS 글로벌 해킹 탐지 시스템'
          ]
        },
        {
          year: '2004 ~2006',
          items: [
            'UCC지원 초대용량 의료 대화홈피 검색시스템 MediIR 3.0 개발',
            'AI 기반 의료 대화홈피 \'MediAwoo\' 서비스 개시(의료 챗봇 기술 국내 최초 완성)',
            '국내 최초 의료 시나리오 기반 업무 수행 대화에이전트 기술 개발',
            '삼성서울병원 글로벌 의료센터 ERMS 구축',
            'Microsoft MSN메신저 의료 대화형 에이전트(Medi-Buddy) 서비스',
            '의료 대화 에이전트(Medical Conversational Agent) 기술 개발',
            '다음커뮤니케이션 의료 통합검색 시스템 개발 및 운영'
          ]
        },
        {
          year: '2000 ~2003',
          items: [
            'Core Medical NLP / Medical Knowledge Base / Medical Conversational Agent / Medical Search Engine / Medical Mining Spider / Deep Medical AI 등 핵심 기술 개발',
            '세계 최초 의료 오피니언 마이닝 솔루션 MediAnalyzer 개발',
            'SKT 의료 자동 QA 시스템 \'MediNeNe\'',
            'SKT Medical CIMS (Competitive Intelligence Management System)',
            'HPESSP 의료 파트너 선정',
            '의료 행정 업무용 소프트웨어 선정(의료민원처리시스템)',
            '의료 정보화 촉진 계속 사업자 선정(AI 기반 의료 도우미)',
            '서울대병원/연세대병원/고려대병원 의료지식관리시스템 구축',
            '국가종합전자조달(G2B) 의료 사업 구축(의료 통합검색, 의료 고객센터)(Medical AI Solver)',
            '의료 대화 로봇 프로그램 가상 에이전트(Medical Virtual Representative) 기술 개발',
            '의료 검색엔진 기술 개발',
            '의료 자연언어처리 연구소(Medical NLP Lab) 설립',
            '메디AI소프트 설립',
            '㈜다음커뮤니케이션 의료기술사업부서 사내 인큐베이팅'
          ]
        }
      ]
    },
    award: [
      {
        year: '2025',
        items: [
          '의료정보산업협회 \'2025 Emerging Medical AI+X TOP100\' 기업 선정'
        ]
      },
      {
        year: '2024',
        items: [
          '메디AI컴퍼니-서울대병원 의료 AI 사업 협력 MOU 체결',
          '메디AI컴퍼니-연세대병원, 의료 AI 사업 관련 MOU 체결',
          '의료정보산업협회 \'2024 Emerging Medical AI+X TOP100\' 기업 선정'
        ]
      },
      {
        year: '2023',
        items: [
          '디지털플랫폼정부 의료 표창(보건복지부 장관상)',
          '한국일보 의료 디지털 이노베이션 대상 수상(메디AI 진단)',
          '메디AI컴퍼니-고려대병원, 전략적 파트너십 체결',
          '의료정보산업협회 \'2023 Emerging Medical AI+X TOP100\' 기업 선정'
        ]
      },
      {
        year: '2022',
        items: [
          '올해의 의료 디지털 전환 우수기업 선정(보건복지부 주관/의료정보원 원장상)',
          '메디AI컴퍼니-P&K의료임상연구센터, 의료 컨설팅 사업 협력을 위한 MOU 체결',
          '메디AI컴퍼니-씨웨이브, 의료 AI 사업 협력을 위한 MOU 체결',
          '메디AI컴퍼니-펫미, 의료 플랫폼 내 메타커머스 구현을 위한 MOU 체결',
          '메디AI컴퍼니-한국예총, 의료 AI 사업 협력 위한 MOU 체결',
          '의료정보산업협회 \'2022 Emerging Medical AI+X TOP100\' 기업 선정',
          '제21회 대한민국 소프트웨어(SW)기업경쟁력 대상(의료기여 부문/보건복지부 장관상)',
          '2022 고용노동부 청년친화강소기업 선정(의료, 일생활균형 우수)',
          '메디AI컴퍼니-스파이더아이앤씨, 의료 AI 플랫폼 내 퀵커머스 사업 협력 MOU 체결'
        ]
      },
      {
        year: '2021',
        items: [
          '메디AI컴퍼니-롯데백화점, 의료 AI 커머스 플랫폼 개발을 위한 MOU 체결',
          '메디AI컴퍼니-HS애드, 의료 상호 협력을 위한 MOU 체결',
          '메디AI컴퍼니-KMAC 의료 플랫폼 비즈니스 공동 론칭을 위한 전략적 파트너십 체결',
          '메디AI컴퍼니-신한DS 의료 AI 플랫폼 사업 협력을 위한 MOU 체결',
          '메디AI컴퍼니-청운대학교, 의료 교육사업 협력 MOU 체결',
          '메디AI컴퍼니-인천테크노파크 의료 스타트업 발굴 및 육성을 위한 MOU 체결',
          '메디AI컴퍼니-녹스 의료 독점 파트너십 계약 체결',
          '메디AI컴퍼니-금성계전 의료 업무협약 MOU 체결'
        ]
      },
      {
        year: '2020',
        items: [
          '의료정보산업협회 \'2021 Emerging Medical AI+X TOP100\' 기업 선정',
          '메디AI컴퍼니-새한항업 의료 업무협력 MOU 체결',
          '메디AI컴퍼니-펜타시스템 의료 업무협력 MOU 체결',
          '메디AI컴퍼니-광양시-POSCO, 광양 스마트 의료 도시 조성을 위한 업무협약',
          '메디AI소프트-NICE지니데이타, 의료 신기술 기반 데이터 사업화를 위한 업무협력 MOU 체결',
          '메디AI소프트-나래ICT 의료 업무협약 체결',
          '메디AI소프트-고려대 의료 빅데이터 연구개발 및 기술사업화 MOU 체결',
          '메디AI소프트-렉시스넥시스 Medical tech challenge korea 성공적 개최를 위한 업무협약 체결',
          '고용노동부 청년친화 강소기업 선정(의료, 일/생활/균형 부문)'
        ]
      },
      {
        year: '2019',
        items: [
          '메디AI소프트-제주특별자치도 의료 ICT기술 분야 민관 상생을 위한 업무협약 체결',
          '메디AI소프트-서울특별시 서울시 의료생활 데이터 제작을 통한 데이터 경제 활성화를 위한 민간기업 다자 간 민관 협력 의료 빅데이터 MOU 체결',
          '메디AI소프트-CUPIA-KCNET 의료 AI 활용 사업 등의 상호협력과 전략적 제휴를 위한 MOU 체결',
          '메디AI소프트-고려대학교 의료 빅데이터 연구 개발 및 기술사업화를 위한 MOU 체결',
          '메디AI소프트-경희대학교 의료 H&T 애널리틱스센터 설립을 위한 MOU 체결',
          '메디AI소프트-선린인터넷고 의료 산학협력 MOU 체결',
          'Medical Contextual CA™ GS 1등급 품질 인증 획득',
          '일하기 좋은 의료 SW 전문기업 선정(경영진 리더십 부문)',
          '대한상공회의소 \'일하기 좋은 의료 중소기업\' 2년 연속 선정',
          '고용노동부 의료 강소기업 선정',
          '한국기업데이터 의료 기술역량 우수기업 인증(T2)',
          '한국IT서비스학회 의료 춘계학술대회 공로상 수상',
          '초연결 지능화 시대를 이끌 의료 DNA 분야 100대 혁신 기업 선정'
        ]
      },
      {
        year: '2018',
        items: [
          '메디AI소프트-세종특별자치시 의료 투자 MOU 체결',
          '메디AI소프트-HPC이노베이션허브 의료 간 업무협약',
          '2018년도 대한민국 의료 ICT INNOVATION 대상 보건복지부 장관 표창 수상',
          '2018 대한민국 의료 소프트웨어 기술 대상 수상',
          '2018년 대한상공회의소 \'일하기 좋은 의료 중소기업\' 선정',
          'KDB-TECH 의료 기업 선정(KDB산업은행)',
          '의료 신용등급 우수기업 인증(BBB-)',
          '의료 소프트웨어 프로세스 품질 인증 2등급 획득(nipa)',
          'Medical Contextual Finder™ GS 1등급 품질 인증 획득'
        ]
      },
      {
        year: '2016 ~2017',
        items: [
          '서울대병원-메디AI소프트 의료 MOU 체결'
        ]
      },
      {
        year: '2012 ~2015',
        items: [
          '메디마이닝서치 IR 의료 소프트웨어 품질 인증 획득 TTA'
        ]
      },
      {
        year: '2007 ~2011',
        items: [
          '의료 경영혁신형 중소기업(Medical Main-biz) 선정',
          '의료 기술혁신형 중소기업(Medical Inno-biz) 선정'
        ]
      },
      {
        year: '2004 ~2006',
        items: [
          'RED HERRING 100 ASIA SHORT LIST(아시아의 가장 유망한 100대 의료 비상장 기업) 선정',
          'Kibo A+ Members 의료 선정(기술보증기금)',
          '제5회 의료 디지털 이노베이션 대상 국무총리상 수상',
          '기술신용보증기금 의료 우량기술기업 선정'
        ]
      },
      {
        year: '2000 ~2003',
        items: [
          '의료 벤처기업확인(의료신기술)',
          '의료 벤처기업인증(의료연구개발투자기업)'
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
              메디AI는 의료 혁신과 더불어 <br className={styles.onlyMo} />사람을 위한 의료 기술을 제공합니다.
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
                    의료 서비스 출시 / 주요 계약
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