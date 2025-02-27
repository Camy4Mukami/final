import React from 'react';
import { MapPin, Clock, Award } from 'lucide-react';

const WhyUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Convenient Location */}
          <div className="bg-pink-50 p-8 rounded-lg flex flex-col items-center text-center">
            <div className="text-pink-500 mb-4">
              <MapPin size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3">Convenient Location</h3>
            <p className="text-gray-600">
              Our mobile technicians come to your home or office - no travel needed.
            </p>
          </div>
          
          {/* Flexible Scheduling */}
          <div className="bg-pink-50 p-8 rounded-lg flex flex-col items-center text-center">
            <div className="text-pink-500 mb-4">
              <Clock size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Book appointments at times that work best for your schedule.
            </p>
          </div>
          
          {/* Professional Service */}
          <div className="bg-pink-50 p-8 rounded-lg flex flex-col items-center text-center">
            <div className="text-pink-500 mb-4">
              <Award size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Experienced, certified technicians delivering salon-quality results.
            </p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default WhyUs;