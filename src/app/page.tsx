import React from 'react';
import Image from 'next/image';
import Hero from "@/app/assets/header-hero.jpeg"
import { Star, Calendar, MapPin, Shield } from 'lucide-react';

const DualLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif text-gray-800">NailsNest</div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#services" className="text-gray-600 hover:text-pink-500">Services</a>
          <a href="#process" className="text-gray-600 hover:text-pink-500">How It Works</a>
          <button className="bg-pink-100 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-200">
            Book Now
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Join as Technician
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              Your Nail Services Journey Starts Here
            </h1>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re seeking professional nail services or ready to showcase your expertise,
              NailsNest connects talented technicians with beauty enthusiasts.
            </p>
            <div className="flex gap-4">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">
                Book a Service
              </button>
              <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600">
                Become a Technician
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={Hero}
              alt="Nail service illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Service Icons */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
          {['Nail Pedi', 'Gel Polish', 'Manicure', 'Repairs'].map((service) => (
            <div key={service} className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-pink-100 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-pink-500" />
              </div>
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Services */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-12">Services & Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Client Section */}
          <div className="bg-pink-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">For Clients</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-pink-500" />
                <p>Flexible booking times</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-500" />
                <p>At-home services</p>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-pink-500" />
                <p>Verified professionals</p>
              </div>
            </div>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 w-full">
              Browse Services
            </button>
          </div>

          {/* Technician Section */}
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">For Technicians</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-purple-500" />
                <p>Set your own schedule</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-500" />
                <p>Choose your service area</p>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-500" />
                <p>Build your client base</p>
              </div>
            </div>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 w-full">
              Start Earning
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Community Says</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              &quot;Finding clients has never been easier. I love the flexibility of choosing my own schedule.&quot;
            </p>
            <div className="flex items-center gap-3">
              <Image src={Hero} alt="Technician" className="rounded-full" width={40} height={40} />
              <div>
                <p className="font-semibold">Sarah K.</p>
                <p className="text-sm text-gray-500">Nail Technician</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              &quot;Amazing service right at my home. The booking process was super simple!&quot;
            </p>
            <div className="flex items-center gap-3">
              <Image src={Hero}alt="Client" className="rounded-full" width={40} height={40}  />
              <div>
                <p className="font-semibold">Emma R.</p>
                <p className="text-sm text-gray-500">Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Join our community today and experience the future of nail services
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">
              Book a Service
            </button>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600">
              Join as Technician
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">NailsNest</h3>
              <p className="text-gray-600">Connecting beauty professionals with clients</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-pink-500">Services</a>
                <a href="#" className="block text-gray-600 hover:text-pink-500">How It Works</a>
                <a href="#" className="block text-gray-600 hover:text-pink-500">Join Us</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-600">support@nailsnest.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DualLandingPage;