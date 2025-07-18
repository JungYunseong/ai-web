import styles from './NewsSection.module.css';

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: '바이브컴퍼니, 생성형 AI 인재 교류회 \'Cross-AI Lab Exchange\' 성료',
      date: '2025.07.02',
      link: '/promote/prcenterPressrelease?posts_id=4060'
    },
    {
      id: 2,
      title: '바이브컴퍼니, RAG 기반 지식관리 시스템… KCCM 2025서 높은 주목',
      date: '2025.06.25',
      link: '/promote/prcenterPressrelease?posts_id=4058'
    },
    {
      id: 3,
      title: '바이브컴퍼니, \'VAIV AI DAY 2025\' 성황리 종료… "에이전트로 진화하는 세상"',
      date: '2025.06.20',
      link: '/promote/prcenterPressrelease?posts_id=4057'
    },
    {
      id: 4,
      title: '바이브컴퍼니, 식약처 식의약 데이터 플랫폼 4년 연속 수주… 공공 데이터 시장 입지 강화',
      date: '2025.06.16',
      link: '/promote/prcenterPressrelease?posts_id=4056'
    },
    {
      id: 5,
      title: '에이전트로 진화하는 세상… 바이브컴퍼니 AI DAY 2025 개최',
      date: '2025.06.12',
      link: '/promote/prcenterPressrelease?posts_id=4054'
    }
  ];

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>바이브 소식</h2>
        </div>
        
        <div className={styles.newsBanner}>
          <a href="/promote/prcenterPressreleaselist" title="보도자료 바로가기">
            <h3>
              바이브컴퍼니의 <br/>
              <b>새로운 소식</b>을 <br className="tablet" />
              전해드립니다
            </h3>
            <figure>
              <img src="/resources/images/main/news_banner.png" alt="" />
            </figure>
          </a>
        </div>
        
        <div className={styles.newsContent}>
          <div className={styles.newsInfo}>
            <h3>
              <em>더 많은 뉴스</em>를 <br/>
              확인해 보세요
            </h3>
            <a href="/promote/prcenterPressreleaselist" className={styles.arrowButton} title="보도자료 바로가기">
              자세히보기 <i className="zmdi zmdi-chevron-right"></i>
            </a>
          </div>
          
          <ul className={styles.newsList}>
            {newsItems.map((item) => (
              <li key={item.id}>
                <a href={item.link} title="뉴스 바로가기">
                  <div className={styles.listText}>
                    <h5>{item.title}</h5>
                    <p>{item.date}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 