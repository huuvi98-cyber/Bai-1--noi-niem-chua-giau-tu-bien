import React, { useState } from 'react';
import { TrendingUp, Fuel, Snowflake, Users, Ship, Anchor, AlertCircle } from 'lucide-react';

interface ValueChainProps {
  theme: 'ocean' | 'paper' | 'sepia';
}

export const ValueChainInfographic: React.FC<ValueChainProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'prices' | 'costs'>('prices');

  const isDark = theme === 'ocean';

  return (
    <div 
      className={`my-10 p-5 sm:p-7 rounded-2xl border transition-colors shadow-xl ${
        isDark 
          ? 'bg-[#081525] border-slate-800 text-slate-200' 
          : theme === 'paper'
          ? 'bg-white border-stone-200 text-stone-800 shadow-stone-200/50'
          : 'bg-[#faf4ea] border-[#e2d5c3] text-[#2c221a]'
      }`}
    >
      {/* Header and Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-current/10">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
            Dữ liệu khảo sát thực tế cảng cá Tam Quan
          </span>
          <h4 className="text-base sm:text-lg font-bold">
            Nghịch lý chuỗi giá trị cá ngừ đại dương
          </h4>
        </div>

        {/* Tab Switcher */}
        <div className={`inline-flex p-1 rounded-lg self-start sm:self-auto ${isDark ? 'bg-slate-900/80 border border-slate-800' : 'bg-black/5'}`}>
          <button
            onClick={() => setActiveTab('prices')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'prices'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            Chênh lệch giá bán
          </button>
          <button
            onClick={() => setActiveTab('costs')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'costs'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            Chi phí chuyến biển
          </button>
        </div>
      </div>

      {/* Tab 1: Price Gap Visualizer */}
      {activeTab === 'prices' ? (
        <div className="pt-6">
          <p className="text-xs sm:text-sm opacity-80 mb-6">
            Khảo sát thời điểm tháng 8-2026 tại cảng Tam Quan: Dư địa kinh tế nằm trọn ở khâu bảo quản, chế biến sâu và logistics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Harbor price */}
            <div className={`p-4 rounded-xl border relative overflow-hidden ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500">Tại cầu cảng</span>
                <Ship className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">
                95 - 100k
                <span className="text-xs font-normal text-current opacity-70 ml-1">đ/kg</span>
              </div>
              <p className="text-xs opacity-75">
                Bán cho thương lái thu mua tại cảng cá Tam Quan
              </p>
              <div className="mt-3 text-[11px] font-medium text-amber-500/90 pt-2 border-t border-current/10">
                Ngư dân chịu rủi ro bão gió, hao hụt lạnh
              </div>
            </div>

            {/* Direct consumer price */}
            <div className={`p-4 rounded-xl border relative overflow-hidden ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">Người tiêu dùng</span>
                <Users className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-sky-400 mb-1">
                ~150k
                <span className="text-xs font-normal text-current opacity-70 ml-1">đ/kg</span>
              </div>
              <p className="text-xs opacity-75">
                Giá bán trực tiếp đến tay người tiêu dùng nội địa
              </p>
              <div className="mt-3 text-[11px] font-medium text-sky-400/90 pt-2 border-t border-current/10">
                Tăng +50% so với giá bán thô tại cảng
              </div>
            </div>

            {/* Restaurant Fillet */}
            <div className={`p-4 rounded-xl border relative overflow-hidden ${
              isDark ? 'bg-cyan-950/30 border-cyan-800/60' : 'bg-emerald-50/50 border-emerald-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Phi lê nhà hàng</span>
                <TrendingUp className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 mb-1">
                300 - 500k
                <span className="text-xs font-normal text-current opacity-70 ml-1">đ/kg</span>
              </div>
              <p className="text-xs opacity-75">
                Sản phẩm phi lê chất lượng cao tại chuỗi nhà hàng
              </p>
              <div className="mt-3 text-[11px] font-medium text-cyan-400/90 pt-2 border-t border-current/10">
                Gấp 3 - 5 lần giá cá nguyên liệu tại bến
              </div>
            </div>
          </div>

          <div className="mt-5 p-3.5 rounded-lg bg-black/10 border border-white/5 flex items-start gap-2.5 text-xs">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="opacity-80">
              <strong className="font-semibold text-cyan-300">Điểm nghẽn: </strong>
              Hoài Nhơn Bắc đạt 7.566 tấn cá ngừ/năm (&gt;42% cả nước), tổng lượng cập cảng 23.000 tấn/năm. Song do thiếu kho lạnh, nhà máy chế biến sâu tại chỗ và luồng lạch cảng bị bồi lắng, toàn bộ cá phải vận chuyển đi nơi khác, chi phí logistics ăn mòn biên lợi nhuận của cả ngư dân lẫn thương lái.
            </p>
          </div>
        </div>
      ) : (
        /* Tab 2: Fishing Voyage Cost Breakdown */
        <div className="pt-6">
          <p className="text-xs sm:text-sm opacity-80 mb-6">
            Mỗi chuyến biển kéo dài 2 tháng của đội tàu xa bờ (4 tàu) đối mặt với gánh nặng tài chính lớn:
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
            <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Fuel className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase">Nhiên liệu</span>
              </div>
              <div className="text-xl font-bold">~6 tấn dầu</div>
              <span className="text-[11px] opacity-70 block mt-1">Chi phí lớn nhất mỗi chuyến</span>
            </div>

            <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <Snowflake className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase">Bảo quản</span>
              </div>
              <div className="text-xl font-bold">&gt;1.300 cây đá</div>
              <span className="text-[11px] opacity-70 block mt-1">Kèm dự trữ lương thực thực phẩm</span>
            </div>

            <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <Users className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase">Bạn tàu</span>
              </div>
              <div className="text-xl font-bold">7 triệu/người</div>
              <span className="text-[11px] opacity-70 block mt-1">Lương cố định hàng tháng</span>
            </div>

            <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center gap-2 text-rose-400 mb-2">
                <Anchor className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase">Lai dắt luồng</span>
              </div>
              <div className="text-xl font-bold">2 - 3 triệu/lượt</div>
              <span className="text-[11px] opacity-70 block mt-1">Phát sinh ~5 triệu/tháng do bồi lấp</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                Tổng dự toán chi phí mỗi chuyến biển
              </span>
              <div className="text-2xl font-black text-white">
                300 - 350 triệu đồng
              </div>
            </div>
            <p className="text-xs opacity-75 max-w-md">
              “Khoang cá đầy hay cạn chỉ là một phần của chuyện lời lỗ. Chi phí tăng cao khiến nhiều chuyến biển thất thu, dù biển được mùa.”
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
