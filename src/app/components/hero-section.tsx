import { Button } from "./button";
import { Navigation } from "./navigation";
import { Input } from "./ui/input";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] relative overflow-hidden">
      <Navigation />

      <div className="container mx-auto max-w-6xl px-6 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="flex-1 lg:pr-12 mb-12 lg:mb-0 w-[60%]">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Transform your home with<br />
            <span className="text-secondary">Hassle free Craftsmanship</span>
          </h1>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-md leading-relaxed">
            From Modern kitchens, Closets, TV units & Doors, thoughtfully crafted and installed seamlessly
          </p>

          {/* Email Signup */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md">
            <Input
              type="email"
              placeholder="Email"
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-full px-6 py-3"
            />
            <Button variant="hero" size="lg" className="rounded-full px-8">
              Submit Button
            </Button>
          </div>

          {/* Statistics */}
          <div className="flex space-x-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">33</div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">100</div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">Project</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">100</div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">Client</div>
            </div>
          </div>
        </div>

        {/* Right Images with Arch Shapes */}
        <div className="flex-1 relative w-[40%]">
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Large Arch Image */}
            <div className="relative w-80 h-96 mb-8 ml-auto">
              <div
                className="w-full h-full rounded-t-full overflow-hidden shadow-arch"
                style={{
                  clipPath: "ellipse(50% 50% at 50% 50%)"
                }}
              >
                <Image
                  src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg'}
                  alt="Modern luxury kitchen interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Smaller Eclipse Image */}
            <div className="absolute -bottom-8 -left-4 w-64 h-80">
              <div
                className="w-full h-full overflow-hidden shadow-arch"
                style={{
                  clipPath: "ellipse(45% 50% at 50% 50%)",
                  borderRadius: "50%"
                }}
              >
                <Image
                  src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg'}
                  alt="Contemporary kitchen island design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;