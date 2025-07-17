'use client';

import React from 'react';
import styles from './BusinessSection.module.css';

const BusinessSection = () => {
  const businesses = [
    {
      title: "VAIV Solution",
      description: "공공과 민간에서 검증된 AI 기술력,\n비즈니스 혁신과 AX를 지원하는 솔루션",
      icon: "🔧",
      color: "#2563eb"
    },
    {
      title: "VAIV Service", 
      description: "빅데이터로 시장을 읽고,\n기업의 전략적 의사결정을 지원하는 서비스",
      icon: "📊",
      color: "#10b981"
    }
  ];

  return (
    <section className={styles.business}>
      <div className={styles.container}>
        <h2 className={styles.title}>주요 비즈니스</h2>
        <div className={styles.businessGrid}>
          {businesses.map((business, index) => (
            <div key={index} className={styles.businessCard} style={{'--accent-color': business.color} as React.CSSProperties}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{business.icon}</span>
              </div>
              <h3 className={styles.businessTitle}>{business.title}</h3>
              <p className={styles.businessDescription}>{business.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection; 