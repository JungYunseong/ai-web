'use client';

import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import styles from './page.module.css';

export default function CustomerPage() {
  const customers = [
    { id: 1, name: '서울대병원', logo: '/images/main/logo_samsung.png' },
    { id: 2, name: '연세대병원', logo: '/images/main/logo_lge.png' },
    { id: 3, name: '고려대병원', logo: '/images/main/logo_ssg.png' },
    { id: 4, name: '삼성서울병원', logo: '/images/main/logo_lottecard.png' },
    { id: 5, name: '국립의료원', logo: '/images/main/logo_sk.png' },
    { id: 6, name: '국립암센터', logo: '/images/main/logo_cj.png' },
    { id: 7, name: '세브란스병원', logo: '/images/main/logo_kko.png' },
    { id: 8, name: '아산병원', logo: '/images/main/logo_hyundai.png' },
    { id: 9, name: '분당차병원', logo: '/images/main/logo_shinhan.png' },
    { id: 10, name: '강남성모병원', logo: '/images/main/logo_kia.png' },
    { id: 11, name: '서울성모병원', logo: '/images/main/logo_nc.png' },
    { id: 12, name: '부산대병원', logo: '/images/main/logo_kt.png' },
    { id: 13, name: '전남대병원', logo: '/images/main/logo_koreanair.png' },
    { id: 14, name: '경북대병원', logo: '/images/main/logo_truefriend.png' },
    { id: 15, name: '충남대병원', logo: '/images/main/logo_mbc.png' },
    { id: 16, name: '전북대병원', logo: '/images/main/logo_jejumbc.png' },
    { id: 17, name: '강원대병원', logo: '/images/main/logo_sbs.png' },
    { id: 18, name: '제주대병원', logo: '/images/main/logo_jtbc.png' },
    { id: 19, name: '울산대병원', logo: '/images/main/logo_kbs.png' },
    { id: 20, name: '인하대병원', logo: '/images/main/logo_yna.png' },
    { id: 21, name: '한양대병원', logo: '/images/main/logo_president.png' }
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.pageTitleWrap}>
          <div className={styles.pageTitleInner}>
            <h2 className={styles.pageTitle}>주요 고객사</h2>
            <p className={styles.pageDesc}>
              <em className={styles.vaivColor}>메디AI</em>는 다양한 의료기관과 함께합니다.
            </p>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.conwrap}>
            <div className={styles.cont}>
              <div className={styles.referenceList}>
                <div className={styles.customerGrid}>
                  {customers.map((customer) => (
                    <div key={customer.id} className={styles.customerItem}>
                      <div className={styles.customerLogo}>
                        <img 
                          src={customer.logo} 
                          alt={`${customer.name} 로고`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.add(styles.show);
                          }}
                        />
                        <div className={styles.customerName}>{customer.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
} 