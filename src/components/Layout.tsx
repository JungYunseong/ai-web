import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>
        <Container className="mt-4">
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
