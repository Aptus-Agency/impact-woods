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

              {/* 5 Star Rating Display */}
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-lg font-semibold text-white ml-2">5.0 Rating</span>
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

              {/* Additional Testimonial Previews */}
              <div className="space-y-4">
                {testimonials.slice(1, 3).map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-yellow-400 pl-4 py-2">
                    <p className="text-gray-300 text-sm leading-relaxed mb-2">
                      "{testimonial.text.substring(0, 80)}..."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-white text-sm font-medium">{testimonial.name}</span>
                      <span className="text-gray-400 text-xs">• {testimonial.location}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium text-sm">Trusted by 500+ Uganda homeowners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};