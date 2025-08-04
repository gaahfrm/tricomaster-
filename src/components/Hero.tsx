import React from 'react';
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ArrowRight, Bold } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] w-full"
      style={{
        backgroundImage: "url('/uploads/calvicie-masculina.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container-section relative z-10 flex flex-col justify-center items-center gap-10 text-center px-4 py-20 md:py-32 bg-black/60 rounded-xl max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Sofrendo com queda de cabelo ou calvície?
        </h1>
        <p className="mb-8 text-white text-lg md:text-xl font-medium drop-shadow-lg">
          Recupere sua autoestima com tratamentos personalizados, tecnologia avançada e mais de 10 anos de experiência médica em tricologia. Resultados reais para quem busca solução definitiva!
        </p>
        <a href="https://api.whatsapp.com/send?phone=5511930731230&text=Quero%20saber%20sobre%20tratamento%20capilar" target="_blank" rel="noopener noreferrer">
          <Button className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen text-xl font-bold py-4 px-8 rounded-full shadow-lg animate-pulse flex items-center gap-3">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
            QUERO RECUPERAR MEU CABELO
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
