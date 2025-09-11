import { AboutSection } from "./components/about";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { ProcessSection } from "./components/process-section";
import { ProductsSection } from "./components/products-section";
import { TestimonialsSection } from "./components/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
