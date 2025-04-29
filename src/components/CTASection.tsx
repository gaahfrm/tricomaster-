
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-tricomaster-black">
      <div className="container-section">
        <div className="bg-gradient-to-r from-tricomaster-red to-red-800 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="heading-lg text-white mb-4">
                Pronto para aumentar sua produtividade?
              </h2>
              <p className="text-white/90 text-lg max-w-xl mb-6">
                Adquira hoje mesmo o Tricomaster e revolucione seu salão. Oferecemos garantia de 30 dias ou seu dinheiro de volta.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Check className="h-4 w-4 text-white mr-2" />
                  <span className="text-white font-medium">Frete Grátis</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Check className="h-4 w-4 text-white mr-2" />
                  <span className="text-white font-medium">Garantia de 1 ano</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Check className="h-4 w-4 text-white mr-2" />
                  <span className="text-white font-medium">Parcelamento em 12x</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="mb-4">
                  <div className="text-gray-500 text-sm mb-1">De <span className="line-through">R$ 1.999,00</span></div>
                  <div className="flex items-baseline">
                    <span className="text-tricomaster-red text-xl font-medium">Por apenas</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-tricomaster-red text-5xl font-bold">R$ 1.499</span>
                    <span className="text-gray-600 ml-1">,00</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">ou 12x de R$ 124,92 sem juros</div>
                </div>
                <Button className="w-full bg-tricomaster-red hover:bg-red-700 text-lg py-6">
                  Comprar agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="mt-4 flex justify-center">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                    <span className="text-sm text-gray-600">Compra 100% segura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
