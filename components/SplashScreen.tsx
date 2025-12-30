
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade out animation to finish
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-indigo-950 flex flex-col items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      <div className="relative flex flex-col items-center text-center px-8">
        <div className="mb-8 relative">
          <div className="w-24 h-24 text-white animate-[bounce_3s_infinite] flex items-center justify-center">
             <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-[pulse_2s_infinite]" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2c-.5 0-1 .5-1 1s.5 1 1 1c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2-.5-1-1-1-1 .5-1 1c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4zm-7 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 1-.5 1-1-.5-1-1-1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2 .5 1 1 1 1-.5 1-1c0-2.2-1.8-4-4-4zm14 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 1-.5 1-1-.5-1-1-1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2 .5 1 1 1 1-.5 1-1c0-2.2-1.8-4-4-4z" />
             </svg>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center font-black text-white/40 pointer-events-none">
            <span className="absolute -top-6 -left-6 text-sm animate-[ping_2s_infinite] [animation-delay:0s]">W</span>
            <span className="absolute -top-4 -right-10 text-xs animate-[ping_2.2s_infinite] [animation-delay:0.5s]">C</span>
            <span className="absolute -bottom-8 -left-12 text-xs animate-[ping_2.4s_infinite] [animation-delay:1s]">C</span>
            <span className="absolute -bottom-6 -right-6 text-sm animate-[ping_2.6s_infinite] [animation-delay:1.5s]">W</span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-black text-white tracking-tight animate-[fadeIn_1s_ease-out_forwards]">
            워싱턴 정대위
          </h1>
          <div className="h-px w-12 bg-indigo-400 mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]"></div>
          <p className="text-indigo-200 text-xs font-bold uppercase tracking-[0.4em] opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
            Fly High for Justice
          </p>
          <p className="text-indigo-100 text-[10px] italic opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
            정의를 향한 희망의 날갯짓
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-white animate-[loading_2.5s_ease-in-out_forwards]"></div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loading {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
