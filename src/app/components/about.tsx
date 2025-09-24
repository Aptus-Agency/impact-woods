import React from 'react';
import { CheckCircle, Award, Users } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  {
    icon: CheckCircle,
    title: 'Free site visit, design & quote',
    description: 'No hidden costs - we come to you'
  },
  {
    icon: Users,
    title: 'Trusted by homeowners since 2011',
    description: 'Serving Kampala, Wakiso, Mukono & Uganda'
  },
  {
    icon: Award,
    title: 'Superior craftsmanship',
    description: 'Made to your lifestyle and preferences'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto rounded-lg max-w-6xl p-16 bg-[linear-gradient(333deg,rgba(166,35,23,1)_0%,rgba(217,137,108,1)_100%)] relative mt-5">
        <div className="mx-auto flex flex-row items-center gap-8">
          <div className="relative">
            {/* Image container that extends beyond the parent */}
            <div className="relative w-[400px] h-[500px] rounded-b-[200px] overflow-hidden border-solid border-[10px] border-transparent shadow-[0px_0px_1px_0px_#FFFFFF] mt-[-160px]">
              <Image
                src={'https://res.cloudinary.com/zurri-cloud/image/upload/v1757616151/impact-woods/qetcm5ezqpebxnmxgaun.jpg'}
                alt="Modern luxury kitchen interior"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="text-left text-white mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About Impact Woods
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                At Impact Woods, we believe in simplifying life for you through products that truly work. We create appealing kitchen cabinets, closets, and doors with modern designs that are simply timeless, while giving you a fully simplified experience every step of the way.
              </p>

              <p className="text-lg md:text-xl text-white leading-relaxed">
                Why work with us? Because we genuinely care. We care that you get the right product—one that&apos;s durable and built to last. We care to deliver everything we&apos;ve promised and more. We care to listen when challenges arise and make things right, using every experience to improve. Most importantly, we care enough to ensure you get your full money&apos;s worth.
                We&apos;re here to simplify your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};