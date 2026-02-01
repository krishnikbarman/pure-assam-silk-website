import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import CollectionRoute from './CollectionRoute';
import ContactPage from './ContactPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Collection />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-[#8B6F47] selection:text-[#FAF9F6]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionRoute />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
