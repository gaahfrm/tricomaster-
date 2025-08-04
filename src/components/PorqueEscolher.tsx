
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Users, Clock } from 'lucide-react';

const PorqueEscolher = () => {
  const beneficios = [
    {
      icon: <Award className="h-12 w-12 text-tricomaster-green mb-4" />,
      titulo: "Experiência Comprovada",
      texto: "10+ anos de excelência em tratamentos capilares, com uma equipe altamente qualificada e especializada."
    },
    {
      icon: <Users className="h-12 w-12 text-tricomaster-green mb-4" />,
      titulo: "Equipe Especializada",
      texto: "Médicos Tricologistas e profissionais altamente qualificados, experientes, e dedicados ao seu tratamento."
    },
    {
      icon: <Clock className="h-12 w-12 text-tricomaster-green mb-4" />,
      titulo: "Acompanhamento Contínuo",
      texto: "Monitoramento constante do seu progresso, garantindo resultados efetivos e duradouros."
    }
  ];

  const perguntasFrequentes = [
    {
      pergunta: "Por que meu cabelo está caindo tanto?",
      resposta: "A queda de cabelo pode ter várias causas: estresse, ansiedade, alterações hormonais, genética, deficiência nutricional, pós-parto, dengue, covid, influenza, cirurgias, testosterona, esteróides, entre outras. Na TricoMaster, investigamos a fundo cada caso com avaliação médica especializada e exames para identificar a causa exata e tratar com precisão."
    },
    {
      pergunta: "Existe tratamento que realmente funcione?",
      resposta: "Sim! Medicamentos orais e tópicos prescritos pela médica Tricologista além dos nossos protocolos de tratamentos que são baseados em evidências científicas e combinam técnicas modernas como mesoterapia, laserterapia, MMP, exossomos, terapias capilares. Cada tratamento é adaptado à sua necessidade e monitorado de perto por toda equipe TricoMaster."
    },
    {
      pergunta: "Como é feita a consulta médica na TricoMaster?",
      resposta: "A consulta médica acontece por volta de 1 hora para entender todo o caso, é realizado um exame chamado tricoscopia digital de alta resolução e de extrema importância para análise do couro cabeludo e dos fios, e solicitado exames laboratoriais complementares se necessário. Com essas informações, criamos um plano de tratamento exclusivo e eficaz."
    },
    {
      pergunta: "Vou ser acompanhada por profissionais qualificados?",
      resposta: "Sim. A TricoMaster é uma clínica médica, com equipe formada por médicos especialistas em tricologia e profissionais capacitados em saúde capilar. Você será acompanhada com seriedade, ética e atenção em todas as etapas do tratamento."
    },
    {
      pergunta: "Quais tipos de tratamento vocês oferecem?",
      resposta: "Na TricoMaster, os tratamentos são personalizados de acordo com o diagnóstico de cada paciente. Utilizamos tecnologias avançadas e recursos modernos para estimular o crescimento dos fios, fortalecer o couro cabeludo e controlar a queda de forma eficaz. Cada protocolo é desenvolvido de maneira exclusiva, respeitando as necessidades e características individuais de cada pessoa."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-green">PORQUE ESCOLHER A TRICOMASTER</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A TricoMaster é uma clínica em que a equipe está verdadeiramente comprometida com o seu bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {beneficios.map((beneficio, index) => (
            <Card key={index} className="border-t-4 border-t-tricomaster-green shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto">
              <CardContent className="pt-6 text-center flex flex-col items-center">
                <div className="flex justify-center">
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-tricomaster-gray">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.texto}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 mb-16">
          <h3 className="text-2xl font-bold text-tricomaster-green mb-6 text-center">Perguntas Frequentes</h3>
          <div className="max-w-3xl mx-auto">
            {perguntasFrequentes.map((item, idx) => (
              <div key={idx} className="mb-4 border-b border-gray-200">
                <button
                  className="w-full text-left py-3 px-4 font-semibold text-tricomaster-gray focus:outline-none flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                >
                  {item.pergunta}
                  <span className={`ml-2 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="px-4 pb-4 text-gray-700 text-base">
                    {item.resposta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-tricomaster-green py-8 px-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-lg">Anos de experiência</p>
            </div>
            <div className="hidden md:block h-16 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">9.000+</div>
              <p className="text-lg">Pacientes atendidos</p>
            </div>
            <div className="hidden md:block h-16 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-lg">Taxa de satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorqueEscolher;
