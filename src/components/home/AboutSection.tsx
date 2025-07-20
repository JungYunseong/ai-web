import styles from './AboutSection.module.css';

export default function AboutSection() {
  const introItems = [
    {
      id: 1,
      title: '국내 의료 AI·빅데이터 No.1 기업',
      value: 'No. 1',
    },
    {
      id: 2,
      title: '2000년부터 25년간 의료 AI∙빅데이터 기술 개발',
      value: '25년',
    },
    {
      id: 3,
      title: '국내 최대 의료 빅데이터 보유',
      value: '520억+',
    },
    {
      id: 4,
      title: '자체 의료 AI·빅데이터 플랫폼 기술평가 AA등급',
      value: 'SOFIA',
    },
    {
      id: 5,
      title: '자체 생성형 의료 LLM모델 도메인 특화 맞춤형 구축 가능',
      value: 'MediAI',
    },
    {
      id: 6,
      title: '메디AI컴퍼니 솔루션∙서비스 이용 의료기관 수',
      value: '700+',
    },
    {
      id: 7,
      title: '의료 데이터 분석 리포트 건수',
      value: '1,200+',
    },
    {
      id: 8,
      title: '메디AI컴퍼니 솔루션∙서비스 이용 의료기관 만족도',
      value: '95%',
    }
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>메디AI 소개</h2>
        </div>
        <div className={styles.introGrid}>
          {introItems.map((item, index) => (
            <a 
              key={item.id} 
              className={`${styles.introItem} ${index === 4 ? styles.logoItem : ''}`}
            >
              {index === 4 ? (
                <div className={styles.logoContent}>
                  <img src="/images/logo_vaiv.svg" alt="MediAI" />
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