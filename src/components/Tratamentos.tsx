
import React from 'react';
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Card, CardContent } from "@/components/ui/card";

const tratamentos = [
  {
    imagem: "/uploads/Tratamento-mesoterapia-capilar.webp",
    nome: "Mesoterapia Capilar",
    descricao: "Sofrendo com queda ou afinamento dos fios? A mesoterapia entrega nutrientes direto no couro cabeludo, estimulando o crescimento e fortalecendo os cabelos. Ideal para quem já tentou de tudo e não vê resultado."
  },
  {
    imagem: "/uploads/Tratamento-laserterapia-capilar.webp",
    nome: "Laserterapia Capilar",
    descricao: "Cansado de ver o cabelo cair? A laserterapia é indolor e estimula o crescimento dos fios, melhora a circulação e fortalece o couro cabeludo. Para quem busca solução sem dor e sem cirurgia."
  },
  {
    imagem: "/uploads/Tratamento-mmp.webp",
    nome: "MMP - Microinfusão de Medicamentos",
    descricao: "Perdendo densidade ou falhando após transplante? O MMP aplica medicamentos direto no couro cabeludo, aumentando a densidade e estimulando novos fios. Para quem quer resultado rápido e seguro."
  },
  {
    imagem: "/uploads/3dd7de97-aff9-40af-88e2-a4bdef2699ca.png",
    nome: "Drug Delivery Digital",
    descricao: "Nada funciona para sua queda? O Drug Delivery Digital aplica ativos com precisão e controle digital, potencializando o tratamento e estimulando o crescimento capilar. Procedimento indolor para quem busca tecnologia e resultado."
  },
  {
    imagem: "/uploads/23d96741-a2b9-47e8-b97a-d5cc123f8545.png",
    nome: "Ozonioterapia e Terapias Capilares",
    descricao: "Couro cabeludo inflamado, oleoso ou com caspa? A ozonioterapia oxigena, ativa a circulação e combate inflamações, fortalecendo os fios e promovendo crescimento saudável. Para quem quer tratar a raiz do problema."
  },
  {
    imagem: "/uploads/ba.webp",
    nome: "Transplante Capilar",
    descricao: "Calvície avançada ou falhas que incomodam? O transplante capilar recupera áreas calvas com técnica moderna e resultados naturais. Para quem quer voltar a ter cabelo de verdade."
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
