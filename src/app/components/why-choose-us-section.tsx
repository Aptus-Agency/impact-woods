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
          {/* Left side - Arch-shaped image with overlay elements */}
          <div className="relative">
            {/* Arch-shaped container with white border */}
            <div className="relative w-full h-[500px] bg-white p-4 rounded-[200px_200px_40px_40px] shadow-lg">
              {/* Kitchen image with arch shape */}
              <div 
                className="w-full h-full rounded-[180px_180px_20px_20px] overflow-hidden bg-cover bg-center relative"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg)'
                }}
              >
                {/* Overlay elements */}
                {/* Design card - dark background */}
                <div className="absolute bottom-6 left-6 bg-slate-700 text-white rounded-2xl p-4 min-w-[120px] shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <Monitor className="h-6 w-6 mb-2 text-white" />
                    <span className="text-sm font-semibold">Design</span>
                  </div>
                </div>
                
                {/* Build card - white background */}
                <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 min-w-[120px] shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <Hammer className="h-6 w-6 mb-2 text-slate-700" />
                    <span className="text-sm font-semibold text-slate-700">Build</span>
                  </div>
                </div>
                
                {/* Small circular element */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center shadow-lg">
                  <Wrench className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
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