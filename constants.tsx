
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
    icon: <FolderIcon className="w-6 h-6" />,
    color: 'bg-blue-500'
  },
  {
    id: 'terminal',
    name: 'Terminal',
    icon: <CommandLineIcon className="w-6 h-6" />,
    color: 'bg-gray-800'
  },
  {
    id: 'nebula-ai',
    name: 'Nebula AI',
    icon: <SparklesIcon className="w-6 h-6" />,
    color: 'bg-purple-600'
  },
  {
    id: 'weather',
    name: 'Weather',
    icon: <CloudIcon className="w-6 h-6" />,
    color: 'bg-sky-400'
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: <Cog6ToothIcon className="w-6 h-6" />,
    color: 'bg-gray-500'
  }
];

export const WALLPAPER_URL = 'https://picsum.photos/id/10/2560/1440';
