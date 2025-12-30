
import React from 'react';
import { TIMELINE_DATA } from '../constants';

const Archive: React.FC = () => {
  return (
    <div className="p-6 animate-fadeIn pb-24">
      <div className="mb-10 px-2">
        <h2 className="text-2xl font-black text-gray-900 leading-tight">History Archive</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="w-8 h-[2px] bg-indigo-600"></span>
          <p className="text-indigo-500 text-[10px] uppercase font-black tracking-widest">워싱턴 정대위 활동의 발자취</p>
        </div>
      </div>

      <div className="relative border-l-2 border-indigo-100 ml-4 space-y-12">
        {TIMELINE_DATA.map((event, index) => (
          <div key={index} className="relative pl-10">
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-white border-4 border-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.3)] z-10"></div>
            
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest">
                  {event.year}
                </span>
                <svg className="w-5 h-5 text-gray-200 group-hover:text-indigo-200 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              
              <h3 className="text-[17px] font-black text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">
                {event.title}
              </h3>
              
              <div className="h-px w-full bg-gray-50 my-4"></div>
              
              <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center px-8">
        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em]">
          Justice & Peace for All
        </p>
        <div className="flex justify-center gap-1.5 mt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-100"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
