
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { geminiService } from '../services/geminiService';

const SUGGESTIONS = [
  "HR 121 결의안이 뭐야?",
  "기림비는 어디에 있어?",
  "정대위의 역사가 궁금해",
  "후원금은 어떻게 쓰여?"
];

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: '안녕하세요! 워싱턴 정대위(WCCW) AI 안내 도우미입니다. 역사적인 사실이나 정대위 활동에 대해 궁금한 점을 물어보세요.\n\nHello! I am the WCCW AI Assistant. Feel free to ask about historical facts or our advocacy activities.', 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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

  // 현재 브라우저의 도메인을 자동으로 가져와 QR 코드로 만듭니다.
  const currentUrl = window.location.origin;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentUrl)}&color=4F46E5&bgcolor=FFFFFF&margin=2`;

  return (
    <div className="flex flex-col h-full bg-gray-50 animate-fadeIn relative">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md p-5 border-b flex items-center justify-between sticky top-0 z-10">
        <div>
          <h2 className="font-black text-gray-900 leading-none">나비톡 AI</h2>
          <p className="text-[10px] text-indigo-500 font-bold flex items-center gap-1 mt-1.5 uppercase tracking-tighter">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            Justice Assistant
          </p>
        </div>
        <button 
          onClick={() => setShowQR(true)}
          className="flex flex-col items-center gap-1 group"
        >
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
          </div>
          <span className="text-[8px] font-black text-indigo-600 uppercase tracking-tighter">Share App</span>
        </button>
      </div>

      {/* QR Overlay Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-8 animate-fadeIn">
          <div className="bg-white w-full max-w-[320px] rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-2xl animate-scaleIn">
            <button 
              onClick={() => setShowQR(false)}
              className="self-end p-2 -mr-2 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className="mb-6">
              <h3 className="text-xl font-black text-gray-900 leading-tight">앱 나누기</h3>
              <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mt-1">share App</p>
            </div>

            <div className="bg-white p-4 rounded-[2rem] border-2 border-indigo-50 mb-6 shadow-inner">
              <img 
                src={qrUrl} 
                alt="App Download QR" 
                className="w-48 h-48 rounded-xl"
              />
            </div>

            <p className="text-[13px] text-gray-600 font-medium leading-relaxed">
              QR 코드를 스캔하여<br/>
              <span className="text-indigo-600 font-black">워싱턴 정대위 앱</span>을 공유하세요
            </p>
            
            <button 
              onClick={() => setShowQR(false)}
              className="mt-8 w-full py-4 bg-gray-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-5 space-y-5"
        style={{ height: 'calc(100vh - 250px)' }}
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl text-[14px] leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
            }`}>
              <div className="whitespace-pre-wrap">{msg.text}</div>
              <p className={`text-[9px] mt-2 font-bold ${msg.role === 'user' ? 'text-indigo-200 text-right' : 'text-gray-400'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1.5 items-center">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5 bg-white border-t space-y-4 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] pb-32">
        {!isLoading && messages.length < 5 && (
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {SUGGESTIONS.map((s, idx) => (
              <button 
                key={idx}
                onClick={() => handleSend(s)}
                className="whitespace-nowrap px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold hover:bg-indigo-100 active:scale-95 transition-all border border-indigo-100"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="메시지를 입력하세요 / Ask anything..."
            className="flex-1 bg-gray-100 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none placeholder:text-gray-400"
          />
          <button 
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className={`p-4 rounded-2xl shadow-lg transition-all ${
              input.trim() && !isLoading ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-90' : 'bg-gray-100 text-gray-300 shadow-none'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;
