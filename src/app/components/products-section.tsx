"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';
import { ProductModal } from './product-modal';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Doors & Frames',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1758227966/impact-woods/tfrn3dsjjh38qwuwbg2g.jpg',
    description: 'Secure and stylish entryways. Our custom-made doors and frames add a touch of modern elegance to any home.'
  },
  {
    title: 'Closets',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1758227773/impact-woods/m16lro4q7ydbae9sikss.jpg',
    description: 'Smart, space-saving storage. We design and install bespoke closets that organize your life and elevate your room.'
  },
  {
    title: 'Kitchen Cabinets',
    image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1758228709/impact-woods/ww9ci6ucjhddmpsh6pth.jpg',
    description: 'The heart of your home, perfected. Our durable, chic kitchen cabinets are crafted to fit your lifestyle and culinary needs.'
  }
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="products" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Products
                </span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our range of premium wooden products, each designed and crafted 
                to transform your home with style and functionality.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {products.map((product, index) => (
                <motion.div 
                  key={index}
                  className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 md:hover:scale-105 cursor-pointer"
                  onClick={() => openModal(product)}
                  variants={cardVariants}
                >
                  <div className={cn("relative h-[250px] md:h-[300px] w-full overflow-hidden", index === 0 && "rounded-t-[200px]", index === 1 && "rounded-2xl", index === 2 && "rounded-[200px]")}>
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
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Want to see our work in action? Check out our portfolio of completed projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </>
  );
};
