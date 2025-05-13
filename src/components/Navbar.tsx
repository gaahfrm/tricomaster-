
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}>
      <div className="container-section">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/tricomaster/lovable-uploads/logo.png"
                alt="Tricomaster Logo"
                className="h-12 md:h-16"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#quem-somos" className="color-green ">
              Quem Somos
            </a>
            <a href="#tratamentos" className="color-green">
              Tratamentos
            </a>
            <a href="#resultados" className="color-green">
              Resultados
            </a>

            <a href="https://vowdigital.com.br" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen text-lmd ">
                <FontAwesomeIcon icon={faWhatsapp} size='3x' color="whaite" />
                AGENDE SUA CONSULTA
              </Button>
            </a>

          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-tricomaster-green"
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
                href="#quem-somos"
                className="text-gray-800 hover:text-tricomaster-green font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Quem Somos
              </a>
              <a
                href="#tratamentos"
                className="text-gray-800 hover:text-tricomaster-green font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tratamentos
              </a>
              <a
                href="#resultados"
                className="text-gray-800 hover:text-tricomaster-green font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resultados
              </a>
              <Button className="btn-primary w-full" onClick={() => setIsOpen(false)}>
                <PhoneCall className="mr-2 h-4 w-4" />
                Agende sua Consulta
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
