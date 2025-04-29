
import React from 'react';
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/2070e055-e113-4f97-9ebd-c51d7c92cf59.png"
              alt="Tricomaster Logo"
              className="h-16 mb-4"
            />
            <p className="text-gray-600 max-w-md">
              Clínica especializada em tratamentos capilares avançados para queda de cabelo, calvície, alopecia e outras condições.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <PhoneCall className="h-5 w-5 mr-3 text-tricomaster-green" />
                  <a href="tel:+5511999999999" className="hover:text-tricomaster-green transition-colors">(11) 99999-9999</a>
                </li>
                <li className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-tricomaster-green" />
                  <a href="mailto:contato@tricomaster.com.br" className="hover:text-tricomaster-green transition-colors">contato@tricomaster.com.br</a>
                </li>
                <li className="flex items-start text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-tricomaster-green flex-shrink-0 mt-1" />
                  <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-tricomaster-green flex-shrink-0 mt-1" />
                  <span>Segunda a Sexta: 9h às 19h<br />Sábado: 9h às 13h</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#quem-somos" className="text-gray-600 hover:text-tricomaster-green transition-colors">Quem Somos</a></li>
                <li><a href="#tratamentos" className="text-gray-600 hover:text-tricomaster-green transition-colors">Tratamentos</a></li>
                <li><a href="#resultados" className="text-gray-600 hover:text-tricomaster-green transition-colors">Resultados</a></li>
                <li><a href="#cta" className="text-gray-600 hover:text-tricomaster-green transition-colors">Agende sua Consulta</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tricomaster-green transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © {currentYear} TricoMaster Medicina Capilar. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tricomaster-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-tricomaster-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-tricomaster-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
