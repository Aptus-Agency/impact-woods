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

// Animation variants for the image section
const imageContainerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};


export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] relative overflow-hidden">
      <Navigation />

      <div className="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between z-10 px-4">
        {/* Left Content */}
        <motion.div
          className="flex-1 mb-12 lg:mb-0 lg:basis-[50%] text-center lg:text-left"
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
            <Button variant="hero" size="lg" className="rounded-full px-8 bg-secondary text-coral" asChild>
              <a href="https://wa.me/256752993659">
                Chat With Us now
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:basis-[50%]"
          variants={imageContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <Carousel showNavigation={false}>
            <Image src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758227774/impact-woods/yqs7bzwxgr9r9kzgtnrq.jpg" alt="Hero" width={1000} height={1000} />
            <Image src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758227774/impact-woods/yqs7bzwxgr9r9kzgtnrq.jpg" alt="Hero" width={1000} height={1000} />
            <Image src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758227774/impact-woods/yqs7bzwxgr9r9kzgtnrq.jpg" alt="Hero" width={1000} height={1000} />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;