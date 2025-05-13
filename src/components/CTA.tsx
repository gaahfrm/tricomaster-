
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-tricomaster-green">
      <div className="container-section">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <div className="mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-gray leading-tight">
                "Agende sua consulta e dê o primeiro passo em direção a cabelos saudáveis e uma autoestima revitalizada."
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nossa equipe está pronta para criar um plano de tratamento personalizado para você. 
                Oferecemos avaliação completa, tecnologia de ponta e acompanhamento contínuo para 
                garantir os melhores resultados.
              </p>
              <div className="flex flex-wrap gap-6 mb-6 justify-center">
                <div className="flex items-center text-center">
                  <Check className="h-5 w-5 text-tricomaster-green mr-2" />
                  <span className="text-gray-700">Avaliação médica especializada</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-tricomaster-green mr-2" />
                  <span className="text-gray-700">Tratamentos personalizados</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-tricomaster-green mr-2" />
                  <span className="text-gray-700">Tecnologia avançada</span>
                </div>
              </div>
            </div>
          </div>
          <div className='justify-center flex pt-5'>
            <a 
            href="#cta" 
            className="btn-primary inline-block">
            AGENTE SUA CONSULTA
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
