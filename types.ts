
import React from 'react';

export type AppID = 
  | 'explorer' | 'terminal' | 'settings' | 'nebula-ai' | 'weather'
  | 'atlas' | 'memo' | 'chronos' | 'post' | 'gallery' 
  | 'audio' | 'vision' | 'path' | 'compute' | 'feed'
  | 'pulse' | 'circles' | 'relay' | 'flow' | 'shield'
  | 'core' | 'crypt' | 'lens' | 'canvas' | 'vital'
  // 新增 20 个应用
  | 'aura' | 'nexus' | 'vortex' | 'forge' | 'draft'
  | 'sheet' | 'arcade' | 'stock' | 'voice' | 'scan'
  | 'print' | 'git' | 'docker' | 'cloud' | 'sync'
  | 'market' | 'book' | 'news' | 'radio' | 'studio';

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
