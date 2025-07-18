import styles from './NewsletterSection.module.css';

export default function NewsletterSection() {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterText}>
            <div className={styles.newsletterTitle}>
              <h6>바이브의 뉴스레터 <em>'바이레터'</em></h6>
              <h5>
                <b>바이브의 소식</b>을 <br/>
                매월 메일로 <br className="br-tab"/>
                받아보실 수 있습니다.
              </h5>
            </div>
            <a 
              href="https://page.stibee.com/subscriptions/402163" 
              className={styles.arrowButton} 
              title="바이레터 구독하기" 
              target="_blank"
              rel="noopener noreferrer"
            >
              구독하기 <i className="zmdi zmdi-chevron-right"></i>
            </a>
          </div>
          <figure className={styles.newsletterImage}>
            <img src="/images/main/letter_img.png" className={styles.imagePc} alt="" />
            <img src="/images/main/letter_img_tablet.png" className={styles.imageTab} alt="" />
            <img src="/images/main/letter_img_mo.png" className={styles.imageMo} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
} 