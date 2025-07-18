'use client';

import { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: '생성형 AI 파운데이션 모델',
      description: '국내 최고 수준의 한국어 특화 초거대언어모델 VAIVGeM으로 다양한 산업군에서의 AX를 지원합니다.',
      image: '/images/main/visual_vaiv_gem_img.svg',
      link: '/laboratory?core=1',
      linkText: '자세히보기'
    },
    {
      id: 2,
      title: 'RAG 기반 AI 검색 솔루션',
      description: '당신의 더 나은 선택을 돕는 바이브의 AI',
      image: '/images/main/visual_vaiv_search_img.svg',
      link: '/business?tab=solution',
      linkText: '자세히보기'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <div className={styles.slideContent}>
              <h5 className={`${styles.slideTitle} ${styles.animate}`}>
                {slide.title}
              </h5>
              <figure className={`${styles.slideImage} ${styles.animate} ${styles.delay1}`}>
                <img src={slide.image} alt={slide.title} />
              </figure>
              <h6 className={`${styles.slideDescription} ${styles.animate} ${styles.delay2}`}>
                {slide.description}
              </h6>
              <a 
                href={slide.link} 
                className={`${styles.slideLink} ${styles.animate} ${styles.delay3}`}
                title={`${slide.title} 바로가기`}
              >
                {slide.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.slideDots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </section>
  );
} 