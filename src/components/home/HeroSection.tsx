'use client';

import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.subtitle}>생성형 AI 파운데이션 모델</h1>
            <h2 className={styles.title}>VAIVGeM 2</h2>
            <p className={styles.description}>
              국내 최고 수준의 한국어 특화<br />
              초거대언어모델 VAIVGeM으로<br />
              다양한 산업군에서의 AX를 지원합니다.
            </p>
            <button className={styles.ctaButton}>자세히보기</button>
          </div>
          <div className={styles.graphicContainer}>
            <div className={styles.graphic}>
              <div className={styles.graphicText}>VAIVGeM 2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 