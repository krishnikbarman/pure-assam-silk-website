import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageCircle } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

interface CategoryProps {
  title: string;
  description: string;
  images: string[];
  gridCols: number;
}

const CategorySection = ({ title, description, images, gridCols }: CategoryProps) => {
  return (
    <section className="py-20 border-b border-[#1C1917]/[0.03] last:border-0 gradient-light-bg">
      <div className="max-w-4xl mx-auto text-center mb-20 px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1C1917] mb-6 tracking-tight leading-tight">{title}</h2>
        <p className="text-sm md:text-base font-sans font-light text-[#1C1917]/50 max-w-xl mx-auto leading-relaxed italic tracking-wide">
          {description}
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className={`grid grid-cols-1 md:grid-cols-${gridCols} gap-8 lg:gap-14`}>
          {images.map((img, idx) => (
            <Motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5.5] bg-[#EBE7E0] overflow-hidden border border-[#1C1917]/[0.04]"
            >
              <ImageWithFallback 
                src={img} 
                alt={`${title} - ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-[1.03] mix-blend-multiply opacity-90"
              />
            </Motion.div>
          ))}
        </div>
        <a 
          href="https://wa.me/919864637816"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.4em] text-[#A68B5B] hover:text-[#1C1917] transition-all duration-500 group mt-8"
        >
          <MessageCircle size={14} className="opacity-70 group-hover:opacity-100" />
          Contact for details
        </a>
      </div>
    </section>
  );
}

export const CollectionCatalogue = () => {
  const base = '/';

  const categories: CategoryProps[] = [
    {
      title: "Pat Silk Mekhela Chador",
      description: "Handwoven Pat silk. Smooth, luminous, festive elegance.",
      images: [
        `${base}images/collections/pat-silk/pat-mekhela-1.jpg`,
        `${base}images/collections/pat-silk/pat-mekhela-2.jpg`,
        `${base}images/collections/pat-silk/pat-mekhela-3.jpg`
      ],
      gridCols: 3
    },
    {
      title: "Pat Silk Mekhela Chador with Riha",
      description: "Coordinated Pat silk & Riha. Festive, authentic attire.",
      images: [
        `${base}images/collections/pat-riha/riha-set-1.jpg`,
        `${base}images/collections/pat-riha/riha-set-2.jpg`
      ],
      gridCols: 3
    },
    {
      title: "Muga Silk Mekhela Chador",
      description: "Muga silk. Golden sheen, royal Assamese heritage.",
      images: [
        `${base}images/collections/muga/muga-1.jpg`,
        `${base}images/collections/muga/muga-2.jpg`
      ],
      gridCols: 3
    },
    {
      title: "Tas Pat Mekhela Chador",
      description: "Tas silk. Rich texture, handwoven raw luxury.",
      images: [
        `${base}images/collections/tas-pat/tas-pat-1.jpg`,
        `${base}images/collections/tas-pat/tas-pat-2.jpg`,
        `${base}images/collections/tas-pat/tas-pat-3.jpg`
      ],
      gridCols: 3
    },
    {
      title: "Tas & Riha Jora Collection",
      description: "Tas & Riha Jora. Traditional, coordinated craftsmanship.",
      images: [
        `${base}images/collections/tas-riha-jora/jora-1.jpg`,
        `${base}images/collections/tas-riha-jora/jora-2.jpg`,
        `${base}images/collections/tas-riha-jora/jora-3.jpg`
      ],
      gridCols: 3
    },
    {
      title: "Eri Shawls Collection",
      description: "Eri silk. Soft, warm, everyday heritage elegance.",
      images: [
        `${base}images/collections/eri-shawls/eri1.jpg`,
        `${base}images/collections/eri-shawls/eri2.jpg`,
        `${base}images/collections/eri-shawls/eri3.jpg`
      ],
      gridCols: 3
    },
    {
      title: "Assamese Pat Gamusa Collection",
      description: "Pat silk Gamusa. Handwoven, cultural identity of Assam.",
      images: [
        `${base}images/collections/pat-gamusa/gamusa1.jpg`,
        `${base}images/collections/pat-gamusa/gamusa2.jpg`,
        `${base}images/collections/pat-gamusa/gamusa3.jpg`
      ],
      gridCols: 3
    }
  ];

  return (
    <div className="bg-[#FAF7F2] pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center mb-24 px-6">
        <h1 className="text-5xl md:text-6xl font-serif text-[#1C1917] mb-6 tracking-tight">Our Collection</h1>
        <p className="text-sm font-sans uppercase tracking-[0.3em] text-[#A68B5B] mb-12">Handwoven • Authentic • Limited</p>
        <div className="w-12 h-[1px] bg-[#1C1917]/20 mx-auto"></div>
      </div>
      {categories.map((cat, index) => (
        <CategorySection 
          key={index}
          title={cat.title}
          description={cat.description}
          images={cat.images}
          gridCols={cat.gridCols}
        />
      ))}
    </div>
  );
};
