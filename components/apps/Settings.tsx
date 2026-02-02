
import React from 'react';
import { WALLPAPERS } from '../../constants';
import { SwatchIcon, ComputerDesktopIcon, ShieldCheckIcon, UserIcon } from '@heroicons/react/24/outline';

interface SettingsProps {
  currentWallpaper: string;
  onWallpaperChange: (url: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ currentWallpaper, onWallpaperChange }) => {
  const sections = [
    { id: 'appearance', name: 'Appearance', icon: <SwatchIcon className="w-5 h-5" />, active: true },
    { id: 'display', name: 'Display', icon: <ComputerDesktopIcon className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <ShieldCheckIcon className="w-5 h-5" /> },
    { id: 'users', name: 'Users', icon: <UserIcon className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-full bg-white">
      <div className="w-56 border-r border-stone-100 bg-stone-50/50 p-6 space-y-2">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-6 pl-2">System</h2>
        {sections.map((s) => (
          <button 
            key={s.id}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${s.active ? 'bg-white shadow-sm border border-stone-100 text-stone-900' : 'text-stone-500 hover:bg-stone-100'}`}
          >
            {s.icon}
            {s.name}
          </button>
        ))}
      </div>
      
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-black text-stone-900 tracking-tight mb-8 italic uppercase">Appearance</h1>
          
          <section className="mb-12">
            <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-6">Wallpaper Galaxy</h3>
            <div className="grid grid-cols-3 gap-6">
              {WALLPAPERS.map((wp, i) => (
                <button
                  key={i}
                  onClick={() => onWallpaperChange(wp)}
                  className={`relative aspect-[16/10] rounded-2xl overflow-hidden border-4 transition-all duration-500 group ${currentWallpaper === wp ? 'border-stone-900 scale-105 shadow-2xl' : 'border-transparent hover:scale-102 opacity-70 hover:opacity-100'}`}
                >
                  <img src={wp} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Wallpaper" />
                  {currentWallpaper === wp && (
                    <div className="absolute inset-0 bg-stone-900/10 flex items-center justify-center">
                       <div className="bg-white rounded-full p-2 shadow-xl">
                          <div className="w-2 h-2 rounded-full bg-stone-900" />
                       </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-[32px] bg-stone-50 border border-stone-100">
             <div className="flex items-center justify-between">
                <div>
                   <h4 className="font-bold text-stone-800">Dynamic UI Scaling</h4>
                   <p className="text-xs text-stone-400 mt-1">Adjust interface elements based on flow.</p>
                </div>
                <div className="w-12 h-6 rounded-full bg-stone-900 p-1 flex justify-end">
                   <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
