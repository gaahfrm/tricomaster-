
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Dados dos depoimentos
const depoimentos = [
  {
    id: 1,
    imagem: "/lovable-uploads/4fa306bb-9b2d-42ef-808e-742244fe7a9b.png",
    texto: "A equipe da TricoMaster mudou minha vida. Depois de anos tentando diversos tratamentos sem sucesso, finalmente encontrei uma solução eficaz para minha calvície.",
    nome: "Ricardo Costa",
    tempo: "Paciente há 1 ano",
    iniciais: "RC"
  },
  {
    id: 2,
    imagem: "/lovable-uploads/5de41773-311b-4410-9c41-e7cf98986a4a.png",
    texto: "Os resultados superaram minhas expectativas. Em apenas 4 meses, já notei uma diferença incrível na densidade e qualidade do meu cabelo.",
    nome: "Marina Silva",
    tempo: "Paciente há 6 meses",
    iniciais: "MS"
  },
  {
    id: 3,
    imagem: "/lovable-uploads/2070e055-e113-4f97-9ebd-c51d7c92cf59.png",
    texto: "Após apenas três sessões de tratamento, percebi uma redução significativa na queda de cabelo. Estou muito satisfeito com os resultados!",
    nome: "Paulo Mendes",
    tempo: "Paciente há 3 meses",
    iniciais: "PM"
  }
];

const Resultados = () => {
  // Estado para controlar qual imagem está sendo exibida
  const [imagemAtual, setImagemAtual] = useState(depoimentos[0]);

  // Função para alterar a imagem quando um card for clicado
  const alterarImagem = (depoimento) => {
    setImagemAtual(depoimento);
  };

  return (
    <section id="resultados" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-green">RESULTADOS COMPROVADOS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confira a transformação na vida dos nossos pacientes
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Imagem principal à esquerda */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300">
              <img 
                src={imagemAtual.imagem}
                alt="Resultado do tratamento capilar" 
                className="w-full h-auto rounded-lg"
              />
              
              <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#7ca82f" className="mr-1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-700 font-medium">5/5</span>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{imagemAtual.texto}"
                </p>
              </div>
            </div>
          </div>
          
          {/* Cards à direita */}
          <div className="lg:w-1/3 space-y-6">
            {depoimentos.map((depoimento) => (
              <Card 
                key={depoimento.id}
                className={`bg-gray-100 p-6 rounded-lg border-l-4 ${imagemAtual.id === depoimento.id ? 'border-tricomaster-green bg-gray-200' : 'border-gray-300'} shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg`}
                onClick={() => alterarImagem(depoimento)}
              >
                <CardContent className="p-0">
                  <p className="text-gray-700 italic mb-4">
                    "{depoimento.texto}"
                  </p>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full ${imagemAtual.id === depoimento.id ? 'bg-tricomaster-green' : 'bg-tricomaster-gray'} flex items-center justify-center text-white font-bold transition-colors duration-200`}>
                      {depoimento.iniciais}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">{depoimento.nome}</h4>
                      <p className="text-sm text-gray-500">{depoimento.tempo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultados;
