'use client';

import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";
import SignUp from "@/app/assets/sign-upImage.png";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-6xl bg-accent rounded-2xl shadow-xl overflow-hidden flex">
        {/* Left Section */}
        <div className="hidden lg:block lg:w-1/2 relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={SignUp}
              alt="Welcome"
              fill
              className="w-full h-full object-contain"
              priority
            />
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/30" /> */}
          </div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-12 text-white z-10">
            <div className="max-w-md text-center space-y-8">
              <p className="text-3xl font-semibold leading-relaxed">
                We are excited to have you on board, please create an account to join our community and enjoy our services
              </p>
              <div className="space-y-4">
                <p className="text-xl">Oh! Not new here?</p>
                <button 
                  onClick={() => window.location.href = '/login'} 
                  className="px-8 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-[#ac0412] transition duration-200 text-lg"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}