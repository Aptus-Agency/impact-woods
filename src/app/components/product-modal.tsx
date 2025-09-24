import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from './button';

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
  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl rounded-2xl bg-background p-8 shadow-lg">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg md:h-auto">
            <Image src={product.image} alt={product.title} width={800} height={800} className="object-cover" />
          </div>

          <div className="flex flex-col justify-start items-start">
            <h3 className="mb-3 text-2xl font-semibold text-foreground">{product.title}</h3>
            <p className="mb-6 text-muted-foreground">{product.description}</p>
            <Button
              asChild
              className="mt-auto w-full"
              onClick={onClose}
            >
              <a href="#contact">Book Now</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};