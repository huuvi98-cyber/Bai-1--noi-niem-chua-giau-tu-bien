import React, { useState } from 'react';
import { MapPin, Anchor, Fish, Waves } from 'lucide-react';

interface LocalityCardsProps {
  theme: 'ocean' | 'paper' | 'sepia';
}

export const LocalityCards: React.FC<LocalityCardsProps> = ({ theme }) => {
  const [selectedLocality, setSelectedLocality] = useState<number>(0);
  const isDark = theme === 'ocean';

  const localities = [
    {
      id: 0,
      name: "Cảng cá Tam Quan & Hoài Nhơn Bắc",
      location: "Gia Lai / Bình Định (Miền Trung)",
      icon: Anchor,
      stats: [
        { label: "Đội tàu xa bờ", value: "~2.300 chiếc" },
        { label: "Cá ngừ đại dương", value: "7.566 tấn/năm" },
        { label: "Tỷ trọng toàn quốc", value: "> 42%" },
        { label: "Sản lượng vào cảng", value: "~23.000 tấn/năm" }
      ],
      bottleneck: "Luồng lạch hẹp bồi lấp, thiếu kho lạnh & nhà máy chế biến sâu tại chỗ, quỹ đất hậu cần bị thu hẹp (quy hoạch 15,2ha mới dùng 5ha)."
    },
    {
      id: 1,
      name: "Vịnh Xuân Đài & Sông Cầu",
      location: "Đắk Lắk / Phú Yên (Nam Trung Bộ)",
      icon: Fish,
      stats: [
        { label: "Số lượng lồng nuôi", value: "~93.000 lồng" },
        { label: "Tỷ trọng tôm hùm", value: "90%" },
        { label: "Sản lượng tôm hùm", value: "> 1.400 tấn/năm" },
        { label: "Doanh thu ước tính", value: "~1.000 tỷ đ/năm" }
      ],
      bottleneck: "Mật độ lồng bè dày đặc, dùng thức ăn tươi gây ô nhiễm, thiếu cơ chế giao mặt nước ổn định và giống tự nhiên cạn kiệt."
    },
    {
      id: 2,
      name: "Đầm Chuồn & Phá Tam Giang - Cầu Hai",
      location: "TP Huế (Bắc Trung Bộ)",
      icon: Waves,
      stats: [
        { label: "Lịch sử làng chài", value: "> 500 năm" },
        { label: "Diện tích mặt nước lợ", value: "~216 km²" },
        { label: "Quy mô Đông Nam Á", value: "Lớn nhất" },
        { label: "Người dân mưu sinh", value: "~350.000 người" }
      ],
      bottleneck: "Suy giảm nghiêm trọng các loài đặc trưng giá trị cao (cá dìa, cá nâu, cá kinh), thu nhập mỗi đêm giảm từ 500k-1 triệu xuống chỉ còn đôi trăm ngàn."
    }
  ];

  return (
    <div 
      className={`my-10 p-5 sm:p-7 rounded-2xl border transition-colors shadow-xl ${
        isDark 
          ? 'bg-[#061423] border-slate-800 text-slate-200' 
          : theme === 'paper'
          ? 'bg-white border-stone-200 text-stone-800'
          : 'bg-[#faf4ea] border-[#e2d5c3] text-[#2c221a]'
      }`}
    >
      <div className="pb-4 border-b border-current/10">
        <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
          Hồ sơ thực địa 3 vùng biển trọng điểm
        </span>
        <h4 className="text-base sm:text-lg font-bold">
          3 Lát cắt thực tế từ bờ biển miền Trung
        </h4>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pt-4">
        {localities.map((loc, idx) => {
          const Icon = loc.icon;
          const isSelected = selectedLocality === idx;
          return (
            <button
              key={loc.id}
              onClick={() => setSelectedLocality(idx)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : isDark 
                  ? 'bg-slate-900/60 hover:bg-slate-800 text-slate-300' 
                  : 'bg-black/5 hover:bg-black/10 text-stone-700'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{loc.name.split('&')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Card Content */}
      <div className="pt-5">
        <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium mb-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>{localities[selectedLocality].location}</span>
        </div>
        <h5 className="text-lg font-bold mb-4">
          {localities[selectedLocality].name}
        </h5>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {localities[selectedLocality].stats.map((stat, i) => (
            <div 
              key={i} 
              className={`p-3 rounded-xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-stone-50 border-stone-200'}`}
            >
              <span className="text-[11px] opacity-70 block">{stat.label}</span>
              <span className="text-base sm:text-lg font-bold text-cyan-400 block mt-0.5">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Bottleneck highlight */}
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
          <strong className="text-amber-400 font-semibold">Điểm nghẽn phản ánh: </strong>
          <span className="opacity-90">{localities[selectedLocality].bottleneck}</span>
        </div>
      </div>
    </div>
  );
};
