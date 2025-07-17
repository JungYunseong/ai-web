'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './CustomersSection.module.css';

const customers = [
  { name: 'Customer 1', logo: 'https://via.placeholder.com/200x80.png?text=Customer+1' },
  { name: 'Customer 2', logo: 'https://via.placeholder.com/200x80.png?text=Customer+2' },
  { name: 'Customer 3', logo: 'https://via.placeholder.com/200x80.png?text=Customer+3' },
  { name: 'Customer 4', logo: 'https://via.placeholder.com/200x80.png?text=Customer+4' },
  { name: 'Customer 5', logo: 'https://via.placeholder.com/200x80.png?text=Customer+5' },
  { name: 'Customer 6', logo: 'https://via.placeholder.com/200x80.png?text=Customer+6' },
  { name: 'Customer 7', logo: 'https://via.placeholder.com/200x80.png?text=Customer+7' },
  { name: 'Customer 8', logo: 'https://via.placeholder.com/200x80.png?text=Customer+8' },
];

const CustomersSection = () => {
  return (
    <Container className={styles.section}>
      <h2 className={styles.title}>Our Customers</h2>
      <Row>
        {customers.map((customer, index) => (
          <Col key={index} xs={6} md={3} className="text-center mb-4">
            <img src={customer.logo} alt={customer.name} className={styles.logoImage} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomersSection;