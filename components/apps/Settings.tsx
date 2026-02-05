
import React, { useState } from 'react';
import { WALLPAPERS } from '../../constants';
import { 
  SwatchIcon, 
  ComputerDesktopIcon, 
  ShieldCheckIcon, 
  UserIcon,
  SunIcon,
  MoonIcon,
  SparklesIcon,
  LockClosedIcon,
  FingerPrintIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline';

interface SettingsProps {
  currentWallpaper: string;
  onWallpaperChange: (url: string) => void;
}

type SectionID = 'appearance' | 'display' | 'security' | 'users';

const Settings: React.FC<SettingsProps> = ({ currentWallpaper, onWallpaperChange }) => {
  const [activeSection, setActiveSection] = useState<SectionID>('appearance');
  const [accentColor, setAccentColor] = useState('blue');
  const [theme, setTheme] = useState('adaptive');

  const sections = [
    { id: 'appearance', name: 'Appearance', icon: <SwatchIcon className="w-5 h-5" /> },
    { id: 'display', name: 'Display', icon: <ComputerDesktopIcon className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <ShieldCheckIcon className="w-5 h-5" /> },
    { id: 'users', name: 'Users', icon: <UserIcon className="w-5 h-5" /> },
  ];

  const accentColors = [
    { id: 'blue', color: 'bg-blue-500' },
    { id: 'rose', color: 'bg-rose-500' },
    { id: 'amber', color: 'bg-amber-500' },
    { id: 'emerald', color: 'bg-emerald-500' },
    { id: 'stone', color: 'bg-stone-900' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'appearance':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-black text-stone-900 tracking-tight mb-8 italic uppercase">Appearance</h1>
            
            <section className="mb-10">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-6">System Theme</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: 'light', name: 'Nebula Light', icon: <SunIcon className="w-5 h-5" /> },
                  { id: 'dark', name: 'Void Dark', icon: <MoonIcon className="w-5 h-5" /> },
                  { id: 'adaptive', name: 'Adaptive', icon: <SparklesIcon className="w-5 h-5" /> },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all ${theme === t.id ? 'bg-white shadow-xl border-stone-900 ring-4 ring-stone-900/5' : 'bg-stone-50 border-stone-100 hover:bg-stone-100 text-stone-500'}`}
                  >
                    <div className="mb-3">{t.icon}</div>
                    <span className="text-[11px] font-black uppercase tracking-widest">{t.name}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-6">Accent Color</h3>
              <div className="flex gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                {accentColors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setAccentColor(c.id)}
                    className={`w-10 h-10 rounded-full ${c.color} transition-all transform hover:scale-110 flex items-center justify-center ${accentColor === c.id ? 'ring-offset-2 ring-2 ring-stone-900 scale-110 shadow-lg' : ''}`}
                  >
                    {accentColor === c.id && <div className="w-2 h-2 rounded-full bg-white" />}
                  </button>
                ))}
              </div>
            </section>
            
            <section className="mb-12">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-6">Wallpaper Galaxy</h3>
              <div className="grid grid-cols-3 gap-4">
                {WALLPAPERS.map((wp, i) => (
                  <button
                    key={i}
                    onClick={() => onWallpaperChange(wp)}
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-500 group ${currentWallpaper === wp ? 'border-stone-900 scale-[1.02] shadow-xl' : 'border-transparent hover:scale-[1.01] opacity-60 hover:opacity-100'}`}
                  >
                    <img src={wp} className="w-full h-full object-cover" alt="Wallpaper" />
                  </button>
                ))}
              </div>
            </section>
          </div>
        );

      case 'display':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-black text-stone-900 tracking-tight mb-8 italic uppercase">Display</h1>
            
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-800 text-sm">Main Monitor Brightness</h4>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">Calibrated for OLED</p>
                </div>
                <input type="range" className="w-48 accent-stone-900" defaultValue={85} />
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-800 text-sm">Night Light Flow</h4>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">Warmer tones at sunset</p>
                </div>
                <button className="w-12 h-6 rounded-full bg-stone-200 p-1 transition-colors flex justify-start">
                   <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                 <div className="p-6 rounded-2xl border border-stone-100 bg-white shadow-sm">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Resolution</span>
                    <p className="mt-2 text-xl font-bold text-stone-900">3840 x 2160</p>
                    <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-widest">Retina Scale Enabled</p>
                 </div>
                 <div className="p-6 rounded-2xl border border-stone-100 bg-white shadow-sm">
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">Refresh Rate</span>
                    <p className="mt-2 text-xl font-bold text-stone-900">144 Hz</p>
                    <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-widest">Adaptive Sync Active</p>
                 </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-black text-stone-900 tracking-tight mb-8 italic uppercase">Security</h1>
            
            <div className="bg-rose-50 border border-rose-100 p-6 rounded-2xl flex items-center gap-6 mb-8">
               <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white">
                  <ShieldCheckIcon className="w-6 h-6" />
               </div>
               <div>
                  <h4 className="font-bold text-rose-900 text-sm italic uppercase">System Integrity Secured</h4>
                  <p className="text-[11px] text-rose-700/60 font-medium">Core encryption is active and verified.</p>
               </div>
            </div>

            <div className="space-y-3">
               {[
                 { title: 'Nebula Key', desc: 'Manage hardware security keys', icon: <LockClosedIcon className="w-5 h-5" /> },
                 { title: 'Biometrics', desc: 'Configure Retina and Touch ID', icon: <FingerPrintIcon className="w-5 h-5" /> },
                 { title: 'App Sandboxing', desc: 'Isolate sensitive workflows', icon: <ShieldCheckIcon className="w-5 h-5" /> },
               ].map((item, i) => (
                 <button key={i} className="w-full flex items-center justify-between p-5 rounded-xl border border-stone-100 bg-stone-50 hover:bg-stone-100 transition-colors group">
                    <div className="flex items-center gap-4">
                       <div className="text-stone-400 group-hover:text-stone-900 transition-colors">{item.icon}</div>
                       <div className="text-left">
                          <p className="text-sm font-bold text-stone-900 tracking-tight">{item.title}</p>
                          <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-0.5">{item.desc}</p>
                       </div>
                    </div>
                    <div className="text-stone-300">
                       <IdentificationIcon className="w-4 h-4" />
                    </div>
                 </button>
               ))}
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-10">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-[40px] bg-gradient-to-tr from-stone-900 to-stone-600 flex items-center justify-center text-white shadow-2xl relative overflow-hidden group">
                 <span className="text-5xl font-black italic">NA</span>
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <span className="text-[8px] font-black uppercase tracking-widest">Change Avatar</span>
                 </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center shadow-lg">
                 <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-stone-900 tracking-tight italic uppercase">Nebula Admin</h2>
            <p className="text-[11px] font-black text-stone-400 uppercase tracking-[0.4em] mt-1">Super User • Local Core</p>

            <div className="max-w-xs mx-auto mt-12 space-y-3">
               <button className="w-full py-4 rounded-xl bg-stone-900 text-white text-[11px] font-black uppercase tracking-widest hover:shadow-2xl transition-all">Account Settings</button>
               <button className="w-full py-4 rounded-xl border border-stone-200 text-stone-400 text-[11px] font-black uppercase tracking-widest hover:bg-stone-50 transition-all">Sign Out Universe</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-full bg-white">
      <div className="w-64 border-r border-stone-100 bg-stone-50/50 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10 pl-2">
           <div className="w-8 h-8 rounded-xl bg-stone-900 flex items-center justify-center text-white shadow-lg">
              <Cog6ToothIcon className="w-5 h-5" />
           </div>
           <span className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-900">Core OS</span>
        </div>

        <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-300 mb-4 pl-2">Personalization</h2>
        <div className="space-y-1 mb-8">
          {sections.slice(0, 2).map((s) => (
            <button 
              key={s.id}
              onClick={() => setActiveSection(s.id as SectionID)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeSection === s.id ? 'bg-white shadow-sm border border-stone-100 text-stone-900' : 'text-stone-400 hover:bg-stone-100 hover:text-stone-600'}`}
            >
              <div className={`${activeSection === s.id ? 'text-stone-900' : 'text-stone-300'}`}>{s.icon}</div>
              {s.name}
            </button>
          ))}
        </div>

        <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-300 mb-4 pl-2">Administration</h2>
        <div className="space-y-1">
          {sections.slice(2).map((s) => (
            <button 
              key={s.id}
              onClick={() => setActiveSection(s.id as SectionID)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeSection === s.id ? 'bg-white shadow-sm border border-stone-100 text-stone-900' : 'text-stone-400 hover:bg-stone-100 hover:text-stone-600'}`}
            >
              <div className={`${activeSection === s.id ? 'text-stone-900' : 'text-stone-300'}`}>{s.icon}</div>
              {s.name}
            </button>
          ))}
        </div>

        <div className="mt-auto p-4 rounded-2xl bg-stone-900 text-white flex flex-col items-center gap-2">
           <span className="text-[8px] font-black uppercase tracking-[0.5em] opacity-50">Build Status</span>
           <span className="text-[11px] font-black tracking-tighter italic">NEBULA-X-CORE-999</span>
        </div>
      </div>
      
      <div className="flex-1 p-12 overflow-y-auto bg-white">
        <div className="max-w-2xl mx-auto">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

import { Cog6ToothIcon } from '@heroicons/react/24/outline';
export default Settings;
