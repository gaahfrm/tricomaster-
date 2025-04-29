
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-hero-pattern bg-cover bg-center min-h-[90vh] flex items-center">
      <div className="container-section">
        <div className="max-w-2xl animate-on-scroll">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            TRICOMASTER <br/>
            <span className="text-tricomaster-lightgreen">MEDICINA CAPILAR</span>
          </h1>
          <p className="text-xl mb-6 text-white max-w-xl">
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
