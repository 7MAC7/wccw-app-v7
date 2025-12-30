
import React, { useState, useMemo } from 'react';
import { ViewType } from '../types';
import { MOCK_NEWS, TIMELINE_DATA, HISTORY_DOCS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, onViewChange }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 통합 검색 결과 필터링
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    
    const results: { type: string; title: string; desc: string; target: ViewType }[] = [];

    // 뉴스 검색
    MOCK_NEWS.forEach(item => {
      if (item.title.toLowerCase().includes(query) || item.summary.toLowerCase().includes(query)) {
        results.push({ type: '뉴스 NEWS', title: item.title, desc: item.summary, target: ViewType.HOME });
      }
    });

    // 기록(타임라인) 검색
    TIMELINE_DATA.forEach(item => {
      if (item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)) {
        results.push({ type: '기록 ARCHIVE', title: item.title, desc: item.description, target: ViewType.ARCHIVE });
      }
    });

    // 역사 검색
    HISTORY_DOCS.forEach(item => {
      if (item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)) {
        results.push({ type: '역사 HISTORY', title: item.title, desc: item.description, target: ViewType.HISTORY });
      }
    });

    return results;
  }, [searchQuery]);

  const handleResultClick = (target: ViewType) => {
    onViewChange(target);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white shadow-2xl relative overflow-hidden border-x border-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="px-3 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-[11px] shadow-lg rotate-2 tracking-tighter">
            WCCW
          </div>
          <div>
            <h1 className="font-black text-lg text-gray-900 tracking-tight leading-none">워싱턴 정대위</h1>
            <p className="text-[10px] text-indigo-500 font-bold tracking-[0.15em] uppercase mt-1">Justice & Peace</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-all active:scale-90"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-white animate-fadeIn flex flex-col">
          <div className="p-6 border-b flex items-center gap-4">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input 
                autoFocus
                type="text"
                placeholder="검색어를 입력하세요 / Search..."
                className="w-full bg-gray-100 border-none rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-indigo-600 transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
              className="text-[11px] font-black text-gray-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
            >
              Cancel
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {!searchQuery.trim() ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-300 space-y-4">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">궁금한 내용을 입력해 보세요</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.map((result, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleResultClick(result.target)}
                    className="w-full text-left p-4 bg-white border border-gray-100 rounded-2xl hover:border-indigo-100 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[8px] font-black text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">{result.type}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">{result.title}</h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 mt-1 leading-relaxed">{result.desc}</p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-300 space-y-4">
                <div className="text-4xl grayscale opacity-50 mb-2">🦋</div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">검색 결과가 없습니다 / No results</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-32">
        {children}
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[94%] max-w-[400px] z-50">
        <nav className="bg-white/95 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(79,70,229,0.15)] rounded-[2.5rem] px-2 py-3.5 flex justify-around items-center">
          <NavButton 
            active={activeView === ViewType.HOME} 
            onClick={() => onViewChange(ViewType.HOME)}
            label="홈"
            engLabel="HOME"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>}
          />
          <NavButton 
            active={activeView === ViewType.ARCHIVE} 
            onClick={() => onViewChange(ViewType.ARCHIVE)}
            label="기록"
            engLabel="ARCHIVE"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.246.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>}
          />
          <NavButton 
            active={activeView === ViewType.HISTORY} 
            onClick={() => onViewChange(ViewType.HISTORY)}
            label="역사"
            engLabel="HISTORY"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>}
          />
          <NavButton 
            active={activeView === ViewType.CHAT} 
            onClick={() => onViewChange(ViewType.CHAT)}
            label="나비톡 AI"
            engLabel="TALK AI"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012-2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>}
          />
          <NavButton 
            active={activeView === ViewType.SUPPORT} 
            onClick={() => onViewChange(ViewType.SUPPORT)}
            label="후원"
            engLabel="GIVE"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>}
          />
        </nav>
      </div>
    </div>
  );
};

const NavButton: React.FC<{ active: boolean; onClick: () => void; label: string; engLabel: string; icon: React.ReactNode }> = ({ active, onClick, label, engLabel, icon }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-0.5 transition-all duration-500 flex-1 ${active ? 'text-indigo-600 scale-110' : 'text-gray-400 hover:text-indigo-400'}`}
  >
    <div className={`p-2 rounded-2xl transition-all duration-500 ${active ? 'bg-indigo-600/10 shadow-inner' : ''}`}>
      {icon}
    </div>
    <div className="flex flex-col items-center leading-none">
      <span className={`text-[9px] font-black tracking-tighter transition-opacity ${active ? 'opacity-100' : 'opacity-60'}`}>{label}</span>
      <span className={`text-[7px] font-bold tracking-widest transition-opacity mt-0.5 ${active ? 'opacity-80' : 'opacity-40'}`}>{engLabel}</span>
    </div>
  </button>
);

export default Layout;
