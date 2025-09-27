import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from './button';
import { motion, AnimatePresence } from 'framer-motion';


interface Product {
  title: string;
  image: string;
  description: string;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-background p-6 shadow-lg md:max-w-4xl md:p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div className="relative h-48 overflow-hidden rounded-lg md:h-auto">
                <Image src={product.image} alt={product.title} layout="fill" className="object-cover" />
              </div>

              <div className="flex flex-col items-start justify-center">
                <h3 className="mb-2 text-xl font-semibold text-foreground md:text-2xl">{product.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground md:text-base">{product.description}</p>
                <Button
                  asChild
                  className="mt-auto w-full"
                  onClick={onClose}
                  size="sm"
                >
                  <a href="#contact">Book Now</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

