"use client";

import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Mukasa',
    location: 'Kampala',
    rating: 5,
    text: 'Impact Woods transformed our kitchen beyond our expectations. The attention to detail and quality of craftsmanship is outstanding. Highly recommended!',
    avatar: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1758142912/impact-woods/tdyydvn0rojua6jqgyr7.jpg'
  },
  {
    name: 'David Ssembatya',
    location: 'Wakiso',
    rating: 5,
    text: 'Professional team, timely delivery, and excellent quality. Our custom closets are not just beautiful but incredibly functional.',
    avatar: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1758142912/impact-woods/tdyydvn0rojua6jqgyr7.jpg'
  },
  {
    name: 'Grace Nakato',
    location: 'Mukono',
    rating: 5,
    text: 'From consultation to installation, the entire process was seamless. The free site visit and 3D designs helped us make the perfect choices.',
    avatar: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1758142912/impact-woods/tdyydvn0rojua6jqgyr7.jpg'
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
            {/* Left side - Kitchen Image */}
            <div className="relative overflow-hidden">
              <Image 
                src="https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg" 
                alt="Modern kitchen testimonial" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Right side - Testimonial Content */}
            <div className="bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,white_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,white_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              </div>

              {/* Header */}
              <div className="mb-8 relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Our Testimonials
                </h2>
                <p className="text-gray-300 text-lg">
                  Hear what our satisfied customers have to say about their Impact Woods experience.
                </p>
              </div>

              {/* Testimonial carousel */}
              <div className="mb-8 relative z-10 bg-muted/20 p-6 rounded-lg">
                <Quote className="h-12 w-12 text-yellow-400 mb-4" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className=''
                  >
                    <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
                      "{currentTestimonial.text}"
                    </blockquote>
                    
                    {/* Customer Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image 
                          src={currentTestimonial.avatar} 
                          alt={currentTestimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">{currentTestimonial.name}</div>
                        <div className="text-gray-300 text-sm">Client - {currentTestimonial.location}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <motion.button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      aria-label="Previous testimonial"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="h-5 w-5 text-white" />
                    </motion.button>
                    <motion.button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      aria-label="Next testimonial"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="h-5 w-5 text-white" />
                    </motion.button>
                  </div>

                  {/* Indicators */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentTestimonialIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonialIndex 
                            ? 'bg-yellow-400' 
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};