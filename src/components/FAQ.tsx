
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer: "O tempo varia de acordo com a complexidade do projeto. Projetos simples podem levar de 2-4 semanas, enquanto soluções mais complexas podem levar de 2-6 meses."
    },
    {
      question: "Vocês oferecem suporte após o lançamento?",
      answer: "Sim! Oferecemos suporte contínuo e manutenção para todos os nossos projetos. Dependendo do plano escolhido, o suporte pode ser por email, prioritário ou 24/7."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. Seu acesso continuará até o final do período pago."
    },
    {
      question: "Vocês trabalham com tecnologias específicas?",
      answer: "Trabalhamos com as mais modernas tecnologias do mercado, incluindo React, Node.js, Python, e muitas outras. Sempre escolhemos a melhor tecnologia para cada projeto específico."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Nosso processo é dividido em etapas: descoberta e planejamento, design e prototipagem, desenvolvimento, testes e lançamento. Você acompanha cada etapa e recebe atualizações regulares."
    },
    {
      question: "É golpe?",
      answer: "Não xD"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Perguntas <span className="text-red-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-red-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
