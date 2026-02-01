import React from 'react';

export const About = () => {
  return (
    <section className="py-28 px-8 bg-[#FAF7F2] border-y border-[#1C1917]/[0.03]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-[#A68B5B] mb-8 block">Legacy of Craft</span>
        <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1C1917] mb-12 tracking-tight">Our Heritage</h2>
        <div className="w-12 h-[1px] bg-[#1C1917]/10 mx-auto mb-12"></div>
        <p className="text-xl md:text-2xl font-serif font-light text-[#1C1917]/60 leading-relaxed italic px-4">
          Pure Assam Silk is rooted in years of firsthand experience within the silk industry.
For over 25 years, our family has remained closely connected to Assamese silk, gaining a deep understanding of its sourcing, quality, and the craftsmanship behind every weave. This brand was created as a small, independent effort to carry that knowledge forward — working on a limited scale, focusing on authentic, traditionally woven silk that is carefully selected and offered in small quantities. No blends. No mass production. Only honest silk, handled with care and respect.
        </p>
      </div>
    </section>
  );
};
