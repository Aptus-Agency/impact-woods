'use client'

import React from 'react';
import { Button } from './button';
import Image from 'next/image';

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
              className="" />
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

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                item.isButton ? (
                  <Button
                    key={item.name}
                    variant="hero"
                    className="w-full"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <a href={item.href}>{item.name}</a>
                  </Button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};