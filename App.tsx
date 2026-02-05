
import React, { useState, useCallback } from 'react';
import { DEFAULT_WALLPAPER, APPS } from './constants';
import { WindowState, AppID } from './types';
import TopBar from './components/TopBar';
import Dock from './components/Dock';
import Window from './components/Window';
import Explorer from './components/apps/Explorer';
import Terminal from './components/apps/Terminal';
import NebulaAI from './components/apps/NebulaAI';
import Settings from './components/apps/Settings';
import Weather from './components/apps/Weather';
import Draft from './components/apps/Draft';
import Compute from './components/apps/Compute';
import CoreMonitor from './components/apps/CoreMonitor';
import Gallery from './components/apps/Gallery';
import Chronos from './components/apps/Chronos';
import Overview from './components/Overview';
import { ChevronLeftIcon, ChevronRightIcon, ArrowPathIcon, PowerIcon as PowerOffIcon, XMarkIcon } from '@heroicons/react/24/outline';

const APPS_PER_PAGE = 20;

const App: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [zIndexCounter, setZIndexCounter] = useState(10);
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isPowerMenuOpen, setIsPowerMenuOpen] = useState(false);
  const [isSystemOff, setIsSystemOff] = useState(false);
  const [launcherPage, setLauncherPage] = useState(0);
  const [wallpaper, setWallpaper] = useState(DEFAULT_WALLPAPER);

  const totalPages = Math.ceil(APPS.length / APPS_PER_PAGE);

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
      position: { x: 200 + (windows.length % 5) * 40, y: 160 + (windows.length % 5) * 40 },
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

  const handleShutdown = () => {
    setIsPowerMenuOpen(false);
    setIsSystemOff(true);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const renderAppContent = (appId: AppID) => {
    switch (appId) {
      case 'explorer': return <Explorer />;
      case 'terminal': return <Terminal />;
      case 'nebula-ai': return <NebulaAI />;
      case 'settings': return <Settings currentWallpaper={wallpaper} onWallpaperChange={setWallpaper} />;
      case 'weather': return <Weather />;
      case 'draft': return <Draft />;
      case 'compute': return <Compute />;
      case 'core': return <CoreMonitor />;
      case 'gallery': return <Gallery />;
      case 'chronos': return <Chronos />;
      default: return (
        <div className="flex flex-col items-center justify-center h-full text-stone-300 p-8 text-center bg-white">
          <div className="w-24 h-24 mb-6 rounded-[32px] bg-stone-50 flex items-center justify-center border border-stone-100">
             {APPS.find(a => a.id === appId)?.icon}
          </div>
          <p className="text-xl font-light uppercase tracking-widest text-stone-900">{appId} Interface</p>
          <p className="text-[10px] mt-4 text-stone-400 font-black uppercase tracking-[0.4em]">Awaiting Module Sync</p>
        </div>
      );
    }
  };

  const focusedAppId = windows.find(w => w.isFocused)?.appId;

  if (isSystemOff) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center animate-out fade-out fill-mode-forwards duration-[2000ms]">
        <div className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin mb-8" />
        <span className="text-white font-black uppercase tracking-[0.8em] text-[10px] animate-pulse">Nebula OS Powering Down</span>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#fafafa] transition-all duration-1000">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isLauncherOpen || isOverviewOpen || isPowerMenuOpen ? 'scale-110 saturate-[0.8] brightness-110 blur-[60px]' : 'scale-100 blur-0'
        }`}
        style={{ backgroundImage: `url(${wallpaper})` }}
      />
      
      <div className={`absolute inset-0 bg-white/5 pointer-events-none transition-opacity duration-1000 ${isOverviewOpen || isPowerMenuOpen ? 'opacity-100' : 'opacity-0'}`} />

      <TopBar 
        onToggleOverview={toggleOverview} 
        isOverviewOpen={isOverviewOpen} 
        onOpenPowerMenu={() => setIsPowerMenuOpen(true)}
      />

      <div className={`relative w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isOverviewOpen || isPowerMenuOpen ? 'scale-90 opacity-0 blur-2xl pointer-events-none' : 'scale-100 opacity-100'
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

      {isOverviewOpen && (
        <Overview 
          windows={windows} 
          onFocusWindow={focusWindow} 
          onClose={() => setIsOverviewOpen(false)}
        />
      )}

      {/* Power Menu Overlay */}
      {isPowerMenuOpen && (
        <div className="absolute inset-0 z-[4000] flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-500 bg-stone-900/40 backdrop-blur-3xl">
           <div className="max-w-lg w-full flex flex-col items-center">
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase mb-2">Power Actions</h2>
                <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em]">Choose your next destination</p>
              </div>

              <div className="flex gap-8 mb-16">
                 <button 
                  onClick={() => setIsSystemOff(true)}
                  className="group flex flex-col items-center gap-6"
                 >
                    <div className="w-24 h-24 rounded-[32px] bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-2xl">
                       <ArrowPathIcon className="w-10 h-10 text-white group-hover:text-stone-900 transition-colors" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Restart</span>
                 </button>

                 <button 
                  onClick={handleShutdown}
                  className="group flex flex-col items-center gap-6"
                 >
                    <div className="w-24 h-24 rounded-[32px] bg-rose-500/80 border border-rose-400 flex items-center justify-center group-hover:bg-rose-500 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                       <PowerOffIcon className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Shut Down</span>
                 </button>
              </div>

              <button 
                onClick={() => setIsPowerMenuOpen(false)}
                className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/20 transition-all"
              >
                Return to Flow
              </button>
           </div>
        </div>
      )}

      {isLauncherOpen && (
        <div className="absolute inset-0 z-[2000] flex flex-col items-center justify-center p-20 animate-in fade-in zoom-in-95 duration-700 bg-white/20 backdrop-blur-3xl overflow-hidden">
           
           <div className="flex flex-col items-center mb-16 text-center animate-in slide-in-from-top-4 duration-1000">
              <h2 className="text-5xl font-black text-stone-900 tracking-tighter italic uppercase">The Universe</h2>
              <p className="text-[10px] mt-2 text-stone-400 font-black uppercase tracking-[0.5em]">Section {launcherPage + 1} of {totalPages}</p>
           </div>

           <div className="absolute left-10 top-1/2 -translate-y-1/2 z-10">
              <button 
                disabled={launcherPage === 0}
                onClick={() => setLauncherPage(p => Math.max(0, p - 1))}
                className="p-6 rounded-full bg-white/40 hover:bg-white shadow-xl transition-all disabled:opacity-0 disabled:pointer-events-none group border border-white/60"
              >
                <ChevronLeftIcon className="w-8 h-8 text-stone-900 group-hover:-translate-x-1 transition-transform" />
              </button>
           </div>
           <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10">
              <button 
                disabled={launcherPage === totalPages - 1}
                onClick={() => setLauncherPage(p => Math.min(totalPages - 1, p + 1))}
                className="p-6 rounded-full bg-white/40 hover:bg-white shadow-xl transition-all disabled:opacity-0 disabled:pointer-events-none group border border-white/60"
              >
                <ChevronRightIcon className="w-8 h-8 text-stone-900 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>

           <div className="w-full max-w-6xl relative overflow-hidden h-[500px]">
              <div 
                className="flex transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] h-full"
                style={{ transform: `translateX(-${launcherPage * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIdx) => (
                  <div key={pageIdx} className="w-full min-w-full h-full grid grid-cols-5 gap-y-10 gap-x-8 px-10">
                    {APPS.slice(pageIdx * APPS_PER_PAGE, (pageIdx + 1) * APPS_PER_PAGE).map((app) => (
                      <button 
                        key={app.id} 
                        onClick={() => launchApp(app.id)}
                        className="flex flex-col items-center group"
                      >
                        <div className={`w-[76px] h-[76px] rounded-[26px] flex items-center justify-center ${app.color} shadow-lg transition-all duration-500 transform group-hover:-translate-y-4 group-hover:scale-[1.12] group-active:scale-95 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]`}>
                          <div className="scale-[1.6]">{app.icon}</div>
                        </div>
                        <span className="mt-5 text-stone-800 font-black text-[8px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {app.name}
                        </span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
           </div>

           <div className="mt-16 flex gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLauncherPage(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${launcherPage === i ? 'w-10 bg-stone-900 shadow-lg' : 'w-2 bg-stone-900/10 hover:bg-stone-900/20'}`}
                />
              ))}
           </div>

           <button 
             onClick={() => setIsLauncherOpen(false)}
             className="absolute bottom-16 px-10 py-3 rounded-full bg-white/40 border border-white/60 text-stone-900 font-black uppercase tracking-widest text-[8px] hover:bg-white hover:shadow-2xl transition-all duration-500"
           >
             Collapse Library
           </button>
        </div>
      )}

      <Dock 
        onLaunch={launchApp} 
        onToggleLauncher={() => {
          setIsLauncherOpen(!isLauncherOpen);
          setLauncherPage(0);
        }}
        activeApps={windows.map(w => w.appId)}
        focusedAppId={focusedAppId}
      />
    </div>
  );
};

export default App;
