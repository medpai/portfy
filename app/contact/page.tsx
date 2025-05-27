"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Dynamically import StarBackground to avoid SSR issues
const StarBackground = dynamic(() => import("@/components/main/StarBackground"), {
  ssr: false,
});

type FormData = { email: string; message: string; };

const ContactPage = () => {
  const { register, handleSubmit: rhfSubmit, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <main className="h-full w-full">
      <div className="relative h-full min-h-screen w-full bg-[#030014] overflow-hidden">
        <StarBackground />
        
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideInFromTop}
            className="mb-6 w-full max-w-5xl flex justify-start">
            <a href="/" className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Go Back
            </a>
          </motion.div>
          
          <div className="flex w-full max-w-5xl h-[600px] bg-black/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Left side - Form */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.5)}
              className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
            >
              <h1 className="text-3xl text-white font-bold mb-2">Contact me</h1>
              
              
              {submitted ? (
                <div className="space-y-6 text-center">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold">Message sent!</h2>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 py-2 px-6 rounded-full bg-white text-[#030014] font-medium hover:bg-opacity-90 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={rhfSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-1">
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className="w-full py-3.5 px-10 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-all"
                        placeholder="Email"
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div className="space-y-1">
                    <textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      className="w-full py-3.5 px-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-all min-h-[120px]"
                      placeholder="Your message"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-white text-[#030014] font-medium hover:bg-opacity-90 transition-all"
                  >
                    Send Message
                  </button>
                  
                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="flex items-center justify-center space-x-6">
                      <a href="https://github.com/medpai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://linkedin.com/in/elmahdi-harchi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a href="mailto:mehdi.hr111@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                    <p className="text-center text-xs text-gray-500">You can also reach me at mehdi.hr111@gmail.com</p>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* Right side - Image */}n
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInFromRight(0.5)}
              className="hidden md:block w-1/2 relative overflow-hidden"
            >
              <div className="absolute inset-0">
                <Image 
                  src="/blakehole.png" 
                  alt="Space illustration" 
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030014]/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background gradient effect */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
