
import React from 'react';
import { 
  HomeIcon, 
  DocumentIcon, 
  PhotoIcon, 
  MusicalNoteIcon, 
  VideoCameraIcon, 
  ClockIcon, 
  TrashIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Explorer: React.FC = () => {
  const sidebarItems = [
    { name: 'Recent', icon: <ClockIcon className="w-4 h-4" /> },
    { name: 'Home', icon: <HomeIcon className="w-4 h-4" />, active: true },
    { name: 'Documents', icon: <DocumentIcon className="w-4 h-4" /> },
    { name: 'Pictures', icon: <PhotoIcon className="w-4 h-4" /> },
    { name: 'Music', icon: <MusicalNoteIcon className="w-4 h-4" /> },
    { name: 'Videos', icon: <VideoCameraIcon className="w-4 h-4" /> },
    { name: 'Trash', icon: <TrashIcon className="w-4 h-4" /> },
  ];

  const files = [
    { name: 'Architecture Study.pdf', size: '4.2 MB', type: 'PDF' },
    { name: 'Studio_Interior_01.jpg', size: '8.1 MB', type: 'Image' },
    { name: 'Design Specs.docx', size: '150 KB', type: 'Doc' },
    { name: 'Presentation.pptx', size: '12 MB', type: 'Slides' },
    { name: 'Asset Library.zip', size: '1.4 GB', type: 'Archive' },
    { name: 'Draft.txt', size: '2 KB', type: 'Text' },
  ];

  return (
    <div className="flex h-full bg-white/95">
      {/* Sidebar - Soft Stone Gray */}
      <div className="w-52 border-r border-stone-100 bg-stone-50/50 p-5 space-y-1.5">
        {sidebarItems.map((item, idx) => (
          <div 
            key={idx}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all cursor-default
              ${item.active ? 'bg-white shadow-sm border border-stone-100 text-stone-900' : 'hover:bg-stone-100 text-stone-500'}
            `}
          >
            <span className={item.active ? 'text-stone-900' : 'text-stone-400'}>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex items-center gap-2 text-[12px] text-stone-400 mb-6 font-semibold uppercase tracking-widest">
           <span>Home</span>
           <ChevronRightIcon className="w-3 h-3" />
           <span className="text-stone-900">All Files</span>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {files.map((file, idx) => (
            <div key={idx} className="group p-4 rounded-2xl hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all cursor-default text-center">
              <div className="w-full aspect-square bg-stone-100 rounded-2xl mb-4 flex items-center justify-center text-stone-400 group-hover:scale-[1.05] transition-transform duration-500">
                <DocumentIcon className="w-14 h-14 stroke-[1px]" />
              </div>
              <p className="text-[13px] font-bold text-stone-800 truncate">{file.name}</p>
              <p className="text-[11px] font-medium text-stone-400 mt-1 uppercase tracking-tighter">{file.type} • {file.size}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
