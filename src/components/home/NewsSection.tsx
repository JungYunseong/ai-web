import styles from './NewsSection.module.css';
import { getPostsByCategory } from '@/lib/markdown';

export default function NewsSection() {
  // 보도자료와 언론 속 모습에서 최신 게시물 가져오기
  const pressReleases = getPostsByCategory('press-releases', 3);
  const mediaCoverage = getPostsByCategory('media-coverage', 2);
  
  // 두 카테고리를 합치고 날짜순으로 정렬
  const allNews = [...pressReleases, ...mediaCoverage]
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
    .slice(0, 5);

  const newsItems = allNews.map((post, index) => ({
    id: index + 1,
    title: post.metadata.title,
    date: post.metadata.date,
    link: post.metadata.category === '보도자료' 
      ? `/promote/prcenterPressrelease/${post.slug}`
      : `/promote/prcenterMedia/${post.slug}`
  }));

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>메디AI 소식</h2>
        </div>
        
        <div className={styles.newsBanner}>
          <a href="/promote/prcenterPressreleaselist" title="보도자료 바로가기">
            <h3>
              메디AI컴퍼니의 <br/>
              <b>새로운 소식</b>을 <br className="tablet" />
              전해드립니다
            </h3>
            <figure>
              <img src="/images/main/news_banner.png" alt="" />
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
              자세히보기 <span className={styles.arrowRight}></span>
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