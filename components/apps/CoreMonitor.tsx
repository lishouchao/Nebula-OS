
import React from 'react';
import { CpuChipIcon, ChartBarIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

const CoreMonitor: React.FC = () => {
  return (
    <div className="h-full bg-white p-10 overflow-y-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-stone-900 tracking-tight italic uppercase">System Core</h1>
        <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.4em] mt-1">Live Telemetry</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="p-6 rounded-3xl bg-stone-50 border border-stone-100">
          <CpuChipIcon className="w-6 h-6 text-stone-900 mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Processor</p>
          <p className="text-2xl font-black text-stone-900 mt-1 italic">12%</p>
          <div className="mt-4 h-1 w-full bg-stone-200 rounded-full overflow-hidden">
            <div className="h-full bg-stone-900 w-[12%]" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-stone-50 border border-stone-100">
          <ChartBarIcon className="w-6 h-6 text-stone-900 mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Memory</p>
          <p className="text-2xl font-black text-stone-900 mt-1 italic">4.2 GB</p>
          <div className="mt-4 h-1 w-full bg-stone-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[42%]" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-stone-50 border border-stone-100">
          <ArrowsRightLeftIcon className="w-6 h-6 text-stone-900 mb-4" />
          <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Network</p>
          <p className="text-2xl font-black text-stone-900 mt-1 italic">1.2 Gbps</p>
          <div className="mt-4 h-1 w-full bg-stone-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[68%]" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-300">Active Processes</h3>
        {[
          { name: 'Nebula Shell', cpu: '2.1%', mem: '124 MB' },
          { name: 'Core Engine', cpu: '0.8%', mem: '45 MB' },
          { name: 'Gemini Bridge', cpu: '1.4%', mem: '890 MB' },
          { name: 'Window Server', cpu: '4.5%', mem: '210 MB' }
        ].map((proc, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-white border border-stone-100 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-stone-900" />
              <span className="text-sm font-bold text-stone-800">{proc.name}</span>
            </div>
            <div className="flex gap-8">
              <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">CPU {proc.cpu}</span>
              <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">MEM {proc.mem}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreMonitor;
