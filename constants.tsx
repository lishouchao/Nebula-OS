
import React from 'react';
import { 
  FolderIcon, CommandLineIcon, Cog6ToothIcon, SparklesIcon, CloudIcon,
  GlobeAltIcon, PencilSquareIcon, CalendarIcon, EnvelopeIcon, PhotoIcon,
  MusicalNoteIcon, FilmIcon, MapIcon, CalculatorIcon, NewspaperIcon,
  ChartBarIcon, UsersIcon, ChatBubbleLeftRightIcon, CheckCircleIcon, 
  ShieldCheckIcon, CpuChipIcon, KeyIcon, CameraIcon, PaintBrushIcon, HeartIcon,
  FireIcon, IdentificationIcon, PuzzlePieceIcon, BeakerIcon, DocumentTextIcon,
  TableCellsIcon, TrophyIcon, BanknotesIcon, MicrophoneIcon, QrCodeIcon,
  PrinterIcon, ShareIcon, RectangleGroupIcon, CloudArrowUpIcon, ArrowsRightLeftIcon,
  ShoppingBagIcon, BookOpenIcon, MegaphoneIcon, RadioIcon, VideoCameraIcon
} from '@heroicons/react/24/outline';
import { AppConfig } from './types';

export const APPS: AppConfig[] = [
  // Page 1: System & Productivity
  { id: 'explorer', name: 'Files', icon: <FolderIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-100 text-stone-600 border border-stone-200' },
  { id: 'terminal', name: 'Terminal', icon: <CommandLineIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-zinc-800 text-zinc-100' },
  { id: 'nebula-ai', name: 'Nebula AI', icon: <SparklesIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-white text-stone-800 border border-stone-200' },
  { id: 'settings', name: 'Settings', icon: <Cog6ToothIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-200 text-stone-700' },
  { id: 'atlas', name: 'Atlas', icon: <GlobeAltIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-blue-50 text-blue-600 border border-blue-100' },
  { id: 'memo', name: 'Memo', icon: <PencilSquareIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-amber-50 text-amber-600 border border-amber-100' },
  { id: 'chronos', name: 'Chronos', icon: <CalendarIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-rose-50 text-rose-600 border border-rose-100' },
  { id: 'post', name: 'Post', icon: <EnvelopeIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-indigo-50 text-indigo-600 border border-indigo-100' },
  { id: 'flow', name: 'Flow', icon: <CheckCircleIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-emerald-50 text-emerald-600 border border-emerald-100' },
  { id: 'gallery', name: 'Gallery', icon: <PhotoIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-orange-50 text-orange-600 border border-orange-100' },
  { id: 'audio', name: 'Audio', icon: <MusicalNoteIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-violet-50 text-violet-600 border border-violet-100' },
  { id: 'vision', name: 'Vision', icon: <FilmIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-900 text-white' },
  { id: 'lens', name: 'Lens', icon: <CameraIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-white text-stone-900 border border-stone-200' },
  { id: 'canvas', name: 'Canvas', icon: <PaintBrushIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-pink-50 text-pink-600 border border-pink-100' },
  { id: 'weather', name: 'Weather', icon: <CloudIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-sky-50 text-sky-600 border border-sky-100' },
  { id: 'path', name: 'Path', icon: <MapIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-teal-50 text-teal-600 border border-teal-100' },
  { id: 'compute', name: 'Compute', icon: <CalculatorIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-50 text-stone-800 border border-stone-200' },
  { id: 'feed', name: 'Feed', icon: <NewspaperIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-100 text-stone-500' },
  { id: 'pulse', name: 'Pulse', icon: <ChartBarIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-lime-50 text-lime-600 border border-lime-100' },
  { id: 'relay', name: 'Relay', icon: <ChatBubbleLeftRightIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-blue-600 text-white' },

  // Page 2: Advanced & Social
  { id: 'aura', name: 'Aura Social', icon: <FireIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-purple-600 text-white shadow-purple-200' },
  { id: 'nexus', name: 'Nexus Hub', icon: <IdentificationIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-white text-blue-600 border border-blue-50' },
  { id: 'vortex', name: 'Vortex Ent.', icon: <PuzzlePieceIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-fuchsia-50 text-fuchsia-600' },
  { id: 'forge', name: 'Forge IDE', icon: <BeakerIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-zinc-800 text-emerald-400' },
  { id: 'draft', name: 'Draft Docs', icon: <DocumentTextIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-blue-50 text-blue-700' },
  { id: 'sheet', name: 'Sheet Grid', icon: <TableCellsIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-emerald-50 text-emerald-700' },
  { id: 'arcade', name: 'Arcade', icon: <TrophyIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-yellow-50 text-yellow-600' },
  { id: 'stock', name: 'Stock Mkt', icon: <BanknotesIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-50 text-emerald-600 border border-stone-200' },
  { id: 'voice', name: 'Voice Rec', icon: <MicrophoneIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-rose-600 text-white' },
  { id: 'scan', name: 'Scan Lens', icon: <QrCodeIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-white text-stone-800 border border-stone-100' },
  { id: 'print', name: 'Print Center', icon: <PrinterIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-200 text-stone-600' },
  { id: 'git', name: 'Git Flow', icon: <ShareIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-orange-600 text-white' },
  { id: 'docker', name: 'Containers', icon: <RectangleGroupIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-blue-500 text-white' },
  { id: 'cloud', name: 'Nebula Cloud', icon: <CloudArrowUpIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-sky-400 text-white' },
  { id: 'sync', name: 'Universal Sync', icon: <ArrowsRightLeftIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-50 text-stone-400' },
  { id: 'market', name: 'Market', icon: <ShoppingBagIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-indigo-600 text-white' },
  { id: 'book', name: 'Library', icon: <BookOpenIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-50 text-orange-800 border border-orange-100' },
  { id: 'news', name: 'Broadcast', icon: <MegaphoneIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-red-50 text-red-600' },
  { id: 'radio', name: 'Waves', icon: <RadioIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-zinc-900 text-zinc-100' },
  { id: 'studio', name: 'Studio', icon: <VideoCameraIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-50 text-violet-600' },

  // Page 3: Security & Bio
  { id: 'circles', name: 'Circles', icon: <UsersIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-50 text-stone-600' },
  { id: 'shield', name: 'Shield', icon: <ShieldCheckIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-cyan-50 text-cyan-700' },
  { id: 'core', name: 'Monitor', icon: <CpuChipIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-stone-800 text-cyan-400' },
  { id: 'crypt', name: 'Vault', icon: <KeyIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-zinc-900 text-zinc-400' },
  { id: 'vital', name: 'Vital', icon: <HeartIcon className="w-6 h-6 stroke-[1.5px]" />, color: 'bg-red-50 text-red-600' },
];

export const WALLPAPERS = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1636955840493-f43a24bfa064?q=80&w=2564&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2564&auto=format&fit=crop'
];

export const DEFAULT_WALLPAPER = WALLPAPERS[0];
