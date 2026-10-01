import React from 'react';
import { OceanWaterMotion } from './OceanWaterMotion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] w-full flex flex-col justify-between overflow-hidden bg-[#001833] text-white pt-12 select-none">
      {/* Dynamic Animated Ocean Background matching Bien.jpg */}
      <OceanWaterMotion />

      {/* Main Content Area - Clean Title on Ocean Water */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 flex flex-col justify-between">
        
        {/* Top Header Pill Banner */}
        <div className="pt-2">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0a355c]/85 border border-cyan-400/40 backdrop-blur-md shadow-lg">
            <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase text-white">
              MẠNH VỀ BIỂN, PHÁT TRIỂN BỀN VỮNG <span className="text-cyan-400">TỪ BIỂN</span>
            </span>
          </div>
        </div>

        {/* Center Title Block */}
        <div className="my-auto py-10 max-w-4xl">
          {/* Article Part Tag */}
          <div className="mb-3 sm:mb-4">
            <span className="text-base sm:text-lg font-black tracking-widest text-cyan-300 uppercase pb-1 border-b-2 border-cyan-400 inline-block">
              BÀI 1
            </span>
          </div>

          {/* Main Monumental Title */}
          <h1 className="font-editorial-sans text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] drop-shadow-2xl">
            <span className="block text-white">Nỗi niềm</span>
            <span className="block text-cyan-400">chưa giàu</span>
            <span className="block text-white">từ biển</span>
          </h1>
        </div>

        {/* Minimal Bottom Spacer */}
        <div className="h-6" />
      </div>
    </section>
  );
};
