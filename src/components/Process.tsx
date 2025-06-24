
import { Search, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Descoberta",
      description: "Vamos te ensinar a fazer uma boa análise inicial: entender o problema, definir objetivos claros e identificar as necessidades do cliente ou usuário."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Você vai aprender a criar protótipos e interfaces que valorizam a experiência do usuário, combinando estética com funcionalidade"
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Vamos te mostrar como transformar o design em um projeto real. Aqui você vai criar interfaces modernas com boas práticas, performance e organização."
    },
    {
      icon: Rocket,
      title: "Lançamento",
      description: "Vamos te ensinar a testar o projeto, corrigir possíveis falhas e publicar sua aplicação de forma segura."
    }
  ];

  return (
    <section id="process" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nosso <span className="text-red-600">Processo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma metodologia comprovada que transforma suas ideias em soluções digitais excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600/20 transition-colors duration-300 border-2 border-red-600/30">
                  <step.icon className="w-10 h-10 text-red-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-600 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
