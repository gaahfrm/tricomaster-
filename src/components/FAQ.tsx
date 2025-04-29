
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quanto tempo dura a bateria do Tricomaster?",
    answer: "A bateria do Tricomaster possui autonomia de até 6 horas de uso contínuo. Além disso, é possível utilizar o aparelho conectado à tomada enquanto a bateria recarrega."
  },
  {
    question: "O Tricomaster é compatível com diferentes tipos de cabelo?",
    answer: "Sim! O Tricomaster foi desenvolvido para cortar com eficiência todos os tipos de cabelo, desde os mais finos até os mais grossos e crespos."
  },
  {
    question: "Qual a garantia do produto?",
    answer: "Oferecemos garantia de 12 meses contra defeitos de fabricação. Além disso, fornecemos suporte técnico especializado durante toda a vida útil do equipamento."
  },
  {
    question: "Como realizar a manutenção do Tricomaster?",
    answer: "A manutenção é simples: recomendamos limpar as lâminas após cada uso com a escova que acompanha o produto e aplicar o óleo lubrificante a cada 2-3 dias de uso. Para uma limpeza mais profunda, siga as instruções detalhadas no manual."
  },
  {
    question: "O Tricomaster é realmente 3x mais rápido?",
    answer: "Sim. Em testes controlados, o Tricomaster demonstrou ser até 3 vezes mais rápido que máquinas convencionais, graças ao seu motor de alta potência e ao design das lâminas de corte."
  },
  {
    question: "Vocês oferecem parcelamento?",
    answer: "Sim, oferecemos parcelamento em até 12x no cartão de crédito. Também disponibilizamos descontos especiais para pagamento à vista."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o Tricomaster
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <span className="text-left font-medium text-lg">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+5511999999999" 
              className="flex items-center text-tricomaster-red hover:underline"
            >
              <span className="font-medium">Ligar agora</span>
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="mailto:contato@tricomaster.com.br" 
              className="flex items-center text-tricomaster-red hover:underline"
            >
              <span className="font-medium">Enviar e-mail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
