"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AlignLeft, House, HandHeart, BookUser, Bell, MessagesSquare, Settings, LogOut } from 'lucide-react';
import { assets } from '@/app/assets/assets';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setExpanded(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setExpanded(!expanded);
    }
  };

  const handleMenuItemClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Sidebar */}
      <div 
        className={`fixed h-screen ${expanded ? 'w-56' : 'w-16'} 
        ${isMobile && !mobileMenuOpen ? 'w-16 bg-transparent' : ''} 
        ${isMobile && mobileMenuOpen ? 'w-56' : ''} 
        ${!isMobile ? 'bg-pink-50 rounded-r-2xl' : ''} 
        p-3 flex flex-col transition-all duration-300 z-10`}
      >
        <div className="flex items-center mb-8">
          <button onClick={toggleSidebar} className="text-fontColor-dark hover:text-gray-900 transition-colors">
            <AlignLeft className="mr-2" />
          </button>
          {(expanded || (isMobile && mobileMenuOpen)) && (
            <Image src={assets.logo} alt="NailsNest Logo" width={150} height={40} />
          )}
        </div>

        {/* Menu Items */}
        {(!isMobile || mobileMenuOpen) && (
          <>
            <div className="flex-1 flex flex-col gap-3">
              <button 
                className={`flex items-center bg-pink-100 rounded-lg p-3 text-fontColor-dark font-medium hover:bg-pink-200 transition-colors
                ${!expanded && !mobileMenuOpen ? 'justify-center' : ''}`}
                onClick={handleMenuItemClick}
              >
                <House className={`${expanded || mobileMenuOpen ? 'mr-2' : 'w-6 h-6'}`} size={expanded || mobileMenuOpen ? 20 : 24} />
                {(expanded || (isMobile && mobileMenuOpen)) && <span>Home</span>}
              </button>
              <button 
                className={`flex items-center p-3 text-fontColor-dark font-medium hover:bg-pink-100 rounded-lg transition-colors
                ${!expanded && !mobileMenuOpen ? 'justify-center' : ''}`}
                onClick={handleMenuItemClick}
              >
                <HandHeart className={`${expanded || mobileMenuOpen ? 'mr-2' : 'w-6 h-6'}`} size={expanded || mobileMenuOpen ? 20 : 24} />
                {(expanded || (isMobile && mobileMenuOpen)) && <span>Services</span>}
              </button>
              <button 
                className={`flex items-center p-3 text-fontColor-dark font-medium hover:bg-pink-100 rounded-lg transition-colors
                ${!expanded && !mobileMenuOpen ? 'justify-center' : ''}`}
                onClick={handleMenuItemClick}
              >
                <BookUser className={`${expanded || mobileMenuOpen ? 'mr-2' : 'w-6 h-6'}`} size={expanded || mobileMenuOpen ? 20 : 24} />
                {(expanded || (isMobile && mobileMenuOpen)) && <span>Bookings</span>}
              </button>
              <button 
                className={`flex items-center p-3 text-fontColor-dark font-medium hover:bg-pink-100 rounded-lg transition-colors
                ${!expanded && !mobileMenuOpen ? 'justify-center' : ''}`}
                onClick={handleMenuItemClick}
              >
                <Bell className={`${expanded || mobileMenuOpen ? 'mr-2' : 'w-6 h-6'}`} size={expanded || mobileMenuOpen ? 20 : 24} />
                {(expanded || (isMobile && mobileMenuOpen)) && <span>Notifications</span>}
              </button>
              <button 
                className={`flex items-center p-3 text-fontColor-dark font-medium hover:bg-pink-100 rounded-lg transition-colors
                ${!expanded && !mobileMenuOpen ? 'justify-center' : ''}`}
                onClick={handleMenuItemClick}
              >
                <MessagesSquare className={`${expanded || mobileMenuOpen ? 'mr-2' : 'w-6 h-6'}`} size={expanded || mobileMenuOpen ? 20 : 24} />
                {(expanded || (isMobile && mobileMenuOpen)) && <span>Chat</span>}
              </button>
              <button 
                className={`flex items-center p-3 text-fontColor-dark font-medium hover:bg-pink-100 rounded-lg transition-colors
                ${!expanded && !mobileMenuOpen ? 'justify-center' : ''}`}
                onClick={handleMenuItemClick}
              >
                <Settings className={`${expanded || mobileMenuOpen ? 'mr-2' : 'w-6 h-6'}`} size={expanded || mobileMenuOpen ? 20 : 24} />
                {(expanded || (isMobile && mobileMenuOpen)) && <span>Settings</span>}
              </button>
            </div>

            <button 
              className={`flex items-center p-3 text-fontColor-dark font-medium mt-auto hover:bg-pink-100 rounded-lg transition-colors
              ${!expanded && !mobileMenuOpen ? 'justify-center' : ''}`}
              onClick={handleMenuItemClick}
            >
              <LogOut className={`${expanded || mobileMenuOpen ? 'mr-2' : 'w-6 h-6'}`} size={expanded || mobileMenuOpen ? 20 : 24} />
              {(expanded || (isMobile && mobileMenuOpen)) && <span>Logout</span>}
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-0"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;