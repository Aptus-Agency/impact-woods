import React from 'react';
import { Button } from './button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)]">
      {/* Content */}
      <div className="flex flex-row z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="mx-auto text-center lg:text-left w-1/2">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Home With{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Hassle-Free Craftsmanship
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              From Modern kitchens, Closets, TV units & Doors, thoughtfully crafted and installed seamlessly
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="xl"
                className="group"
                asChild
              >
                <a
                  href="https://forms.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Book My Free Site Visit
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                variant="whatsapp"
                size="xl"
                className="group"
                asChild
              >
                <a
                  href="https://wa.me/256752993659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat Now for Info
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-[500px] h-[500px]">
          <Image
            src="https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg"
            alt="Modern kitchen interior by Impact Woods"
            fill
            className="object-cover"
            priority // Recommended for LCP images
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};