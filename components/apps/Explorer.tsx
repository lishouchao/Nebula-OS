
import React from 'react';
import { 
  HomeIcon, 
  DocumentIcon, 
  PhotoIcon, 
  MusicalNoteIcon, 
  VideoCameraIcon, 
  ClockIcon, 
  TrashIcon 
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
    { name: 'Work Project.pdf', size: '2.4 MB', type: 'PDF' },
    { name: 'Vacation Photo.jpg', size: '1.1 MB', type: 'Image' },
    { name: 'Monthly Budget.xlsx', size: '500 KB', type: 'Sheet' },
    { name: 'Presentation.pptx', size: '15 MB', type: 'Slides' },
    { name: 'Code Backup.zip', size: '120 MB', type: 'Archive' },
    { name: 'Meeting Notes.txt', size: '12 KB', type: 'Text' },
  ];

  return (
    <div className="flex h-full bg-white/80 dark:bg-gray-900/80">
      {/* Sidebar */}
      <div className="w-48 border-r border-black/5 p-4 space-y-1">
        {sidebarItems.map((item, idx) => (
          <div 
            key={idx}
            className={`
              flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors cursor-default
              ${item.active ? 'bg-blue-500 text-white' : 'hover:bg-black/5 text-gray-700 dark:text-gray-300'}
            `}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Home</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-black/5 hover:bg-black/10 rounded-lg text-xs font-medium">New Folder</button>
            <button className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-xs font-medium">Upload</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {files.map((file, idx) => (
            <div key={idx} className="group p-4 rounded-xl hover:bg-black/5 border border-transparent hover:border-black/5 transition-all cursor-default">
              <div className="w-full aspect-square bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-3 flex items-center justify-center text-blue-600">
                <DocumentIcon className="w-12 h-12" />
              </div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{file.name}</p>
              <p className="text-[10px] text-gray-500 mt-1 uppercase">{file.type} • {file.size}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
