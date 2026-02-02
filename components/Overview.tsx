
import React from 'react';
import { WindowState } from '../types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface OverviewProps {
  windows: WindowState[];
  onFocusWindow: (id: string) => void;
  onClose: () => void;
}

const Overview: React.FC<OverviewProps> = ({ windows, onFocusWindow, onClose }) => {
  return (
    <div className="absolute inset-0 z-[1500] flex flex-col items-center justify-start pt-20 animate-in fade-in duration-500 overflow-hidden">
      {/* Search Interface */}
      <div className="w-full max-w-2xl px-6 mb-20 animate-in slide-in-from-top-10 duration-700">
        <div className="relative flex items-center group">
          <MagnifyingGlassIcon className="absolute left-6 w-6 h-6 text-stone-400 group-focus-within:text-stone-900 transition-colors" />
          <input 
            autoFocus
            type="text" 
            placeholder="Type to search activities, apps, and files..."
            className="w-full bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[32px] px-16 py-6 text-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200/50 shadow-2xl transition-all"
            onKeyDown={(e) => e.key === 'Escape' && onClose()}
          />
        </div>
      </div>

      {/* Spatial Grid of Windows */}
      <div className="w-full flex-1 px-20 overflow-y-auto">
        {windows.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full opacity-30">
            <p className="text-4xl font-extralight tracking-tighter text-stone-900">Workspace Empty</p>
            <p className="text-sm mt-4 uppercase tracking-[0.4em]">Launch an application to begin</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {windows.map((win) => (
              <div 
                key={win.id}
                onClick={() => onFocusWindow(win.id)}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="relative w-full aspect-[16/10] bg-white rounded-3xl shadow-xl border border-white/50 overflow-hidden transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                   {/* Preview Content Mockup */}
                   <div className="absolute inset-0 bg-stone-50/50 flex items-center justify-center opacity-40">
                      <span className="text-8xl font-black text-white">{win.title[0]}</span>
                   </div>
                   
                   {/* Window Label Overlay */}
                   <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/20 to-transparent">
                      <div className="flex items-center gap-3">
                         <span className="text-xs font-bold text-white uppercase tracking-widest">{win.title}</span>
                      </div>
                   </div>
                </div>
                <span className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-stone-500 opacity-0 group-hover:opacity-100 transition-all">Select Task</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Decorative Text in background */}
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-[0.03]">
        <h1 className="text-[200px] font-black tracking-tighter leading-none">CONTEXT</h1>
      </div>
    </div>
  );
};

export default Overview;
