
// Fix: Import React to resolve React.ReactNode namespace error
import React from 'react';

export type AppID = 'explorer' | 'terminal' | 'settings' | 'nebula-ai' | 'weather';

export interface WindowState {
  id: string;
  appId: AppID;
  title: string;
  isOpen: boolean;
  isMaximized: boolean;
  isFocused: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface AppConfig {
  id: AppID;
  name: string;
  icon: React.ReactNode;
  color: string;
}