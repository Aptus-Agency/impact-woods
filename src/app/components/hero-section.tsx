import { Button } from "./button";
import { Navigation } from "./navigation";
import { Input } from "./ui/input";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] relative overflow-hidden">
      <Navigation />

      <div className="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left Content */}
        <div className="flex-1 mb-12 lg:mb-0 basis-[50%]">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
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
        </div>

        <div className="basis-[50%]">
          <div className="flex flex-row gap-3">
            <Image
              src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg'}
              alt="Modern luxury kitchen interior"
              width={300}
              height={50}
              className="rounded-t-[200px]"
            />


            <Image
              src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg'}
              alt="Contemporary kitchen island design"
              width={300}
              height={50}
              className="rounded-t-[200px] rounded-b-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;