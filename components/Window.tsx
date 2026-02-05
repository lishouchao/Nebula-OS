
import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, MinusIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';

interface WindowProps {
  title: string;
  id: string;
  children: React.ReactNode;
  onClose: () => void;
  onFocus: () => void;
  isFocused: boolean;
  zIndex: number;
  initialPos: { x: number; y: number };
}

const Window: React.FC<WindowProps> = ({ 
  title, 
  id, 
  children, 
  onClose, 
  onFocus, 
  isFocused, 
  zIndex,
  initialPos 
}) => {
  const [pos, setPos] = useState(initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus();
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPos({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y
        });
      }
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      className={`
        absolute rounded-2xl overflow-hidden flex flex-col gtk-window-shadow
        transition-all duration-300
        ${isFocused ? 'scale-100 opacity-100' : 'scale-[0.99] opacity-90 shadow-sm'}
        glass border border-white/40
      `}
      style={{ 
        left: pos.x, 
        top: pos.y, 
        width: 840, 
        height: 540,
        zIndex: zIndex 
      }}
      onClick={onFocus}
    >
      {/* Title Bar - Minimalist High-Key Header */}
      <div 
        className="h-11 flex items-center justify-between px-5 cursor-default select-none border-b border-stone-200/40 bg-white/30"
        onMouseDown={handleMouseDown}
      >
        <div className="flex-1 flex justify-start">
           <div className="flex gap-2.5 group/controls">
            {/* Close Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="w-3.5 h-3.5 rounded-full bg-stone-200 hover:bg-red-500 transition-all duration-300 flex items-center justify-center group/btn shadow-sm"
            >
              <XMarkIcon className="w-2 h-2 text-stone-600 group-hover/btn:text-white transition-opacity opacity-0 group-hover/controls:opacity-100" />
            </button>
            {/* Minimize Button */}
            <button className="w-3.5 h-3.5 rounded-full bg-stone-200 hover:bg-amber-400 transition-all duration-300 flex items-center justify-center group/btn shadow-sm">
              <MinusIcon className="w-2 h-2 text-stone-600 group-hover/btn:text-white transition-opacity opacity-0 group-hover/controls:opacity-100" />
            </button>
            {/* Maximize Button */}
            <button className="w-3.5 h-3.5 rounded-full bg-stone-200 hover:bg-emerald-500 transition-all duration-300 flex items-center justify-center group/btn shadow-sm">
              <ArrowsPointingOutIcon className="w-2 h-2 text-stone-600 group-hover/btn:text-white transition-opacity opacity-0 group-hover/controls:opacity-100" />
            </button>
          </div>
        </div>

        <div className="flex-[3] text-center">
          <span className="text-[13px] font-bold text-stone-500 tracking-tight uppercase">
            {title}
          </span>
        </div>

        <div className="flex-1"></div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-white/20">
        {children}
      </div>
    </div>
  );
};

export default Window;
