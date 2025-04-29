
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const tratamentos = [
  {
    imagem: "/lovable-uploads/9dc75268-b793-4e1e-991f-f0a95bf281ad.png",
    nome: "Mesoterapia Capilar",
    descricao: "Tratamento não cirúrgico que envolve a aplicação de substâncias nutritivas diretamente no couro cabeludo, fortalecendo os folículos e estimulando o crescimento dos fios."
  },
  {
    imagem: "/lovable-uploads/ef28313c-c511-4a41-963d-9c3258b282ab.png",
    nome: "Laserterapia Capilar",
    descricao: "Tratamento não invasivo que estimula o crescimento e fortalecimento dos fios através da aplicação de luzes de baixa intensidade diretamente no couro cabeludo."
  },
  {
    imagem: "/lovable-uploads/683996cf-d947-485d-8bee-e8c730cf9e9c.png",
    nome: "MMP - Microinfusão de Medicamentos",
    descricao: "Tratamento inovador que envolve a aplicação direta de medicamentos no couro cabeludo através de pequenas agulhas, permitindo absorção eficaz."
  },
  {
    imagem: "/lovable-uploads/3dd7de97-aff9-40af-88e2-a4bdef2699ca.png",
    nome: "Drug Delivery",
    descricao: "Método que possibilita a aplicação direta de substâncias ativas no couro cabeludo, focando o tratamento na área afetada e minimizando efeitos colaterais."
  },
  {
    imagem: "/lovable-uploads/23d96741-a2b9-47e8-b97a-d5cc123f8545.png",
    nome: "Ozonioterapia e Óleos Essenciais",
    descricao: "Terapia capilar que integra Ozônio, Argiloterapia e Óleos Essenciais para revitalização do couro cabeludo e nutrição dos folículos."
  }
];

const Tratamentos = () => {
  return (
    <section id="tratamentos" className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-green">NOSSOS TRATAMENTOS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça as soluções avançadas que a TricoMaster oferece para cuidar da saúde dos seus cabelos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tratamentos.map((tratamento, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={tratamento.imagem} 
                  alt={tratamento.nome} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-tricomaster-gray">{tratamento.nome}</h3>
                <p className="text-gray-600">{tratamento.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Todos os tratamentos são personalizados após uma avaliação médica completa, 
            garantindo os melhores resultados para o seu caso específico.
          </p>
          <a 
            href="#cta" 
            className="btn-primary inline-block"
          >
            Agende sua Avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tratamentos;
