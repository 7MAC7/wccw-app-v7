
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { geminiService } from '../services/geminiService';

const SUGGESTIONS = [
  "HR 121 결의안에 대해 알려줘",
  "소녀상은 어디에 있나요?",
  "나비기금이 무엇인가요?",
  "WCCW는 언제 설립되었나요?"
];

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: '안녕하세요! 워싱턴 정대위(WCCW)의 평화 메신저 나비입니다. 무엇이든 물어보세요.\n\nHello! I am Navi, the peace messenger of WCCW. Ask me anything about our mission.', 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    const messageToSend = text.trim();
    if (!messageToSend || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: messageToSend, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await geminiService.askAssistant(messageToSend);
      const assistantMessage: ChatMessage = { role: 'model', text: response, timestamp: new Date() };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: '오류가 발생했습니다. 잠시 후 다시 시도해주세요. / An error occurred.', 
        timestamp: new Date() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const currentUrl = window.location.origin;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentUrl)}&color=4F46E5&bgcolor=FFFFFF&margin=2`;

  const handleShare = async () => {
    const shareData = {
      title: 'WCCW - 워싱턴 정대위',
      text: '정의와 평화를 향한 희망의 날갯짓. 워싱턴 정대위 앱을 만나보세요.',
      url: currentUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      // 카카오톡 공유 페이지로 직접 이동하는 폴백 (카카오 앱키가 필요하므로 여기서는 일반 URL 복사 안내)
      navigator.clipboard.writeText(currentUrl);
      alert('링크가 복사되었습니다. 카카오톡에 붙여넣어 공유해주세요!\nLink copied to clipboard.');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white animate-fadeIn relative">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-xl p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-200">🦋</div>
          <div>
            <h2 className="font-black text-gray-900 leading-none text-[17px]">나비톡 AI</h2>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active Now</p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setShowQR(true)}
          className="w-10 h-10 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-all active:scale-90"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
        </button>
      </div>

      {/* Share Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-8 animate-fadeIn">
          <div className="bg-white w-full max-w-[320px] rounded-[3rem] p-10 flex flex-col items-center text-center shadow-[0_30px_60px_rgba(0,0,0,0.2)] animate-scaleIn">
            <h3 className="text-xl font-black text-gray-900 tracking-tight">앱 공유하기</h3>
            <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mt-1 mb-6 opacity-60">Share Justice with others</p>
            
            <div className="bg-white p-5 rounded-[2.5rem] border-2 border-indigo-50 mb-6 shadow-inner">
              <img src={qrUrl} alt="App QR" className="w-40 h-40 rounded-xl" />
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-6">
              <button 
                onClick={handleShare}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition-all group"
              >
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                </div>
                <span className="text-[10px] font-black uppercase text-gray-500">System Share</span>
              </button>
              
              <button 
                onClick={handleShare}
                className="flex flex-col items-center gap-2 p-4 bg-[#FEE500] rounded-2xl hover:opacity-90 transition-all group"
              >
                <div className="w-10 h-10 bg-[#3C1E1E] text-[#FEE500] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.712 4.81 4.348 6.151l-.869 3.204c-.124.457.153.605.394.444l4.034-2.693c.356.05.719.079 1.093.079 4.97 0 9-3.186 9-7.115S16.97 3 12 3z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase text-[#3C1E1E]">KakaoTalk</span>
              </button>
            </div>

            <button 
              onClick={() => setShowQR(false)}
              className="w-full py-4.5 bg-gray-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-5 space-y-6 bg-white no-scrollbar"
        style={{ height: 'calc(100vh - 280px)' }}
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
            <div className={`max-w-[85%] p-4.5 rounded-[2rem] text-[15px] leading-[1.6] shadow-sm ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-gray-100 text-gray-800 rounded-tl-none border border-gray-50'
            }`}>
              <div className="whitespace-pre-wrap font-medium">{msg.text}</div>
              <p className={`text-[9px] mt-2 font-bold opacity-50 ${msg.role === 'user' ? 'text-right' : ''}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-5 py-4 rounded-full border border-gray-50 shadow-sm flex gap-2 items-center">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100 pb-36">
        {!isLoading && messages.length < 5 && (
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {SUGGESTIONS.map((s, idx) => (
              <button 
                key={idx}
                onClick={() => handleSend(s)}
                className="whitespace-nowrap px-5 py-2.5 bg-white text-indigo-600 rounded-full text-[12px] font-bold hover:bg-indigo-50 active:scale-95 transition-all border border-indigo-100 shadow-sm"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-3 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="궁금한 내용을 입력하세요 / Message..."
            className="flex-1 bg-gray-50 border-none rounded-[1.8rem] px-6 py-4.5 text-[15px] font-medium focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none placeholder:text-gray-400 shadow-inner"
          />
          <button 
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
              input.trim() && !isLoading ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 hover:scale-105 active:scale-95' : 'bg-gray-100 text-gray-300'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;
