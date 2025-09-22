"use client";

import React from 'react';
import { Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

interface TestimonialCarouselItemProps {
  testimonials: Testimonial[];
  currentTestimonialIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelectTestimonial: (index: number) => void;
}

export const TestimonialCarouselItem: React.FC<TestimonialCarouselItemProps> = ({
  testimonials,
  currentTestimonialIndex,
  onPrevious,
  onNext,
  onSelectTestimonial
}) => {
  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
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
            &quot;{currentTestimonial.text}&quot;
          </blockquote>
          
          {/* Customer Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border overflow-hidden flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
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
            onClick={onPrevious}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </motion.button>
          <motion.button
            onClick={onNext}
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
              onClick={() => onSelectTestimonial(index)}
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
  );
};