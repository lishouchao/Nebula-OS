
import React, { useState } from 'react';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['Welcome to Nebula Terminal v3.1', 'Type "help" for a list of commands.']);
  const [input, setInput] = useState('');

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = `nebula: command not found: ${cmd}`;

      if (cmd === 'help') response = 'Available commands: help, clear, neofetch, whoami, nebula';
      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }
      if (cmd === 'neofetch') {
        response = `
          \r\r   .-.        Nebula OS 3.1
          \r\r  (o o)       --------------
          \r\r  | O |       Kernel: 6.8.0-nebula-core
          \r\r   '-'        Uptime: 14 mins
          \r\r              Shell: nebula-sh
          \r\r              Resolution: 2560x1440
          \r\r              DE: Nebula Desktop (GTK4+)
        `;
      }
      if (cmd === 'whoami') response = 'root@nebula-workstation';
      if (cmd === 'nebula') response = 'Nebula OS is the pinnacle of desktop computing.';

      setHistory(prev => [...prev, `> ${input}`, response]);
      setInput('');
    }
  };

  return (
    <div className="h-full bg-gray-950 p-4 font-mono text-sm text-green-400 overflow-y-auto">
      {history.map((line, idx) => (
        <pre key={idx} className="whitespace-pre-wrap mb-1">{line}</pre>
      ))}
      <div className="flex items-center">
        <span className="mr-2 text-blue-400">root@nebula:~#</span>
        <input
          autoFocus
          className="bg-transparent border-none outline-none flex-1 text-green-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
        />
      </div>
    </div>
  );
};

export default Terminal;
