
import React from 'react';
import { Check } from 'lucide-react';

const specs = [
  {
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
    title: "Especificações Técnicas",
    features: [
      "Motor potente de 10.000 RPM",
      "4 níveis de regulagem de altura",
      "Bateria de longa duração (6 horas)",
      "Lâminas em aço inoxidável",
      "Peso: apenas 280g",
      "Design ergonômico anti-fadiga"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e752b3d?auto=format&fit=crop&q=80&w=800",
    title: "Itens Inclusos",
    features: [
      "1 Máquina Tricomaster",
      "4 Pentes adaptadores",
      "1 Carregador bivolt",
      "1 Escova de limpeza",
      "1 Óleo lubrificante",
      "Manual do usuário"
    ]
  }
];

const Specifications = () => {
  return (
    <section id="especificacoes" className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Conheça seu <span className="text-tricomaster-red">Tricomaster</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologia superior em cada detalhe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className="flex flex-col animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="overflow-hidden rounded-xl mb-6 shadow-lg">
                <img 
                  src={spec.image} 
                  alt={spec.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{spec.title}</h3>
              <ul className="space-y-3">
                {spec.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-tricomaster-red mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="bg-tricomaster-gray rounded-xl p-6 flex flex-col items-center md:flex-row md:items-center gap-4 w-full max-w-md shadow-md">
            <div className="bg-tricomaster-red rounded-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <circle cx="12" cy="20" r="1" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold mb-1">Conectividade</h4>
              <p className="text-sm text-gray-600">Bateria recarregável ou uso com fio</p>
            </div>
          </div>
          <div className="bg-tricomaster-gray rounded-xl p-6 flex flex-col items-center md:flex-row md:items-center gap-4 w-full max-w-md shadow-md">
            <div className="bg-tricomaster-red rounded-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold mb-1">Garantia</h4>
              <p className="text-sm text-gray-600">12 meses contra defeitos de fabricação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
