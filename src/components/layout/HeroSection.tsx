import React from 'react';
import Image from 'next/image';
import { assets } from '@/app/assets/assets';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.hero_image || "/images/nail-service-bg.jpg"}
          alt="Nail service"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay to darken the image slightly */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>
      
      {/* Content container - centered in the page */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen pt-16 px-5">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fontColor-darker mb-6">
            Your Nail Services Journey Starts Here
          </h1>
          
          <p className="text-fontColor-dark mb-10 mx-auto max-w-xl">
            Whether you&apos;re seeking professional nail services or ready to showcase your expertise, Nailsnest connects talented technicians with beauty enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#book-service" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors duration-300"
            >
              Book a service
            </a>
            <a 
              href="#nail-tech" 
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary-hover  hover:text-white transition-colors duration-300"
            >
              Join as Technician
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;