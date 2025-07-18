import styles from './AboutSection.module.css';

export default function AboutSection() {
  const introItems = [
    {
      id: 1,
      title: '국내 AI·빅데이터 No.1 기업',
      value: 'No. 1',
      link: '/company'
    },
    {
      id: 2,
      title: '2000년부터 25년간 AI∙빅데이터 기술 개발',
      value: '25년',
      link: '/companyHistory'
    },
    {
      id: 3,
      title: '국내 최대 빅데이터 보유',
      value: '520억+',
      link: '/laboratory?tab=2'
    },
    {
      id: 4,
      title: '자체 AI·빅데이터 플랫폼 기술평가 AA등급',
      value: 'SOFIA',
      link: '/laboratory?tab=1'
    },
    {
      id: 5,
      title: '자체 생성형 LLM모델 도메인 특화 맞춤형 구축 가능',
      value: 'GeM',
      link: '/laboratory?tab=1&core=1'
    },
    {
      id: 6,
      title: '바이브컴퍼니 솔루션∙서비스 이용 고객 수',
      value: '700+',
      link: '/customer'
    },
    {
      id: 7,
      title: '생활변화관측소 데이터 분석 리포트 건수',
      value: '1,200+',
      link: 'https://lifechange.ai/business'
    },
    {
      id: 8,
      title: '바이브컴퍼니 솔루션∙서비스 이용 고객 만족도',
      value: '95%',
      link: '/customer'
    }
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>바이브 소개</h2>
        </div>
        <div className={styles.introGrid}>
          {introItems.map((item, index) => (
            <a 
              key={item.id} 
              href={item.link} 
              className={`${styles.introItem} ${index === 4 ? styles.logoItem : ''}`}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {index === 4 ? (
                <div className={styles.logoContent}>
                  <img src="/images/logo_vaiv.svg" alt="VAIV" />
                </div>
              ) : (
                <>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <h6 className={styles.itemValue}>{item.value}</h6>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 