"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-0 md:px-20 pt-14 pb-10 md:py-0 md:mt-40 w-full z-[20] overflow-x-hidden relative min-h-[90vh] md:min-h-0"
    >
      <div className="h-full w-full flex flex-col gap-4 sm:gap-5 justify-center m-auto text-center md:text-start mb-4 md:mb-0 px-4">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0 max-w-[95%] md:max-w-none"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer & Computer Science Professional
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-1 mt-6 text-[28px] leading-tight sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto md:mx-0"
        >
          <span>
            Elmahdi Harchi
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Fullstack{" "}
            </span>
            Developer
          </span>
        </motion.div>

        {/* Profile picture - visible on mobile between title and buttons, hidden on desktop */}
        <div className="block md:hidden w-full mt-6 mb-8">
          <div className="mx-auto w-[210px] h-[210px] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full overflow-hidden z-10">
              <Image
                src="/Mypic.jpg"
                alt="profile picture"
                height={280}
                width={280}
                className="object-cover w-full h-full"
              />
            </div>
            <Image
              src="/grok.png"
              alt="grok icon frame"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="hidden sm:block text-sm sm:text-base md:text-lg text-gray-400 mt-4 mb-6 sm:my-5 max-w-[600px] mx-auto md:mx-0 px-0"
        >
          Full-stack developer skilled in React, Next.js, and TypeScript. Passionate about building scalable, user-focused web apps.
        </motion.p>
        <div className="flex flex-col gap-4 mt-2 sm:mt-2 mx-auto md:mx-0 w-full max-w-xs sm:max-w-none sm:flex-row sm:gap-5">
          <motion.a
            variants={slideInFromLeft(1)}
            href="/ElmahdiHarchiResume.pdf"
            download="ElmahdiHarchiResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative py-4 px-6 w-full sm:max-w-[180px] flex items-center justify-center rounded-lg text-white font-bold text-base backdrop-blur-md bg-[#1a1440cc] border border-[#7042f88b] shadow-[0_2px_16px_0_rgba(112,66,248,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(0,255,255,0.35)] hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer overflow-hidden group h-14"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Resume
            </span>
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20"></span>
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1.1)}
            href="/contact"
            className="group relative py-4 px-6 w-full sm:max-w-[180px] flex items-center justify-center rounded-lg text-[#472ba0] font-bold text-base border-2 border-white bg-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-200 cursor-pointer overflow-hidden hover:border-purple-400 hover:shadow-[0_4px_32px_0_rgba(71,43,160,0.18)] h-14"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-[#472ba0]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#472ba0" className="w-5 h-5 transition-colors duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 1-4.53-4.53m1.284-7.671c.621-2.01 3.478-2.01 4.1 0a1.724 1.724 0 0 0 2.23 1.1c2.01-.621 3.623 1.992 2.002 3.613a1.724 1.724 0 0 0 0 2.437c1.621 1.621-.011 4.243-2.002 3.622a1.724 1.724 0 0 0-2.23 1.101c-.622 2.01-3.479 2.01-4.1 0a1.724 1.724 0 0 0-2.23-1.101c-2.01.621-3.623-2.001-2.002-3.622a1.724 1.724 0 0 0 0-2.437c-1.621-1.621.012-4.234 2.002-3.613a1.724 1.724 0 0 0 2.23-1.1Z" /></svg>
              Hire Me
            </span>
            {/* Subtle purple glow on hover */}
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow:'0 0 24px 6px #a855f733'}}></span>
          </motion.a>
        
        </div>
        <style jsx>{`
          @keyframes gradient-x {
            0%, 100% { background-position: left center; }
            50% { background-position: right center; }
          }
          .animate-gradient-x {
            animation: gradient-x 4s ease-in-out infinite;
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-spin-slower {
            animation: spin-slow 30s linear infinite reverse;
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.02); opacity: 0.9; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
        `}</style>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-auto hidden md:flex justify-center items-center order-last md:order-none md:relative md:bottom-auto md:left-auto md:right-auto md:translate-y-0"
      >
        <div className="w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] flex justify-center items-center">
          {/* Simple profile picture in grok icon, exactly matching the shared image - only visible on desktop */}
          <div className="relative w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]">
            {/* Profile picture positioned in the center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden z-10">
              <Image
                src="/Mypic.jpg"
                alt="profile picture"
                height={280}
                width={280}
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Grok icon overlay */}
            <Image
              src="/grok.png"
              alt="grok icon frame"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
