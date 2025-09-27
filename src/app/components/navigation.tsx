'use client'

import React from 'react';
import { Button } from './button';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, AnimationGeneratorType, motion } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
  isButton?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring' as AnimationGeneratorType,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <nav className="z-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/zurri-cloud/image/upload/v1757616133/impact-woods/wpesbdnnvhw1iuqt0uo7.png"
              alt="Logo"
              width={80}
              height={80}
              className=""
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center gap-12">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div>
              <a href="#contact">
                <Button variant="hero" className="rounded-full px-8 bg-secondary text-coral" size="lg">
                  Contact
                </Button>
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className="fixed top-0 right-0 h-full w-64 bg-primary shadow-lg z-50 p-6 md:hidden"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
              >
                <div className="flex justify-end">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">close main menu</span>
                        
                        <X className="block h-6 w-6" aria-hidden="true" />
                        
                    </button>
                </div>
                <div className="mt-6">
                  {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-white hover:text-primary transition-colors duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                  ))}
                  <a href="#contact" className='w-full'>
                    <Button variant="hero" className="rounded-full px-8 bg-secondary text-coral w-full mt-4" size="lg">
                      Contact
                    </Button>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
    </nav>
  );
};