
import React from 'react';
import { APPS } from '../constants';
import { AppID } from '../types';

interface DockProps {
  onLaunch: (appId: AppID) => void;
  activeApps: string[];
  focusedAppId?: string;
}

const Dock: React.FC<DockProps> = ({ onLaunch, activeApps, focusedAppId }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[1000]">
      <div className="flex items-end gap-2 p-2 rounded-2xl bg-black/30 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all hover:scale-[1.02]">
        {APPS.map((app) => {
          const isActive = activeApps.includes(app.id);
          const isFocused = focusedAppId === app.id;

          return (
            <button
              key={app.id}
              onClick={() => onLaunch(app.id)}
              className="relative group transition-all duration-300"
            >
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center text-white
                transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110
                ${app.color} shadow-lg
              `}>
                {app.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                {app.name}
              </div>

              {/* Status Indicator */}
              {isActive && (
                <div className={`
                  absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full
                  ${isFocused ? 'bg-white w-2' : 'bg-white/40'}
                  transition-all
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
