
import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Aguardar a transição CSS completar antes de chamar onComplete
      setTimeout(() => {
        onComplete();
      }, 800); // Reduzido para sincronizar melhor
    }, 2000); // Reduzido o tempo inicial

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-800 ease-in-out ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        // Garantir que o componente permaneça renderizado durante toda a transição
        pointerEvents: fadeOut ? 'none' : 'auto',
        // Forçar o background preto para evitar flash branco
        backgroundColor: '#000000'
      }}
    >
      <img 
        src="/SorceryLogo.png"
        alt="Sorcery Logo"
        className="w-64 h-auto animate-pulse"
      />
    </div>
  );
};

export default SplashScreen;
