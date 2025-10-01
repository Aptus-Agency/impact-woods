import { AboutSection } from "./components/about";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { PartnersSection } from "./components/partners-section";
import { ProcessSection } from "./components/process-section";
import { ProductsSection } from "./components/products-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { WhatWeDoSection } from "./components/what-we-do-section";
import { WhyChooseUsSection } from "./components/why-choose-us-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <HeroSection />
      {/* <PartnersSection /> */}
      <AboutSection />
      <WhatWeDoSection />
      <ProductsSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
