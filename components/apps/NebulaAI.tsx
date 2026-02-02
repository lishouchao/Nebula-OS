
import React, { useState, useRef, useEffect } from 'react';
import { askNebula } from '../../services/geminiService';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const NebulaAI: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Nebula System ready. How may I assist your workflow today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await askNebula(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-6">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              max-w-[70%] px-5 py-3 rounded-2xl text-[14px] leading-relaxed
              ${m.role === 'user' 
                ? 'bg-stone-900 text-white shadow-xl' 
                : 'bg-stone-50 border border-stone-100 text-stone-800'}
            `}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <div className="flex space-x-2">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-pulse delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-pulse delay-150"></div>
                </div>
             </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-stone-50 bg-white">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Search or ask Nebula..."
            className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 pr-16 focus:outline-none focus:ring-1 focus:ring-stone-200 transition-all text-stone-800 placeholder-stone-400"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-4 p-2 text-stone-400 hover:text-stone-900 disabled:opacity-30 transition-colors"
          >
            <PaperAirplaneIcon className="w-6 h-6 stroke-[1.5px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NebulaAI;
