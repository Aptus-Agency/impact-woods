'use client'

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface CarouselProps {
    children: React.ReactNode[];
    itemsToShow?: number;
    autoPlayInterval?: number; // in milliseconds, 0 to disable
    showNavigation?: boolean;
}

export default function Carousel({
    children,
    itemsToShow = 1,
    autoPlayInterval = 3000,
    showNavigation = true,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = React.Children.count(children);

    const nextItem = () => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const prevItem = () => {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    useEffect(() => {
        if (autoPlayInterval > 0 && totalItems > itemsToShow) {
            const interval = setInterval(nextItem, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [totalItems, itemsToShow, autoPlayInterval]);

    // This calculates the offset to slide the track.
    // It moves the track by a percentage equal to one item's width.
    const xOffset = -(currentIndex * (100 / totalItems));

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <motion.div
                    className="flex"
                    style={{ width: `${(totalItems / itemsToShow) * 100}%` }}
                    animate={{ x: `${xOffset}%` }}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                >
                    {React.Children.map(children, (child) => (
                        <div
                            className="flex-shrink-0"
                            style={{ width: `${100 / totalItems}%` }}
                        >
                            <div className="px-4 h-full">
                                {child}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Buttons */}
            {totalItems > itemsToShow && showNavigation && (
                <>
                    <button
                        onClick={prevItem}
                        aria-label="Previous slide"
                        className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm text-dark hover:bg-primary hover:text-white rounded-full p-2 shadow-elegant transition-all duration-300"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextItem}
                        aria-label="Next slide"
                        className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm text-dark hover:bg-primary hover:text-white rounded-full p-2 shadow-elegant transition-all duration-300"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </>
            )}
        </div>
    );
}