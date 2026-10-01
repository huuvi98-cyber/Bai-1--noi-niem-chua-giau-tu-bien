import React, { useState, useRef } from 'react';
import { Camera, X } from 'lucide-react';

interface EditorialPhotoProps {
  id: string;
  src?: string;
  fallbackGraphic?: React.ReactNode;
  caption: string;
  credit?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9' | '3/2';
  customImageMap?: Record<string, string>;
  onPhotoChange?: (id: string, newUrl: string) => void;
}

export const EditorialPhoto: React.FC<EditorialPhotoProps> = ({
  id,
  src,
  fallbackGraphic,
  caption,
  credit,
  aspectRatio = '4/3',
  customImageMap = {},
  onPhotoChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if a local uploaded image URL is provided in customImageMap or direct src
  const activeSrc = customImageMap[id] || src;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onPhotoChange) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgError(false);
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
          setImgError(false);
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

      <figure 
        className="my-8 sm:my-10 rounded-2xl overflow-hidden bg-[#03294c]/90 border border-cyan-500/30 shadow-2xl transition-all duration-300 hover:border-cyan-400/60 w-full"
        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
        onDrop={handleDrop}
      >
        <div 
          className="relative w-full overflow-hidden cursor-pointer group bg-[#021d36]"
          style={{ aspectRatio }}
          onClick={() => setIsOpen(true)}
        >
          {activeSrc && !imgError ? (
            <img
              src={activeSrc}
              alt={caption}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] brightness-[1.10] contrast-[1.03] saturate-[1.06]"
            />
          ) : fallbackGraphic ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              {fallbackGraphic}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#032e54] via-[#021f3b] to-[#01162b] text-cyan-200/70 p-6 text-center">
              <Camera className="w-10 h-10 mb-2 text-cyan-400/60" />
              <span className="text-sm font-editorial-sans font-medium">{caption}</span>
            </div>
          )}
        </div>

        {/* Documentary Photo Caption */}
        <figcaption className="p-3.5 sm:p-4 border-t border-white/10 bg-black/50 backdrop-blur-sm text-xs sm:text-[13px] md:text-sm text-slate-200 font-editorial-sans leading-relaxed">
          <p className="text-justify font-medium">
            {caption}
          </p>
          {credit && (
            <span className="block mt-1.5 text-[11px] sm:text-xs text-cyan-300/90 font-semibold tracking-wider uppercase text-right">
              {credit}
            </span>
          )}
        </figcaption>
      </figure>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-[#02223f] border border-cyan-400/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-auto flex items-center justify-center bg-black/50">
              {activeSrc && !imgError ? (
                <img
                  src={activeSrc}
                  alt={caption}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto object-contain brightness-[1.08] contrast-[1.02] saturate-[1.05]"
                />
              ) : fallbackGraphic ? (
                <div className="p-6">{fallbackGraphic}</div>
              ) : (
                <div className="p-12 text-center text-cyan-300">
                  <Camera className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                  <p>{caption}</p>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-5 border-t border-cyan-500/20 bg-[#02223f] text-sm text-slate-200 font-editorial-sans">
              <p className="italic text-justify leading-relaxed">{caption}</p>
              {credit && (
                <span className="block mt-2 text-xs text-cyan-400 font-semibold uppercase text-right">
                  {credit}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
