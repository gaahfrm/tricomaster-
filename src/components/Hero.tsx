
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="pt-28 pb-16 md:pt-36 md:pb-20 bg-cover bg-center min-h-[90vh] flex items-center relative"
      style={{
        backgroundImage: "url('/lovable-uploads/2ae128a4-d734-43d6-af0c-742ee42a43e3.png')"
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container-section relative z-10">
        <div className="max-w-2xl animate-on-scroll">
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
