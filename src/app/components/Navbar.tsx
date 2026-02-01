import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'collection') => void;
}

export const Navbar = ({ onNavigate }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C1917]/20 backdrop-blur-xl border-b border-[#F7F3F0]/[0.05] h-20">
      <div className="max-w-[1440px] mx-auto h-full flex items-center px-8 md:px-16 justify-between">
        <button 
          onClick={() => onNavigate?.('home')}
          className="text-[#F7F3F0] text-lg font-serif font-medium tracking-[-0.01em] cursor-pointer"
        >
          Pure Assam Silk
        </button>
        <div className="flex items-center space-x-12">
          <Link
            to="/"
            className="text-[#F7F3F0]/60 hover:text-[#F7F3F0] transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-sans cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/collection"
            className="text-[#F7F3F0]/60 hover:text-[#F7F3F0] transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-sans cursor-pointer"
          >
            Collection
          </Link>
          <Link
            to="/contact"
            className="text-[#F7F3F0]/60 hover:text-[#F7F3F0] transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-sans"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
