'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="/videos/placeholder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container className={styles.content}>
        <h1>The Future of AI,</h1>
        <h1>VAIV</h1>
        <p>
          세상의 모든 정보를 지식으로, 일상을 보다 편리하게 만드는 AI 기술을 경험해보세요.
        </p>
      </Container>
    </div>
  );
};

export default HeroSection;
