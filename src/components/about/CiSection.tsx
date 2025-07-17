'use client';

import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styles from './CiSection.module.css';

const CiSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.mainTitle}>CI 소개</h2>
      <Row>
        <Col md={4} className="text-center">
          <Image src="https://via.placeholder.com/300x100.png?text=VAIV+Logo" alt="VAIV Logo" fluid />
        </Col>
        <Col md={8}>
          <p>
            VAIV의 CI는 &apos;View an Insight, Value an Insight&apos;라는 의미를 담고 있습니다.
            이는 데이터 속에서 통찰력을 발견하고, 그 통찰력에 가치를 부여하겠다는 VAIV의 비전을 나타냅니다.
          </p>
          <p>
            워드마크의 안정적인 형태는 기술에 대한 신뢰를, 푸른 색상은 미래지향적인 혁신을 상징합니다.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default CiSection;
