import React from 'react';
import { CheckCircle, Globe, Wrench, Monitor, Hammer } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'Quality Design',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
  },
  {
    icon: Globe,
    title: 'Team Expert',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
  },
  {
    icon: CheckCircle,
    title: 'Professional',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-8 max-w-6xl lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px]">
              <div
                className="w-full h-full rounded-l-[200px] overflow-hidden bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/zurri-cloud/image/upload/v1758229242/impact-woods/eauusv8fovcyoqdux2ur.jpg)'
                }}
              >
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Impact Woods
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Impact Woods, we believe your home should inspire comfort, beauty, and functionality. For over a decade, we&apos;ve specialized in crafting premium kitchens, closets, doors, and frames designed to simplify life. 
              </p>

              <p className="text-xl text-muted-foreground"><span className="font-semibold text-foreground">Our promise is simple:</span> hassle-free design, precision installation, and long-lasting quality.</p>
            </div>

            {/* Benefits list */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};