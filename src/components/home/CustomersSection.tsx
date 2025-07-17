'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './CustomersSection.module.css';

const customers = [
  { name: '삼성', logo: 'https://via.placeholder.com/120x50?text=삼성' },
  { name: 'LG전자', logo: 'https://via.placeholder.com/120x50?text=LG전자' },
  { name: '신세계', logo: 'https://via.placeholder.com/120x50?text=신세계' },
  { name: '롯데카드', logo: 'https://via.placeholder.com/120x50?text=롯데카드' },
  { name: 'SK', logo: 'https://via.placeholder.com/120x50?text=SK' },
  { name: 'CJ', logo: 'https://via.placeholder.com/120x50?text=CJ' },
  { name: '카카오', logo: 'https://via.placeholder.com/120x50?text=카카오' },
  { name: '현대', logo: 'https://via.placeholder.com/120x50?text=현대' },
  { name: '신한은행', logo: 'https://via.placeholder.com/120x50?text=신한은행' },
  { name: '기아', logo: 'https://via.placeholder.com/120x50?text=기아' },
  { name: 'NC', logo: 'https://via.placeholder.com/120x50?text=NC' },
  { name: 'KT', logo: 'https://via.placeholder.com/120x50?text=KT' },
  { name: '대한항공', logo: 'https://via.placeholder.com/120x50?text=대한항공' },
  { name: '한국투자증권', logo: 'https://via.placeholder.com/120x50?text=한국투자증권' },
  { name: '코웨이', logo: 'https://via.placeholder.com/120x50?text=코웨이' },
  { name: '키움증권', logo: 'https://via.placeholder.com/120x50?text=키움증권' },
  { name: '한화손해보험', logo: 'https://via.placeholder.com/120x50?text=한화손해보험' },
  { name: '농협캐피탈', logo: 'https://via.placeholder.com/120x50?text=농협캐피탈' },
  { name: '하나카드', logo: 'https://via.placeholder.com/120x50?text=하나카드' },
  { name: '미래에셋증권', logo: 'https://via.placeholder.com/120x50?text=미래에셋증권' },
  { name: 'BC카드', logo: 'https://via.placeholder.com/120x50?text=BC카드' },
  { name: 'KB국민카드', logo: 'https://via.placeholder.com/120x50?text=KB국민카드' },
  { name: '맥킨지', logo: 'https://via.placeholder.com/120x50?text=맥킨지' },
  { name: '메리츠화재', logo: 'https://via.placeholder.com/120x50?text=메리츠화재' },
  { name: 'MBC', logo: 'https://via.placeholder.com/120x50?text=MBC' },
  { name: '제주MBC', logo: 'https://via.placeholder.com/120x50?text=제주MBC' },
  { name: 'SBS', logo: 'https://via.placeholder.com/120x50?text=SBS' },
  { name: 'JTBC', logo: 'https://via.placeholder.com/120x50?text=JTBC' },
  { name: 'KBS', logo: 'https://via.placeholder.com/120x50?text=KBS' },
  { name: '연합뉴스', logo: 'https://via.placeholder.com/120x50?text=연합뉴스' },
  { name: '청와대', logo: 'https://via.placeholder.com/120x50?text=청와대' },
];

const CustomersSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>주요 고객사</h2>
      <div className={styles.grid}>
        {customers.map((customer, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.logoWrapper}>
              <Image src={customer.logo} alt={customer.name} width={120} height={50} className={styles.logoImage} />
            </div>
            <div className={styles.customerName}>{customer.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersSection;