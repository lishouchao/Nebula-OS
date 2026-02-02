
import React, { useState, useCallback } from 'react';
import { WALLPAPER_URL, APPS } from './constants';
import { WindowState, AppID } from './types';
import TopBar from './components/TopBar';
import Dock from './components/Dock';
import Window from './components/Window';
import Explorer from './components/apps/Explorer';
import Terminal from './components/apps/Terminal';
import NebulaAI from './components/apps/NebulaAI';

const App: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [zIndexCounter, setZIndexCounter] = useState(10);

  const launchApp = useCallback((appId: AppID) => {
    // If already open, just focus
    const existing = windows.find(w => w.appId === appId);
    if (existing) {
      focusWindow(existing.id);
      return;
    }

    const appConfig = APPS.find(a => a.id === appId);
    if (!appConfig) return;

    const newWindow: WindowState = {
      id: Math.random().toString(36).substr(2, 9),
      appId: appId,
      title: appConfig.name,
      isOpen: true,
      isMaximized: false,
      isFocused: true,
      zIndex: zIndexCounter + 1,
      position: { x: 100 + windows.length * 40, y: 100 + windows.length * 40 },
      size: { width: 800, height: 600 }
    };

    setZIndexCounter(prev => prev + 1);
    setWindows(prev => [...prev.map(w => ({ ...w, isFocused: false })), newWindow]);
  }, [windows, zIndexCounter]);

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const focusWindow = (id: string) => {
    setZIndexCounter(prev => prev + 1);
    setWindows(prev => prev.map(w => ({
      ...w,
      isFocused: w.id === id,
      zIndex: w.id === id ? zIndexCounter + 1 : w.zIndex
    })));
  };

  const renderAppContent = (appId: AppID) => {
    switch (appId) {
      case 'explorer': return <Explorer />;
      case 'terminal': return <Terminal />;
      case 'nebula-ai': return <NebulaAI />;
      default: return (
        <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8 text-center">
          <p className="text-lg font-medium">This application is under construction.</p>
          <p className="text-sm">The Nebula OS core team is working on these modules.</p>
        </div>
      );
    }
  };

  const focusedAppId = windows.find(w => w.isFocused)?.appId;

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${WALLPAPER_URL})` }}
    >
      {/* Dynamic Overlay for depth */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Shell Components */}
      <TopBar />

      {/* Window Manager Workspace */}
      <div className="relative w-full h-[calc(100vh-32px)]">
        {windows.map((win) => (
          <Window
            key={win.id}
            id={win.id}
            title={win.title}
            onClose={() => closeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            isFocused={win.isFocused}
            zIndex={win.zIndex}
            initialPos={win.position}
          >
            {renderAppContent(win.appId)}
          </Window>
        ))}
      </div>

      {/* Bottom Shell */}
      <Dock 
        onLaunch={launchApp} 
        activeApps={windows.map(w => w.appId)}
        focusedAppId={focusedAppId}
      />

      {/* Aesthetic Background Accents (Blurred blobs) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none delay-1000" />
    </div>
  );
};

export default App;
