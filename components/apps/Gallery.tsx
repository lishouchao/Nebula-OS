
import React from 'react';
import { PhotoIcon, ArrowsPointingOutIcon, HeartIcon } from '@heroicons/react/24/outline';

const Gallery: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1636955840493-f43a24bfa064?auto=format&fit=crop&w=400',
    'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=400'
  ];

  return (
    <div className="h-full bg-stone-50 flex flex-col">
      <div className="p-8 border-b border-stone-200 bg-white flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-stone-900 tracking-tight italic uppercase">Memories</h1>
          <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.4em] mt-1">6 Surfaces Found</p>
        </div>
        <div className="flex gap-4">
          <button className="p-3 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors">
            <PhotoIcon className="w-5 h-5 text-stone-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square rounded-[32px] overflow-hidden bg-stone-200 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <img src={img} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000" alt="Gallery" />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="p-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white hover:bg-white hover:text-stone-900 transition-all">
                  <HeartIcon className="w-6 h-6" />
                </button>
                <button className="p-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white hover:bg-white hover:text-stone-900 transition-all">
                  <ArrowsPointingOutIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
