import React from 'react';
import { RotateCcw, Settings, ShieldCheck } from 'lucide-react';
import { button } from 'framer-motion/client';

const services = [
  {
    icon: ShieldCheck,
    title: 'Completely Risk-Free Experience',
    description: 'Free site visit, 3D design visualization, and detailed quotation. Zero upfront costs, zero obligations until you\'re 100% satisfied.',
    learnMore: 'Book Now',
    className: 'bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] text-white'
  },
  {
    icon: ShieldCheck,
    title: '13+ Years of Ugandan Excellence',
    description: 'Over 500 satisfied homeowners across Kampala, Wakiso, and Mukono trust us with their most important spaces since 2011.',
    learnMore: 'Book Now',
    className: 'bg-background border border-border'
  },
  {
    icon: ShieldCheck,
    title: 'Precision-Crafted for Your Life',
    description: 'Every kitchen, closet, and door is custom-designed to match your exact lifestyle, space requirements, and aesthetic preferences.',
    learnMore: 'Book Now',
    className: 'bg-background border border-border'
  }
];

export const WhatWeDoSection: React.FC = () => {
  return (
    <section id="what-we-do" className="py-20 bg-background">
      <div className="container mx-auto px-8 max-w-6xl lg:px-8">

        <div className="flex flex-row gap-6 justify-center">
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
                
                <a href="https://forms.google.com">
                  <button className={`flex items-center gap-2 font-medium hover:gap-3 transition-all duration-200 ${service.className.includes('text-white') ? 'text-white hover:text-gray-200' : 'text-foreground hover:text-primary'}`}>
                    <span>→</span>
                    {service.learnMore}
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};