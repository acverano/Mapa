import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Palette, 
  Sparkles, 
  MapPin, 
  Globe,
  Hammer,
  ArrowLeft,
  BookOpen
} from 'lucide-react';
import { Tribe } from '../types';

interface TribeDetailProps {
  tribe: Tribe;
  onClose: () => void;
}

type TabType = 'nature' | 'culture' | 'beliefs';

export default function TribeDetail({ tribe, onClose }: TribeDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>('nature');

  // Dynamic color theme mapping based on island groups to reinforce visual cues
  const getThemeColors = (islandGroup: string) => {
    switch (islandGroup) {
      case 'Luzon':
        return {
          bgGrad: 'from-emerald-950 via-emerald-900 to-slate-950',
          accentBorder: 'border-emerald-500',
          accentText: 'text-emerald-400',
          activeTab: 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-black',
          cardBg: 'bg-emerald-950/40 border border-emerald-900/40',
          bulletIcon: 'text-emerald-400',
          badge: 'bg-emerald-600/90 text-white border-emerald-500',
          btnPrimary: 'bg-emerald-600 hover:bg-emerald-500 text-white'
        };
      case 'Visayas':
        return {
          bgGrad: 'from-amber-950 via-amber-900 to-slate-950',
          accentBorder: 'border-amber-500',
          accentText: 'text-amber-400',
          activeTab: 'bg-amber-500/20 text-amber-300 border-amber-500 font-black',
          cardBg: 'bg-amber-950/40 border border-amber-900/40',
          bulletIcon: 'text-amber-400',
          badge: 'bg-amber-500 text-slate-950 border-amber-400 font-black',
          btnPrimary: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold'
        };
      case 'Mindanao':
      default:
        return {
          bgGrad: 'from-red-950 via-red-900 to-slate-950',
          accentBorder: 'border-red-500',
          accentText: 'text-red-400',
          activeTab: 'bg-red-500/20 text-red-300 border-red-500 font-black',
          cardBg: 'bg-red-950/40 border border-red-900/40',
          bulletIcon: 'text-red-400',
          badge: 'bg-red-600/95 text-white border-red-500',
          btnPrimary: 'bg-red-600 hover:bg-red-500 text-white'
        };
    }
  };

  const tc = getThemeColors(tribe.islandGroup);

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 100 }}
      className={`fixed inset-0 z-50 overflow-y-auto bg-gradient-to-b ${tc.bgGrad} text-slate-100 flex flex-col justify-between`}
    >
      {/* HEADER BAR */}
      <header className="border-b border-white/10 px-6 sm:px-12 py-5 bg-black/30 backdrop-blur-md flex items-center justify-between shrink-0">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/10 transition-all cursor-pointer"
          id="btn-back-to-map"
        >
          <ArrowLeft className="w-4 h-4" />
          Isara at Bumalik sa Mapa
        </button>

        <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full border ${tc.badge}`}>
          {tribe.islandGroup} • KATUTUBONG HERITAGE
        </span>
      </header>

      {/* CORE CONTENT ROW */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Giant Cultural Card & Key Artifacts (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          
          {/* Main Illustration Panel */}
          <div className={`relative rounded-3xl overflow-hidden shadow-2xl flex-1 min-h-[300px] border-2 ${tc.accentBorder}`}>
            <img
              src={tribe.image}
              alt={tribe.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
              id={`detail-hero-img-${tribe.id}`}
            />
            {/* Dark overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            {/* Title block on top of image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white space-y-2">
              <h1 className="text-4xl sm:text-5xl font-sans font-black uppercase italic tracking-tight drop-shadow-md">
                {tribe.name}
              </h1>
              <p className={`text-xs ${tc.accentText} font-mono font-bold flex items-center gap-1.5`}>
                <MapPin className="w-4 h-4 shrink-0" />
                {tribe.region}
              </p>
              {tribe.altNames.length > 0 && (
                <p className="text-[10px] text-slate-300 italic">
                  Ibang Tawag: {tribe.altNames.join(', ')}
                </p>
              )}
            </div>
          </div>

          {/* Core Info Specs */}
          <div className={`grid grid-cols-2 gap-4 p-4 rounded-2xl ${tc.cardBg}`}>
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">🗣️ KATUTUBONG WIKA:</span>
              <p className="text-xs font-black text-slate-200">{tribe.language}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">🌾 KATUTUBONG PAMUMUHAY:</span>
              <p className="text-xs font-black text-slate-200">{tribe.livelihood}</p>
            </div>
          </div>

        </div>

        {/* Right Column: Detailed Slides & Artifact Showcase (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          
          {/* Journal Tabs */}
          <div className="bg-white/5 p-1 rounded-2xl border border-white/5 flex overflow-x-auto scrollbar-none">
            {([
              { id: 'nature', label: '🌿 Kalikasan at Kapaligiran', icon: Leaf },
              { id: 'culture', label: '🎨 Sining at Kultura', icon: Palette },
              { id: 'beliefs', label: '✨ Paniniwala at Tradisyon', icon: Sparkles },
            ] as const).map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer whitespace-nowrap border ${
                    isActive
                      ? tc.activeTab
                      : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  id={`detail-tab-${tab.id}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Scrollable Slide Content Box */}
          <div className={`flex-1 p-6 sm:p-8 rounded-3xl min-h-[280px] flex flex-col justify-between ${tc.cardBg}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Section title & intro */}
                <div className="space-y-1">
                  <h3 className={`text-xl font-sans font-black uppercase tracking-wide ${tc.accentText}`}>
                    {activeTab === 'nature' && tribe.nature.title}
                    {activeTab === 'culture' && tribe.culture.title}
                    {activeTab === 'beliefs' && tribe.beliefs.title}
                  </h3>
                  <p className="text-xs text-slate-300 italic">
                    {activeTab === 'nature' && tribe.nature.description}
                    {activeTab === 'culture' && tribe.culture.description}
                    {activeTab === 'beliefs' && tribe.beliefs.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-4">
                  {(activeTab === 'nature' ? tribe.nature.details : 
                    activeTab === 'culture' ? tribe.culture.details : 
                    tribe.beliefs.details).map((detail, idx) => (
                    <div key={idx} className="flex gap-3 items-start bg-black/10 p-4 rounded-2xl border border-white/5">
                      <span className="text-lg shrink-0 mt-0.5 select-none">✦</span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Featured Key Artifacts Grid */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5 pl-1">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              Tampok na mga Artifact at Simbolo
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {tribe.stamps.map((stamp) => (
                <div
                  key={stamp.id}
                  className={`p-4 rounded-2xl bg-black/20 border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between h-28 relative overflow-hidden`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-3xl filter drop-shadow">{stamp.symbol}</span>
                    <span className="text-[8px] font-mono text-slate-500 font-bold uppercase tracking-wider">Artifact</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-sans font-black text-slate-100 leading-tight uppercase truncate">{stamp.name}</h5>
                    <p className="text-[9px] text-slate-400 leading-tight mt-1 line-clamp-2">{stamp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 sm:px-12 py-5 bg-black/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-400 shrink-0">
        <p className="font-sans">
          Lakbay-Lahi Presentation Mode • Ginawa para sa Edukasyon at Kultura ng Pilipinas
        </p>
        <p className={`font-sans font-bold italic ${tc.accentText}`}>
          "{tribe.overview}"
        </p>
      </footer>
    </motion.div>
  );
}
