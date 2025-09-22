"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TestimonialCarouselItem, type Testimonial } from './testimonial-carousel-item';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mukasa',
    location: 'Kampala',
    rating: 5,
    text: 'Impact Woods transformed our kitchen beyond our expectations. The attention to detail and quality of craftsmanship is outstanding. Highly recommended!',
    avatar: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1758175225/impact-woods/fbxqonjhzxe2jcfavrhb.jpg'
  },
  {
    name: 'David Ssembatya',
    location: 'Wakiso',
    rating: 5,
    text: 'Professional team, timely delivery, and excellent quality. Our custom closets are not just beautiful but incredibly functional.',
    avatar: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1758175225/impact-woods/fbxqonjhzxe2jcfavrhb.jpg'
  },
  {
    name: 'Grace Nakato',
    location: 'Mukono',
    rating: 5,
    text: 'From consultation to installation, the entire process was seamless. The free site visit and 3D designs helped us make the perfect choices.',
    avatar: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1758175225/impact-woods/fbxqonjhzxe2jcfavrhb.jpg'
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
              <TestimonialCarouselItem
                testimonials={testimonials}
                currentTestimonialIndex={currentTestimonialIndex}
                onPrevious={prevTestimonial}
                onNext={nextTestimonial}
                onSelectTestimonial={setCurrentTestimonialIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};