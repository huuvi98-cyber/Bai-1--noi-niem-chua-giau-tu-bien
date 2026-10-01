import React from 'react';
import { OceanWaterMotion } from './OceanWaterMotion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] w-full flex flex-col justify-between overflow-hidden bg-[#001833] text-white pt-12 select-none">
      {/* Dynamic Animated Ocean Background matching Bien.jpg */}
      <OceanWaterMotion />

      {/* Main Content Area - Clean Title on Ocean Water */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 flex flex-col justify-between">
        
        {/* Top Header Pill Banner & BÀI 1 - Positioned above the water surface */}
        <div className="pt-2 sm:pt-4 space-y-3 sm:space-y-3.5 flex flex-col items-center text-center">
          <div className="flex justify-center w-full">
            <div className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#0a355c]/90 border-2 border-cyan-400/50 backdrop-blur-md shadow-xl hover:border-cyan-300 transition-all">
              <span className="font-editorial-sans text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-wider uppercase text-white drop-shadow-md">
                MẠNH VỀ BIỂN, PHÁT TRIỂN BỀN VỮNG <span className="text-cyan-300">TỪ BIỂN</span>
              </span>
            </div>
          </div>

          {/* Article Part Tag - Nhỏ hơn, canh giữa, chữ không chân */}
          <div className="pt-1 flex justify-center w-full text-center">
            <span className="font-editorial-sans text-xs sm:text-sm font-bold tracking-[0.25em] text-cyan-300 uppercase pb-0.5 sm:pb-1 border-b-2 border-cyan-400 inline-block drop-shadow-md text-center">
              BÀI 1
            </span>
          </div>
        </div>

        {/* Center Title Block - Monumental typography centered */}
        <div className="mt-auto mb-4 sm:mb-8 pt-4 max-w-5xl mx-auto w-full text-center translate-y-3 sm:translate-y-5">
          {/* Main Monumental Title */}
          <h1 className="font-editorial-sans text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-2xl text-center">
            <span className="block text-white text-center">Nỗi niềm</span>
            <span className="block text-cyan-400 text-center">chưa giàu</span>
            <span className="block text-white text-center">từ biển</span>
          </h1>
        </div>

        {/* Minimal Bottom Spacer */}
        <div className="h-2 sm:h-4" />
      </div>
    </section>
  );
};
