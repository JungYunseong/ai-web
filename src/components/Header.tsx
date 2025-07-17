'use client';

import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar} sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/" className={styles.brand}>
          {/* Placeholder for Logo */}
          VAIV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="AI 솔루션" id="ai-solutions-dropdown" className={styles.navLink}>
              <NavDropdown.Item as={Link} href="/solutions/finance">금융</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/solutions/public">공공</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/solutions/media">미디어</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="AI 구독" id="ai-subscription-dropdown" className={styles.navLink}>
              <NavDropdown.Item as={Link} href="/subscription/sometrend">Sometrend</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/subscription/vaiv-search">VAIV Search</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="회사소개" id="about-us-dropdown" className={styles.navLink}>
               <NavDropdown.Item as={Link} href="/about/company">회사개요</NavDropdown.Item>
               <NavDropdown.Item as={Link} href="/about/history">연혁</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/research" className={styles.navLink}>연구소</Nav.Link>
            <Nav.Link as={Link} href="/partners" className={styles.navLink}>파트너</Nav.Link>
            <Nav.Link as={Link} href="/pr" className={styles.navLink}>PR</Nav.Link>
            <Nav.Link as={Link} href="/ir" className={styles.navLink}>IR</Nav.Link>
            <Nav.Link as={Link} href="/careers" className={styles.navLink}>채용</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="KOR" id="lang-dropdown" className={styles.langSelector}>
              <NavDropdown.Item>ENG</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-primary" className={styles.contactButton}>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
