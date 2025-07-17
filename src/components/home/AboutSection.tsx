'use client';

import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const stats = [
    {
      title: "국내 AI·빅데이터 No.1 기업",
      value: "No. 1",
      description: "AI·빅데이터 분야 최고 기업"
    },
    {
      title: "2000년부터 25년간 AI·빅데이터 기술 개발",
      value: "25년",
      description: "25년간의 기술 축적"
    },
    {
      title: "국내 최대 빅데이터 보유",
      value: "520억+",
      description: "520억 건 이상의 데이터"
    }
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>바이브 소개</h2>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <h3 className={styles.statTitle}>{stat.title}</h3>
              <div className={styles.statValue}>{stat.value}</div>
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 