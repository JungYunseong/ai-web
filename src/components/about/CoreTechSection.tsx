'use client';

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaBrain, FaLanguage, FaChartLine } from 'react-icons/fa';
import styles from './CoreTechSection.module.css';

const technologies = [
  {
    icon: <FaBrain size={40} />,
    title: 'AI 기술',
    description: '최신 딥러닝 기술을 기반으로 한 자연어 처리, 이미지 인식 등의 AI 솔루션을 개발합니다.'
  },
  {
    icon: <FaLanguage size={40} />,
    title: '자연어 처리 (NLP)',
    description: '텍스트 데이터의 의미를 분석하고 이해하여 챗봇, 요약, 번역 등의 서비스를 제공합니다.'
  },
  {
    icon: <FaChartLine size={40} />,
    title: '빅데이터 분석',
    description: '대규모 데이터를 수집, 처리, 분석하여 비즈니스 인사이트를 도출하고 예측 모델을 구축합니다.'
  }
];

const CoreTechSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.mainTitle}>핵심 기술</h2>
      <Row>
        {technologies.map((tech, index) => (
          <Col md={4} key={index} className={styles.techItem}>
            <div className={styles.iconWrapper}>{tech.icon}</div>
            <h4 className={styles.itemTitle}>{tech.title}</h4>
            <p>{tech.description}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoreTechSection;
