import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, BookOpen, Layers } from 'lucide-react';
import { TRIBES_DATA } from '../data/tribes';
import { Tribe, TribeStamp } from '../types';

interface ArtifactItem {
  id: string;
  name: string;
  symbol: string;
  description: string;
  tribeName: string;
  tribeId: string;
  islandGroup: 'Luzon' | 'Visayas' | 'Mindanao';
  region: string;
}

export default function ArtifactsGallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIsland, setSelectedIsland] = useState<'All' | 'Luzon' | 'Visayas' | 'Mindanao'>('All');
  const [activeArtifact, setActiveArtifact] = useState<ArtifactItem | null>(null);

  // Flatten all tribe stamps/artifacts into a single flat list
  const allArtifacts: ArtifactItem[] = TRIBES_DATA.reduce((acc: ArtifactItem[], tribe: Tribe) => {
    const tribeArtifacts = tribe.stamps.map((stamp: TribeStamp) => ({
      id: stamp.id,
      name: stamp.name,
      symbol: stamp.symbol,
      description: stamp.description,
      tribeName: tribe.name,
      tribeId: tribe.id,
      islandGroup: tribe.islandGroup,
      region: tribe.region,
    }));
    return [...acc, ...tribeArtifacts];
  }, []);

  // Filter artifacts based on search and selected island group
  const filteredArtifacts = allArtifacts.filter((art) => {
    const matchesSearch =
      art.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tribeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIsland = selectedIsland === 'All' || art.islandGroup === selectedIsland;
    return matchesSearch && matchesIsland;
  });

  return (
    <div className="space-y-6">
      
      {/* Search and Filters Header */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Maghanap ng artifact (hal. Kris, Balete, Sundang)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-sans transition-all"
            id="input-artifact-search"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
          {([
            { id: 'All', label: 'Lahat ng Rehiyon', icon: Layers },
            { id: 'Luzon', label: 'Luzon', icon: Filter },
            { id: 'Visayas', label: 'Visayas', icon: Filter },
            { id: 'Mindanao', label: 'Mindanao', icon: Filter },
          ] as const).map((island) => {
            const Icon = island.icon;
            const isActive = selectedIsland === island.id;
            return (
              <button
                key={island.id}
                onClick={() => setSelectedIsland(island.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-sans font-bold transition-all cursor-pointer whitespace-nowrap shadow-sm ${
                  isActive
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                id={`filter-island-${island.id}`}
              >
                <Icon className="w-3.5 h-3.5" />
                {island.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredArtifacts.map((art) => {
          // Set dynamic badge color based on island group
          const tagColors = {
            Luzon: 'bg-emerald-50 text-emerald-800 border-emerald-100',
            Visayas: 'bg-amber-50 text-amber-800 border-amber-100',
            Mindanao: 'bg-red-50 text-red-800 border-red-100',
          }[art.islandGroup];

          return (
            <motion.div
              key={art.id}
              layout
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setActiveArtifact(art)}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between h-56 relative overflow-hidden group"
              id={`artifact-card-${art.id}`}
            >
              <div>
                {/* Large visual icon */}
                <div className="flex justify-between items-start">
                  <span className="text-4xl filter drop-shadow-sm transform group-hover:rotate-12 transition-transform duration-300">
                    {art.symbol}
                  </span>
                  <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${tagColors}`}>
                    {art.islandGroup}
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  <h4 className="text-sm font-sans font-black text-slate-800 group-hover:text-emerald-600 transition-colors uppercase tracking-wide">
                    {art.name}
                  </h4>
                  <p className="text-[10px] text-emerald-800 font-bold font-sans">
                    Tribo: {art.tribeName}
                  </p>
                  <p className="text-[10px] text-slate-500 line-clamp-3 leading-relaxed">
                    {art.description}
                  </p>
                </div>
              </div>

              {/* View details prompt */}
              <div className="pt-2 border-t border-slate-100 text-[8px] font-mono text-slate-400 font-bold uppercase flex justify-between items-center group-hover:text-emerald-600">
                <span>Mag-click para suriin</span>
                <span>➔</span>
              </div>
            </motion.div>
          );
        })}

        {filteredArtifacts.length === 0 && (
          <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200 shadow-inner text-slate-400">
            <BookOpen className="w-10 h-10 mx-auto stroke-[1.5] mb-2 text-slate-300" />
            <p className="text-xs font-sans">Walang nahanap na artifact para sa iyong hinahanap.</p>
          </div>
        )}
      </div>

      {/* Detail Slide-Over Modal */}
      <AnimatePresence>
        {activeArtifact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white border-2 border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full relative space-y-6"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <span className="text-5xl p-3 bg-slate-50 rounded-2xl border border-slate-100 filter drop-shadow">
                  {activeArtifact.symbol}
                </span>
                <div>
                  <h3 className="text-lg font-sans font-black text-slate-800 uppercase tracking-wide">
                    {activeArtifact.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Katutubong Artifact at Simbolo
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-100" />

              {/* Description Body */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-[10px] font-sans font-bold">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block font-mono">KATUTUBONG TRIBO:</span>
                    <span className="text-emerald-700 font-black">{activeArtifact.tribeName}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block font-mono">REHIYON / LOKASYON:</span>
                    <span className="text-slate-700 truncate block">{activeArtifact.region.split(',')[0]}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 block">KAHULUGANG KULTURAL:</span>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans text-justify">
                    {activeArtifact.description}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveArtifact(null)}
                className="w-full py-3 bg-emerald-600 text-white font-sans font-bold text-xs uppercase tracking-wide rounded-full shadow-md hover:bg-emerald-700 cursor-pointer transition-all text-center block"
                id="btn-close-artifact-modal"
              >
                I-close ang Detalye
              </button>

              <button
                onClick={() => setActiveArtifact(null)}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-all"
                title="Isara"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
