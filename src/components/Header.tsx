'use client';

import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar} sticky="top">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className={styles.brand}>
            {/* Placeholder for Logo */}
            VAIV
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="AI 솔루션" id="ai-solutions-dropdown" className={styles.navLink}>
              <Link href="/solutions/finance" passHref><NavDropdown.Item>금융</NavDropdown.Item></Link>
              <Link href="/solutions/public" passHref><NavDropdown.Item>공공</NavDropdown.Item></Link>
              <Link href="/solutions/media" passHref><NavDropdown.Item>미디어</NavDropdown.Item></Link>
            </NavDropdown>
            <NavDropdown title="AI 구독" id="ai-subscription-dropdown" className={styles.navLink}>
              <Link href="/subscription/sometrend" passHref><NavDropdown.Item>Sometrend</NavDropdown.Item></Link>
              <Link href="/subscription/vaiv-search" passHref><NavDropdown.Item>VAIV Search</NavDropdown.Item></Link>
            </NavDropdown>
            <NavDropdown title="회사소개" id="about-us-dropdown" className={styles.navLink}>
               <Link href="/about/company" passHref><NavDropdown.Item>회사개요</NavDropdown.Item></Link>
               <Link href="/about/history" passHref><NavDropdown.Item>연혁</NavDropdown.Item></Link>
            </NavDropdown>
            <Link href="/pr" passHref><Nav.Link className={styles.navLink}>PR</Nav.Link></Link>
            <Link href="/ir" passHref><Nav.Link className={styles.navLink}>IR</Nav.Link></Link>
            <Link href="/careers" passHref><Nav.Link className={styles.navLink}>채용</Nav.Link></Link>
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