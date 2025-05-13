
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-green">QUEM SOMOS</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <img
              src="/tricomaster/lovable-uploads/eaa05ead-0348-4ece-a115-06c56a3dc6af.png"
              alt="Profissional da TricoMaster realizando tratamento"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-tricomaster-gray mb-4">
              A solução para sua Queda de Cabelo está na TricoMaster Medicina Capilar
            </h3>

            <p className="text-gray-700">
              A TricoMaster é a sua melhor escolha quando se trata de lidar com a queda de cabelo. Compreendemos que esse desafio pode afetar não apenas a sua aparência física, mas também o seu bem-estar emocional. Estamos aqui para apoiá-lo nessa jornada de autoconfiança e autoestima.
            </p>

            <p className="text-gray-700">
              Nossa clínica médica é uma referência em Tricologia, com uma experiência sólida de mais de uma década. Nossa equipe é formada por especialistas altamente qualificados em Tricologia, apaixonados por proporcionar a você o tratamento que você merece.
            </p>

            <p className="text-gray-700">
              Na TricoMaster Medicina Capilar, não somos apenas uma clínica de tratamento capilar comum. Vamos além, investigando a fundo a raiz do seu problema. Seja queda de cabelo, calvície, alopecia areata, alopecia cicatricial, dermatite seborreica, caspa, oleosidade, ou qualquer outra condição capilar, nossa equipe médica experiente e dedicada oferece soluções abrangentes e personalizadas para todas as idades.
            </p>

            <p className="text-gray-700">
              Confie em nós para cuidarmos da sua saúde, elevar sua autoestima e realçar a beleza do seu cabelo. Na TricoMaster, o seu bem-estar é nossa prioridade número um.
            </p>
            <div className="flex justify-center lg:justify-start"> {/* Centralizado no mobile */}
              <a href="https://api.whatsapp.com/send?phone=5511930731230&text=Ol%C3%A1%20tenho%20uma%20duvida" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary bg-tricomaster-green hover:bg-tricomaster-darkgreen text-lg mt-10">
                  <FontAwesomeIcon icon={faWhatsapp} size='3x' color="whaite" />
                  AGENDE SUA CONSULTA
                </Button>
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default QuemSomos;
