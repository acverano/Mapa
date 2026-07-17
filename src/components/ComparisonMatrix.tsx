import { useState } from 'react';
import { Search, Compass, Globe, Sparkles, Hammer } from 'lucide-react';
import { TRIBES_DATA } from '../data/tribes';

export default function ComparisonMatrix() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<'All' | 'Luzon' | 'Visayas' | 'Mindanao'>('All');

  const filteredTribes = TRIBES_DATA.filter((tribe) => {
    const matchesSearch =
      tribe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tribe.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tribe.livelihood.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tribe.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGroup = selectedGroup === 'All' || tribe.islandGroup === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className="space-y-6">
      
      {/* Search and Island Select Header */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="I-filter ang matrix (hal. Tagabili, Visayas, Pagsasaka)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-sans transition-all"
            id="input-matrix-search"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
          {(['All', 'Luzon', 'Visayas', 'Mindanao'] as const).map((group) => {
            const isActive = selectedGroup === group;
            return (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-bold transition-all cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                id={`filter-matrix-island-${group}`}
              >
                {group === 'All' ? 'Lahat ng Pangkat' : group}
              </button>
            );
          })}
        </div>

      </div>

      {/* Info Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-4 rounded-2xl border border-emerald-100 shadow-sm text-center">
          <span className="text-2xl font-black text-emerald-800 font-sans block">
            {TRIBES_DATA.length}
          </span>
          <span className="text-[10px] text-emerald-700 font-bold uppercase font-mono tracking-wider">Kabuuang Tribo</span>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-4 rounded-2xl border border-emerald-100 shadow-sm text-center">
          <span className="text-2xl font-black text-emerald-800 font-sans block">
            {TRIBES_DATA.filter((t) => t.islandGroup === 'Luzon').length}
          </span>
          <span className="text-[10px] text-emerald-700 font-bold uppercase font-mono tracking-wider">Mula sa Luzon</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-4 rounded-2xl border border-amber-100 shadow-sm text-center">
          <span className="text-2xl font-black text-amber-800 font-sans block">
            {TRIBES_DATA.filter((t) => t.islandGroup === 'Visayas').length}
          </span>
          <span className="text-[10px] text-amber-700 font-bold uppercase font-mono tracking-wider">Mula sa Visayas</span>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-4 rounded-2xl border border-red-100 shadow-sm text-center">
          <span className="text-2xl font-black text-red-800 font-sans block">
            {TRIBES_DATA.filter((t) => t.islandGroup === 'Mindanao').length}
          </span>
          <span className="text-[10px] text-red-700 font-bold uppercase font-mono tracking-wider">Mula sa Mindanao</span>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-5 text-xs font-sans font-black uppercase text-slate-800 tracking-wider">Katutubong Tribo</th>
                <th className="p-5 text-xs font-sans font-black uppercase text-slate-800 tracking-wider flex items-center gap-1.5"><Compass className="w-3.5 h-3.5 text-slate-500" /> Rehiyon at Heograpiya</th>
                <th className="p-5 text-xs font-sans font-black uppercase text-slate-800 tracking-wider"><Globe className="w-3.5 h-3.5 text-slate-500 inline mr-1.5" /> Pangunahing Wika</th>
                <th className="p-5 text-xs font-sans font-black uppercase text-slate-800 tracking-wider"><Hammer className="w-3.5 h-3.5 text-slate-500 inline mr-1.5" /> Kabuhayan at Pamumuhay</th>
                <th className="p-5 text-xs font-sans font-black uppercase text-slate-800 tracking-wider"><Sparkles className="w-3.5 h-3.5 text-slate-500 inline mr-1.5" /> Katutubong Sining / Kasuotan</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100">
              {filteredTribes.map((tribe) => {
                // Island group badges
                const islandGroupBadge = {
                  Luzon: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                  Visayas: 'bg-amber-100 text-amber-800 border-amber-200',
                  Mindanao: 'bg-red-100 text-red-800 border-red-200',
                }[tribe.islandGroup];

                return (
                  <tr key={tribe.id} className="hover:bg-slate-50/50 transition-colors" id={`matrix-row-${tribe.id}`}>
                    
                    {/* Name */}
                    <td className="p-5 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img
                          src={tribe.image}
                          alt={tribe.name}
                          className="w-10 h-10 rounded-xl object-cover border border-slate-200"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="text-xs font-sans font-black text-slate-900 uppercase tracking-wide">{tribe.name}</h4>
                          <span className={`text-[8px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-md border ${islandGroupBadge}`}>
                            {tribe.islandGroup}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Region */}
                    <td className="p-5 text-xs text-slate-700 font-sans max-w-xs">
                      <p className="font-semibold leading-tight">{tribe.region.split(',')[0]}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{tribe.region.split(',').slice(1).join(', ')}</p>
                    </td>

                    {/* Language */}
                    <td className="p-5 text-xs font-mono text-emerald-800 font-bold whitespace-nowrap">
                      {tribe.language}
                    </td>

                    {/* Livelihood */}
                    <td className="p-5 text-xs text-slate-600 font-sans max-w-xs leading-relaxed">
                      {tribe.livelihood}
                    </td>

                    {/* Featured Sining (Culture description snippet) */}
                    <td className="p-5 text-xs text-slate-600 font-sans max-w-sm leading-relaxed">
                      <p className="font-semibold text-slate-800">{tribe.culture.title}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-2 leading-snug">{tribe.culture.description}</p>
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>

          {filteredTribes.length === 0 && (
            <div className="p-16 text-center text-slate-400">
              <p className="text-xs font-sans font-bold">Walang nahanap na tugmang katutubo sa iyong filter o query.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
