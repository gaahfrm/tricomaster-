
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Conecte na Tomada",
    description: "Ligue o Tricomaster à energia elétrica antes do uso para garantir seu funcionamento contínuo."
  },
  {
    number: "02",
    title: "Ajuste a Lâmina",
    description: "Escolha entre as 4 opções de regulagem para obter o comprimento de corte desejado."
  },
  {
    number: "03",
    title: "Pronto para Usar",
    description: "Comece a realizar cortes até 3x mais rápidos e com maior precisão que as máquinas convencionais."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-tricomaster-gray">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Como Funciona o <span className="text-tricomaster-red">Tricomaster</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simples de usar, resultado profissional garantido
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-xl p-8 shadow-lg animate-on-scroll"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-tricomaster-red rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {step.number}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-4 md:p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <p className="text-lg md:text-xl font-medium text-gray-800">
              O Tricomaster é 100% <span className="text-tricomaster-red font-bold">aprovado</span> pelos melhores profissionais do Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
