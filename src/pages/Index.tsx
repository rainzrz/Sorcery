
import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import VideoDemo from '@/components/VideoDemo';
import FAQ from '@/components/FAQ';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {!showSplash && (
        <>
          <Navigation />
          <Hero />
          <Services />
          <About />
          <Process />
          <Portfolio />
          <Pricing />
          <VideoDemo />
          <FAQ />
          <WhatsAppWidget />
          
          {/* Footer */}
          <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src="/SorceryLogo.png"
                    alt="Sorcery Logo"
                    className="h-8 w-auto mr-3"
                  />
                  <h3 className="text-2xl font-bold text-white">
                    <span className="text-red-600"></span>
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Transformando ideias em realidade digital
                </p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-sm text-gray-500">
                    © 2025 Sorcery. Todos os direitos reservados.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
