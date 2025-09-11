import React from 'react';
import { Star, Quote } from 'lucide-react';

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-semibold text-foreground ml-2">5-star feedback</span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">Free Site Visit Guaranteed</span>
            </div>
          </div>

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