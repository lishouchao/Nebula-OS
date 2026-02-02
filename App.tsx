
import React, { useState, useCallback } from 'react';
import { WALLPAPER_URL, APPS } from './constants';
import { WindowState, AppID } from './types';
import TopBar from './components/TopBar';
import Dock from './components/Dock';
import Window from './components/Window';
import Explorer from './components/apps/Explorer';
import Terminal from './components/apps/Terminal';
import NebulaAI from './components/apps/NebulaAI';
import Overview from './components/Overview';
import { XMarkIcon } from '@heroicons/react/24/outline';

const App: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [zIndexCounter, setZIndexCounter] = useState(10);
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const launchApp = useCallback((appId: AppID) => {
    setIsLauncherOpen(false);
    setIsOverviewOpen(false);
    
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
      position: { x: 150 + windows.length * 30, y: 150 + windows.length * 30 },
      size: { width: 840, height: 540 }
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
    setIsOverviewOpen(false);
  };

  const toggleOverview = () => {
    setIsOverviewOpen(!isOverviewOpen);
    setIsLauncherOpen(false);
  };

  const renderAppContent = (appId: AppID) => {
    switch (appId) {
      case 'explorer': return <Explorer />;
      case 'terminal': return <Terminal />;
      case 'nebula-ai': return <NebulaAI />;
      default: return (
        <div className="flex flex-col items-center justify-center h-full text-stone-300 p-8 text-center bg-white">
          <p className="text-xl font-light uppercase tracking-widest text-stone-900">System Unavailable</p>
          <p className="text-sm mt-2 text-stone-400">Core module pending deployment.</p>
        </div>
      );
    }
  };

  const focusedAppId = windows.find(w => w.isFocused)?.appId;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-stone-100 transition-all duration-1000">
      {/* Base Wallpaper */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
          isLauncherOpen || isOverviewOpen ? 'scale-110 blur-3xl saturate-50 brightness-110' : 'scale-100 blur-0'
        }`}
        style={{ backgroundImage: `url(${WALLPAPER_URL})` }}
      />
      
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />

      {/* Shell Components */}
      <TopBar onToggleOverview={toggleOverview} isOverviewOpen={isOverviewOpen} />

      {/* Window Manager Workspace */}
      <div className={`relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isOverviewOpen ? 'scale-90 opacity-40 blur-sm pointer-events-none' : 'scale-100 opacity-100'
      }`}>
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

      {/* Overview (Activities) View */}
      {isOverviewOpen && (
        <Overview 
          windows={windows} 
          onFocusWindow={focusWindow} 
          onClose={() => setIsOverviewOpen(false)}
        />
      )}

      {/* Launchpad Overlay */}
      {isLauncherOpen && (
        <div className="absolute inset-0 z-[2000] flex items-center justify-center p-20 animate-in fade-in zoom-in duration-300">
           <div className="w-full max-w-5xl">
              <div className="flex justify-between items-center mb-16">
                 <h2 className="text-5xl font-extralight text-stone-900 tracking-tighter">Surface Apps</h2>
                 <button 
                  onClick={() => setIsLauncherOpen(false)}
                  className="p-4 rounded-full bg-white/20 hover:bg-white/40 border border-white/40 transition-all"
                 >
                    <XMarkIcon className="w-8 h-8 text-stone-800" />
                 </button>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-12">
                {APPS.map((app) => (
                  <button 
                    key={app.id} 
                    onClick={() => launchApp(app.id)}
                    className="flex flex-col items-center group gap-4"
                  >
                    <div className={`w-24 h-24 rounded-[32px] flex items-center justify-center ${app.color} shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-active:scale-95 group-hover:-translate-y-4`}>
                      <div className="scale-[1.8]">{app.icon}</div>
                    </div>
                    <span className="text-stone-800 font-semibold text-sm tracking-wide opacity-60 group-hover:opacity-100 transition-opacity">
                      {app.name}
                    </span>
                  </button>
                ))}
              </div>
           </div>
        </div>
      )}

      {/* Bottom Shell */}
      <Dock 
        onLaunch={launchApp} 
        onToggleLauncher={() => setIsLauncherOpen(!isLauncherOpen)}
        activeApps={windows.map(w => w.appId)}
        focusedAppId={focusedAppId}
      />
    </div>
  );
};

export default App;
