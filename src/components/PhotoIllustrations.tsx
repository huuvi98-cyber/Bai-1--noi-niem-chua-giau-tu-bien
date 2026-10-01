import React from 'react';

/**
 * Editorial documentary SVG illustrations matching the uploaded press photos
 */

export const MinhCaptainIllustration: React.FC = () => (
  <div className="w-full h-full flex flex-col sm:flex-row gap-3 items-center justify-center p-3 sm:p-5 bg-gradient-to-r from-[#033054] to-[#01223e]">
    {/* Left frame: Captain looking at radar */}
    <div className="flex-1 w-full h-full min-h-[160px] rounded-xl bg-[#022442] border border-cyan-400/30 p-4 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between text-xs text-cyan-300 font-editorial-sans">
        <span className="font-bold">HỆ THỐNG ĐỊNH VỊ VỆ TINH & TẦM NGƯ</span>
        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-[10px]">GPS / SONAR</span>
      </div>
      
      {/* Radar screen display */}
      <div className="my-auto py-2 flex items-center justify-center gap-6">
        <div className="relative w-28 h-28 rounded-full border-2 border-emerald-400/50 bg-[#02182a] flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)]">
          <div className="absolute inset-2 rounded-full border border-emerald-500/30" />
          <div className="absolute inset-6 rounded-full border border-emerald-500/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          {/* Sweep line */}
          <div 
            className="absolute top-1/2 left-1/2 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent origin-left"
            style={{ animation: 'spin 4s linear infinite' }}
          />
          {/* Target blips */}
          <div className="absolute top-6 right-8 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
          <div className="absolute bottom-8 left-7 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
        </div>

        <div className="text-xs text-slate-200 space-y-1.5 font-editorial-sans">
          <p className="font-bold text-cyan-300">Tàu BD 97462-TS</p>
          <p className="text-[11px] opacity-80">Vị trí: Ngư trường Trường Sa</p>
          <p className="text-[11px] opacity-80">Hành nghề: Lưới vây thả chà</p>
          <p className="text-[11px] text-emerald-400">Tín hiệu: Ổn định 24/24</p>
        </div>
      </div>

      <div className="text-[11px] text-cyan-200/70 italic text-center border-t border-cyan-500/20 pt-1.5">
        Ngư dân Nguyễn Văn Minh theo dõi tọa độ máy dò cá
      </div>
    </div>

    {/* Right frame: Captain at wooden wheel */}
    <div className="flex-1 w-full h-full min-h-[160px] rounded-xl bg-[#022442] border border-cyan-400/30 p-4 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between text-xs text-cyan-300 font-editorial-sans">
        <span className="font-bold">CABIN BUỒNG LÁI TÀU XA BỜ</span>
        <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[10px]">HOÀI NHƠN</span>
      </div>

      <div className="my-auto py-2 flex items-center justify-center gap-6">
        {/* Wooden ship helm */}
        <div className="w-24 h-24 rounded-full border-4 border-amber-600 bg-amber-900/40 flex items-center justify-center relative shadow-lg">
          <div className="w-8 h-8 rounded-full border-2 border-amber-400 bg-amber-950" />
          {/* Spikes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <div
              key={deg}
              className="absolute w-1.5 h-4 bg-amber-500 rounded-sm"
              style={{
                transform: `rotate(${deg}deg) translateY(-18px)`
              }}
            />
          ))}
        </div>

        <div className="text-xs text-slate-200 space-y-1 font-editorial-sans">
          <p className="font-bold text-white">Thuyền trưởng 45 tuổi</p>
          <p className="text-[11px] opacity-80">2 tháng bám biển / chuyến</p>
          <p className="text-[11px] opacity-80">Đội 4 tàu khơi xa</p>
          <p className="text-[11px] text-amber-400">Chi phí: 300 - 350 triệu/chuyến</p>
        </div>
      </div>

      <div className="text-[11px] text-cyan-200/70 italic text-center border-t border-cyan-500/20 pt-1.5">
        Cầm bánh lái vượt qua sóng gió Trường Sa
      </div>
    </div>
  </div>
);

export const TamQuanPortIllustration: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-[#024070] via-[#022f54] to-[#011d36] text-white">
    <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
        <span className="font-bold text-sm font-editorial-sans tracking-wide text-cyan-200 uppercase">
          Cảng cá Tam Quan · Phường Hoài Nhơn Bắc
        </span>
      </div>
      <span className="text-xs text-cyan-400 font-semibold uppercase">Tàu BD-97462-TS</span>
    </div>

    {/* Big wooden boat visualization */}
    <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
      <div className="relative w-full max-w-md h-32 flex items-center justify-center">
        {/* Red Flag */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1">
          <div className="w-7 h-4.5 bg-red-600 rounded-xs flex items-center justify-center shadow-md">
            <span className="text-[10px] text-yellow-300">★</span>
          </div>
          <div className="w-0.5 h-12 bg-slate-300" />
        </div>

        {/* Big Ship Bow BD-97462-TS */}
        <div className="absolute bottom-0 w-64 h-24 bg-gradient-to-b from-[#0284c7] to-[#075985] rounded-b-3xl border-t-4 border-red-600 shadow-2xl flex flex-col items-center justify-end pb-2">
          <div className="w-full h-1 bg-red-500 absolute top-3" />
          <span className="font-black text-white text-xs sm:text-sm tracking-wider uppercase font-editorial-sans">
            BD - 97462 - TS
          </span>
          <span className="text-[10px] text-cyan-200 opacity-80 uppercase">
            Tàu lưới vây xa bờ Tam Quan
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-cyan-100 font-editorial-sans max-w-lg mt-2">
        Mỗi mùa trăng, hàng trăm tàu câu cá ngừ đại dương và lưới vây cập bến Tam Quan mang theo sản lượng hàng ngàn tấn.
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-between text-[11px] text-cyan-300/80 border-t border-cyan-500/20 pt-2 font-editorial-sans">
      <span>Sản lượng cá ngừ Tam Quan: ~7.566 tấn/năm (&gt;42% cả nước)</span>
      <span>Hạ tầng luồng lạch còn hẹp, thường xuyên bồi lấp</span>
    </div>
  </div>
);

export const TunaMarketIllustration: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-r from-[#032f57] via-[#02223f] to-[#011a33] text-white">
    <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
      <span className="font-bold text-sm font-editorial-sans text-cyan-200 uppercase">
        Chuỗi giá trị cá ngừ đại dương tại bến cảng
      </span>
      <span className="text-xs text-amber-400 font-semibold">95.000 - 100.000 đ/kg</span>
    </div>

    {/* 3 Circular steps */}
    <div className="my-auto py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* 1. Unloading */}
      <div className="p-4 rounded-xl bg-[#032545] border border-cyan-400/20 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-xl font-black text-cyan-300 mb-2">
          1
        </div>
        <h4 className="font-bold text-xs text-white uppercase mb-1">Bốc dỡ hầm lạnh</h4>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Cá ngừ 30 - 80kg được cẩu từ hầm tàu ướp đá lạnh lên mặt cảng.
        </p>
      </div>

      {/* 2. Weighing & Grading */}
      <div className="p-4 rounded-xl bg-[#032545] border border-cyan-400/20 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-xl font-black text-amber-300 mb-2">
          2
        </div>
        <h4 className="font-bold text-xs text-white uppercase mb-1">Cân & Định giá</h4>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Thương lái kiểm tra chất lượng thịt cá, lên cân bàn tại cầu cảng.
        </p>
      </div>

      {/* 3. Logistics Transport */}
      <div className="p-4 rounded-xl bg-[#032545] border border-cyan-400/20 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-xl font-black text-emerald-300 mb-2">
          3
        </div>
        <h4 className="font-bold text-xs text-white uppercase mb-1">Xe lạnh vận chuyển</h4>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Xếp lên xe tải đông lạnh đưa về nhà máy chế biến sâu ở tỉnh khác.
        </p>
      </div>
    </div>

    <div className="text-[11px] text-cyan-200/80 border-t border-cyan-500/20 pt-2 font-editorial-sans text-center">
      Chênh lệch giá trị: Tại cảng 100.000 đ/kg ➔ Người tiêu dùng 150.000 đ/kg ➔ Phi lê nhà hàng 300.000 - 500.000 đ/kg.
    </div>
  </div>
);

export const AquacultureCagesIllustration: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-[#023b6b] via-[#022b4d] to-[#011c33] text-white">
    <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
      <span className="font-bold text-sm font-editorial-sans text-cyan-200 uppercase">
        Quy hoạch vùng nuôi biển · Vịnh Xuân Đài & Sông Cầu
      </span>
      <span className="text-xs text-cyan-400 font-semibold">Tôm hùm & Cá biển</span>
    </div>

    {/* Cage grid graphic */}
    <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
      <div className="grid grid-cols-4 gap-2 w-full max-w-sm mb-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="h-10 rounded border border-cyan-400/40 bg-[#0284c7]/20 flex items-center justify-center text-[10px] text-cyan-200 font-mono shadow-sm"
          >
            Lồng #{i + 1}
          </div>
        ))}
      </div>

      <p className="text-xs sm:text-sm text-cyan-100 font-editorial-sans max-w-md">
        Hàng ngàn lồng bè bằng thùng phuy và khung gỗ truyền thống ken đặc mặt vịnh. Bài toán đặt ra là chuyển đổi sang vật liệu HDPE chịu sóng gió và quy hoạch sức tải sinh thái.
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-between text-[11px] text-cyan-300/80 border-t border-cyan-500/20 pt-2 font-editorial-sans">
      <span>Thách thức: Mật độ nuôi quá dày, rủi ro dịch bệnh khi đổi mùa</span>
      <span>Giải pháp: Quy hoạch giao mặt nước biển dài hạn</span>
    </div>
  </div>
);

export const TamGiangLagoonIllustration: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-[#04335c] via-[#022544] to-[#01182c] text-white">
    <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
      <span className="font-bold text-sm font-editorial-sans text-cyan-200 uppercase">
        Làng chài 500 năm tuổi · Đầm Chuồn, Phá Tam Giang - Cầu Hai
      </span>
      <span className="text-xs text-amber-400 font-semibold">Thừa Thiên Huế</span>
    </div>

    <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 rounded-full border-2 border-cyan-400/60 bg-cyan-900/30 flex items-center justify-center text-2xl mb-3 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        🌊
      </div>
      <p className="text-xs sm:text-sm text-cyan-100 font-editorial-sans max-w-lg leading-relaxed">
        Phá Tam Giang - Cầu Hai là đầm phá nước lợ lớn nhất Đông Nam Á với diện tích 21.600 ha. Những chiếc nhà chồ, nò sáo, cọc gỗ truyền thống đang tìm hướng kết hợp bảo tồn sinh thái và du lịch cộng đồng bền vững.
      </p>
    </div>

    <div className="text-[11px] text-cyan-300/80 border-t border-cyan-500/20 pt-2 font-editorial-sans text-center">
      Giữ gìn sinh kế chài lưới 5 thế kỷ gắn liền với quy hoạch không gian bảo tồn vùng đầm phá.
    </div>
  </div>
);
