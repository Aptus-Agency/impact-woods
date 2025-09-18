import React from 'react';
import { MessageCircle, Home, FileText, ArrowRight } from 'lucide-react';
import { Button } from './button';

const steps = [
  {
    icon: MessageCircle,
    title: 'Contact Us',
    description: 'Once you book, we\'ll reach out immediately to confirm your appointment and gather initial requirements.'
  },
  {
    icon: Home,
    title: 'Make Your Design', 
    description: 'Our expert team visits your home to take measurements and understand your specific needs and preferences.'
  },
  {
    icon: FileText,
    title: 'Rebuild Design',
    description: 'Get detailed 3D visualizations and transparent pricing to guide your decision—all at no cost.'
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
        <div className="absolute inset-0 bg-slate-800/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
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
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div>
                  )}
                  
                  {/* Process Card */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl text-center hover:bg-white/15 transition-all duration-300 group">
                    {/* Icon Container */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              variant="hero" 
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
          </div>
        </div>
      </div>
    </section>
  );
};