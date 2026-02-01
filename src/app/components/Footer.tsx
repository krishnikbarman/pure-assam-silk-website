import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-10 md:py-14 px-8 border-t border-[#F7F3F0]/[0.05] bg-[#1C1917] text-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark-footer-bg opacity-40" />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-xl md:text-2xl font-serif font-light text-[#F7F3F0] mb-6 tracking-tight">
          Pure Assam Silk
        </div>
        <p className="text-[9px] font-sans uppercase tracking-[0.5em] text-[#A68B5B] mb-16">
          Authentic • Handpicked • Limited
        </p>
        <div className="w-8 h-[1px] bg-[#F7F3F0]/10 mx-auto mb-16"></div>
        {/* Footer navigation links removed as requested. */}
        <div className="mt-16 text-[9px] font-sans text-[#F7F3F0]/20 uppercase tracking-[0.4em]">
          © {new Date().getFullYear()} Pure Assam Silk. Crafted with Integrity.
        </div>
      </div>
    </footer>
  );
};
