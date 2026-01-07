
import React from 'react';
import { ScriptConfig } from '../types';

interface SidebarProps {
  config: ScriptConfig;
  setConfig: React.Dispatch<React.SetStateAction<ScriptConfig>>;
  onDownload: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ config, setConfig, onDownload }) => {
  const updateConfig = (key: keyof ScriptConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <aside className="w-80 flex-shrink-0 bg-[#0f0f12] p-6 flex flex-col gap-6 overflow-y-auto">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Environment Vars</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">Faction Name</label>
            <input 
              type="text"
              value={config.faction}
              onChange={(e) => updateConfig('faction', e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-violet-500"
              placeholder="e.g., BEAR"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">Kali Prompt (PS1)</label>
            <input 
              type="text"
              value={config.kaliText}
              onChange={(e) => updateConfig('kaliText', e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm mono text-zinc-300 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-zinc-800 w-full"></div>

      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">File Paths</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">NH Bin Path</label>
            <input 
              type="text"
              value={config.nhPath}
              onChange={(e) => updateConfig('nhPath', e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs text-zinc-400 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">Chroot Directory</label>
            <input 
              type="text"
              value={config.chrootDir}
              onChange={(e) => updateConfig('chrootDir', e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs text-zinc-400 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-zinc-800 w-full"></div>

      <div className="mt-auto">
        <button 
          onClick={onDownload}
          className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg shadow-lg shadow-violet-900/20 transition-all flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-file-code"></i>
          Generate Script
        </button>
        <p className="text-[10px] text-zinc-600 text-center mt-3 leading-tight">
          Ensure you have root access and Magisk installed before running the output script in Termux.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
