import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import CaseStudies from './components/sections/CaseStudies';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import './App.scss';

function App() {
  // Подключаем Font Awesome
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/3b0c3763f7.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <CaseStudies />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
