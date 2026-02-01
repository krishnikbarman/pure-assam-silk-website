import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-56 px-8 bg-[#F7F3F0]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-light text-[#1C1917] mb-10 tracking-tight">Get in Touch</h2>
        <p className="text-lg font-sans font-light text-[#1C1917]/50 mb-16 max-w-lg mx-auto leading-relaxed tracking-wide">
          Interested in our collection?
For prices, availability, or any enquiries, please reach out to us directly.
We’ll be happy to assist you.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <a 
            href="https://wa.me/919864637816"
            className="flex items-center gap-4 px-14 py-5 bg-[#A68B5B] text-[#F7F3F0] text-[11px] uppercase tracking-[0.3em] hover:bg-[#1C1917] transition-all duration-500 w-full sm:w-auto justify-center group"
          >
            <MessageCircle size={16} className="opacity-70 group-hover:opacity-100" />
            WhatsApp Us
          </a>
          <a 
            href="tel:+919864637816"
            className="flex items-center gap-4 px-14 py-5 border border-[#1C1917]/10 text-[#1C1917] text-[11px] uppercase tracking-[0.3em] hover:border-[#1C1917] transition-all duration-500 w-full sm:w-auto justify-center"
          >
            <Phone size={16} className="opacity-70" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};
