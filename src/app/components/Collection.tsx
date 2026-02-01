import React from 'react';
import { ProductCard } from './ProductCard';
import weavingImg from '../../assets/images/home/weaving.jpg';
import silkImg from '../../assets/images/home/silk.jpg';
import gamusaImg from '../../assets/images/home/gamusa.jpg';

const products = [
  {
    title: "Crafted in Assam",
    subtitle: "HANDWOVEN • LIMITED PIECES",
    image: weavingImg
  },
  {
    title: "Pure Assam Silk",
    subtitle: "HANDWOVEN • LIMITED PIECES",
    image: silkImg
  },
  {
    title: "Traditional Elegance",
    subtitle: "HANDWOVEN • LIMITED PIECES",
    image: gamusaImg
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
