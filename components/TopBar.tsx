
import React, { useState, useEffect } from 'react';
import { 
  WifiIcon, 
  SpeakerWaveIcon, 
  Battery50Icon,
  ChevronDownIcon
} from '@heroicons/react/24/solid';

interface TopBarProps {
  onToggleOverview: () => void;
  isOverviewOpen: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleOverview, isOverviewOpen }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`h-8 w-full transition-all duration-500 flex items-center justify-between px-6 text-stone-800 text-xs font-semibold z-[3000] ${
      isOverviewOpen ? 'bg-transparent' : 'shell-glass'
    }`}>
      <div className="flex items-center gap-6">
        <button 
          onClick={onToggleOverview}
          className={`px-3 py-0.5 rounded-full transition-all cursor-pointer ${
            isOverviewOpen ? 'bg-stone-900 text-white scale-110' : 'hover:bg-black/5 text-stone-800'
          }`}
        >
          <strong>Activities</strong>
        </button>
        <div className="flex items-center gap-3 opacity-60 font-medium">
          <span>Nebula Core</span>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hover:bg-black/5 px-4 py-0.5 rounded transition-colors cursor-default tracking-tight">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 hover:bg-black/5 px-2 py-0.5 rounded transition-colors cursor-default group">
          <WifiIcon className="w-3.5 h-3.5 opacity-70" />
          <SpeakerWaveIcon className="w-3.5 h-3.5 opacity-70" />
          <Battery50Icon className="w-3.5 h-3.5 opacity-70" />
          <ChevronDownIcon className="w-3 h-3 opacity-30 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
