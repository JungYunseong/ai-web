'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './WhatWeDoSection.module.css';

const services = [
  {
    title: 'AI Solution',
    description: '금융, 공공, 미디어 등 다양한 산업 분야에 특화된 AI 솔루션을 제공합니다.',
    imgSrc: 'https://via.placeholder.com/400x300.png?text=AI+Solution',
  },
  {
    title: 'AI Subscription',
    description: 'Sometrend, VAIV Search 등 누구나 쉽게 사용할 수 있는 AI 구독 서비스를 만나보세요.',
    imgSrc: 'https://via.placeholder.com/400x300.png?text=AI+Subscription',
  },
];

const WhatWeDoSection = () => {
  return (
    <Container className={styles.section}>
      <h2 className={styles.title}>What We Do</h2>
      <p className={styles.subtitle}>
        VAIV는 AI 기술로 산업의 혁신을 주도하고, 일상에 새로운 가치를 더합니다.
      </p>
      <Row>
        {services.map((service, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className={styles.card}>
              <Card.Img variant="top" src={service.imgSrc} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhatWeDoSection;
