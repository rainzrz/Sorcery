
import { Video } from 'lucide-react';

const VideoDemo = () => {
  const videoUrl = 'https://www.youtube.com/embed/PJhjXqwA_48';
  
  return (
    <section id="video-demo" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Veja Nossa <span className="text-red-600">Magia</span> em Ação
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra como transformamos ideias em soluções digitais extraordinárias. 
            Assista nossa demonstração e veja o que podemos fazer pelo seu negócio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={videoUrl}
                title="Demonstração Sorcery"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
