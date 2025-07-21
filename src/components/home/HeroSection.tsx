'use client';

import { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      id: 1,
      title: '의료 AI 파운데이션 모델',
      description: '국내 최고 수준의 의료 특화 초거대언어모델 MediAI로 다양한 의료 분야에서의 AI 진단을 지원합니다.',
      image: '/ai-web/images/main/visual_vaiv_gem_img.svg',
      link: '/ai-web/laboratory?core=1',
      linkText: '자세히보기'
    },
    {
      id: 2,
      title: '의료 영상 분석 AI 솔루션',
      description: '당신의 더 나은 건강을 돕는 메디AI의 의료 AI',
      image: '/ai-web/images/main/visual_vaiv_search_img.svg',
      link: '/ai-web/business?tab=solution',
      linkText: '자세히보기'
    }
  ];

  useEffect(() => {
    // 이미지 프리로딩
    const preloadImages = async () => {
      try {
        // 타임아웃 설정 (5초)
        const timeoutPromise = new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('이미지 로딩 타임아웃')), 5000);
        });

        const loadPromise = Promise.all(
          slides.map(slide => {
            return new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => resolve();
              img.onerror = () => {
                console.warn(`이미지 로딩 실패: ${slide.image}`);
                resolve(); // 에러가 있어도 계속 진행
              };
              img.src = slide.image;
            });
          })
        );

        await Promise.race([loadPromise, timeoutPromise]);
        setIsLoading(false);
      } catch (error) {
        console.error('이미지 로딩 실패:', error);
        // 에러가 있어도 로딩을 완료시킴
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [slides.length, isLoading]);

  if (isLoading) {
    return (
      <section className={styles.heroSection}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p className={styles.loadingText}>바이브컴퍼니</p>
        </div>
      </section>
    );
  }

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