
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-tricomaster-gray to-white">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h1 className="heading-xl mb-6 tracking-tight">
              Corte <span className="text-tricomaster-red">3x mais</span> cabelo em menos tempo
            </h1>
            <p className="text-xl mb-8 text-gray-700 max-w-xl">
              O Tricomaster é a máquina de cortar cabelo profissional que vai revolucionar o seu salão, otimizando o tempo e aumentando sua produtividade.
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                'Até 3x mais rápido que as máquinas convencionais',
                'Design ergonômico para maior conforto',
                'Sistema de lâminas de alta durabilidade'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-tricomaster-red mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Comprar agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-outline">
                Saiba mais
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-tricomaster-red rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-tricomaster-red rounded-full opacity-20 blur-xl"></div>
              <div className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
                  alt="Tricomaster em uso"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute bottom-8 right-8 bg-tricomaster-red text-white py-2 px-4 rounded-full font-bold shadow-lg">
                  30% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
