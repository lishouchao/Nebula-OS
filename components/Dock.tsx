
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
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000]">
      <div className="flex items-end gap-3 p-2.5 rounded-[24px] bg-white/70 backdrop-blur-3xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all">
        {/* Launchpad Trigger */}
        <button
          onClick={onToggleLauncher}
          className="relative group transition-all duration-500 ease-out border-r border-stone-200/50 pr-2 mr-1"
        >
          <div className="w-[52px] h-[52px] rounded-[16px] flex items-center justify-center bg-stone-900 text-white shadow-lg transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-[1.15]">
            <Squares2X2Icon className="w-6 h-6 stroke-[2px]" />
          </div>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/90 text-stone-800 text-[11px] font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 border border-stone-100 shadow-lg translate-y-2 group-hover:translate-y-0">
            Apps
          </div>
        </button>

        {APPS.map((app) => {
          const isActive = activeApps.includes(app.id);
          const isFocused = focusedAppId === app.id;

          return (
            <button
              key={app.id}
              onClick={() => onLaunch(app.id)}
              className="relative group transition-all duration-500 ease-out"
            >
              <div className={`
                w-[52px] h-[52px] rounded-[16px] flex items-center justify-center
                transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-[1.15]
                ${app.color} shadow-sm group-hover:shadow-xl
              `}>
                {app.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/90 text-stone-800 text-[11px] font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 border border-stone-100 shadow-lg translate-y-2 group-hover:translate-y-0">
                {app.name}
              </div>

              {/* Status Indicator */}
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
