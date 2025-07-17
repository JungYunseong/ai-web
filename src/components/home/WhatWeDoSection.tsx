'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './WhatWeDoSection.module.css';

const services = [
  {
    title: 'VAIV Search',
    description: 'RAG 기반의 AI 검색 솔루션으로, 방대한 정보를 정확하고 빠르게 찾아줍니다.',
    imgSrc: 'https://via.placeholder.com/400x300.png?text=VAIV+Search', // Placeholder, replace with actual image
  },
  {
    title: 'Sometrend',
    description: '빅데이터 분석을 통해 시장 트렌드와 대중의 인식을 파악하는 서비스입니다.',
    imgSrc: 'https://via.placeholder.com/400x300.png?text=Sometrend', // Placeholder, replace with actual image
  },
  {
    title: 'AI Platform & LLM',
    description: '자체 개발 AI 플랫폼 SOFIA와 LLM 모델 VAIVGeM으로 혁신을 이끌어갑니다.',
    imgSrc: 'https://via.placeholder.com/400x300.png?text=AI+Platform+LLM', // Placeholder, replace with actual image
  },
];

const WhatWeDoSection = () => {
  return (
    <Container className={styles.section}>
      <h2 className={styles.title}>What We Do</h2>
      <p className={styles.subtitle}>
        바이브컴퍼니는 25년간 AI와 빅데이터 분야를 선도하며, 세상의 모든 정보를 지식으로 만듭니다.
      </p>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
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
