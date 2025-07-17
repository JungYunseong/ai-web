'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'; // Added for Next.js Image component
import styles from './CustomersSection.module.css';

const customers = [
  { name: '글로벌 IT 기업', logo: 'https://via.placeholder.com/200x80.png?text=Global+IT' },
  { name: '국내 주요 금융기관', logo: 'https://via.placeholder.com/200x80.png?text=Financial+Inst' },
  { name: '정부 및 공공기관', logo: 'https://via.placeholder.com/200x80.png?text=Gov+Agency' },
  { name: '대형 미디어 그룹', logo: 'https://via.placeholder.com/200x80.png?text=Media+Group' },
  { name: '선도적인 제조 기업', logo: 'https://via.placeholder.com/200x80.png?text=Manufacturing' },
  { name: '유통 및 소비재 기업', logo: 'https://via.placeholder.com/200x80.png?text=Retail+Co' },
  { name: '헬스케어 솔루션 기업', logo: 'https://via.placeholder.com/200x80.png?text=Healthcare' },
  { name: '교육 및 연구기관', logo: 'https://via.placeholder.com/200x80.png?text=Education' },
];

const CustomersSection = () => {
  return (
    <Container className={styles.section}>
      <h2 className={styles.title}>Our Customers</h2>
      <Row>
        {customers.map((customer, index) => (
          <Col key={index} xs={6} md={3} className="text-center mb-4">
            <Image src={customer.logo} alt={customer.name} className={styles.logoImage} width={200} height={80} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomersSection;