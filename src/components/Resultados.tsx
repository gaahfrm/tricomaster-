
import React from 'react';

const Resultados = () => {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tricomaster-green">RESULTADOS COMPROVADOS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confira a transformação na vida dos nossos pacientes
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img 
                src="/lovable-uploads/4fa306bb-9b2d-42ef-808e-742244fe7a9b.png"
                alt="Antes e depois tratamento capilar" 
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
                  "Após 6 meses de tratamento, recuperei não só meu cabelo mas minha autoconfiança. Obrigado TricoMaster!"
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-tricomaster-green shadow-md">
              <p className="text-gray-700 italic mb-4">
                "A equipe da TricoMaster mudou minha vida. Depois de anos tentando diversos tratamentos sem sucesso, finalmente encontrei uma solução eficaz para minha calvície."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-tricomaster-green flex items-center justify-center text-white font-bold">
                  RC
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Ricardo Costa</h4>
                  <p className="text-sm text-gray-500">Paciente há 1 ano</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-tricomaster-green shadow-md">
              <p className="text-gray-700 italic mb-4">
                "Os resultados superaram minhas expectativas. Em apenas 4 meses, já notei uma diferença incrível na densidade e qualidade do meu cabelo."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-tricomaster-green flex items-center justify-center text-white font-bold">
                  MS
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Marina Silva</h4>
                  <p className="text-sm text-gray-500">Paciente há 6 meses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultados;
