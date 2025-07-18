'use client';

import { useEffect, useState } from 'react';
import styles from './CustomersSection.module.css';

export default function CustomersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const customers = [
    { id: 1, name: '삼성', logo: '/resources/images/main/logo_samsung.png' },
    { id: 2, name: 'LG전자', logo: '/resources/images/main/logo_lge.png' },
    { id: 3, name: '신세계', logo: '/resources/images/main/logo_ssg.png' },
    { id: 4, name: '롯데카드', logo: '/resources/images/main/logo_lottecard.png' },
    { id: 5, name: 'SK', logo: '/resources/images/main/logo_sk.png' },
    { id: 6, name: 'CJ', logo: '/resources/images/main/logo_cj.png' },
    { id: 7, name: '카카오', logo: '/resources/images/main/logo_kko.png' },
    { id: 8, name: '현대', logo: '/resources/images/main/logo_hyundai.png' },
    { id: 9, name: '신한은행', logo: '/resources/images/main/logo_shinhan.png' },
    { id: 10, name: '기아', logo: '/resources/images/main/logo_kia.png' },
    { id: 11, name: 'NC', logo: '/resources/images/main/logo_nc.png' },
    { id: 12, name: 'KT', logo: '/resources/images/main/logo_kt.png' },
    { id: 13, name: '대한항공', logo: '/resources/images/main/logo_koreanair.png' },
    { id: 14, name: '한국투자증권', logo: '/resources/images/main/logo_truefriend.png' },
    { id: 15, name: 'MBC', logo: '/resources/images/main/logo_mbc.png' },
    { id: 16, name: '제주 MBC', logo: '/resources/images/main/logo_jejumbc.png' },
    { id: 17, name: 'SBS', logo: '/resources/images/main/logo_sbs.png' },
    { id: 18, name: 'JTBC', logo: '/resources/images/main/logo_jtbc.png' },
    { id: 19, name: 'KBS', logo: '/resources/images/main/logo_kbs.png' },
    { id: 20, name: '연합뉴스', logo: '/resources/images/main/logo_yna.png' },
    { id: 21, name: '청와대', logo: '/resources/images/main/logo_president.png' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [customers.length]);

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
            style={{ transform: `translateX(-${currentIndex * 200}px)` }}
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