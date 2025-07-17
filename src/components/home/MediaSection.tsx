'use client';

import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import Image from 'next/image'; // Added for Next.js Image component
import styles from './MediaSection.module.css';

const mediaItems = [
  {
    title: '바이브컴퍼니, AI 기반 신사업 확장 발표',
    description: 'AI 기술을 활용한 새로운 비즈니스 모델을 공개하며 시장의 기대를 모으고 있습니다.',
    imgSrc: 'https://via.placeholder.com/800x400.png?text=VAIV+News+1',
    date: '2024.07.15'
  },
  {
    title: 'Sometrend, 데이터 분석 시장 점유율 1위 달성',
    description: '소셜 빅데이터 분석 플랫폼 썸트렌드가 ��내 시장에서 독보적인 위치를 확보했습니다.',
    imgSrc: 'https://via.placeholder.com/800x400.png?text=Sometrend+News',
    date: '2024.07.10'
  },
  {
    title: 'VAIVGeM, 차세대 LLM 모델 공개',
    description: '바이브컴퍼니의 자체 LLM 모델 VAIVGeM이 뛰어난 성능으로 주목받고 있습니다.',
    imgSrc: 'https://via.placeholder.com/800x400.png?text=VAIVGeM+News',
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
            <Image
              className="d-block w-100"
              src={item.imgSrc}
              alt={item.title}
              width={800} // Specify width
              height={400} // Specify height
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
