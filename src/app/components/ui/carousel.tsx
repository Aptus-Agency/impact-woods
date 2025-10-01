'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface CarouselProps {
    children: React.ReactNode[];
    autoPlayInterval?: number; // in milliseconds, 0 to disable
    showNavigation?: boolean;
}

export default function Carousel({
    children,
    autoPlayInterval = 5000,
    showNavigation = true,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = React.Children.toArray(children);
    const totalItems = items.length;

    const nextItem = () => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const prevItem = () => {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    useEffect(() => {
        if (autoPlayInterval > 0 && totalItems > 1) {
            const interval = setInterval(nextItem, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [totalItems, autoPlayInterval]);

    return (
        <div className="relative h-full w-full overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    {items[currentIndex]}
                </motion.div>
            </AnimatePresence>

            {totalItems > 1 && showNavigation && (
                <>
                    <button
                        onClick={prevItem}
                        aria-label="Previous slide"
                        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 rounded-full p-2 shadow-lg transition-all"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextItem}
                        aria-label="Next slide"
                        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 rounded-full p-2 shadow-lg transition-all"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </>
            )}
        </div>
    );
}