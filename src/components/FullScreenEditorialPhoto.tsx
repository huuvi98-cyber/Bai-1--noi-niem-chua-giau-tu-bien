import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

interface FullScreenEditorialPhotoProps {
  id: string;
  imageSrc?: string;
  src?: string;
  caption?: string;
  subLocation?: string;
  credit?: string;
  onPhotoChange?: (id: string, newUrl: string) => void;
}

export const FullScreenEditorialPhoto: React.FC<FullScreenEditorialPhotoProps> = ({
  id,
  imageSrc,
  src,
  caption,
  subLocation,
  credit = 'Ảnh: NGỌC OAI',
  onPhotoChange
}) => {
  const effectiveSrc = imageSrc || src || '';
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onPhotoChange) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          onPhotoChange(id, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file && onPhotoChange) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          onPhotoChange(id, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* Full-bleed Screen Viewport Section */}
      <figure 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-12 sm:my-16 overflow-hidden bg-[#011627] border-y border-cyan-500/30 shadow-2xl"
        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
        onDrop={handleDrop}
      >
        <div 
          className="relative w-full h-[60vh] sm:h-[75vh] md:h-[82vh] min-h-[460px] max-h-[850px] group cursor-pointer overflow-hidden bg-[#011424]"
          onClick={() => setIsLightboxOpen(true)}
        >
          {/* Main Visual Image - Clean & Bright */}
          <img
            src={effectiveSrc}
            alt={caption}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.02] brightness-[1.10] contrast-[1.03] saturate-[1.06]"
          />

          {/* Minimal soft bottom vignette only behind captions if needed */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          {/* Top Left Tag / Location Badge */}
          {subLocation && (
            <div className="absolute top-4 sm:top-6 left-4 sm:left-8 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-[#0a355c]/90 border border-cyan-400/40 text-cyan-200 text-xs sm:text-sm font-editorial-sans font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
                {subLocation}
              </span>
            </div>
          )}

          {/* Bottom Captions Overlay */}
          {(caption || credit) && (
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-6 md:p-8 pointer-events-none">
              <div className="max-w-4xl mx-auto">
                <figcaption className="p-3 sm:p-4 rounded-xl bg-[#021b36]/80 backdrop-blur-md border border-cyan-500/30 text-white font-editorial-sans shadow-xl pointer-events-auto space-y-1.5">
                  {caption && (
                    <p className="text-xs sm:text-[13px] md:text-sm leading-relaxed text-slate-200 text-justify">
                      {caption}
                    </p>
                  )}
                  {credit && (
                    <div className={`flex items-center justify-end ${caption ? 'pt-1 border-t border-cyan-500/25' : ''}`}>
                      <span className="text-[11px] sm:text-xs text-cyan-300/90 font-semibold uppercase tracking-wider">
                        {credit}
                      </span>
                    </div>
                  )}
                </figcaption>
              </div>
            </div>
          )}
        </div>
      </figure>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <div className="flex justify-end p-2">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large image area */}
          <div 
            className="flex-1 max-h-[82vh] flex items-center justify-center p-2 sm:p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={effectiveSrc}
              alt={caption}
              referrerPolicy="no-referrer"
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl border border-cyan-500/30 brightness-[1.08] contrast-[1.02] saturate-[1.05]"
            />
          </div>

          {/* Modal Caption */}
          {(caption || credit) && (
            <div 
              className="max-w-4xl mx-auto w-full p-3 sm:p-4 rounded-xl bg-[#021b36]/85 backdrop-blur-md border border-cyan-500/30 text-white font-editorial-sans shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {caption && (
                <p className="text-xs sm:text-[13px] md:text-sm leading-relaxed text-slate-200 text-justify">
                  {caption}
                </p>
              )}
              {credit && (
                <span className={`block ${caption ? 'mt-1.5' : ''} text-[11px] sm:text-xs text-cyan-300 font-semibold uppercase text-right`}>
                  {credit}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
