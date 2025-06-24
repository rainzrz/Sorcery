
import { Search, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Descoberta",
      description: "Entendemos profundamente seu negócio, objetivos e necessidades específicas para criar a solução perfeita."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Criamos protótipos e designs únicos que refletem a identidade da sua marca e oferecem a melhor experiência do usuário."
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Transformamos o design em código limpo e eficiente, utilizando as melhores práticas e tecnologias modernas."
    },
    {
      icon: Rocket,
      title: "Lançamento",
      description: "Realizamos testes rigorosos e lançamos seu projeto com suporte completo para garantir o sucesso."
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
