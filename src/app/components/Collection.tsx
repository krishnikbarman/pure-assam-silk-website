import React from 'react';
import { ProductCard } from './ProductCard';

const base = import.meta.env.BASE_URL;

const products = [
  {
    title: "Crafted in Assam",
    subtitle: "HANDWOVEN • LIMITED PIECES",
    image: `${base}images/home/weaving.jpg`
  },
  {
    title: "Pure Assam Silk",
    subtitle: "HANDWOVEN • LIMITED PIECES",
    image: `${base}images/home/silk.jpg`
  },
  {
    title: "Traditional Elegance",
    subtitle: "HANDWOVEN • LIMITED PIECES",
    image: `${base}images/home/gamusa.jpg`
  }
];

export const Collection = () => {
  return (
    <section id="collection" className="py-28 px-8 md:px-16 gradient-light-bg">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              subtitle={product.subtitle}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
