
import React, { useState, useEffect } from 'react';
import { 
  WifiIcon, 
  SpeakerWaveIcon, 
  Battery50Icon,
  MagnifyingGlassIcon,
  PowerIcon
} from '@heroicons/react/24/outline';

interface TopBarProps {
  onToggleOverview: () => void;
  isOverviewOpen: boolean;
  onOpenPowerMenu: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleOverview, isOverviewOpen, onOpenPowerMenu }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-[3000] pointer-events-none">
      <div className={`
        pointer-events-auto flex items-center gap-6 px-6 py-2 rounded-full transition-all duration-700
        ${isOverviewOpen 
          ? 'bg-stone-900 text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] scale-110' 
          : 'bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-stone-800'}
      `}>
        <button 
          onClick={onToggleOverview}
          className="flex items-center gap-2 group"
        >
          <div className="relative flex items-center justify-center">
             <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isOverviewOpen ? 'bg-blue-400' : 'bg-stone-900 group-hover:scale-150'}`} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] ml-1">Flow</span>
        </button>

        <div className="h-3 w-[1px] bg-stone-200/50 mx-1" />
        
        <div className="flex flex-col items-center min-w-[70px]">
          <span className="text-[12px] font-bold tracking-tight">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>

        <div className="h-3 w-[1px] bg-stone-200/50 mx-1" />

        <div className="flex items-center gap-4 opacity-60">
          <WifiIcon className="w-3.5 h-3.5" />
          <Battery50Icon className="w-3.5 h-3.5" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center cursor-pointer hover:bg-stone-200 transition-colors">
              <MagnifyingGlassIcon className="w-3.5 h-3.5 text-stone-600" />
            </div>
            <button 
              onClick={onOpenPowerMenu}
              className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center cursor-pointer hover:bg-rose-100 transition-colors group"
            >
              <PowerIcon className="w-3.5 h-3.5 text-rose-500 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
