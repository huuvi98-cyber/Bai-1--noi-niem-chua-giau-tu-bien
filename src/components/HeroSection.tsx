import React from 'react';
import { OceanWaterMotion } from './OceanWaterMotion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[490px] sm:min-h-[70vh] lg:min-h-[82vh] w-full flex flex-col justify-between overflow-hidden bg-[#001833] text-white pt-6 sm:pt-12 select-none">
      {/* Dynamic Animated Ocean Background matching Bien.jpg */}
      <OceanWaterMotion />

      {/* Main Content Area - Clean Title on Ocean Water */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-8 lg:py-10 flex-1 flex flex-col justify-between">
        
        {/* Top Header Pill Banner & BÀI 1 - Positioned above the water surface */}
        <div className="pt-1 sm:pt-3 space-y-2 sm:space-y-3.5 flex flex-col items-center text-center">
          <div className="flex justify-center w-full">
            <div className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-3.5 rounded-full bg-[#0a355c]/90 border-2 border-cyan-400/50 backdrop-blur-md shadow-xl hover:border-cyan-300 transition-all max-w-[95vw] sm:max-w-none">
              <span className="font-editorial-sans text-xs sm:text-base md:text-lg lg:text-xl font-black tracking-wider uppercase text-white drop-shadow-md text-center leading-snug">
                MẠNH VỀ BIỂN, PHÁT TRIỂN BỀN VỮNG <span className="text-cyan-300">TỪ BIỂN</span>
              </span>
            </div>
          </div>

          {/* Article Part Tag - Nhỏ gọn, canh giữa, đồng bộ */}
          <div className="pt-0.5 flex justify-center w-full text-center">
            <span className="font-editorial-sans text-[11px] sm:text-sm font-bold tracking-[0.25em] text-cyan-300 uppercase pb-0.5 sm:pb-1 border-b-2 border-cyan-400 inline-block drop-shadow-md text-center">
              BÀI 1
            </span>
          </div>
        </div>

        {/* Center Title Block - Perfectly balanced gap on mobile, spacious on PC */}
        <div className="mt-8 sm:mt-auto mb-3 sm:mb-8 pt-2 sm:pt-4 max-w-5xl mx-auto w-full text-center sm:translate-y-3 lg:translate-y-5">
          {/* Main Monumental Title */}
          <h1 className="font-editorial-sans text-[2.1rem] xs:text-4xl sm:text-5xl md:text-7xl lg:text-[5.4rem] xl:text-[6.2rem] font-black uppercase tracking-tight text-white leading-[1.12] sm:leading-[1.15] drop-shadow-2xl text-center">
            <span className="block text-white text-center">Nỗi niềm</span>
            <span className="block text-cyan-400 text-center">chưa giàu</span>
            <span className="block text-white text-center">từ biển</span>
          </h1>
        </div>

        {/* Minimal Bottom Spacer */}
        <div className="h-1 sm:h-4" />
      </div>
    </section>
  );
};
