import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 px-6 text-center bg-[#1C1917]">
      <div className="absolute inset-0 gradient-dark-bg opacity-80" />
      <Motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl relative z-10"
      >
        <h1 className="text-6xl md:text-[5.5rem] font-serif font-light text-[#F7F3F0] mb-10 leading-[1.05] tracking-tight">
          Pure Assam Silk
        </h1>
        <p className="text-lg md:text-xl font-sans font-light text-[#F7F3F0]/60 mb-14 max-w-2xl mx-auto leading-relaxed tracking-wide">
          Handpicked pure silk, woven in Assam.<br />
          <span className="opacity-80 text-[#A68B5B]">Limited pieces. Crafted with integrity.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link
            to="/collection"
            className="px-12 py-5 bg-[#A68B5B] text-[#F7F3F0] text-[11px] uppercase tracking-[0.25em] hover:bg-[#B39359] transition-all duration-500 w-full sm:w-auto cursor-pointer text-center flex items-center justify-center"
          >
            Explore Collection
          </Link>
          <Link
            to="/contact"
            className="px-12 py-5 border border-[#F7F3F0]/20 text-[#F7F3F0] text-[11px] uppercase tracking-[0.25em] hover:border-[#F7F3F0]/40 transition-all duration-500 w-full sm:w-auto text-center flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </Motion.div>
    </section>
  );
};
