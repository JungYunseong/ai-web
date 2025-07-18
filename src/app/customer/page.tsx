'use client';

import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import styles from './page.module.css';

export default function CustomerPage() {
  const customers = [
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

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.pageTitleWrap}>
          <div className={styles.pageTitleInner}>
            <h2 className={styles.pageTitle}>주요 고객사</h2>
            <p className={styles.pageDesc}>
              <em className={styles.vaivColor}>바이브</em>는 다양한 산업군의 고객사와 함께합니다.
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