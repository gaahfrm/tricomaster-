
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="pt-28 pb-16 md:pt-36 md:pb-20 bg-cover bg-center min-h-[90vh] flex items-center relative"
      style={{
        backgroundImage: "url('/lovable-uploads/c089e80e-e6a2-493a-9124-1e1fa89977f8.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay com efeito blur */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-black/40"
        aria-hidden="true"
      ></div>
      
      <div className="container-section relative z-10">
        <div className="max-w-2xl opacity-100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            TRICOMASTER <br/>
            <span className="text-tricomaster-lightgreen">MEDICINA CAPILAR</span>
          </h1>
          <p className="text-xl mb-6 text-white max-w-xl font-medium drop-shadow-lg">
            RECUPERE SUA CONFIANÇA, VENÇA A CALVÍCIE E A QUEDA DE CABELO COM SOLUÇÕES QUE FAZEM A DIFERENÇA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen text-lg">
              AGENDE SUA CONSULTA
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="#quem-somos" className="btn-outline border-white text-white hover:bg-white hover:text-tricomaster-darkgreen">
              SAIBA MAIS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
