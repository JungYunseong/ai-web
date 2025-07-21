import styles from './BusinessSection.module.css';

export default function BusinessSection() {
  const businessItems = [
    {
      id: 1,
      title: 'MediAI Solution',
      description: '공공과 민간에서 검증된 의료 AI 기술력, 의료 혁신과 디지털 헬스케어를 지원하는 솔루션',
      link: '/ai-web/business?tab=solution',
      icon: '/ai-web/images/main/icon_solution.svg'
    },
    {
      id: 2,
      title: 'MediAI Service',
      description: '의료 빅데이터로 건강을 읽고, 의료기관의 전략적 의사결정을 지원하는 서비스',
      link: '/ai-web/business?tab=service',
      icon: '/ai-web/images/main/icon_service.svg'
    }
  ];

  return (
    <section className={styles.businessSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>주요 비즈니스</h2>
        </div>
        <div className={styles.businessGrid}>
          {businessItems.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              className={styles.businessItem}
            >
              <div className={styles.itemTop}>
                <div className={styles.itemIcon}>
                  <img src={item.icon} alt={item.title} />
                </div>
              </div>
              <div className={styles.itemBottom}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 