import React from 'react';
import { ShieldAlert, Compass, Target, AlertTriangle, Layers } from 'lucide-react';

interface MarineConservationChartProps {
  theme: 'ocean' | 'paper' | 'sepia';
}

export const MarineConservationChart: React.FC<MarineConservationChartProps> = ({ theme }) => {
  const isDark = theme === 'ocean';

  return (
    <div 
      className={`my-10 p-5 sm:p-7 rounded-2xl border transition-colors shadow-xl ${
        isDark 
          ? 'bg-[#071524] border-slate-800 text-slate-200' 
          : theme === 'paper'
          ? 'bg-white border-stone-200 text-stone-800'
          : 'bg-[#faf4ea] border-[#e2d5c3] text-[#2c221a]'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-current/10">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
            Báo cáo Cục Thủy sản & Kiểm ngư (4-2026)
          </span>
          <h4 className="text-base sm:text-lg font-bold">
            Thực trạng bảo tồn biển và Khoảng cách mục tiêu 6%
          </h4>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold self-start sm:self-auto">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Thẻ vàng EC: gần 10 năm (từ 2017)</span>
        </div>
      </div>

      {/* Progress towards 6% Strategic Goal */}
      <div className="pt-6">
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-cyan-400" />
              Diện tích bảo tồn hiện tại so với mục tiêu chiến lược
            </span>
            <span className="font-mono font-bold text-cyan-400">
              0,185% / 6,000%
            </span>
          </div>

          {/* Visual Bar */}
          <div className="w-full h-5 rounded-full bg-slate-800/80 overflow-hidden relative border border-slate-700/60 p-0.5">
            {/* 6% full target represents 100% of this bar */}
            <div 
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 relative"
              style={{ width: '3.1%' }} // 0.185 / 6.0 = 3.08%
            >
              <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white animate-pulse" />
            </div>
          </div>
          
          <div className="flex justify-between text-[11px] opacity-60 mt-1.5">
            <span>Hiện tại: 0,185% (11 khu bảo tồn)</span>
            <span className="text-right">Mục tiêu quốc gia: 6% diện tích biển</span>
          </div>
        </div>

        {/* 3 Metric Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          {/* Currently Operating */}
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'}`}>
            <div className="flex items-center gap-2 mb-2 text-cyan-400">
              <ShieldAlert className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Đang vận hành</span>
            </div>
            <div className="text-2xl font-black text-white">11 khu</div>
            <p className="text-xs opacity-75 mt-1">
              Đạt <strong>0,185%</strong> diện tích vùng biển tự nhiên của Việt Nam (cuối 2024).
            </p>
          </div>

          {/* Planning 2030 */}
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'}`}>
            <div className="flex items-center gap-2 mb-2 text-sky-400">
              <Layers className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Quy hoạch 2030</span>
            </div>
            <div className="text-2xl font-black text-white">27 khu</div>
            <p className="text-xs opacity-75 mt-1">
              11 cấp quốc gia &amp; 16 cấp tỉnh. Khoanh vùng <strong>463.587 ha</strong> (0,463% diện tích biển).
            </p>
          </div>

          {/* Target Gap */}
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'}`}>
            <div className="flex items-center gap-2 mb-2 text-emerald-400">
              <Target className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Mục tiêu chiến lược</span>
            </div>
            <div className="text-2xl font-black text-white">6% diện tích</div>
            <p className="text-xs opacity-75 mt-1">
              Mục tiêu bảo tồn cần đạt để khôi phục nguồn lợi và phát triển kinh tế biển bền vững.
            </p>
          </div>
        </div>

        {/* Analytical takeaway */}
        <div className="mt-4 p-3.5 rounded-lg bg-black/10 border border-white/5 text-xs opacity-80 leading-relaxed">
          <strong>Hệ quả trực tiếp: </strong>
          Đến nay mới triển khai được 215.191 ha (khoảng 0,215% biển). Do chưa bảo tồn biển tốt và chưa quản lý tốt ngành khai thác thủy sản, nguồn lợi thủy sản ngoài tự nhiên suy giảm mạnh, làm giảm cả sản lượng lẫn giá trị kinh tế.
        </div>
      </div>
    </div>
  );
};
