"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/app/assets/assets";
import MobileNavBar from "@/components/layout/MobileNav";

const NavBar = () => {
    const [showServicesMenu, setShowServicesMenu] = useState(false);

    const serviceLinks = [
        "Manicures",
        "Pedicures",
        "Nail Art",
        "Acrylic & Gel Nail extensions",
        "Nail treatment",
    ];

    return (
        <nav className="fixed top-0 left-0 w-full backdrop-blur-sm px-5 lg:px-8 py-4 flex items-center justify-between z-50">
            <a href="#top" className="flex items-center gap-2">
                <Image
                    src={assets.logo}
                    alt="Logo Image"
                    className="w-32 cursor-pointer"
                />
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3">
                <li>
                    <a
                        href="#top"
                        className="font-merriweather hover:text-red-900 transition-colors duration-300"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#About Us"
                        className="font-merriweather hover:text-red-900 transition-colors duration-300"
                    >
                        About us
                    </a>
                </li>
                <li className="relative">
                    <button
                        className="font-merriweather hover:text-red-900 transition-colors duration-300 flex items-center gap-1"
                        onMouseEnter={() => setShowServicesMenu(true)}
                        onMouseLeave={() => setShowServicesMenu(false)}
                    >
                        Services
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {showServicesMenu && (
                        <div
                            className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px]"
                            onMouseEnter={() => setShowServicesMenu(true)}
                            onMouseLeave={() => setShowServicesMenu(false)}
                        >
                            {serviceLinks.map((service, index) => (
                                <a
                                    key={index}
                                    href={`#${service}`}
                                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-900 transition-colors duration-300"
                                >
                                    {service}
                                </a>
                            ))}
                        </div>
                    )}
                </li>
                <li>
                    <a
                        href="#contact"
                        className="font-merriweather hover:text-red-900 transition-colors duration-300"
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        href="#nail-tech"
                        className="font-merriweather hover:text-red-900 transition-colors duration-300"
                    >
                        Become a NailTech
                    </a>
                </li>
            </ul>

            {/* Desktop Authentication Buttons */}
            <div className="hidden md:flex items-center gap-4">
                <a
                    href="#login"
                    className="flex items-center gap-3 px-6 py-2 text-primary rounded-full font-merriweather hover:text-primary-hover transition-colors duration-300"
                >
                    Login
                </a>
                <a
                    href="#sign-up"
                    className="flex items-center gap-3 px-6 py-2 border border-primary bg-primary rounded-lg font-merriweather text-white hover:bg-primary-hover transition-colors duration-300"
                >
                    Sign Up
                </a>
            </div>

            {/* Mobile Navigation */}
            <MobileNavBar />
        </nav>
    );
};

export default NavBar;