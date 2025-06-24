
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Premium",
      description: "Plataforma completa de vendas online com pagamentos integrados e dashboard administrativo.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "App de Gestão",
      description: "Sistema de gerenciamento empresarial com controle de estoque, vendas e relatórios avançados.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Python", "PostgreSQL", "AWS"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Landing Page Corporativa",
      description: "Website institucional moderno com animações e design responsivo para empresa de tecnologia.",
      image: "/placeholder.svg",
      tags: ["React", "Tailwind", "Framer Motion"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Sistema de Reservas",
      description: "Aplicação para agendamento online com calendário interativo e notificações automáticas.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Firebase", "Tailwind"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nosso <span className="text-red-600">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos que você irá desenvolver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.demoUrl}
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-red-600/10 text-red-600 text-sm rounded-full border border-red-600/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
