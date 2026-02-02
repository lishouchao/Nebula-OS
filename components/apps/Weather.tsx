
import React from 'react';
import { CloudIcon, SunIcon, VariableIcon } from '@heroicons/react/24/outline';

const Weather: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-sky-400 to-blue-600 p-12 text-white flex flex-col justify-between overflow-hidden relative">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-6xl font-black italic tracking-tighter uppercase">Nebula City</h1>
            <p className="text-sm font-bold tracking-[0.4em] uppercase opacity-60 mt-2">Surface Sector 7G</p>
          </div>
          <div className="text-right">
            <span className="text-8xl font-black tracking-tighter italic">24°</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-4 gap-8">
        {[
          { time: 'NOW', temp: '24°', icon: <SunIcon className="w-8 h-8" /> },
          { time: '14:00', temp: '26°', icon: <SunIcon className="w-8 h-8" /> },
          { time: '18:00', temp: '21°', icon: <CloudIcon className="w-8 h-8" /> },
          { time: '22:00', temp: '18°', icon: <CloudIcon className="w-8 h-8" /> },
        ].map((item, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-xl p-6 rounded-[32px] flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-4">{item.time}</span>
            {item.icon}
            <span className="mt-4 text-xl font-bold">{item.temp}</span>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-between opacity-40">
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Air Quality: Pure</span>
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Nebula Flow Active</span>
      </div>
    </div>
  );
};

export default Weather;
