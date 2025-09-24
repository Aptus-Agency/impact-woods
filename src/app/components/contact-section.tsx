'use client';

import React from 'react';
import { Phone, MapPin, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './button';
import { easeOut, motion } from 'framer-motion';

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+256 752 993 659',
    href: 'https://wa.me/256752993659'
  },
  {
    icon: Phone,
    label: 'Office Line',
    value: '0392003458',
    href: 'tel:0392003458'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Salama Rd, Sseruganda Plaza, Kampala',
    href: 'https://maps.google.com'
  }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const ctaCardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut }
  }
};


export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your home? Contact us today for your free consultation and site visit.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a 
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-card transition-all duration-300 group"
                      variants={itemVariants}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div 
                className="pt-8 border-t border-border"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Card */}
            <motion.div 
              className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/20"
              variants={ctaCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Book your free site visit today and let&apos;s bring your vision to life. 
                  No obligations, just expert advice and beautiful designs.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="xl"
                    className="w-full"
                    asChild
                  >
                    <a 
                      href="https://forms.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Book My Free Site Visit
                    </a>
                  </Button>
                  
                  <Button 
                    variant="whatsapp" 
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a 
                      href="https://wa.me/256752993659" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};