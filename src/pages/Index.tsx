
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import VideoDemo from '@/components/VideoDemo';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Services />
      <About />
      <VideoDemo />
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="text-red-600">Sorcery</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Transformando ideias em realidade digital
            </p>
            <div className="border-t border-gray-800 pt-4">
              <p className="text-sm text-gray-500">
                © 2024 Sorcery. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
