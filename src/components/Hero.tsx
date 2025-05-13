import React from 'react';
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="flex flex-col md:flex-row" // Alterado para coluna no mobile
      style={{
        paddingTop: "200px",
        paddingLeft: "0px", // Sem padding no mobile
        backgroundImage: "linear-gradient(to bottom, rgb(212 212 212),#7CA82F)", // Alterado para degradê
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <div className="container-section relative z-10 flex flex-col items-start justify-center gap-10 w-full md:w-1/2 md:pl-[80px]"> {/* Adicionado padding-left apenas no desktop */}
        <div className="max-w-25xl text-left opacity-100">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            TRICOMASTER <br />
            <span
              className=""
              style={{
                fontSize: '35px', // Reduzido para 35px no mobile
              }}
            >
              MEDICINA CAPILAR
            </span>
          </h1>
          <p className="text-xl mb-6 text-white max-w-xl font-medium drop-shadow-lg">
            RECUPERE SUA CONFIANÇA, VENÇA A CALVÍCIE E A QUEDA DE CABELO COM SOLUÇÕES QUE FAZEM A DIFERENÇA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a href="https://vowdigital.com.br" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen text-lmd ">
                <FontAwesomeIcon icon={faWhatsapp} size="3x" color="white" />
                AGENDE SUA CONSULTA
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full mt-8 md:mt-0"> {/* Adicionado margem superior no mobile */}
        <img
          src="tricomaster/lovable-uploads/perdendo-cabelo.webp"
          alt="Perdendo Cabelo"
          className="w-full h-full object-cover rounded-tl-[180px]" // Arredondado apenas o canto superior esquerdo
        />
      </div>
    </section>
  );
};

export default Hero;
