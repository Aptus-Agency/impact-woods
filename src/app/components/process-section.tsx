import React from 'react';
import { MessageCircle, Home, FileText, ArrowRight } from 'lucide-react';
import { Button } from './button';

const steps = [
  {
    icon: MessageCircle,
    title: 'Confirmation Via WhatsApp',
    description: 'Within minutes of booking, our project coordinator reaches out via WhatsApp to confirm your appointment, discuss your vision, and answer any initial questions. '
  },
  {
    icon: Home,
    title: 'Free Site Visit & Professional Assessment', 
    description: 'Our experienced craftsmen visit your home with professional measuring tools and design tablets. We&rsquo;ll assess your space, understand your lifestyle needs, take precise measurements, and discuss material options'
  },
  {
    icon: FileText,
    title: '3D Designs & Transparent Pricing',
    description: 'Receive photorealistic 3D visualizations of your future space plus itemized quotations with no hidden fees. See exactly how your investment transforms your home before making any commitment. Revisions? Absolutely free until it&rsquo;s perfect.'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-primary/55"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What happens after you book
            </h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Our streamlined process ensures you get the best results with minimal hassle. 
              From initial contact to final installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div>
                  )}
                  
                  {/* Process Card */}
                  <div className="h-[400px] bg-muted backdrop-blur-sm border border-muted/20 p-8 rounded-2xl text-center transition-all duration-300 group">
                    {/* Icon Container */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                      <Icon className="h-10 w-10" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="text-center">
            <Button 
              variant="default" 
              size="xl"
              className="bg-white text-slate-800 hover:bg-gray-100"
              asChild
            >
              <a 
                href="https://forms.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book My Free Site Visit Today
              </a>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};