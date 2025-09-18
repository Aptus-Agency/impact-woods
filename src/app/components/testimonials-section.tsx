import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

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
            <div className="bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] text-white p-8 lg:p-12 flex flex-col justify-center">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Our Testimonials
                </h2>
                <p className="text-gray-300 text-lg">
                  Hear what our satisfied customers have to say about their Impact Woods experience.
                </p>
              </div>

              {/* Featured Testimonial Quote */}
              <div className="mb-8">
                <Quote className="h-12 w-12 text-yellow-400 mb-4" />
                <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
                  "Impact Woods transformed our kitchen beyond our expectations. The attention to detail and quality of craftsmanship is outstanding. Professional team from start to finish."
                </blockquote>
                
                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src={testimonials[0].avatar} 
                      alt={testimonials[0].name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonials[0].name}</div>
                    <div className="text-gray-300 text-sm">Client - {testimonials[0].location}</div>
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