
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-tricomaster-green">
      <div className="container-section">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-gray leading-tight">
                "Agende sua consulta e dê o primeiro passo em direção a cabelos saudáveis e uma autoestima revitalizada."
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nossa equipe está pronta para criar um plano de tratamento personalizado para você. 
                Oferecemos avaliação completa, tecnologia de ponta e acompanhamento contínuo para 
                garantir os melhores resultados.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
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
            <div className="lg:w-1/3 w-full">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-center text-tricomaster-gray">
                  Agende sua Consulta
                </h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nome completo" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tricomaster-green focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Telefone com DDD" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tricomaster-green focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-mail" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tricomaster-green focus:outline-none"
                      required
                    />
                  </div>
                  <Button className="w-full btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen py-6 text-lg">
                    AGENDAR AGORA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm text-gray-500">
                  Responderemos em até 24 horas úteis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
