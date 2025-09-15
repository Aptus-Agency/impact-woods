import React from 'react';
import { Utensils, Monitor, RotateCcw, Settings } from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: 'Kitchen Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.',
    learnMore: 'Learn More',
    className: 'bg-background border border-border'
  },
  {
    icon: Monitor,
    title: 'Custom Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.',
    learnMore: 'Learn More',
    className: 'bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] text-white'
  },
  {
    icon: RotateCcw,
    title: 'Rebuild Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.',
    learnMore: 'Learn More',
    className: 'bg-background border border-border'
  },
  {
    icon: Settings,
    title: 'Installation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.',
    learnMore: 'Learn More',
    className: 'bg-background border border-border'
  }
];

export const WhatWeDoSection: React.FC = () => {
  return (
    <section id="what-we-do" className="py-20 bg-background">
      <div className="container mx-auto px-8 max-w-6xl lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus 
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`p-8 rounded-2xl hover:shadow-elegant transition-all duration-300 hover:scale-105 ${service.className}`}
              >
                <div className="mb-6">
                  <Icon className={`h-12 w-12 ${service.className.includes('text-white') ? 'text-white' : 'text-primary'}`} />
                </div>
                
                <h3 className={`text-xl font-semibold mb-4 ${service.className.includes('text-white') ? 'text-white' : 'text-foreground'}`}>
                  {service.title}
                </h3>
                
                <p className={`mb-6 leading-relaxed ${service.className.includes('text-white') ? 'text-gray-200' : 'text-muted-foreground'}`}>
                  {service.description}
                </p>
                
                <button className={`flex items-center gap-2 font-medium hover:gap-3 transition-all duration-200 ${service.className.includes('text-white') ? 'text-white hover:text-gray-200' : 'text-foreground hover:text-primary'}`}>
                  <span>→</span>
                  {service.learnMore}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};