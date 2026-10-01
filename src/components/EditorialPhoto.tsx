import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';

interface EditorialPhotoProps {
  id: string;
  src?: string;
  fallbackGraphic?: React.ReactNode;
  caption: string;
  credit?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9' | '3/2';
  customImageMap?: Record<string, string>;
}

export const EditorialPhoto: React.FC<EditorialPhotoProps> = ({
  id,
  src,
  fallbackGraphic,
  caption,
  credit = 'Ảnh: Báo chí khảo sát thực tế',
  aspectRatio = '16/9',
  customImageMap = {}
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Check if a local uploaded image URL is provided in customImageMap or direct src
  const activeSrc = customImageMap[id] || src;

  return (
    <>
      <figure className="my-10 sm:my-14 rounded-2xl overflow-hidden bg-[#03294c]/90 border border-cyan-500/30 shadow-2xl transition-all duration-300 hover:border-cyan-400/60">
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
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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

          {/* Hover zoom overlay badge */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Xem ảnh lớn</span>
          </div>
        </div>

        {/* Documentary Photo Caption */}
        <figcaption className="p-3 sm:p-4 border-t border-white/10 bg-black/50 backdrop-blur-sm text-xs sm:text-[13px] md:text-sm text-slate-200 font-editorial-sans leading-relaxed">
          <p className="text-justify">
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
            className="max-w-5xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-[#02223f] border border-cyan-400/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-auto flex items-center justify-center bg-black/50">
              {activeSrc && !imgError ? (
                <img
                  src={activeSrc}
                  alt={caption}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto object-contain"
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

            <div className="p-5 border-t border-cyan-500/20 bg-[#02223f] text-sm text-slate-200 font-editorial-sans">
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
