
import React from 'react';
import { CircleCheck, Zap, Layers, Watch, Volume2, Lightbulb } from 'lucide-react';

const featuresList = [
  {
    title: "Tecnologia de Ponta",
    description: "Lâminas de alta precisão para um corte perfeito em qualquer tipo de cabelo.",
    icon: <Layers className="h-10 w-10 text-tricomaster-red" />
  },
  {
    title: "Velocidade Incomparável",
    description: "Corte até 3x mais rápido que as máquinas convencionais do mercado.",
    icon: <Zap className="h-10 w-10 text-tricomaster-red" />
  },
  {
    title: "Design Ergonômico",
    description: "Desenvolvido para proporcionar conforto durante uso prolongado.",
    icon: <CircleCheck className="h-10 w-10 text-tricomaster-red" />
  },
  {
    title: "Maior Produtividade",
    description: "Atenda mais clientes e aumente o faturamento do seu negócio.",
    icon: <Watch className="h-10 w-10 text-tricomaster-red" />
  },
  {
    title: "Silenciosa",
    description: "Motor potente e ao mesmo tempo silencioso para um ambiente mais agradável.",
    icon: <Volume2 className="h-10 w-10 text-tricomaster-red" />
  },
  {
    title: "Economia de Energia",
    description: "Baixo consumo energético para redução de custos operacionais.",
    icon: <Lightbulb className="h-10 w-10 text-tricomaster-red" />
  }
];

const Features = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Por que escolher o <span className="text-tricomaster-red">Tricomaster</span>?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desenvolvido por profissionais para profissionais, o Tricomaster oferece vantagens exclusivas para seu salão.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-tricomaster-gray rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block border border-tricomaster-red bg-tricomaster-gray rounded-lg p-4 md:p-6">
            <p className="text-lg md:text-xl font-medium mb-0">
              <span className="text-tricomaster-red font-bold">93%</span> dos profissionais relatam aumento na produtividade após adquirir o Tricomaster
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
