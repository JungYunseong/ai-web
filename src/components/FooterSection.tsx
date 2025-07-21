'use client';

import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.contentsInner}>
        <div className={styles.footerTop}>
          <figure className={styles.footerLogo}>
            <img src="/ai-web/images/vaiv/footer_logo_re.png" alt="NEXT.CLINIC" />
          </figure>
          {/* <ul className={styles.footerSnsList}>
            <li className={`${styles.listItem} ${styles.listBlog}`}>
              <a href="https://blog.naver.com/vaiv_company" title="네이버 블로그 바로가기" target="_blank" rel="noopener noreferrer">
                <span>네이버블로</span>
              </a>
            </li>
            <li className={`${styles.listItem} ${styles.listYtb}`}>
              <a href="https://www.youtube.com/channel/UCe-PKPEl2nkwrC__8Qy1HUg" title="유튜브 바로가기" target="_blank" rel="noopener noreferrer">
                <span>유튜브</span>
              </a>
            </li>
          </ul> */}
        </div>
        <div className={styles.footerBottom}>
          {/* <select className={styles.footerFamily} name="familysite_option" title="패밀리사이트 바로가기" onChange={(e) => { if (e.target.value) window.open(e.target.value); }}>
            <option value="">패밀리사이트</option>
            <option value="https://ai.vaiv.kr/">VAIV AI 플랫폼</option>
            <option value="https://stock.vaiv.kr/">VAIV Stock</option>
            <option value="https://data.some.co.kr/">Data +</option>
            <option value="https://some.co.kr/">썸트렌드</option>
            <option value="https://lifechange.ai/">생활변화관측소</option>
            <option value="https://whotagged.me/">WHOTAG</option>
          </select> */}
          <div className={styles.footerContent}>
            <ul className={styles.footerInfoList}>
              <li className={styles.listItem}>(주)에이치에스투에쿼티</li>
              <li className={styles.listLine}>|</li>
              <li className={styles.listItem}><span className={styles.listLabel}>대표자</span>조창민</li>
              <li className={styles.listLine}>|</li>
              <li className={styles.listItem}><span className={styles.listLabel}>사업자등록번호</span>272-86-03251</li>
            </ul>
            <ul className={styles.footerInfoList}>
              <li className={styles.listItem}>서울특별시 강남구 테헤란로 147, 15층</li>
              <li className={styles.listLine}>|</li>
              <li className={styles.listItem}><span className={styles.listLabel}>Tel</span><a href="tel:0507-1360-1935">0507-1360-1935</a></li>
              <li className={styles.listLine}>|</li>
              <li className={styles.listItem}><span className={styles.listLabel}>Mail</span><a href="mailto:hs2equity@hs2equity.com">hs2equity@hs2equity.com</a></li>
            </ul>
            {/* <ul className={styles.footerInfoList}>
              <li className={styles.listItem}><span className={styles.listLabel}>공익신고제보</span><a href="mailto:helpvaiv@vaiv.kr">helpvaiv@vaiv.kr</a></li>
            </ul> */}
            <div className={styles.footerCopy}>
              <h6><a href="/ai-web/privacy">개인정보 처리방침</a></h6>
              <p>Copyrightⓒ(주)에이치에스투에쿼티. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 