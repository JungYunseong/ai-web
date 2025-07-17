'use client';

import React from 'react';
import styles from './NewsSection.module.css';

const NewsSection = () => {
  const news = [
    {
      title: "바이브컴퍼니, 생성형 AI 인재 교류회 'Cross-AI Lab Exchange' 성료",
      date: "2025.07.02"
    },
    {
      title: "바이브컴퍼니, RAG 기반 지식관리 시스템… KCCM 2025서 높은 주목",
      date: "2025.06.25"
    },
    {
      title: "바이브컴퍼니, 'VAIV AI DAY 2025' 성황리 종료… '에이전트로 진화하는 세상'",
      date: "2025.06.20"
    },
    {
      title: "바이브컴퍼니, 식약처 식의약 데이터 플랫폼 4년 연속 수주… 공공 데이터 시장 입지 강화",
      date: "2025.06.16"
    },
    {
      title: "에이전트로 진화하는 세상… 바이브컴퍼니 AI DAY 2025 개최",
      date: "2025.06.12"
    }
  ];

  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.newsContent}>
          <div className={styles.newsSection}>
            <h2 className={styles.title}>
              바이브 소식
            </h2>
            <p className={styles.subtitle}>
              바이브컴퍼니의 <strong>새로운 소식</strong>을<br />
              전해드립니다
            </p>
            <div className={styles.newsList}>
              {news.map((item, index) => (
                <div key={index} className={styles.newsItem}>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <span className={styles.newsDate}>{item.date}</span>
                </div>
              ))}
            </div>
            <div className={styles.moreNews}>
              <h3 className={styles.moreTitle}>
                <em>더 많은 뉴스</em>를<br />
                확인해 보세요
              </h3>
              <button className={styles.moreButton}>자세히보기</button>
            </div>
          </div>
          
          <div className={styles.newsletterSection}>
            <h3 className={styles.newsletterTitle}>
              바이브의 뉴스레터 <em>'바이레터'</em>
            </h3>
            <div className={styles.newsletterContent}>
              <h4 className={styles.newsletterSubtitle}>
                <strong>바이브의 소식</strong>을<br />
                매월 메일로<br />
                받아보실 수 있습니다.
              </h4>
              <div className={styles.subscribeForm}>
                <input 
                  type="email" 
                  placeholder="이메일 주소를 입력하세요" 
                  className={styles.emailInput}
                />
                <button className={styles.subscribeButton}>구독하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 