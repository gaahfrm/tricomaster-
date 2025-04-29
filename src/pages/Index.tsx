
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuemSomos from '../components/QuemSomos';
import PorqueEscolher from '../components/PorqueEscolher';
import Tratamentos from '../components/Tratamentos';
import Resultados from '../components/Resultados';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  // Implementação básica de animações no scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuemSomos />
        <PorqueEscolher />
        <Tratamentos />
        <Resultados />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
