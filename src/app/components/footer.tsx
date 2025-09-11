import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">Impact Woods</div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Transforming homes across Uganda with premium kitchens, closets, doors, 
                and frames since 2011. Quality craftsmanship, hassle-free service.
              </p>
              <div className="text-sm text-primary-foreground/60">
                © 2024 Impact Woods. All rights reserved.
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>+256 752 993 659</li>
                <li>0392003458</li>
                <li>Salama Rd, Sseruganda Plaza</li>
                <li>Kampala, Uganda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};