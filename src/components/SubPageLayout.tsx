'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SubPageLayout.module.css';

interface SubPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const SubPageLayout = ({ title, children }: SubPageLayoutProps) => {
  return (
    <>
      <div className={styles.titleBanner}>
        <Container>
          <h1>{title}</h1>
        </Container>
      </div>
      <Container className={styles.contentArea}>
        {children}
      </Container>
    </>
  );
};

export default SubPageLayout;
