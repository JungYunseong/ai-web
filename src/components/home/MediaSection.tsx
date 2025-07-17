'use client';

import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import styles from './MediaSection.module.css';

const mediaItems = [
  {
    title: 'VAIV, AI 컨퍼런스에서 혁신상 수상',
    description: 'VAIV의 최신 AI 기술이 글로벌 컨퍼런스에서 큰 주목을 받았습니다.',
    imgSrc: 'https://via.placeholder.com/800x400.png?text=Media+Image+1',
    date: '2024.07.15'
  },
  {
    title: 'VAIV, 공공기관과 AI 기반 데이터 분석 플랫폼 구축',
    description: '정부의 디지털 전환 사업에 VAIV의 기술이 핵심적인 역할을 합니다.',
    imgSrc: 'https://via.placeholder.com/800x400.png?text=Media+Image+2',
    date: '2024.07.10'
  },
  {
    title: 'Sometrend, 사용자 100만 돌파',
    description: '소셜 빅데이터 분석 플랫폼 Sometrend가 새로운 마일스톤을 달성했습니다.',
    imgSrc: 'https://via.placeholder.com/800x400.png?text=Media+Image+3',
    date: '2024.07.01'
  },
];

const MediaSection = () => {
  return (
    <Container className={styles.section}>
      <h2 className={styles.title}>Media / PR</h2>
      <Carousel>
        {mediaItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.imgSrc}
              alt={item.title}
            />
            <Carousel.Caption className={styles.caption}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.date}</span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default MediaSection;
