'use client';

import { useEffect, useState } from 'react';
import styles from './CustomersSection.module.css';

export default function CustomersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const originalCustomers = [
    { id: 1, name: '삼성', logo: '/images/main/logo_samsung.png' },
    { id: 2, name: 'LG전자', logo: '/images/main/logo_lge.png' },
    { id: 3, name: '신세계', logo: '/images/main/logo_ssg.png' },
    { id: 4, name: '롯데카드', logo: '/images/main/logo_lottecard.png' },
    { id: 5, name: 'SK', logo: '/images/main/logo_sk.png' },
    { id: 6, name: 'CJ', logo: '/images/main/logo_cj.png' },
    { id: 7, name: '카카오', logo: '/images/main/logo_kko.png' },
    { id: 8, name: '현대', logo: '/images/main/logo_hyundai.png' },
    { id: 9, name: '신한은행', logo: '/images/main/logo_shinhan.png' },
    { id: 10, name: '기아', logo: '/images/main/logo_kia.png' },
    { id: 11, name: 'NC', logo: '/images/main/logo_nc.png' },
    { id: 12, name: 'KT', logo: '/images/main/logo_kt.png' },
    { id: 13, name: '대한항공', logo: '/images/main/logo_koreanair.png' },
    { id: 14, name: '한국투자증권', logo: '/images/main/logo_truefriend.png' },
    { id: 15, name: 'MBC', logo: '/images/main/logo_mbc.png' },
    { id: 16, name: '제주 MBC', logo: '/images/main/logo_jejumbc.png' },
    { id: 17, name: 'SBS', logo: '/images/main/logo_sbs.png' },
    { id: 18, name: 'JTBC', logo: '/images/main/logo_jtbc.png' },
    { id: 19, name: 'KBS', logo: '/images/main/logo_kbs.png' },
    { id: 20, name: '연합뉴스', logo: '/images/main/logo_yna.png' },
    { id: 21, name: '청와대', logo: '/images/main/logo_president.png' }
  ];

  // 무한 스크롤을 위해 첫 번째 카드들을 마지막에 복제
  const customers = [
    ...originalCustomers,
    ...originalCustomers.slice(0, 5) // 첫 번째 5개 카드를 마지막에 추가
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // 원본 고객사 수(21개)에 도달하면 처음으로 돌아감
        if (nextIndex >= originalCustomers.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [originalCustomers.length]);

  return (
    <section className={styles.customersSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>
            바이브는 다양한 산업군의 <br />
            <a href="/customer" title="주요 고객사 바로가기">700</a>여 고객사와 함께합니다
          </h2>
        </div>
        <div className={styles.sliderContainer}>
          <div 
            className={styles.slider}
            style={{ transform: `translateX(-${currentIndex * (180 + 32)}px)` }}
          >
            {customers.map((customer) => (
              <div key={customer.id} className={styles.slideItem}>
                <a href="/customer" title="주요 고객사 바로가기">
                  <img src={customer.logo} alt={`${customer.name} 로고`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 