
import React from 'react';

const Support: React.FC = () => {
  // 모든 후원 및 문의 클릭 시 이메일 연결
  const handleContactClick = () => {
    window.location.href = 'mailto:wccwcontact@gmail.com';
  };

  // 카카오톡 채널 연결 (공식 ID wccw1992 사용)
  const handleKakaoClick = () => {
    window.open('https://pf.kakao.com/wccw1992', '_blank');
  };

  return (
    <div className="p-6 animate-fadeIn space-y-6 pb-32">
      <section className="text-center mb-8">
        <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800 leading-tight">Your Support Matters<br/>따뜻한 마음을 나누어주세요</h2>
        <p className="text-gray-500 text-[11px] mt-3 leading-relaxed px-4">당신의 후원은 미주 지역 역사 교육과<br/>피해자들의 명예 회복을 위해 소중히 사용됩니다.</p>
      </section>

      <div className="grid grid-cols-1 gap-4">
        {/* KakaoTalk Support Card */}
        <button 
          onClick={handleKakaoClick}
          className="relative w-full text-left p-6 rounded-[2rem] shadow-lg overflow-hidden group active:scale-[0.97] transition-all bg-[#FEE500]"
        >
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex-1 pr-4">
              <h3 className="font-black text-base text-[#3C1E1E] leading-none">KakaoTalk Consultation</h3>
              <p className="text-[11px] font-bold mt-1 text-[#3C1E1E]/60 uppercase tracking-tighter flex items-center gap-1">
                카카오톡 1:1 상담 및 문의
              </p>
              <p className="text-[11px] text-[#3C1E1E]/80 mt-2 leading-relaxed font-medium">실시간으로 정대위 활동과 후원 안내를 받으실 수 있습니다.</p>
            </div>
            <div className="w-12 h-12 bg-[#3C1E1E] rounded-2xl flex items-center justify-center text-[#FEE500] flex-shrink-0 shadow-xl group-hover:rotate-12 transition-transform">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.712 4.81 4.348 6.151l-.869 3.204c-.124.457.153.605.394.444l4.034-2.693c.356.05.719.079 1.093.079 4.97 0 9-3.186 9-7.115S16.97 3 12 3z"/>
              </svg>
            </div>
          </div>
        </button>

        <DonationCard 
          title="Support WCCW Advocacy" 
          subTitle="워싱턴 활동 정기 후원"
          desc="미주 지역의 핵심 교육 및 홍보 프로그램을 후원합니다."
          color="bg-indigo-600"
          bgImage="https://images.unsplash.com/photo-1541441244301-2e6f49497e68?auto=format&fit=crop&w=400&q=80"
          onClick={handleContactClick}
        />
        
        <DonationCard 
          title="The Butterfly Fund" 
          subTitle="나비기금 참여"
          desc="전 세계 전시 성폭력 피해 생존자들을 직접 돕습니다."
          color="bg-amber-500"
          bgImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80"
          onClick={handleContactClick}
        />
      </div>

      <div className="bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm mt-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <h3 className="relative z-10 font-black text-gray-800 mb-6 border-b border-gray-50 pb-3 flex justify-between items-center text-sm">
          <span>How to Give / 후원 방법</span>
          <span className="text-[9px] text-indigo-600 font-bold uppercase bg-indigo-50 px-2 py-0.5 rounded tracking-widest">Tax Deductible</span>
        </h3>
        <div className="relative z-10 space-y-5">
          <div className="flex flex-col">
            <span className="text-gray-400 font-black text-[9px] uppercase mb-1 tracking-widest">Payable to</span>
            <span className="font-bold text-gray-800 text-xs">WCCW (Washington Coalition for Comfort Women Issues)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-black text-[9px] uppercase mb-1 tracking-widest">Mailing Address</span>
            <span className="font-medium text-gray-600 text-[11px] leading-relaxed">자세한 주소는 이메일이나 카카오톡으로 문의해 주시기 바랍니다.</span>
          </div>
          <div className="pt-2">
            <button 
              onClick={handleContactClick}
              className="w-full py-4.5 bg-gray-900 text-white text-[11px] font-black rounded-2xl shadow-xl active:scale-95 hover:bg-black transition-all uppercase tracking-[0.2em]"
            >
              Email: wccwcontact@gmail.com
            </button>
          </div>
        </div>
      </div>
      
      <p className="text-[10px] text-gray-400 text-center mt-8 uppercase leading-tight tracking-[0.1em] font-medium opacity-60">
        WCCW is a 501(c)(3) non-profit organization.<br/>워싱턴 정대위는 미주 지역 비영리 단체입니다.
      </p>
    </div>
  );
};

const DonationCard: React.FC<{ 
  title: string; 
  subTitle: string; 
  desc: string; 
  color: string; 
  bgImage: string;
  onClick: () => void;
}> = ({ title, subTitle, desc, color, bgImage, onClick }) => (
  <button 
    onClick={onClick}
    className={`relative w-full text-left p-6 rounded-[2rem] shadow-md overflow-hidden group active:scale-[0.97] transition-all border border-gray-50`}
  >
    <img src={bgImage} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-10 grayscale" alt={title} />
    <div className={`absolute inset-0 bg-white/95`}></div>
    
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex-1 pr-4">
        <h3 className="font-black text-base text-gray-800 leading-none">{title}</h3>
        <p className={`text-[10px] font-bold mt-1 uppercase tracking-tighter flex items-center gap-1 opacity-80`}>
          <span className={`w-1.5 h-1.5 rounded-full ${color}`}></span>
          {subTitle}
        </p>
        <p className="text-[11px] text-gray-500 mt-2 leading-relaxed font-medium">{desc}</p>
      </div>
      <div className={`w-10 h-10 ${color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:translate-x-1 transition-transform`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </div>
  </button>
);

export default Support;
