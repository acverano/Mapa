import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map as MapIcon, 
  Compass, 
  BookOpen, 
  LayoutGrid, 
  Layers, 
  MapPin, 
  Sparkles,
  ChevronRight,
  Eye,
  Info
} from 'lucide-react';
import { Tribe } from './types';
import { TRIBES_DATA } from './data/tribes';
import MapContainer from './components/MapContainer';
import TribeDetail from './components/TribeDetail';
import ArtifactsGallery from './components/ArtifactsGallery';
import ComparisonMatrix from './components/ComparisonMatrix';

type ViewTab = 'map' | 'artifacts' | 'matrix';

export default function App() {
  const [activeTab, setActiveTab] = useState<ViewTab>('map');
  const [selectedTribe, setSelectedTribe] = useState<Tribe | null>(null);
  const [showFullDetail, setShowFullDetail] = useState(false);

  const handleSelectTribe = (tribe: Tribe) => {
    setSelectedTribe(tribe);
  };

  return (
    <div className="min-h-screen bg-amber-50 text-slate-800 font-sans selection:bg-emerald-600/10 flex flex-col justify-between">
      
      {/* HEADER SECTION */}
      <header className="bg-emerald-600 border-b border-emerald-700 py-5 px-6 sm:px-12 shadow-lg shrink-0 text-white z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white text-emerald-600 rounded-full flex items-center justify-center shadow-md shrink-0">
              <Compass className="w-6 h-6 animate-spin text-emerald-600" style={{ animationDuration: '25s' }} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-sans font-black tracking-tight text-white flex items-center gap-2 uppercase">
                LAKBAY-LAHI <span className="text-xs px-2 py-0.5 bg-amber-400 text-slate-950 font-mono rounded-full font-bold uppercase tracking-normal shadow-sm">Koleksyon v1.1</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-emerald-100 font-sans tracking-wide">
                Interaktibong Atlas ng Kultura, Pamumuhay, at Paniniwala ng mga Katutubong Pilipino (K-12 Educational Resource)
              </p>
            </div>
          </div>

          {/* Presenter Mode Tag */}
          <div className="bg-emerald-700/60 py-2 px-4 rounded-full border border-emerald-500/20 shadow-inner flex items-center gap-2 self-start md:self-auto text-xs text-amber-200 font-mono font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            PRESENTATION MODE • 10 TRIBES
          </div>

        </div>
      </header>

      {/* CORE TAB NAVIGATION BAR */}
      <div className="bg-emerald-50/50 border-b border-emerald-100 py-3.5 px-6 shrink-0">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-none">
          {([
            { id: 'map', label: 'Interactive Cultural Atlas', icon: MapIcon },
            { id: 'artifacts', label: 'Sining & Artifacts Gallery', icon: LayoutGrid },
            { id: 'matrix', label: 'Katutubong Comparison Matrix', icon: Layers }
          ] as { id: ViewTab; label: string; icon: any }[]).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  // Preserve selected tribe when toggling back and forth but reset overlay
                  setShowFullDetail(false);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-bold transition-all whitespace-nowrap cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-amber-400 text-emerald-950 hover:bg-amber-300'
                    : 'bg-white hover:bg-emerald-50/50 text-emerald-900 border-2 border-emerald-100'
                }`}
                id={`nav-tab-${tab.id}`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-950' : 'text-emerald-800/60'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN VIEWPORT BODY */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 py-8 overflow-x-hidden">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: INTERACTIVE CULTURAL ATLAS */}
          {activeTab === 'map' && (
            <motion.div
              key="map-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                
                {/* Left: Map Card (7/12 width) */}
                <div className="xl:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-sans font-black tracking-tight uppercase text-emerald-800 flex items-center gap-1.5">
                      <MapIcon className="w-5 h-5 text-emerald-600" />
                      Pangunahing Mapa ng Pilipinas
                    </h2>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      I-click ang mga pulsing markers upang suriin ang ugnayan ng kalikasan, sining, at paniniwala ng bawat katutubong pamayanan. Mag-zoom gamit ang buttons o mouse wheel upang lumapit.
                    </p>
                  </div>
                  <MapContainer onSelectTribe={handleSelectTribe} selectedTribeId={selectedTribe?.id || null} />
                </div>

                {/* Right: Index List & Quick Peek (5/12 width) */}
                <div className="xl:col-span-5 space-y-4">
                  
                  <AnimatePresence mode="wait">
                    {!selectedTribe ? (
                      
                      /* TRIBE SELECTION INDEX PANEL */
                      <motion.div
                        key="tribe-index-list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4 h-[620px] flex flex-col mt-7"
                      >
                        <div className="border-b border-slate-100 pb-3 space-y-1">
                          <h3 className="text-base font-sans font-black text-slate-800 uppercase tracking-wide flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-emerald-600" />
                            Index ng mga Katutubo ({TRIBES_DATA.length})
                          </h3>
                          <p className="text-[11px] text-slate-400">
                            Pumili ng isa sa ibaba upang makita ang sulyap at mahanap ang lokasyon nito sa mapa.
                          </p>
                        </div>

                        {/* Scrollable List */}
                        <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                          {TRIBES_DATA.map((tribe) => {
                            // Border & Tag color per island group
                            const islandColors = {
                              Luzon: 'border-l-emerald-500 text-emerald-800 bg-emerald-50/40',
                              Visayas: 'border-l-amber-500 text-amber-800 bg-amber-50/40',
                              Mindanao: 'border-l-red-500 text-red-800 bg-red-50/40',
                            }[tribe.islandGroup];

                            return (
                              <button
                                key={tribe.id}
                                onClick={() => handleSelectTribe(tribe)}
                                className={`w-full p-3 border border-slate-100 border-l-4 rounded-xl flex items-center justify-between text-left hover:bg-slate-50 transition-all cursor-pointer group ${islandColors}`}
                                id={`index-item-${tribe.id}`}
                              >
                                <div className="flex items-center gap-3">
                                  <img
                                    src={tribe.image}
                                    alt={tribe.name}
                                    className="w-11 h-11 rounded-lg object-cover border border-slate-200 shadow-sm"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div>
                                    <h4 className="text-xs font-sans font-black text-slate-800 group-hover:text-emerald-600 transition-colors uppercase tracking-wide">
                                      {tribe.name}
                                    </h4>
                                    <p className="text-[10px] text-slate-400 truncate max-w-[200px]">
                                      {tribe.region.split(',')[0]}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="text-[9px] font-mono font-bold uppercase text-slate-400 group-hover:text-emerald-600">Suriin</span>
                                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-500 transition-transform group-hover:translate-x-0.5" />
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>

                    ) : (

                      /* TRIBE QUICK PEEK CARD */
                      <motion.div
                        key="tribe-quick-peek"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden h-[620px] flex flex-col justify-between mt-7"
                      >
                        <div>
                          {/* Image Banner */}
                          <div className="relative h-48 bg-slate-900 overflow-hidden">
                            <img
                              src={selectedTribe.image}
                              alt={selectedTribe.name}
                              className="absolute inset-0 w-full h-full object-cover opacity-90"
                              referrerPolicy="no-referrer"
                              id={`quick-peek-img-${selectedTribe.id}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                            
                            {/* Island Tag */}
                            <div className="absolute top-4 left-4 text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-black/50 backdrop-blur text-white border border-white/10">
                              {selectedTribe.islandGroup}
                            </div>

                            {/* Title Block */}
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <h3 className="text-2xl font-sans font-black tracking-tight uppercase italic drop-shadow">
                                {selectedTribe.name}
                              </h3>
                              <p className="text-[10px] text-amber-300 font-mono flex items-center gap-1 font-bold mt-0.5">
                                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                                {selectedTribe.region.split(',')[0]}
                              </p>
                            </div>
                          </div>

                          {/* Quick Specs */}
                          <div className="p-5 border-b border-slate-100 grid grid-cols-2 gap-4 text-[11px] font-sans">
                            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <span className="text-slate-400 font-mono uppercase block font-bold">🗣️ Katutubong Wika</span>
                              <span className="text-slate-800 font-black">{selectedTribe.language}</span>
                            </div>
                            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <span className="text-slate-400 font-mono uppercase block font-bold">🌾 Katutubong Kabuhayan</span>
                              <span className="text-slate-800 font-black">{selectedTribe.livelihood}</span>
                            </div>
                          </div>

                          {/* Overview paragraph */}
                          <div className="p-5 space-y-2.5">
                            <h4 className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                              <Info className="w-4 h-4 text-emerald-600" />
                              Sulyap sa Kasaysayan at Identidad
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-sans text-justify">
                              {selectedTribe.overview}
                            </p>
                          </div>
                        </div>

                        {/* Action buttons footer */}
                        <div className="p-5 bg-slate-50/50 border-t border-slate-100 space-y-2 shrink-0">
                          <button
                            onClick={() => setShowFullDetail(true)}
                            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                            id="btn-open-full-ethnography"
                          >
                            <Eye className="w-4 h-4" />
                            Buksan ang Detalyadong Ethnography ➔
                          </button>
                          
                          <button
                            onClick={() => setSelectedTribe(null)}
                            className="w-full py-2.5 bg-white hover:bg-slate-100 text-slate-500 border border-slate-200 font-sans font-bold text-xs uppercase tracking-wide rounded-xl transition-all cursor-pointer"
                            id="btn-back-to-index"
                          >
                            ✕ Isara at Bumalik sa Index
                          </button>
                        </div>
                      </motion.div>

                    )}
                  </AnimatePresence>

                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 2: SINING & ARTIFACTS GALLERY */}
          {activeTab === 'artifacts' && (
            <motion.div
              key="artifacts-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-sans font-black tracking-tight uppercase text-emerald-800 flex items-center gap-1.5">
                  <LayoutGrid className="w-5 h-5 text-emerald-600" />
                  Sining at Katutubong Artifacts ng Pilipinas
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-3xl">
                  Isang visual na katalogo ng mga sandata, musika, sining ng paghahabi, at makasaysayang kagamitan ng ating mga ninuno. Suriin ang kanilang kahulugan, kahusayan, at kontribusyon sa kulturang Pilipino.
                </p>
              </div>

              <ArtifactsGallery />
            </motion.div>
          )}

          {/* TAB 3: KULTURA & HEOGRAPIYA MATRIX */}
          {activeTab === 'matrix' && (
            <motion.div
              key="matrix-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-sans font-black tracking-tight uppercase text-emerald-800 flex items-center gap-1.5">
                  <Layers className="w-5 h-5 text-emerald-600" />
                  Katutubong Comparison & Reference Matrix
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-3xl">
                  Ang pinakamabisang tsart para sa inyong pag-aaral at presentasyon. Suriin at ihambing ang 10 katutubong pamayanan batay sa kanilang lokasyon, pangunahing wika, tradisyunal na kabuhayan, at natatanging sining.
                </p>
              </div>

              <ComparisonMatrix />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-emerald-800 text-white py-5 px-6 border-t border-emerald-900/20 text-center shrink-0 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="font-sans text-emerald-100/85">
            © 2026 Lakbay-Lahi: Interaktibong Mapa ng Katutubong Pilipino • Ginawa para sa Edukasyon at Kultura.
          </p>
          <p className="font-sans font-bold italic text-amber-300">
            "Suriin ang Heograpiya, Kilalanin ang Kultura, Pagyamanin ang Pananampalataya."
          </p>
        </div>
      </footer>

      {/* FULLSCREEN IMMERSIVE PRESENTATION DETAIL OVERLAY */}
      <AnimatePresence>
        {showFullDetail && selectedTribe && (
          <TribeDetail
            tribe={selectedTribe}
            onClose={() => setShowFullDetail(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
