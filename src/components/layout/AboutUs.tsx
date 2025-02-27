import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/app/assets/assets';

const AboutUs = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image on the left */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden ">
              <Image
                src={assets.about_image}
                alt="NailsNest salon experience" 
                className="w-full h-full"
              />
            </div>
          </div>
          
          {/* Content on the right */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-fontColor-darker">About us...</h2>
            <p className="text-fontColor-dark mb-6">
              At <span className="font-semibold">Nailsnest</span>, we&apos;re redefining the nail care experience by bringing professional-grade services directly to you. Our mission is simple: connect skilled nail technicians with clients who value convenience, quality, and flexibility. Whether it&apos;s a relaxing manicure or a stunning gel polish application, our platform makes booking and managing your appointments easier than ever.
            </p>
            <Link href="/about" className="text-primary  hover:text-primary-hover transition-colors">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;