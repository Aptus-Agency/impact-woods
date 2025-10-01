'use client';

import { Button } from "./button";
import { Navigation } from "./navigation";
import Image from "next/image";
import { AnimationGeneratorType, motion } from 'framer-motion';
import Carousel from "./ui/carousel";

// Animation variants for the text content
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as AnimationGeneratorType, stiffness: 100 }
  },
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 z-0">
        <Carousel showNavigation={false}>
          <Image src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758227774/impact-woods/mgd7kv4yp1smqxrtad1l.jpg" alt="Modern kitchen" layout="fill" objectFit="cover" />
          <Image src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758227773/impact-woods/m16lro4q7ydbae9sikss.jpg" alt="Custom closet" layout="fill" objectFit="cover" />
          <Image src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758228709/impact-woods/ww9ci6ucjhddmpsh6pth.jpg" alt="Kitchen cabinets" layout="fill" objectFit="cover" />
          <Image src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758227772/impact-woods/fwaqazpmfoqoat08ngem.jpg" alt="Kitchen cabinets" layout="fill" objectFit="cover" />
        </Carousel>
        <div className="absolute inset-0 z-10 bg-black/30 md:bg-none" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow flex items-center">
          <div className="relative mx-auto max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between px-4">
            {/* Left Content */}
            <motion.div
              className="mb-12 lg:mb-0 lg:basis-[50%] text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
                variants={itemVariants}
              >
                Transform your home with<br />
                <span className="text-secondary">Hassle-free Craftsmanship</span>
              </motion.h1>

              <motion.p
                className="text-lg text-primary-foreground/80 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
                variants={itemVariants}
              >
                From Modern kitchens, Closets, TV units & Doors, thoughtfully crafted and installed seamlessly
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md mx-auto lg:mx-0"
                variants={itemVariants}
              >
                <Button variant="hero" size="lg" className="rounded-full px-8" asChild>
                  <a href="https://forms.google.com">
                    Book My Free site Visit
                  </a>
                </Button>
                <Button variant="hero" size="lg" className="rounded-full px-8 bg-secondary text-crimson" asChild>
                  <a href="https://wa.me/256752993659">
                    Chat With Us now
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;