
import React from 'react';
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
      icon: <Star className="h-12 w-12 text-tricomaster-green mb-4" />,
      titulo: "Tecnologia Avançada",
      texto: "Equipamentos de ponta para diagnósticos precisos e tratamentos eficazes personalizados."
    },
    {
      icon: <Users className="h-12 w-12 text-tricomaster-green mb-4" />,
      titulo: "Equipe Especializada",
      texto: "Médicos tricologistas e profissionais altamente experientes, dedicados ao seu tratamento."
    },
    {
      icon: <Clock className="h-12 w-12 text-tricomaster-green mb-4" />,
      titulo: "Acompanhamento Contínuo",
      texto: "Monitoramento constante do seu progresso, garantindo resultados efetivos e duradouros."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-green">PORQUE ESCOLHER A TRICOMASTER</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A TricoMaster é uma clínica em que a equipe está verdadeiramente comprometida com o seu bem-estar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <Card key={index} className="border-t-4 border-t-tricomaster-green shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center">
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-tricomaster-gray">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.texto}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-tricomaster-green py-8 px-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-lg">Anos de experiência</p>
            </div>
            <div className="hidden md:block h-16 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5.000+</div>
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
