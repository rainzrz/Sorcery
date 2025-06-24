
import { Code, Cpu, Shield, Smartphone, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Personalizado",
      description: "Soluções de software sob medida construídas com tecnologias de ponta para atender suas necessidades únicas de negócio."
    },
    {
      icon: Cpu,
      title: "IA & Machine Learning",
      description: "Aproveite o poder da inteligência artificial para automatizar processos e desbloquear insights valiosos."
    },
    {
      icon: Shield,
      title: "Cibersegurança",
      description: "Soluções de segurança abrangentes para proteger seus ativos digitais e manter a confiança dos clientes."
    },
    {
      icon: Smartphone,
      title: "Aplicações Mobile",
      description: "Apps nativos e multiplataforma que oferecem experiências excepcionais ao usuário."
    },
    {
      icon: Globe,
      title: "Soluções Web",
      description: "Aplicações web modernas e responsivas que crescem junto com o seu negócio."
    },
    {
      icon: Zap,
      title: "Transformação Digital",
      description: "Consultoria estratégica em tecnologia para modernizar suas operações e impulsionar a inovação."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nossos Serviços <span className="text-red-600">Mágicos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Criamos soluções digitais que expandem os limites do possível, 
            transformando sua visão em realidade com precisão e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
