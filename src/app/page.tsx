import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import BusinessSection from "@/components/home/BusinessSection";
import CustomersSection from "@/components/home/CustomersSection";
import NewsSection from "@/components/home/NewsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <BusinessSection />
      <CustomersSection />
      <NewsSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
} 