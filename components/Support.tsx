
import React from 'react';

const Support: React.FC = () => {
  // 모든 후원 및 문의 클릭 시 wccwcontact@gmail.com으로 연결
  const handleContactClick = () => {
    window.location.href = 'mailto:wccwcontact@gmail.com';
  };

  return (
    <div className="p-6 animate-fadeIn space-y-6">
      <section className="text-center mb-8">
        <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800 leading-tight">Your Support Matters<br/>따뜻한 마음을 나누어주세요</h2>
        <p className="text-gray-500 text-[11px] mt-3 leading-relaxed">Your contribution supports local education in the U.S. and helps restore dignity for survivors.</p>
      </section>

      <div className="grid grid-cols-1 gap-5">
        <DonationCard 
          title="Support WCCW Advocacy" 
          subTitle="워싱턴 활동 정기 후원"
          desc="Support our core educational and awareness programs in the D.C. area."
          color="bg-indigo-600"
          bgImage="https://images.unsplash.com/photo-1541441244301-2e6f49497e68?auto=format&fit=crop&w=400&q=80"
          onClick={handleContactClick}
        />
        <DonationCard 
          title="One-time Donation" 
          subTitle="일시 후원하기"
          desc="Make a direct impact with an immediate donation today."
          color="bg-pink-500"
          bgImage="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=400&q=80"
          onClick={handleContactClick}
        />
        <DonationCard 
          title="The Butterfly Fund" 
          subTitle="나비기금 참여"
          desc="Specifically helping survivors of wartime sexual violence worldwide."
          color="bg-amber-500"
          bgImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80"
          onClick={handleContactClick}
        />
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mt-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <h3 className="relative z-10 font-bold text-gray-800 mb-4 border-b pb-2 flex justify-between items-center">
          <span>How to Give / 후원 방법</span>
          <span className="text-[10px] text-indigo-600 font-bold uppercase bg-indigo-50 px-2 py-0.5 rounded">Tax Deductible</span>
        </h3>
        <div className="relative z-10 space-y-4">
          <div className="flex flex-col text-xs">
            <span className="text-gray-400 font-bold uppercase mb-1 tracking-tighter">Payable to</span>
            <span className="font-bold text-gray-800">WCCW (Washington Coalition for Comfort Women Issues)</span>
          </div>
          <div className="flex flex-col text-xs">
            <span className="text-gray-400 font-bold uppercase mb-1 tracking-tighter">Mailing Address</span>
            <span className="font-medium text-gray-700">Available upon request. Please contact us via email.</span>
          </div>
          <div className="pt-2">
            <button 
              onClick={handleContactClick}
              className="w-full py-4 bg-indigo-600 text-white text-xs font-bold rounded-2xl shadow-lg shadow-indigo-200 active:scale-95 hover:bg-indigo-700 transition-all"
            >
              Contact Us: wccwcontact@gmail.com
            </button>
          </div>
        </div>
      </div>
      
      <p className="text-[10px] text-gray-400 text-center mt-6 uppercase leading-tight tracking-tight">
        WCCW is a 501(c)(3) non-profit organization.<br/>워싱턴정대위는 미주 지역 비영리 단체입니다.
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
    className={`relative w-full text-left p-6 rounded-3xl shadow-lg overflow-hidden group active:scale-[0.97] transition-all`}
  >
    <img src={bgImage} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-20 grayscale" alt={title} />
    <div className={`absolute inset-0 bg-white/90`}></div>
    
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex-1 pr-4">
        <h3 className="font-black text-base text-gray-800 leading-none">{title}</h3>
        <p className={`text-[11px] font-bold mt-1 uppercase tracking-tighter flex items-center gap-1 opacity-80`}>
          <span className={`w-1.5 h-1.5 rounded-full ${color}`}></span>
          {subTitle}
        </p>
        <p className="text-[11px] text-gray-500 mt-2 leading-relaxed font-medium">{desc}</p>
      </div>
      <div className={`w-11 h-11 ${color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-xl group-hover:rotate-12 transition-transform`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </div>
  </button>
);

export default Support;
