import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const images = [
  "/tricomaster//lovable-uploads/Clinica (1).jpg",
  "/tricomaster//lovable-uploads/Clinica (2).jpg",
  "/tricomaster//lovable-uploads/Clinica (3).jpg",
  "/tricomaster//lovable-uploads/Clinica (4).jpg",
  "/tricomaster//lovable-uploads/Clinica (5).jpg",
  "/tricomaster//lovable-uploads/Clinica (6).jpg",
  "/tricomaster//lovable-uploads/Clinica (7).jpg",
  "/tricomaster//lovable-uploads/Clinica (8).jpg",
  "/tricomaster//lovable-uploads/Clinica (9).jpg",
  "/tricomaster//lovable-uploads/Clinica (10).jpg",
  "/tricomaster//lovable-uploads/Clinica (11).jpg",
  "/tricomaster//lovable-uploads/Clinica (12).jpg",
  "/tricomaster//lovable-uploads/Clinica (13).jpg",
  "/tricomaster//lovable-uploads/Clinica (14).jpg",
  "/tricomaster//lovable-uploads/Clinica (15).jpg",
  "/tricomaster//lovable-uploads/Clinica (16).jpg",
];

const QuemSomos = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-green">QUEM SOMOS</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-3/5 flex flex-col items-center justify-center">
            {/* Carousel */}
            <div className="relative w-full">
              <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                className="w-full h-auto rounded-lg shadow-lg object-cover transition-all duration-300"
              />
              {/* Carousel controls */}
              <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" className="h-6 w-6">
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" className="h-6 w-6">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              {/* Dots */}
              <div className="flex justify-center mt-2 gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${current === idx ? 'bg-tricomaster-green' : 'bg-gray-300'}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Ir para o slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6 text-center lg:text-left h-5/12"> {/* Centraliza texto no mobile */}
            <h3 className="text-2xl font-bold text-tricomaster-gray mb-4">
              A solução para sua Queda de Cabelo está na TricoMaster Medicina Capilar
            </h3>
            <p className="text-gray-700">
              A TricoMaster Medicina Capilar é a sua melhor escolha quando se trata de  problemas capilares. Compreendemos que esse desafio pode afetar não apenas a sua aparência física, como seu bem estar emocional e sua autoestima.
            </p>
            <p className="text-gray-700">
              Nossa clínica é referência em Tricologia Médica, com uma experiência sólida de mais de uma década. A equipe é formada por médicos especialistas em Tricologia, altamente qualificados, experientes,  dedicados e interessados em proporcionar o melhor tratamento para o seu caso.
            </p>
            <p className="text-gray-700">
              Seja na queda de cabelo, calvície, alopecia areata, alopecia cicatricial,  dermatite seborreica,  caspa, oleosidade, ou qualquer outra condição capilar, na TricoMaster vamos além dos tratamentos capilares, investigando cuidadosamente as causas para oferecer diagnósticos precisos e soluções verdadeiramente eficazes e personalizadas. Garantindo o bem-estar e a satisfação de nossos pacientes.
            </p>
            <p className="text-gray-700">
              Na TricoMaster atendemos pacientes desde crianças a idosos,  oferecendo cuidado  e atenção especiais em cada fase da vida. Você é nossa prioridade número um.
            </p>
            <div className="flex justify-center lg:justify-start pt-0">
              <a href="https://api.whatsapp.com/send?phone=5511930731230&text=Ol%C3%A1%20tenho%20uma%20duvida" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen text-lg mt-0">
                  <FontAwesomeIcon icon={faWhatsapp} size='3x' color="whaite" />
                  AGENDE SUA CONSULTA
                </Button>
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default QuemSomos;
