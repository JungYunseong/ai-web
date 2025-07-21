import Image from 'next/image';
import styles from './NewsletterSection.module.css';

export default function NewsletterSection() {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterText}>
            <div className={styles.newsletterTitle}>
              <h6>메디AI의 뉴스레터 <em>&apos;메디레터&apos;</em></h6>
              <h5>
                <b>메디AI의 소식</b>을 <br/>
                매월 메일로 <br className="br-tab"/>
                받아보실 수 있습니다.
              </h5>
            </div>
            <a 
              href="https://page.stibee.com/subscriptions/402163" 
              className={styles.arrowButton} 
              title="메디레터 구독하기" 
              target="_blank"
              rel="noopener noreferrer"
            >
              구독하기 <i className="zmdi zmdi-chevron-right"></i>
            </a>
          </div>
          <figure className={styles.newsletterImage}>
            <Image 
              src="/images/main/letter_img.png" 
              className={styles.imagePc} 
              alt="뉴스레터 이미지 PC" 
              width={400}
              height={300}
            />
            <Image 
              src="/images/main/letter_img_tablet.png" 
              className={styles.imageTab} 
              alt="뉴스레터 이미지 태블릿" 
              width={400}
              height={300}
            />
            <Image 
              src="/images/main/letter_img_mo.png" 
              className={styles.imageMo} 
              alt="뉴스레터 이미지 모바일" 
              width={400}
              height={300}
            />
          </figure>
        </div>
      </div>
    </section>
  );
} 