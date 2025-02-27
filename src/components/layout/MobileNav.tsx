"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp, Home, Info, Palette, Phone, UserPlus, LogIn } from "lucide-react";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  
  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const serviceLinks = [
    "Manicures",
    "Pedicures",
    "Nail Art",
    "Acrylic & Gel Nail extensions",
    "Nail treatment",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menu: string) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menu);
    }
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Menu Button */}
      <button 
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <Menu size={24} className="text-primary" />
      </button>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Slide Out */}
      <div className={`fixed top-0 right-0 h-full w-3/6 max-w-xs bg-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end items-center p-4 border-b">
          <button 
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} className="text-primary" />
          </button>
        </div>

        <nav className="p-4 bg-white rounded-b-lg ">
          <ul className="space-y-4">
            <li>
              <a href="#top" className="flex items-center gap-3 p-2 hover:text-primary ">
                <Home size={20} className="text-primary" />
                <span>Home</span>
              </a>
            </li>
            
            <li>
              <a href="#About Us" className="flex items-center gap-3 p-2 hover:text-primary ">
                <Info size={20} className="text-primary" />
                <span>About Us</span>
              </a>
            </li>
            
            <li>
              <button 
                onClick={() => toggleSubmenu('services')}
                className="flex items-center justify-between w-full p-2 hover:text-primary "
              >
                <div className="flex items-center gap-3">
                  <Palette size={20} className="text-primary" />
                  <span>Services</span>
                </div>
                {expandedMenu === 'services' ? (
                  <ChevronUp size={20} className="text-primary" />
                ) : (
                  <ChevronDown size={20} className="text-primary" />
                )}
              </button>
              
              {expandedMenu === 'services' && (
                <ul className="mt-2 ml-8 space-y-2">
                  {serviceLinks.map((service, index) => (
                    <li key={index}>
                      <a 
                        href={`#${service}`}
                        className="block p-2 text-sm hover:text-primary "
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            <li>
              <a href="#contact" className="flex items-center gap-3 p-2 hover:text-primary ">
                <Phone size={20} className="text-primary" />
                <span>Contact</span>
              </a>
            </li>
            
            <li>
              <a href="#nail-tech" className="flex items-center gap-3 p-2 hover:text-primary ">
                <UserPlus size={20} className="text-primary" />
                <span>Become a NailTech</span>
              </a>
            </li>
          </ul>
          
          <div className="mt-8 space-y-3">
            <a 
              href="#login" 
              className="flex items-center justify-center gap-2 w-full p-3 border border-primary text-primary rounded-lg  hover:bg-primary-hover  hover:text-white transition-colors duration-300"
            >
              <LogIn size={18} />
              <span>Login</span>
            </a>
            
            <a 
              href="#sign-up" 
              className="flex items-center justify-center gap-2 w-full p-3 bg-primary text-white rounded-lg hover:bg-primary-hover"
            >
              <span>Sign Up</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavBar;