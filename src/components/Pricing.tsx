
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "49",
      period: "/mês",
      description: "Ideal para pequenos projetos",
      features: [
        "1 projeto web",
        "Suporte por email",
        "Hospedagem básica",
        "SSL gratuito",
        "Backup semanal"
      ],
      popular: false
    },
    {
      name: "Profissional",
      price: "99",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "5 projetos web",
        "Suporte prioritário",
        "Hospedagem premium",
        "SSL gratuito",
        "Backup diário",
        "Analytics avançados",
        "Integração com APIs"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "149",
      period: "/mês",
      description: "Solução completa para grandes empresas",
      features: [
        "Projetos ilimitados",
        "Suporte 24/7",
        "Hospedagem dedicada",
        "SSL gratuito",
        "Backup em tempo real",
        "Analytics personalizados",
        "Integração completa",
        "Consultoria estratégica"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Escolha Seu <span className="text-red-600">Plano</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções flexíveis para todos os tamanhos de negócio. 
            Escolha o plano que melhor se adapta às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 flex flex-col min-h-[500px] ${
                plan.popular 
                  ? 'border-red-600/80 ring-2 ring-red-600/30' 
                  : 'border-gray-800 hover:border-red-600/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-red-600">R$ {plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  Começar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
