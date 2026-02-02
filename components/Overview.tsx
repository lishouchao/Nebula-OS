
import React from 'react';
import { WindowState } from '../types';
import { SparklesIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface OverviewProps {
  windows: WindowState[];
  onFocusWindow: (id: string) => void;
  onClose: () => void;
}

const Overview: React.FC<OverviewProps> = ({ windows, onFocusWindow, onClose }) => {
  return (
    <div className="absolute inset-0 z-[1500] flex flex-col items-center justify-center p-20 animate-in fade-in duration-700 overflow-hidden">
      {/* Search Overlay */}
      <div className="absolute top-24 w-full max-w-xl px-6 z-10 animate-in slide-in-from-top-4 duration-500">
        <div className="relative flex items-center group">
          <MagnifyingGlassIcon className="absolute left-5 w-5 h-5 text-stone-400 group-focus-within:text-stone-900 transition-colors" />
          <input 
            autoFocus
            type="text" 
            placeholder="Search flow..."
            className="w-full bg-white/40 backdrop-blur-3xl border border-white/60 rounded-full px-14 py-4 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200/50 shadow-xl transition-all"
            onKeyDown={(e) => e.key === 'Escape' && onClose()}
          />
        </div>
      </div>

      <div className="absolute inset-x-0 top-[25%] text-center pointer-events-none select-none">
         <h1 className="text-[12vw] font-black text-stone-900/[0.02] tracking-tighter leading-none italic uppercase">
           Workspace
         </h1>
      </div>

      <div className="relative w-full max-w-6xl h-[50vh] flex items-center justify-center" style={{ perspective: '1200px' }}>
        {windows.length === 0 ? (
          <div className="flex flex-col items-center animate-in zoom-in-95 duration-700 opacity-20">
            <SparklesIcon className="w-16 h-16 text-stone-400 mb-4" />
            <p className="text-xs text-stone-400 tracking-[0.4em] font-bold uppercase">Pure Space</p>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full relative">
            {windows.map((win, idx) => {
              const offset = idx - (windows.length - 1) / 2;
              const rotateY = offset * -12;
              const translateZ = Math.abs(offset) * -80;
              const translateX = offset * 220;

              return (
                <div 
                  key={win.id}
                  onClick={() => onFocusWindow(win.id)}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                    zIndex: 100 - Math.abs(idx - (windows.length - 1) / 2) * 10
                  }}
                  className="absolute w-[440px] aspect-[16/10] cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                >
                  <div className="w-full h-full bg-white rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden relative transition-all group-hover:shadow-[0_60px_120px_rgba(0,0,0,0.15)] group-hover:scale-105">
                    <div className="absolute inset-0 p-10 bg-stone-50/30">
                       <div className="w-full h-full rounded-2xl border-2 border-dashed border-stone-200/50 flex items-center justify-center">
                         <span className="text-[80px] font-black text-stone-100 uppercase select-none">{win.title[0]}</span>
                       </div>
                    </div>
                    
                    <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-white via-white/80 to-transparent">
                      <div className="flex items-center justify-between">
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-0.5">Surface</span>
                            <span className="text-base font-bold text-stone-800">{win.title}</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="absolute bottom-32 opacity-20 pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-900">Select Flow</span>
      </div>
    </div>
  );
};

export default Overview;
