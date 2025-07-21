'use client';

import { useEffect, useState } from 'react';
import styles from './CustomersSection.module.css';

export default function CustomersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const originalCustomers = [
    { id: 1, name: '삼성서울병원', logo: '/images/main/logo_samsung.png' },
    { id: 2, name: '서울대병원', logo: '/images/main/logo_lge.png' },
    { id: 3, name: '연세대병원', logo: '/images/main/logo_ssg.png' },
    { id: 4, name: '고려대병원', logo: '/images/main/logo_lottecard.png' },
    { id: 5, name: '성균관대병원', logo: '/images/main/logo_sk.png' },
    { id: 6, name: '울산대병원', logo: '/images/main/logo_cj.png' },
    { id: 7, name: '경희대병원', logo: '/images/main/logo_kko.png' },
    { id: 8, name: '한양대병원', logo: '/images/main/logo_hyundai.png' },
    { id: 9, name: '부산대병원', logo: '/images/main/logo_shinhan.png' },
    { id: 10, name: '전남대병원', logo: '/images/main/logo_kia.png' },
    { id: 11, name: '충남대병원', logo: '/images/main/logo_nc.png' },
    { id: 12, name: '전북대병원', logo: '/images/main/logo_kt.png' },
    { id: 13, name: '경북대병원', logo: '/images/main/logo_koreanair.png' },
    { id: 14, name: '강남성모병원', logo: '/images/main/logo_truefriend.png' },
    { id: 15, name: '분당차병원', logo: '/images/main/logo_mbc.png' },
    { id: 16, name: '일산차병원', logo: '/images/main/logo_jejumbc.png' },
    { id: 17, name: '순천향대병원', logo: '/images/main/logo_sbs.png' },
    { id: 18, name: '단국대병원', logo: '/images/main/logo_jtbc.png' },
    { id: 19, name: '가톨릭대병원', logo: '/images/main/logo_kbs.png' },
    { id: 20, name: '건국대병원', logo: '/images/main/logo_yna.png' },
    { id: 21, name: '식약처', logo: '/images/main/logo_president.png' }
  ];

  // 무한 스크롤을 위해 첫 번째 카드들을 마지막에 복제 (고유한 key를 위해 id 수정)
  const customers = [
    ...originalCustomers,
    ...originalCustomers.slice(0, 5).map((customer, index) => ({
      ...customer,
      id: customer.id + 100 // 원본과 구분하기 위해 100을 더함
    }))
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
          <h2>NEXT.CLINIC는 다양한 의료기관의 <br />
            <a href="/ai-web/customer" title="주요 고객사 바로가기">700</a>여 고객사와 함께합니다
          </h2>
        </div>
        <div className={styles.sliderContainer}>
          <div 
            className={styles.slider}
            style={{ transform: `translateX(-${currentIndex * (180 + 32)}px)` }}
          >
            {customers.map((customer) => (
              <div key={customer.id} className={styles.slideItem}>
                <a href="/ai-web/customer" title="주요 고객사 바로가기">
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