
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
        absolute rounded-xl overflow-hidden flex flex-col gtk-window-shadow
        transition-shadow duration-200
        ${isFocused ? 'shadow-2xl' : 'opacity-90 shadow-lg'}
        glass border border-white/20
      `}
      style={{ 
        left: pos.x, 
        top: pos.y, 
        width: 800, 
        height: 500,
        zIndex: zIndex 
      }}
      onClick={onFocus}
    >
      {/* Title Bar - GTK4 HeaderBar Style */}
      <div 
        className="h-12 flex items-center justify-between px-4 cursor-default select-none border-b border-black/5"
        onMouseDown={handleMouseDown}
      >
        <div className="flex-1 flex justify-start">
           <div className="flex gap-2">
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="w-5 h-5 rounded-full bg-red-400/80 hover:bg-red-500 flex items-center justify-center group"
            >
              <XMarkIcon className="w-3 h-3 text-red-900 opacity-0 group-hover:opacity-100" />
            </button>
            <button className="w-5 h-5 rounded-full bg-yellow-400/80 hover:bg-yellow-500 flex items-center justify-center group">
              <MinusIcon className="w-3 h-3 text-yellow-900 opacity-0 group-hover:opacity-100" />
            </button>
            <button className="w-5 h-5 rounded-full bg-green-400/80 hover:bg-green-500 flex items-center justify-center group">
              <ArrowsPointingOutIcon className="w-3 h-3 text-green-900 opacity-0 group-hover:opacity-100" />
            </button>
          </div>
        </div>

        <div className="flex-[2] text-center">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {title}
          </span>
        </div>

        <div className="flex-1"></div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-white/40 dark:bg-black/20">
        {children}
      </div>
    </div>
  );
};

export default Window;
