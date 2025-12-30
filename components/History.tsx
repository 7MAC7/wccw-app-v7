
import React from 'react';
import { HISTORY_DOCS } from '../constants';

const History: React.FC = () => {
  return (
    <div className="p-6 animate-fadeIn pb-24 bg-stone-50">
      <div className="mb-10 px-2">
        <h2 className="text-2xl font-black text-stone-900 leading-tight">Truth of History</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="w-8 h-[2px] bg-red-800"></span>
          <p className="text-red-900 text-[10px] uppercase font-black tracking-widest italic">지워지지 않는 진실의 기록</p>
        </div>
      </div>

      <div className="space-y-10">
        {HISTORY_DOCS.map((doc) => (
          <div key={doc.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-stone-200">
            <div className="relative aspect-[4/3] bg-stone-200">
              <img 
                src={doc.imageUrl} 
                alt={doc.title} 
                className="w-full h-full object-cover grayscale sepia-[0.3]"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                <p className="text-[9px] text-white/80 font-bold uppercase tracking-widest">{doc.source}</p>
              </div>
            </div>
            
            <div className="p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-black text-stone-900 leading-snug">
                  {doc.title}
                </h3>
              </div>
              
              <div className="h-px w-12 bg-stone-200"></div>
              
              <p className="text-[14px] text-stone-600 leading-relaxed font-medium">
                {doc.description}
              </p>
              
              <div className="pt-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span className="text-[10px] text-red-900 font-bold uppercase tracking-tight">Evidence of War Crime</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-[2rem] bg-stone-900 text-stone-100">
        <h4 className="font-black text-lg mb-4">"반성없이는 용서도 없다"</h4>
        <p className="text-stone-400 text-xs leading-relaxed font-medium">
          역사적 사료는 고통스러운 기억일지라도 진실을 증명하는 강력한 무기입니다. 워싱턴 정대위는 이러한 기록을 보존하고 교육함으로써 다시는 이러한 비극이 반복되지 않도록 노력하고 있습니다.
        </p>
      </div>
      
      <div className="text-center py-10 opacity-30">
        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-stone-400">Never Forget 1931-1945</p>
      </div>
    </div>
  );
};

export default History;
