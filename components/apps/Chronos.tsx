
import React from 'react';

const Chronos: React.FC = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="p-12 text-center">
        <h1 className="text-5xl font-black text-stone-900 tracking-tighter italic uppercase mb-2">{month}</h1>
        <p className="text-[12px] font-black text-stone-300 uppercase tracking-[0.8em]">{year}</p>
      </div>

      <div className="flex-1 px-12 pb-12 overflow-y-auto">
        <div className="grid grid-cols-7 gap-y-8 gap-x-4">
          {days.map(d => (
            <div key={d} className="text-[10px] font-black text-stone-300 uppercase tracking-widest text-center mb-4">{d}</div>
          ))}
          {Array.from({ length: 31 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <button 
                className={`
                  w-14 h-14 rounded-3xl flex items-center justify-center text-sm font-bold transition-all
                  ${i + 1 === date.getDate() ? 'bg-stone-900 text-white shadow-2xl scale-110' : 'text-stone-800 hover:bg-stone-50'}
                `}
              >
                {i + 1}
              </button>
              {Math.random() > 0.8 && (
                <div className="mt-2 w-1 h-1 rounded-full bg-stone-900/20" />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 rounded-[40px] bg-stone-50 border border-stone-100">
           <span className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em]">Upcoming Flow</span>
           <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                 <p className="text-sm font-bold text-stone-800">Nebula Core Sync <span className="text-stone-400 ml-2 font-normal">14:00</span></p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                 <p className="text-sm font-bold text-stone-800">Design Universe Review <span className="text-stone-400 ml-2 font-normal">16:30</span></p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Chronos;
