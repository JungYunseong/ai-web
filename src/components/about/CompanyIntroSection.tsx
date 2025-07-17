'use client';

import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styles from './CompanyIntroSection.module.css';

const CompanyIntroSection = () => {
  return (
    <Row className={styles.section}>
      <Col md={6}>
        <Image src="https://via.placeholder.com/600x400.png?text=VAIV+Office" alt="VAIV Office" fluid rounded />
      </Col>
      <Col md={6} className={styles.textContainer}>
        <h2 className={styles.title}>세상의 모든 데이터로<br />새로운 가치를 만드는 기업</h2>
        <p>
          VAIV는 2000년 설립 이후, 인공지능(AI)과 빅데이터(Big Data) 기술을 통해
          사람의 일상을 편리하게 만들고 기업의 비즈니스 혁신을 주도해왔습니다.
        </p>
        <p>
          우리는 방대한 데이터 속에서 의미 있는 정보를 찾아내고,
          고객이 가장 필요로 하는 인사이트를 제공하여 합리적인 의사결정을 돕습니다.
        </p>
      </Col>
    </Row>
  );
};

export default CompanyIntroSection;
