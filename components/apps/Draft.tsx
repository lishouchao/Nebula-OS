
import React, { useState } from 'react';

const Draft: React.FC = () => {
  const [content, setContent] = useState('Welcome to Nebula Draft.\n\nA minimalist space for your thoughts, inspired by clean GTK design.\n\n- Focus on the content\n- Minimalist aesthetics\n- High clarity');

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="h-10 px-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/30">
        <div className="flex gap-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Lines: {content.split('\n').length}</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Words: {content.split(/\s+/).filter(x => x).length}</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-stone-200" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>
      </div>
      <textarea
        autoFocus
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 p-10 outline-none resize-none font-mono text-sm leading-relaxed text-stone-800 bg-transparent selection:bg-stone-200"
        placeholder="Start writing..."
      />
    </div>
  );
};

export default Draft;
