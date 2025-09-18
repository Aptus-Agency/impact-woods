import { Button } from "./button";
import { Navigation } from "./navigation";
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

          <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md">
            <Button variant="hero" size="lg" className="rounded-full px-8">
              Book My Free site Visit
            </Button>
            <Button variant="hero" size="lg" className="rounded-full px-8 bg-secondary text-primary-foreground">
              Chat With Us now
            </Button>
          </div>
        </div>

        <div className="basis-[50%]">
          <div className="flex flex-row items-center gap-3">
            <div className="relative w-[300px] h-[500px] rounded-t-[200px] overflow-hidden z-10 border-solid border-[10px] border-transparent shadow-[0px_0px_1px_0px_#FFFFFF]">
              <Image
                src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg'}
                alt="Modern luxury kitchen interior"
                fill
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative w-[200px] h-[300px] rounded-t-[200px] rounded-b-[200px] overflow-hidden">
              <Image
                src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616146/impact-woods/gzuslvfojmfyrhahkkyo.jpg'}
                alt="Contemporary kitchen island design"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;