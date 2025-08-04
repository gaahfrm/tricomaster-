import React from 'react';
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Diagnostico = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl mb-4 text-tricomaster-green">DIAGNÓSTICO CAPILAR</h2>
          <p className="text-xl text-tricomaster-gray max-w-3xl mx-auto">
            O diagnóstico capilar é o primeiro passo para entender a saúde do seu cabelo e encontrar a melhor solução para você.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-tricomaster-gray mb-4">
              Chega de sofrer com queda de cabelo sem saber o motivo!
            </h3>
            <p className="text-gray-700">
              Na TricoMaster, você não recebe apenas um diagnóstico: recebe clareza, segurança e um plano de ação real. Utilizamos equipamentos de última geração para realizar a Tricoscopia Digital, uma análise microscópica que revela exatamente o que está acontecendo com seu couro cabeludo e fios de cabelo.
            </p>
            <p className="text-gray-700">
              Nossos especialistas, com mais de 10 anos de experiência, avaliam densidade, espessura, saúde dos folículos e condições do couro cabeludo. Assim, identificamos a causa da sua queda de cabelo ou calvície e criamos um tratamento personalizado para você voltar a se sentir bem consigo mesmo.
            </p>
            <p className="text-gray-700 font-semibold">
              Pare de perder tempo e dinheiro com soluções genéricas. Tenha um diagnóstico científico, personalizado e focado no resultado que você realmente deseja: recuperar seu cabelo e sua autoestima.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="https://api.whatsapp.com/send?phone=5511930731230&text=Ol%C3%A1%20tenho%20uma%20duvida" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen text-lg mt-10">
                  <FontAwesomeIcon icon={faWhatsapp} size='3x' color="whaite" />
                  AGENDE SUA CONSULTA
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img
                src="/uploads/DSC_2727.JPG"
                alt="Especialista realizando diagnóstico capilar com equipamento avançado"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostico;
