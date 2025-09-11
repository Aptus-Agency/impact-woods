import React from 'react';
import Image from 'next/image';

const products = [
  {
    title: 'Doors & Frames',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg',
    description: 'Premium wooden doors and frames crafted for durability and elegance'
  },
  {
    title: 'Closets',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg',
    description: 'Custom closet solutions that maximize space and organization'
  },
  {
    title: 'Kitchen Cabinets',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg',
    description: 'Modern kitchen cabinets designed for functionality and style'
  }
];

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our range of premium wooden products, each designed and crafted 
              to transform your home with style and functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Want to see our work in action? Check out our portfolio of completed projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};