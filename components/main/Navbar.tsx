"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { InteractiveHoverButton } from "../ui/InteractiveHoverButton";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#about-me", label: "About me" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <>
      <div className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 ${scrolled ? 'bg-[#030014cc]' : 'bg-[#03001417]'} backdrop-blur-md z-50 px-4 md:px-10 transition-colors duration-300`}>
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/bls.png"
              alt="logo"
              width={45}
              height={45}
              className="cursor-pointer hover:animate-slowspin"
            />

            <span className="font-bold ml-[15px] hidden md:block text-gray-300">
              Elmahdi Harchi
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-auto h-full items-center justify-between md:mr-10 lg:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="cursor-pointer px-3 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Hire Me Button - Desktop */}
          <div className="hidden md:flex">
            <Link href="/contact" className="flex items-center">
              <InteractiveHoverButton className="border-[#7042f861] bg-[#0300145e] text-white hover:text-black">
                Hire Me
              </InteractiveHoverButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 text-white z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[300px] bg-[#030014] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-8 text-gray-200 mb-12 items-start">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-xl font-medium hover:text-purple-400 transition-colors" 
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hire Me Button - Mobile */}
          <Link 
            href="/contact" 
            className="mt-auto mb-10"
            onClick={closeMenu}
          >
            <button className="w-full py-4 px-6 bg-[#7042f8] hover:bg-[#5b35cf] text-white font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-lg">
              Hire Me
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;
