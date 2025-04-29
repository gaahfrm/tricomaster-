
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Oliveira",
    role: "Proprietário de Barbearia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    content: "Depois que comecei a usar o Tricomaster, consigo atender até 30% mais clientes por dia. O investimento se pagou em menos de dois meses!",
    stars: 5
  },
  {
    name: "Amanda Silva",
    role: "Cabeleireira",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    content: "A ergonomia do Tricomaster permite que eu trabalhe o dia inteiro sem sentir dores nos pulsos como acontecia com outras máquinas.",
    stars: 5
  },
  {
    name: "Roberto Santos",
    role: "Barbeiro",
    image: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?auto=format&fit=crop&q=80&w=200",
    content: "A precisão das lâminas do Tricomaster é impressionante! Consigo fazer acabamentos perfeitos em muito menos tempo.",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-b from-white to-tricomaster-gray">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profissionais que já transformaram seus negócios com o Tricomaster
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl flex flex-col md:flex-row items-center shadow-md">
            <div className="md:mr-6 mb-4 md:mb-0 flex-shrink-0">
              <div className="bg-tricomaster-red rounded-full h-16 w-16 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">4.9</span>
              </div>
            </div>
            <div>
              <div className="flex space-x-1 mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="font-medium">Classificação média de 4.9/5 baseada em mais de 500 avaliações de clientes reais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
