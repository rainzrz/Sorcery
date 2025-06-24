
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                FAQ
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex justify-center flex-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-red-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-red-600/20">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-300 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
