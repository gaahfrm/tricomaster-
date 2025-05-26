
import React from 'react';
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Card, CardContent } from "@/components/ui/card";

const tratamentos = [
  {
    imagem: "/tricomaster/lovable-uploads/Tratamento-mesoterapia-capilar.webp",
    nome: "Mesoterapia Capilar",
    descricao: "A mesoterapia capilar é um tratamento não cirúrgico que envolve aplicação de substâncias nutritivas diretamente no couro cabeludo, que estimula o crescimento de novos fios, fortalece, e melhora a saúde do couro cabeludo, indicado na queda de cabelo, calvície, alopecias e afinamento dos fios."
  },
  {
    imagem: "/tricomaster/lovable-uploads/Tratamento-laserterapia-capilar.webp",
    nome: "Laserterapia Capilar",
    descricao: "A Laserterapia capilar é um tratamento não invasivo, indolor, realizado através de  luzes de baixa intensidade para estimular o crescimento dos fios, melhorar a circulação no couro cabeludo e fortalecer os fios. É indicada para queda de cabelo, calvície, alopecias, psoríase e dermatite seborreica."
  },
  {
    imagem: "/tricomaster/lovable-uploads/Tratamento-mmp.webp",
    nome: "MMP - Microinfusão de Medicamentos",
    descricao: "O método MMP Capilar é uma técnica que aplica medicamentos diretamente no couro cabeludo por meio de microagulhas, estimulando o crescimento e melhorando a densidade dos fios. Indicado no pós transplante capilar, queda de cabelo, afinamento, calvície e alopecias. É uma opção não invasiva e eficaz para melhora da saúde capilar."
  },
  {
    imagem: "/tricomaster/lovable-uploads/3dd7de97-aff9-40af-88e2-a4bdef2699ca.png",
    nome: "Drug Delivery Digital",
    descricao: "Tecnologia inovadora que permite a aplicação precisa de ativos no couro cabeludo através de microagulhas, com controle digital da profundidade e velocidade, garantindo 100% de aproveitamento das medicações.Procedimento indolor e indicado para queda de cabelo, calvície e alopecias, o D& D estimula o crescimento capilar e melhora a densidade dos fios."
  },
  {
    imagem: "/tricomaster/lovable-uploads/23d96741-a2b9-47e8-b97a-d5cc123f8545.png",
    nome: "Ozonioterapia e Terapias Capilares",
    descricao: "A Ozonioterapia capilar é uma técnica utilizada para oxigenar o couro cabeludo, ativar a circulação e combater inflamações, promovendo um couro cabeludo saudável para o crescimento dos fios. Combinada com outras terapias capilares personalizadas, ajuda a tratar queda de cabelo, oleosidade, caspa, dermatite seborreica, psoriase, calvície e alopecias, fortalecendo e nutrindo a fibra capilar. Resultados visíveis com tratamentos naturais, eficazes e seguros."
},
  {
    imagem: "/tricomaster/lovable-uploads/ba.webp",
    nome: "Transplante Capilar",
    descricao: "Procedimento cirúrgico que transplanta unidades foliculares da área doadora para regiões calvas. Técnica moderna (FUE), minimamente invasiva, com resultados naturais e permanentes. Indicado para calvície, alopecias e falhas capilares. Recupere o seu cabelo com segurança e eficácia."
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
          <div className="flex justify-center"> {/* Centralizado no mobile */}
            <a href="https://api.whatsapp.com/send?phone=5511930731230&text=Ol%C3%A1%20tenho%20uma%20duvida" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen text-lg mt-10">
                <FontAwesomeIcon icon={faWhatsapp} size='3x' color="whaite" />
                AGENDE SUA CONSULTA
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tratamentos;
