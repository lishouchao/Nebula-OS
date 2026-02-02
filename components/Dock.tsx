
import React from 'react';
import { APPS } from '../constants';
import { AppID } from '../types';
import { Squares2X2Icon } from '@heroicons/react/24/outline';

interface DockProps {
  onLaunch: (appId: AppID) => void;
  onToggleLauncher: () => void;
  activeApps: string[];
  focusedAppId?: string;
}

const Dock: React.FC<DockProps> = ({ onLaunch, onToggleLauncher, activeApps, focusedAppId }) => {
  // 只在 Dock 中显示前 5 个核心应用，以及当前正在运行的应用
  const coreAppIds = ['explorer', 'terminal', 'atlas', 'nebula-ai', 'settings'];
  const dockApps = APPS.filter(app => coreAppIds.includes(app.id) || activeApps.includes(app.id));

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none">
      <div className="pointer-events-auto flex items-end gap-3 p-2.5 rounded-[28px] bg-white/70 backdrop-blur-3xl border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all">
        {/* Launcher */}
        <button
          onClick={onToggleLauncher}
          className="relative group transition-all duration-500 ease-out pr-2 border-r border-stone-200/50 mr-1"
        >
          <div className="w-[50px] h-[50px] rounded-[18px] flex items-center justify-center bg-stone-900 text-white shadow-lg transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-[1.15]">
            <Squares2X2Icon className="w-5 h-5 stroke-[2px]" />
          </div>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/95 text-stone-800 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all border border-stone-100 shadow-xl translate-y-2 group-hover:translate-y-0">
            Universe
          </div>
        </button>

        {dockApps.map((app) => {
          const isActive = activeApps.includes(app.id);
          const isFocused = focusedAppId === app.id;

          return (
            <button
              key={app.id}
              onClick={() => onLaunch(app.id)}
              className="relative group transition-all duration-500 ease-out"
            >
              <div className={`
                w-[50px] h-[50px] rounded-[18px] flex items-center justify-center
                transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-[1.15]
                ${app.color} shadow-sm group-hover:shadow-xl
              `}>
                {app.icon}
              </div>
              
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/95 text-stone-800 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all border border-stone-100 shadow-xl translate-y-2 group-hover:translate-y-0">
                {app.name}
              </div>

              {isActive && (
                <div className={`
                  absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full
                  ${isFocused ? 'bg-stone-800 w-3' : 'bg-stone-300'}
                  transition-all duration-300
                `} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
