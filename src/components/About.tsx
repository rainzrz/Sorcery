
import { Target, Users, Trophy, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Clientes Satisfeitos" },
    { icon: Trophy, number: "100+", label: "Projetos Concluídos" },
    { icon: Lightbulb, number: "5+", label: "Anos de Experiência" },
    { icon: Target, number: "99%", label: "Taxa de Sucesso" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Sobre a <span className="text-red-600">Sorcery</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
Na Sorcery, acreditamos no poder da tecnologia para transformar negócios e criar experiências digitais extraordinárias. Nossa equipe trabalha unida para dar vida à sua visão.
</p>

<p>
Fundada nos princípios de inovação, prática e simplicidade, temos ajudado pessoas a navegarem no cenário digital com soluções de ponta que impulsionam o crescimento e o sucesso.
</p>

<p>
Agora, estamos indo além: vamos ensinar você, mesmo que não saiba nada de programação ou tecnologia, a desenvolver projetos digitais completos do zero. Do primeiro clique até a entrega final, você será guiado passo a passo em uma jornada prática e estruturada.
</p>

<p>
E você não estará sozinho, vamos utilizar inteligência artificial como professor particular durante todo o processo, otimizando tarefas, acelerando aprendizados e ampliando suas possibilidades criativas.
</p>

<p>
Nossa abordagem combina expertise técnica, pensamento criativo e ferramentas inteligentes, garantindo que cada projeto que empreendemos, cada pessoa que formamos. 
</p>

<p>
Esteja pronto para o futuro.
</p>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
