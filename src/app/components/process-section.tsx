import React from 'react';
import { MessageCircle, Home, FileText } from 'lucide-react';
import { Button } from './button';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Confirmation via WhatsApp',
    description: 'Once you book, we\'ll reach out immediately to confirm your appointment and gather initial requirements.'
  },
  {
    icon: Home,
    number: '02', 
    title: 'Free site visit & assessment',
    description: 'Our expert team visits your home to take measurements and understand your specific needs and preferences.'
  },
  {
    icon: FileText,
    number: '03',
    title: 'Receive 3D designs & quotations',
    description: 'Get detailed 3D visualizations and transparent pricing to guide your decision—all at no cost.'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Here's What Happens{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                After You Book
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures you get the best results with minimal hassle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative text-center"
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-primary transform translate-x-4 z-0" />
                  )}
                  
                  <div className="relative z-10 bg-background p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
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