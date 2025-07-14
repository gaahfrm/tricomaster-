import React from 'react';
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ArrowRight, Bold } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row" // Alterado para coluna no mobile
      style={{
        paddingTop: "150px",
        backgroundImage: "linear-gradient(to bottom, rgb(212 212 212),#7CA82F)", // Alterado para degradê  
      }}
    >
      <div className="container-section relative z-10 flex flex-col justify-center gap-10 text-center md:text-left">
        <div>
          <h1 className="text-4xl lg:text-5xl font-500 text-white mb-4 ">
            TRICOMASTER <br />
            <span className="text-4xl md:text-5xl font-bold">
              MEDICINA CAPILAR
            </span>
          </h1>
          <p className="mb-6 text-white max-w-xl font-medium drop-shadow-lg mx-auto md:mx-0">
            RECUPERE SUA CONFIANÇA, VENÇA A CALVÍCIE E A QUEDA DE CABELO COM SOLUÇÕES QUE FAZEM A DIFERENÇA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://api.whatsapp.com/send?phone=5511930731230&text=Ol%C3%A1%20tenho%20uma%20duvida" target="_blank" rel="noopener noreferrer">
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
          src="/uploads/calvicie-masculina.jpeg"
          alt="Perdendo Cabelo"
          className="w-full h-full object-cover rounded-tl-[180px]" // Arredondado apenas o canto superior esquerdo
        />
      </div>
    </section>
  );
};

export default Hero;
