import React from 'react';
import { CheckCircle, Globe, Wrench, Monitor, Hammer } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'Quality Design',
    description: "Our designs are tailored to your unique lifestyle and needs. The process starts with a free site visit where we listen to your vision. We then create detailed 3D designs and provide a comprehensive quotation at no cost, helping you visualize the transformation and make an informed decision"
  },
  {
    icon: Globe,
    title: 'Team Expert',
    description: "Our team of skilled craftsmen has been trusted by homeowners across Kampala, Wakiso, and Mukono since 2011. We combine superior craftsmanship with local expertise to ensure every installation is handled with precision and care, resulting in a finished product that is both beautiful and durable."
  },
  {
    icon: CheckCircle,
    title: 'Professional',
    description: "We are committed to a seamless and transparent customer experience. After you book a consultation, we confirm the details via WhatsApp , conduct a professional on-site assessment, and guide you through the design options. Our process is designed to be completely hassle-free from start to finish."
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-8 max-w-6xl lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[800px] max-h-[800px]">
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