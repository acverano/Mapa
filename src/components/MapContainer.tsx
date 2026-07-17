import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ZoomOut, RotateCcw, MapPin, Eye } from 'lucide-react';
import { Tribe } from '../types';
import { TRIBES_DATA } from '../data/tribes';

interface MapContainerProps {
  onSelectTribe: (tribe: Tribe) => void;
  selectedTribeId: string | null;
}

export default function MapContainer({ onSelectTribe, selectedTribeId }: MapContainerProps) {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredTribe, setHoveredTribe] = useState<Tribe | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Zoom limits
  const MIN_SCALE = 1;
  const MAX_SCALE = 4;

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, MAX_SCALE));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.5, MIN_SCALE);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 }); // Reset position when zoomed out
      }
      return newScale;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Dragging logic
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale === 1) return; // Only pan when zoomed in
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Calculate boundaries to prevent dragging too far out of screen
    const maxOffset = (scale - 1) * 200;
    setPosition({
      x: Math.max(-maxOffset - 100, Math.min(maxOffset + 100, newX)),
      y: Math.max(-maxOffset - 150, Math.min(maxOffset + 150, newY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomFactor = 0.1;
    let newScale = scale + (e.deltaY < 0 ? zoomFactor : -zoomFactor);
    newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));

    if (newScale === 1) {
      setPosition({ x: 0, y: 0 });
    } else {
      // Zoom towards mouse pointer if possible
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        
        // Adjust offsets to keep mouse position relatively stable
        setPosition((prev) => ({
          x: prev.x - (mouseX * zoomFactor * (e.deltaY < 0 ? 1 : -1)) / scale,
          y: prev.y - (mouseY * zoomFactor * (e.deltaY < 0 ? 1 : -1)) / scale,
        }));
      }
    }
    setScale(newScale);
  };

  // Prevent default zoom gestures on iframe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const preventDefault = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    el.addEventListener('wheel', preventDefault, { passive: false });
    return () => {
      el.removeEventListener('wheel', preventDefault);
    };
  }, []);

  return (
    <div className="relative w-full h-[620px] bg-amber-50/40 rounded-3xl border-2 border-amber-900/10 shadow-inner overflow-hidden select-none">
      {/* Ocean Elements & Background Decoration */}
      <div className="absolute inset-0 bg-radial from-amber-50/5 via-amber-50/20 to-amber-100/40 opacity-70 pointer-events-none" />
      
      {/* Top Bar Map Controls */}
      <div className="absolute top-4 left-4 z-10 flex gap-1.5 p-1.5 bg-white/95 backdrop-blur-md rounded-2xl border border-amber-900/10 shadow-md">
        <button
          onClick={handleZoomIn}
          disabled={scale >= MAX_SCALE}
          className="p-2 text-amber-900 hover:bg-amber-50 disabled:opacity-30 rounded-xl transition-all"
          title="Zoom In"
          id="btn-zoom-in"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomOut}
          disabled={scale <= MIN_SCALE}
          className="p-2 text-amber-900 hover:bg-amber-50 disabled:opacity-30 rounded-xl transition-all"
          title="Zoom Out"
          id="btn-zoom-out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={handleReset}
          className="p-2 text-amber-900 hover:bg-amber-50 rounded-xl transition-all"
          title="I-reset ang Mapa"
          id="btn-reset-map"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Guide text inside map */}
      <div className="absolute bottom-4 left-4 z-10 bg-amber-900/90 text-amber-50 text-[11px] font-mono px-3 py-1.5 rounded-full border border-amber-700/30 shadow-md flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        {scale > 1 ? "I-drag ang mapa para mag-navigate" : "Mag-zoom in / i-click ang pins para mag-explore"}
      </div>

      {/* Scale Indicator */}
      <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md text-amber-900/80 text-[10px] font-mono px-3 py-1.5 rounded-xl border border-amber-900/10 shadow-sm">
        ZOOM: {Math.round(scale * 100)}%
      </div>

      {/* Compass Rose Decoration */}
      <div className="absolute bottom-6 right-6 z-0 pointer-events-none opacity-20 w-24 h-24 sm:w-32 sm:h-32 transition-transform duration-700" style={{ transform: `rotate(${(scale - 1) * 20}deg)` }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900 fill-none stroke-current" strokeWidth="1">
          <circle cx="50" cy="50" r="45" strokeDasharray="3,3" />
          <circle cx="50" cy="50" r="40" />
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
          <polygon points="50,10 54,46 50,50" className="fill-amber-900" />
          <polygon points="50,10 46,46 50,50" className="fill-amber-700" />
          <polygon points="50,90 46,54 50,50" className="fill-amber-800" />
          <polygon points="50,90 54,54 50,50" className="fill-amber-600" />
          <polygon points="90,50 54,46 50,50" className="fill-amber-900" />
          <polygon points="90,50 54,54 50,50" className="fill-amber-700" />
          <polygon points="10,50 46,54 50,50" className="fill-amber-800" />
          <polygon points="10,50 46,46 50,50" className="fill-amber-600" />
          <circle cx="50" cy="50" r="5" className="fill-white stroke-amber-900" strokeWidth="2" />
          <text x="47" y="24" className="text-[12px] font-serif font-bold fill-amber-900 stroke-none">N</text>
          <text x="48" y="85" className="text-[10px] font-serif fill-amber-900 stroke-none">S</text>
          <text x="82" y="54" className="text-[10px] font-serif fill-amber-900 stroke-none">E</text>
          <text x="12" y="54" className="text-[10px] font-serif fill-amber-900 stroke-none">W</text>
        </svg>
      </div>

      {/* Decorative Sea Waves & Sailing Ship */}
      <div className="absolute top-24 left-1/4 pointer-events-none opacity-15">
        <svg viewBox="0 0 100 20" className="w-16 h-4 text-amber-900 stroke-current fill-none" strokeWidth="1">
          <path d="M0 10 Q12 5, 25 10 T50 10 T75 10 T100 10" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-1/3 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 20" className="w-20 h-5 text-amber-900 stroke-current fill-none" strokeWidth="1">
          <path d="M0 10 Q12 15, 25 10 T50 10 T75 10 T100 10" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/4 pointer-events-none opacity-25 w-12 h-12">
        {/* Simplified sailboat */}
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-amber-900" strokeWidth="1">
          <path d="M3 17h18l-3 4H6l-3-4z M12 3v14 M12 4l7 9H12 M12 6L6 13H12" />
        </svg>
      </div>

      {/* Interactive Map Canvas (Scalable and Pannable) */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className={`w-full h-full transition-transform duration-100 ease-out flex items-center justify-center ${
          scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
        }`}
        style={{
          transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
        }}
      >
        <div className="relative w-[480px] h-[580px] flex items-center justify-center">
          
          {/* SVG Map of the Philippines */}
          <svg
            viewBox="0 0 100 120"
            className="w-full h-full text-amber-900/20 fill-amber-100/60 stroke-amber-900/40"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* LUZON MAINLAND (Stylized representation) */}
            <path
              d="M 38 8 
                 L 46 7 
                 L 48 12 
                 L 53 14 
                 L 55 20 
                 L 53 25 
                 L 51 29 
                 L 46 34 
                 L 48 38 
                 L 56 39 
                 L 60 44 
                 L 54 46 
                 L 48 42 
                 L 45 44 
                 L 42 38 
                 L 41 33 
                 L 35 28 
                 L 36 21 
                 L 32 18 
                 L 35 12 Z"
              className="fill-amber-200/50 hover:fill-amber-200/80 transition-colors duration-300"
            />

            {/* CORDILLERA (Highlight territory of Ifugao) */}
            <path
              d="M 40 14 
                 L 45 14 
                 L 47 18 
                 L 46 24 
                 L 41 24 
                 L 39 19 Z"
              className="fill-emerald-200/20 stroke-emerald-600/30 stroke-dasharray-[1,1] hover:fill-emerald-200/40 transition-colors duration-300 cursor-help"
              title="Cordillera Ancestral Domains"
            />

            {/* MINDORO (Mangyan territory) */}
            <path
              d="M 34 40 
                 L 40 40 
                 L 41 45 
                 L 38 48 
                 L 34 45 Z"
              className="fill-amber-200/50 hover:fill-amber-200/80 transition-colors duration-300"
            />

            {/* PALAWAN (Tagbanwa etc.) */}
            <path
              d="M 31 49 
                 L 33 48 
                 L 26 58 
                 L 21 68 
                 L 16 75 
                 L 13 77 
                 L 11 76 
                 L 16 68 
                 L 22 60 Z"
              className="fill-amber-200/40 hover:fill-amber-200/70 transition-colors duration-300"
            />

            {/* VISAYAS ISLANDS */}
            {/* Panay (Ati) */}
            <path
              d="M 41 56 
                 L 46 55 
                 L 48 60 
                 L 44 63 
                 L 40 60 Z"
              className="fill-amber-200/50 hover:fill-amber-200/80 transition-colors duration-300"
            />
            {/* Negros */}
            <path
              d="M 47 62 
                 L 50 61 
                 L 50 67 
                 L 48 71 
                 L 45 68 Z"
              className="fill-amber-200/40 hover:fill-amber-200/70 transition-colors duration-300"
            />
            {/* Cebu */}
            <path
              d="M 51 60 
                 L 53 60 
                 L 53 68 
                 L 51 70 Z"
              className="fill-amber-200/30 hover:fill-amber-200/60"
            />
            {/* Bohol */}
            <circle cx="56" cy="67" r="2.5" className="fill-amber-200/30 hover:fill-amber-200/60" />
            {/* Samar */}
            <path
              d="M 56 50 
                 L 61 48 
                 L 64 54 
                 L 60 58 
                 L 55 54 Z"
              className="fill-amber-200/30 hover:fill-amber-200/60"
            />
            {/* Leyte */}
            <path
              d="M 57 56 
                 L 60 56 
                 L 59 64 
                 L 56 61 Z"
              className="fill-amber-200/30 hover:fill-amber-200/60"
            />

            {/* MINDANAO MAINLAND (Manobo, Lumad) */}
            <path
              d="M 52 74 
                 L 59 73 
                 L 68 73 
                 L 72 78 
                 L 73 85 
                 L 68 89 
                 L 69 95 
                 L 61 95 
                 L 58 91 
                 L 54 91 
                 L 53 87 
                 L 47 84 
                 L 45 80 
                 L 50 78 Z"
              className="fill-amber-200/50 hover:fill-amber-200/80 transition-colors duration-300"
            />

            {/* SULU ARCHIPELAGO (Badjao) */}
            <path
              d="M 44 83 
                 L 42 85 
                 L 39 88 
                 L 36 90 
                 L 32 93 
                 L 28 95 
                 L 24 97 
                 L 22 96 
                 L 25 93 
                 L 30 90 
                 L 35 87 
                 L 42 81 Z"
              className="fill-amber-200/40 hover:fill-amber-200/70 stroke-dasharray-[1,1] transition-colors duration-300"
            />

            {/* Selected highlight circle around islands */}
            {selectedTribeId && (
              <circle
                cx={TRIBES_DATA.find(t => t.id === selectedTribeId)?.coords.x}
                cy={TRIBES_DATA.find(t => t.id === selectedTribeId)?.coords.y}
                r="10"
                className="fill-none stroke-amber-800/20 stroke-[0.5]"
                style={{ strokeDasharray: '2,2' }}
              />
            )}
          </svg>

          {/* Glowing Tribe Map Pins */}
          {TRIBES_DATA.map((tribe) => {
            const isSelected = selectedTribeId === tribe.id;
            const isHovered = hoveredTribe?.id === tribe.id;

            return (
              <div
                key={tribe.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                style={{ left: `${tribe.coords.x}%`, top: `${tribe.coords.y}%` }}
                onClick={() => onSelectTribe(tribe)}
                onMouseEnter={() => setHoveredTribe(tribe)}
                onMouseLeave={() => setHoveredTribe(null)}
              >
                {/* Ping rings */}
                <div className="relative flex items-center justify-center">
                  <span className={`absolute inline-flex h-8 w-8 rounded-full opacity-65 ${
                    isSelected ? 'bg-amber-600' : 'bg-emerald-500'
                  } animate-ping`} style={{ animationDuration: '2s' }} />
                  
                  <span className={`absolute inline-flex h-5 w-5 rounded-full opacity-40 ${
                    isSelected ? 'bg-amber-500' : 'bg-emerald-400'
                  } animate-ping`} style={{ animationDuration: '3s', animationDelay: '0.5s' }} />

                  {/* Core Icon/Pin */}
                  <motion.div
                    className={`relative w-8 h-8 flex items-center justify-center rounded-full shadow-lg border-2 ${
                      isSelected
                        ? 'bg-amber-900 border-amber-50 text-amber-50'
                        : isHovered
                        ? 'bg-emerald-600 border-white text-white scale-110'
                        : 'bg-white border-emerald-600 text-emerald-700'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.15 }}
                    id={`pin-${tribe.id}`}
                  >
                    <span className="text-[11px] font-bold font-mono">
                      {tribe.name[0]}
                    </span>
                  </motion.div>
                </div>

                {/* Micro Tooltip (always visible on hover or selection) */}
                <div className={`absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center pointer-events-none transition-all duration-300 whitespace-nowrap z-30 ${
                  isHovered || isSelected ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
                }`}>
                  <div className="bg-amber-900 text-amber-50 text-xs font-serif font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-amber-700/50 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>{tribe.name}</span>
                    <span className="text-[10px] text-amber-300 font-sans px-1 py-0.5 bg-amber-800/80 rounded">
                      {tribe.islandGroup}
                    </span>
                  </div>
                  {/* Arrow */}
                  <div className="w-2.5 h-2.5 bg-amber-900 rotate-45 -mt-1 border-r border-b border-amber-700/50" />
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Floating Map Legend */}
      <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-amber-900/10 shadow-lg max-w-[140px] pointer-events-none sm:block hidden">
        <h4 className="text-[10px] font-serif font-bold text-amber-900/80 uppercase tracking-wider mb-2 border-b border-amber-900/5 pb-1">
          Katutubong Pulo
        </h4>
        <div className="space-y-1.5 text-[10px] font-sans font-medium text-amber-900/70">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-amber-200/70 border border-amber-400" />
            <span>Mainland</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-emerald-200/40 border border-emerald-400/40" />
            <span>Ancestral Areas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Tribal Center</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-amber-200/40 border border-amber-300 border-dashed" />
            <span>Water Nomads</span>
          </div>
        </div>
      </div>
    </div>
  );
}
