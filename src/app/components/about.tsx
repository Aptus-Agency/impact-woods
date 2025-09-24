'use client';

import React from 'react';
import Image from 'next/image';
import { easeOut, motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut }
  }
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto rounded-lg max-w-6xl p-16 bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] relative mt-5">
        <div className="mx-auto flex flex-row items-center gap-8">
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image container that extends beyond the parent */}
            <div className="relative w-[400px] h-[500px] rounded-b-[200px] overflow-hidden border-solid border-[10px] border-transparent shadow-[0px_0px_1px_0px_#FFFFFF] mt-[-160px]">
              <Image
                src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg'}
                alt="Modern luxury kitchen interior"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div 
            className="text-left text-white mb-16"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={textItemVariants}
            >
              About Impact Woods
            </motion.h2>

            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="text-lg md:text-xl text-white leading-relaxed mb-8"
                variants={textItemVariants}
              >
                At Impact Woods, we believe in simplifying life for you through products that truly work. We create appealing kitchen cabinets, closets, and doors with modern designs that are simply timeless, while giving you a fully simplified experience every step of the way.
              </motion.p>

              <motion.p 
                className="text-lg md:text-xl text-white leading-relaxed"
                variants={textItemVariants}
              >
                Why work with us? Because we genuinely care. We care that you get the right product—one that&apos;s durable and built to last. We care to deliver everything we&apos;ve promised and more. We care to listen when challenges arise and make things right, using every experience to improve. Most importantly, we care enough to ensure you get your full money&apos;s worth.
                We&apos;re here to simplify your life.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};