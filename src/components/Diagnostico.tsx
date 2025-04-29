
import React from 'react';

const Diagnostico = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-green">DIAGNÓSTICO CAPILAR</h2>
          <p className="text-xl text-tricomaster-gray max-w-3xl mx-auto">
            Análise completa para entender a saúde do seu couro cabeludo e identificar as causas da sua queda de cabelo
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-tricomaster-gray mb-4">
              Tecnologia avançada para diagnóstico preciso
            </h3>
            
            <p className="text-gray-700">
              Na TricoMaster utilizamos equipamentos de última geração para analisar a fundo a saúde do seu couro cabeludo e cabelos. Nossa análise microscópica permite identificar com precisão as causas da sua queda de cabelo.
            </p>
            
            <p className="text-gray-700">
              Durante o diagnóstico, nossos especialistas avaliam a densidade capilar, a espessura dos fios, a saúde do folículo e as condições do couro cabeludo. Com essas informações, podemos desenvolver um plano de tratamento personalizado que ataca diretamente a causa do seu problema.
            </p>
            
            <p className="text-gray-700">
              O diagnóstico capilar é o primeiro passo para um tratamento eficaz contra a calvície e queda de cabelo. Não se baseie em soluções genéricas que prometem resultados milagrosos - confie em uma análise científica e personalizada.
            </p>
            
            <div className="pt-4">
              <a href="#contato" className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen">
                AGENDE SEU DIAGNÓSTICO
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/f9baba4b-9555-4d95-9151-c3304b8e64a4.png"
                alt="Especialista realizando diagnóstico capilar com equipamento avançado" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-tricomaster-lightgreen rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-tricomaster-green rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostico;
