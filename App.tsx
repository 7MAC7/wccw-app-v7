
import React, { useState } from 'react';
import { ViewType } from './types';
import Layout from './components/Layout';
import Home from './components/Home';
import Archive from './components/Archive';
import History from './components/History';
import ChatInterface from './components/ChatInterface';
import Support from './components/Support';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>(ViewType.HOME);
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case ViewType.HOME:
        return <Home />;
      case ViewType.ARCHIVE:
        return <Archive />;
      case ViewType.HISTORY:
        return <History />;
      case ViewType.CHAT:
        return <ChatInterface />;
      case ViewType.SUPPORT:
        return <Support />;
      default:
        return <Home />;
    }
  };

  if (!isSplashComplete) {
    return <SplashScreen onComplete={() => setIsSplashComplete(true)} />;
  }

  return (
    <Layout activeView={activeView} onViewChange={setActiveView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
