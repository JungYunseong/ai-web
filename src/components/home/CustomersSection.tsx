'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './CustomersSection.module.css';

const customers = [
  'Customer 1', 'Customer 2', 'Customer 3', 'Customer 4',
  'Customer 5', 'Customer 6', 'Customer 7', 'Customer 8',
];

const CustomersSection = () => {
  return (
    <Container className={styles.section}>
      <h2 className={styles.title}>Our Customers</h2>
      <Row>
        {customers.map((customer, index) => (
          <Col key={index} xs={6} md={3} className="text-center mb-4">
            <div className={styles.logoPlaceholder}>
              {customer}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomersSection;
