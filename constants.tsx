
import React from 'react';
import { 
  FolderIcon, 
  CommandLineIcon, 
  Cog6ToothIcon, 
  SparklesIcon, 
  CloudIcon 
} from '@heroicons/react/24/outline';
import { AppConfig } from './types';

export const APPS: AppConfig[] = [
  {
    id: 'explorer',
    name: 'Files',
    icon: <FolderIcon className="w-6 h-6 stroke-[1.5px]" />,
    color: 'bg-stone-100 text-stone-600 border border-stone-200'
  },
  {
    id: 'terminal',
    name: 'Terminal',
    icon: <CommandLineIcon className="w-6 h-6 stroke-[1.5px]" />,
    color: 'bg-zinc-800 text-zinc-100'
  },
  {
    id: 'nebula-ai',
    name: 'Nebula AI',
    icon: <SparklesIcon className="w-6 h-6 stroke-[1.5px]" />,
    color: 'bg-white text-stone-800 border border-stone-200'
  },
  {
    id: 'weather',
    name: 'Weather',
    icon: <CloudIcon className="w-6 h-6 stroke-[1.5px]" />,
    color: 'bg-sky-50 text-sky-600 border border-sky-100'
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: <Cog6ToothIcon className="w-6 h-6 stroke-[1.5px]" />,
    color: 'bg-stone-200 text-stone-700'
  }
];

// High-key minimalist wallpaper inspired by the clean white interior
export const WALLPAPER_URL = 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2560&auto=format&fit=crop';
