
import React, { useState } from 'react';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['Nebula Shell v3.1 [Clean Console]', 'Initializing system core... Ready.']);
  const [input, setInput] = useState('');

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = `shell: command not found: ${cmd}`;

      if (cmd === 'help') response = 'Commands: help, clear, sys, whoami';
      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }
      if (cmd === 'sys') {
        response = `NEBULA OS | v3.1 | MONO CORE`;
      }
      if (cmd === 'whoami') response = 'nebula_user';

      setHistory(prev => [...prev, `$ ${input}`, response]);
      setInput('');
    }
  };

  return (
    <div className="h-full bg-stone-50 p-8 font-mono text-[13px] text-stone-700 overflow-y-auto selection:bg-stone-200">
      {history.map((line, idx) => (
        <pre key={idx} className="whitespace-pre-wrap mb-2 leading-relaxed">{line}</pre>
      ))}
      <div className="flex items-center mt-4">
        <span className="mr-3 text-stone-400 font-bold">$</span>
        <input
          autoFocus
          className="bg-transparent border-none outline-none flex-1 text-stone-900 font-bold"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="_"
        />
      </div>
    </div>
  );
};

export default Terminal;
