'use client';

import React from 'react';
import styles from './TickerSection.module.css';

const TickerSection = () => {
  const tickerItems = [
    "innovator", "expert", "pioneer", "leader", "creator"
  ];

  return (
    <div className={styles.tickerWrap}>
      <div className={styles.ticker}>
        {tickerItems.map((item, index) => (
          <div key={index} className={styles.tickerItem}>
            VAIV an {item}...
          </div>
        ))}
        {/* Repeat for seamless loop */}
        {tickerItems.map((item, index) => (
          <div key={`clone-${index}`} className={styles.tickerItem}>
            VAIV an {item}...
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerSection;
