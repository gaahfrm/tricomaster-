
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-section">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-tricomaster-red">TRICOMASTER</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-800 hover:text-tricomaster-red font-medium transition-colors">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-gray-800 hover:text-tricomaster-red font-medium transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="text-gray-800 hover:text-tricomaster-red font-medium transition-colors">
              FAQ
            </a>
            <Button className="btn-primary">
              <PhoneCall className="mr-2 h-4 w-4" />
              Contato
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-tricomaster-red"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#beneficios" 
                className="text-gray-800 hover:text-tricomaster-red font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#depoimentos" 
                className="text-gray-800 hover:text-tricomaster-red font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                className="text-gray-800 hover:text-tricomaster-red font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <Button className="btn-primary w-full" onClick={() => setIsOpen(false)}>
                <PhoneCall className="mr-2 h-4 w-4" />
                Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
