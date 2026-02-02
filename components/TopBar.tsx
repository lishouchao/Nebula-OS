
import React, { useState, useEffect } from 'react';
import { 
  WifiIcon, 
  SpeakerWaveIcon, 
  Battery50Icon,
  ChevronDownIcon
} from '@heroicons/react/24/solid';

const TopBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 w-full bg-black/40 backdrop-blur-md flex items-center justify-between px-4 text-white text-xs font-medium z-[1000] border-b border-white/5">
      <div className="flex items-center gap-4">
        <div className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors cursor-default">
          <strong>Activities</strong>
        </div>
        <div className="flex items-center gap-3 opacity-80">
          <span>Nebula OS</span>
          <span className="text-[10px] bg-purple-500 px-1.5 rounded-full">Core v3.1</span>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hover:bg-white/10 px-3 py-0.5 rounded transition-colors cursor-default">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-0.5 rounded transition-colors cursor-default group">
          <WifiIcon className="w-3.5 h-3.5" />
          <SpeakerWaveIcon className="w-3.5 h-3.5" />
          <Battery50Icon className="w-3.5 h-3.5" />
          <ChevronDownIcon className="w-3 h-3 opacity-50 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
