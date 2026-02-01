import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
}

export const ProductCard = ({ image, title, subtitle }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4.2] overflow-hidden bg-[#EBE7E0] mb-8 relative border border-[#1C1917]/[0.04]">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] mix-blend-multiply opacity-90"
        />
        <div className="absolute inset-0 bg-[#2C2621]/5 group-hover:bg-[#2C2621]/0 transition-colors duration-700" />
      </div>
      <div className="space-y-4 px-1">
        <div className="space-y-1">
          <p className="text-[10px] font-sans text-[#1C1917]/40 uppercase tracking-[0.25em]">{subtitle}</p>
          <h3 className="text-xl md:text-2xl font-serif font-light text-[#1C1917] tracking-tight">{title}</h3>
        </div>
        <a
          href="https://wa.me/919864637816"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#A68B5B] hover:text-[#1C1917] transition-all duration-500 inline-flex items-center gap-3 group/btn"
        >
          <span className="border-b border-[#A68B5B]/30 group-hover/btn:border-[#1C1917] pb-1">Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
