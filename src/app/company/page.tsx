'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';
import styles from './page.module.css';

// 카카오맵 타입 선언
declare global {
  interface Window {
    kakao: any;
  }
}

export default function CompanyPage() {
  useEffect(() => {
    // 카카오맵 초기화
    const initMap = () => {
      if (typeof window !== 'undefined' && window.kakao && window.kakao.maps) {
        const drawDaumMap = (target: string, keyword: string, x: string, y: string, level: number) => {
          const mapContainer = document.getElementById(target);
          if (!mapContainer) return;

          const mapOption = {
            center: new window.kakao.maps.LatLng(parseFloat(x), parseFloat(y)),
            level: level
          };

          const map = new window.kakao.maps.Map(mapContainer, mapOption);
          const markerPosition = new window.kakao.maps.LatLng(parseFloat(x), parseFloat(y));
          const marker = new window.kakao.maps.Marker({
            position: markerPosition
          });

          marker.setMap(map);
        };

        drawDaumMap("Seoul_map", "메디AI컴퍼니", "37.535299", "127.010828", 1);
        drawDaumMap("Sejong_map", "메디AI컴퍼니 세종", "36.49096883172943", "127.32692256110721", 3);
      }
    };

    // 카카오맵 스크립트 로드
    const loadKakaoMap = () => {
      if (typeof window !== 'undefined' && !window.kakao) {
        const script = document.createElement('script');
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=77075bbb08b159f4878384a04af0bda2';
        script.onload = () => {
          if (window.kakao && window.kakao.maps) {
            initMap();
          }
        };
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    loadKakaoMap();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.pageTitleWrap}>
            <h2 className={styles.pageTitle}>회사소개</h2>
            <p className={styles.pageDesc}>
              <em className={styles.vaivColor}>메디AI</em>는 의료 빅데이터로 건강을 읽고 AI로 의료 혁신을 만들어 갑니다.
            </p>
          </div>

          <div className={styles.conwrap}>
            <figure className={styles.companyVisual}>
              <img src="/images/main/visual_vaiv_gem_img.svg" alt="메디AI 회사 소개 이미지" />
            </figure>

            <section className={styles.textSection}>
              <div className={styles.contentsInner}>
                <div className={styles.row}>
                  <div className={styles.colMd12}>
                    <div>
                      <p className={styles.mainTitle}>
                        25년 이상 축적된 의료 기술력과 노하우를 바탕으로, <br />
                        공공과 민간에 특화된 의료 AI 솔루션과 의료 Big Data 서비스를 제공해 왔습니다.
                      </p>
                      <p className={styles.subTitle}>
                        메디AI는 의료의 맥락을 이해하고, 의료진과 환자들의 경험을 생각합니다. <br />
                        인공지능 기술에 의료 데이터라는 지식을 더하여, 의료 감각이 살아 있는 AI를 연구합니다. <br />
                        디지털 헬스케어 시대, 믿을 수 있는 전략적 파트너로서 사람과 의료 기술이 함께 성장하는 미래를 만들어갑니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${styles.textSection} ${styles.center}`}>
              <div className={styles.contentsInner}>
                <div className={styles.row}>
                  <div className={styles.colMd12}>
                    <div>
                      <div className={styles.biSection}>
                        <img src="/images/vaiv/company_ci_re.png" alt="메디AI BI 로고" className={styles.biLogo} />
                      </div>

                      <div className={styles.biSection}>
                        <p className={styles.biText}>
                          메디AI 컴퍼니는 독보적인 의료 AI 기술을 기반으로 <br className={styles.onlyMo} />
                          의료의 미래를 내다보고(Medical Vision AI) 의료 가치를 만들고(Medical Value AI) <br className={styles.onlyMo} />
                          의료 현장에서 발생하는 문제를 해결하고(Medical AI Solve) <br className={styles.onlyMo} />
                          <br />
                          용기 있게 앞서며(Medical AI brave) 예상을 뛰어넘는 의료 행보를 선보이겠다(Medical AI above)는 의미가 담겨 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.colMd12} ${styles.visionArea}`}>
                    <div id="vision" className={styles.visionLink}></div>
                    <div>
                      <div className={styles.biSection}>
                        <img src="/images/main/visual_vaiv_search_img.svg" alt="Medical Visionary AI for Value" className={`${styles.biLogo} ${styles.type2}`} />
                      </div>

                      <div className={styles.biSection}>
                        <p className={styles.biText}>메디AI의 의료 AI 기술로 환자의 소중한 건강을 더 가치있게 만들겠습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="map" className={`${styles.textSection} ${styles.center}`}>
              <div className={styles.contentsInner}>
                <div className={styles.row}>
                  <div className={styles.colMd12}>
                    <div>
                      <p className={styles.sectionTitle}>오시는 길</p>
                      <div className={styles.roadSection}>
                        <div>
                          <p className={styles.title}>메디AI 본사 (Seoul)</p>
                          <div id="Seoul_map" className={styles.mapArea}></div>
                          <ul>
                            <li>서울 용산구 독서당로 97</li>
                            <li>TEL | 02-565-0531 FAX | 02-565-0532 E-mail | Biz@mediai.kr</li>
                          </ul>
                        </div>

                        <div>
                          <p className={styles.title}>메디AI 세종 (Sejong)</p>
                          <div id="Sejong_map" className={styles.mapArea}></div>
                          <ul>
                            <li>세종특별자치시 집현동로 67</li>
                            <li>TEL | 02-565-0531 FAX | 02-565-0532 E-mail | Biz@mediai.kr</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
} 