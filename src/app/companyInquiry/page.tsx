'use client';

import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import InquirySection from '../../components/InquirySection';
import styles from './page.module.css';

export default function CompanyInquiryPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.inquiryPosition}>
            <InquirySection />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
} 