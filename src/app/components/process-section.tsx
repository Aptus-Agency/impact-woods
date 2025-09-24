'use client';

import React from 'react';
import { MessageCircle, Home, FileText, ArrowRight } from 'lucide-react';
import { easeOut, motion } from 'framer-motion';

const steps = [
  {
    icon: MessageCircle,
    title: 'Confirmation Via WhatsApp',
    description: "Within minutes of booking, our project coordinator reaches out via WhatsApp to confirm your appointment, discuss your vision, and answer any initial questions."
  },
  {
    icon: Home,
    title: 'Free Site Visit & Professional Assessment', 
    description: "Our experienced craftsmen visit your home with professional measuring tools and design tablets. We'll assess your space, take precise measurements, and discuss material options"
  },
  {
    icon: FileText,
    title: '3D Designs & Transparent Pricing',
    description: "Receive photorealistic 3D visualizations of your future space plus itemized quotations with no hidden fees. See exactly how your investment transforms your home before making any commitment. Revisions? Absolutely free until it's perfect."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  },
};


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
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What happens after you book
            </h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Our streamlined process ensures you get the best results with minimal hassle. 
              From initial contact to final installation.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} className="relative" variants={itemVariants}>
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};