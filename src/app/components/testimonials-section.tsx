import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Mukasa',
    location: 'Kampala',
    rating: 5,
    text: 'Impact Woods transformed our kitchen beyond our expectations. The attention to detail and quality of craftsmanship is outstanding. Highly recommended!'
  },
  {
    name: 'David Ssembatya',
    location: 'Wakiso',
    rating: 5,
    text: 'Professional team, timely delivery, and excellent quality. Our custom closets are not just beautiful but incredibly functional.'
  },
  {
    name: 'Grace Nakato',
    location: 'Mukono',
    rating: 5,
    text: 'From consultation to installation, the entire process was seamless. The free site visit and 3D designs helped us make the perfect choices.'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="flex flex-row">

        <div className="w-[800px] h-auto relative">
          <Image src="https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg" alt="testimonials" fill className="w-full h-auto" />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 relative"
              >
                <Quote className="h-8 w-8 text-accent/30 mb-4" />

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};