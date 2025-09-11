import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const highlights = [
  {
    icon: CheckCircle,
    title: 'Free site visit, design & quote',
    description: 'No hidden costs - we come to you'
  },
  {
    icon: Users,
    title: 'Trusted by homeowners since 2011',
    description: 'Serving Kampala, Wakiso, Mukono & Uganda'
  },
  {
    icon: Award,
    title: 'Superior craftsmanship',
    description: 'Made to your lifestyle and preferences'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Impact Woods
              </span>
              ?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                At Impact Woods, we believe your home should inspire comfort, beauty, and functionality. 
                For over a decade, we've specialized in crafting premium kitchens, closets, doors, and 
                frames designed to simplify life.
              </p>
              
              <p className="text-xl md:text-2xl font-semibold text-primary">
                Our promise is simple: hassle-free design, precision installation, and long-lasting quality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 bg-background rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};