'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <h5 className={styles.brand}>VAIV</h5>
            <p className={styles.address}>
              (04538) 서울특별시 중구 세종대로 39, 12층 (남대문로4가, 서울상공회의소)
            </p>
            <p className={styles.copy}>
              Copyright © 2024 VAIV Inc. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-md-end align-items-center">
            {/* Placeholder for logos */}
            <div className={styles.logos}>
              <span className={styles.logoPlaceholder}>Logo 1</span>
              <span className={styles.logoPlaceholder}>Logo 2</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className={styles.footerNav}>
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보처리방침</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;