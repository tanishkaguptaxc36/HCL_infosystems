import React from 'react';
import { motion } from 'framer-motion';

export default function About_us_pg() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0072ff] to-[#00c6ff] text-white flex flex-col items-center justify-start px-6 md:px-16 py-12 overflow-hidden">
      
      {/* Blurred Circle Decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Top Centered Title with Vertical "Text Selector" Hover */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative group text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold inline-block relative cursor-text hover:cursor-text select-none">
          About Us
          {/* Text cursor animation on hover */}
          <span className="absolute left-full top-0 w-[2px] h-full bg-white opacity-0 group-hover:opacity-100 animate-blink ml-1 transition-all duration-300"></span>
        </h1>
      </motion.div> 

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative w-full max-w-3xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg"
      >
        <p className="text-white text-justify text-lg leading-relaxed relative z-10">
          HCL Infosystems Limited is one of India’s leading IT services, solutions, and distribution companies, with a legacy spanning over four decades. As a pioneer in the Indian technology landscape, HCL Infosystems has played a pivotal role in enabling digital transformation across enterprises, government bodies, and educational institutions. The company specializes in offering comprehensive system integration services, IT infrastructure solutions, and value-added distribution of IT, mobility, and consumer electronics products. Driven by a customer-centric approach and a commitment to innovation, HCL Infosystems blends deep domain expertise with technological excellence to deliver tailored solutions that empower clients to achieve business efficiency and growth. With a strong network of partners and a pan-India presence, the company continues to uphold its mission of bridging technology and business for a smarter and more connected future.
        </p>
      </motion.div>

      {/* Blinking caret animation */}
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </div>
  );
}
