
import React, { useState } from 'react';

const Compute: React.FC = () => {
  const [display, setDisplay] = useState('0');
  
  const buttons = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="flex-1 flex flex-col justify-end p-8 text-right bg-stone-50/50">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 mb-2">Result</span>
        <div className="text-6xl font-black italic tracking-tighter text-stone-900 truncate">
          {display}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-px bg-stone-100 border-t border-stone-100">
        {buttons.flat().map((btn) => (
          <button
            key={btn}
            className={`
              h-20 flex items-center justify-center text-sm font-black transition-all
              ${btn === '0' ? 'col-span-1' : ''}
              ${['÷', '×', '-', '+', '='].includes(btn) ? 'bg-stone-900 text-white hover:bg-stone-800' : 'bg-white text-stone-900 hover:bg-stone-50'}
              ${btn === '=' ? 'bg-blue-600 hover:bg-blue-700' : ''}
            `}
            onClick={() => {
              if (btn === 'C') setDisplay('0');
              else if (display === '0') setDisplay(btn);
              else setDisplay(prev => prev + btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Compute;
