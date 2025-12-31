
import React from 'react';
import { MOCK_NEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="p-5 space-y-8 animate-fadeIn relative overflow-hidden">
      {/* Decorative Butterflies */}
      <div className="absolute top-10 right-[-20px] text-3xl opacity-20 animate-butterfly-float pointer-events-none">🦋</div>
      <div className="absolute top-80 left-[-10px] text-2xl opacity-10 animate-butterfly-float-slow pointer-events-none">🦋</div>

      {/* Banner */}
      <div className="relative h-[480px] bg-stone-900 rounded-[2.5rem] overflow-hidden flex items-end p-8 shadow-2xl border border-white/10 group">
        <img 
          src="소녀상2.jpg" 
          alt="평화의 소녀상" 
          className="absolute inset-0 w-full h-full object-cover object-[center_top] transition-transform duration-[20s] ease-out group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80";
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay"></div>
        
        <div className="relative z-10 text-white w-full space-y-6">
          <div className="space-y-3">
            <div className="space-y-1 mb-1 ml-0.5">
              <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] leading-none opacity-80">
                Washington Coalition
              </p>
              <p className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em] leading-none">
                for Comfort Women
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                Est. 1992
              </span>
              <div className="h-px w-8 bg-white/30"></div>
              <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">Washington D.C.</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-[34px] font-black leading-[1.05] drop-shadow-[0_4px_12_rgba(0,0,0,0.9)] tracking-tight">
              역사를 잊은<br/>
              민족에게 <span className="text-indigo-300 italic">미래는</span><br/>
              없습니다
            </h2>
            <p className="text-[16px] font-bold text-indigo-100/90 leading-tight drop-shadow-md italic tracking-tight">
              A nation that forgets its history<br/>has no future.
            </p>
          </div>
          
          <div className="space-y-1.5 pt-2">
            <p className="text-[13px] font-medium text-gray-200 leading-relaxed max-w-[280px] drop-shadow-md">
              워싱턴 정대위는 32년째 미주 지역에서 정의를 위한 행진을 멈추지 않고 있습니다.
            </p>
            <p className="text-[11px] font-medium text-gray-400 leading-tight max-w-[280px] drop-shadow-md uppercase tracking-tight opacity-70">
              WCCW has been marching for justice and human rights in the U.S. for over 32 years.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatCard label="활동 기간 DURATION" value="32Y+" color="text-indigo-600" />
        <StatCard label="핵심 성과 IMPACT" value="HR 121" color="text-pink-600" />
      </div>

      <section className="pt-4">
        <div className="flex justify-between items-end mb-6 px-1">
          <div>
            <h3 className="text-2xl font-black text-gray-900 leading-none tracking-tight">Latest Story</h3>
            <p className="text-[10px] text-indigo-500 font-bold uppercase mt-2 tracking-[0.2em]">활동 소식</p>
          </div>
          <button className="text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">See All</button>
        </div>
        <div className="space-y-4">
          {MOCK_NEWS.map((news) => (
            <div key={news.id} className="flex gap-4 group cursor-pointer bg-white p-4 rounded-[2.5rem] border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-[1.8rem] overflow-hidden flex-shrink-0 shadow-inner bg-gray-50 border border-gray-50">
                <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-center flex-1 pr-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  <span className="text-[10px] text-indigo-500 font-black uppercase tracking-tighter">{news.date}</span>
                </div>
                <h4 className="font-extrabold text-[16px] text-gray-900 line-clamp-1 group-hover:text-indigo-600 transition-colors leading-snug">{news.title}</h4>
                <p className="text-[12px] text-gray-500 line-clamp-2 mt-1 leading-relaxed font-medium">{news.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kakao Quick Connect Section */}
      <section 
        onClick={() => window.open('https://pf.kakao.com/wccw1992', '_blank')}
        className="bg-[#FEE500] p-6 rounded-[2.5rem] flex items-center justify-between cursor-pointer active:scale-95 transition-all shadow-md group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#3C1E1E] text-[#FEE500] rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.712 4.81 4.348 6.151l-.869 3.204c-.124.457.153.605.394.444l4.034-2.693c.356.05.719.079 1.093.079 4.97 0 9-3.186 9-7.115S16.97 3 12 3z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-black text-[#3C1E1E] text-[15px] leading-tight tracking-tight">정대위와 카톡하기</h4>
            <p className="text-[11px] text-[#3C1E1E]/60 font-bold uppercase tracking-widest mt-0.5">KakaoTalk Channel</p>
          </div>
        </div>
        <div className="w-10 h-10 bg-[#3C1E1E]/5 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-[#3C1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
        </div>
      </section>

      <section className="relative rounded-[3rem] p-12 overflow-hidden shadow-2xl bg-indigo-600 text-white group mt-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <div className="text-5xl animate-butterfly-float drop-shadow-lg">🦋</div>
          <div className="space-y-2">
            <h3 className="font-black text-2xl leading-none tracking-tight uppercase">The Butterfly Fund</h3>
            <p className="text-[13px] text-indigo-100 leading-relaxed opacity-90 font-medium">
              나비의 날갯짓이 평화의 물결이 됩니다.<br/>전 세계 전시 성폭력 피해 생존자들과 함께해주세요.
            </p>
          </div>
          <button className="bg-white text-indigo-600 font-black py-4 px-10 rounded-2xl shadow-2xl hover:bg-indigo-50 active:scale-95 transition-all text-[11px] uppercase tracking-[0.2em]">
            나비기금 후원하기
          </button>
        </div>
      </section>
      
      <div className="text-center py-10">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">© 1992 WCCW ISSUES INC.</p>
      </div>

      <style>{`
        @keyframes butterfly-float {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -20px) rotate(10deg); }
          66% { transform: translate(-5px, -40px) rotate(-10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-butterfly-float {
          animation: butterfly-float 8s ease-in-out infinite;
        }
        .animate-butterfly-float-slow {
          animation: butterfly-float 12s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; color: string }> = ({ label, value, color }) => (
  <div className="bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.15em] mb-2">{label}</p>
    <p className={`text-[28px] font-black ${color} tracking-tighter`}>{value}</p>
  </div>
);

export default Home;
