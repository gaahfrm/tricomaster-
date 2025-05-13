import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="pt-28 pb-28  md:pt-6 bg-center md:min-h-[90vh] flex place-items-end justify-center relative" // Adicionado justify-center
      style={{
        backgroundImage: "linear-gradient(to bottom, rgb(212 212 212),#7CA82F)", // Alterado para degradê
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      
      
      <div className="container-section relative z-10 flex flex-col items-center gap-10"> {/* Alterado para centralizar conteúdo */}
        <div className="max-w-25xl text-center opacity-100"> {/* Mantido text-center para centralizar */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            TRICOMASTER <br/>
            <span className="color-green">MEDICINA CAPILAR</span>
          </h1>
          <p className="text-xl mb-6 text-white max-w-xl font-medium drop-shadow-lg">
            RECUPERE SUA CONFIANÇA, VENÇA A CALVÍCIE E A QUEDA DE CABELO COM SOLUÇÕES QUE FAZEM A DIFERENÇA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center"> {/* Centralizado o botão */}
            <a href="https://vowdigital.com.br" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen text-lg">
                AGENDE SUA CONSULTA
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
