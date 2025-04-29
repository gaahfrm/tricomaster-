
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tricomaster-gray py-12">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-tricomaster-red mb-4">TRICOMASTER</h3>
            <p className="text-gray-600 max-w-md">
              A máquina de cortar cabelo profissional que está revolucionando salões e barbearias em todo o Brasil.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-tricomaster-red transition-colors">Características</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tricomaster-red transition-colors">Acessórios</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tricomaster-red transition-colors">Garantia</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tricomaster-red transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-tricomaster-red transition-colors">Sobre nós</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tricomaster-red transition-colors">Contato</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tricomaster-red transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-tricomaster-red transition-colors">Imprensa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Contato</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">contato@tricomaster.com.br</li>
                <li className="text-gray-600">(11) 99999-9999</li>
                <li className="text-gray-600">São Paulo, SP</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Tricomaster. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-tricomaster-red">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-tricomaster-red">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
