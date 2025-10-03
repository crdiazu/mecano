import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/hero-section";
import ProductsSection from "@/components/landing/products-section";
import BenefitsSection from "@/components/landing/benefits-section";
import CertificationsSection from "@/components/landing/certifications-section";
import QuoteSection from "@/components/landing/quote-section";
import CoverageSection from "@/components/landing/coverage-section";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-[88px]">
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <CertificationsSection />
        <QuoteSection />
        <CoverageSection />
      </main>
      <Footer />
    </div>
  );
}
