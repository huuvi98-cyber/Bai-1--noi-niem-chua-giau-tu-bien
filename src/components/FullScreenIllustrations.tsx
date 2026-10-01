import React from 'react';
import { Compass, Anchor, AlertTriangle, ShieldAlert } from 'lucide-react';

/**
 * High-impact cinematic visual fallbacks for each of the 6 full-screen documentary photos
 */

export const MinhCaptainFullScreenIllustration: React.FC = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-tr from-[#02182c] via-[#03345d] to-[#044c87] overflow-hidden">
    {/* Ocean waves background effect */}
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
    
    <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a355c]/80 border border-cyan-400/40 text-cyan-200 text-xs font-editorial-sans uppercase tracking-widest">
        <Compass className="w-4 h-4 text-cyan-400" />
        <span>Hải trình 2 tháng · Ngư trường Trường Sa</span>
      </div>

      <h3 className="text-2xl sm:text-4xl font-black font-editorial-sans tracking-tight text-white leading-tight">
        Ngư dân Nguyễn Văn Minh điều khiển tàu hậu cần cập cảng Tam Quan
      </h3>

      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-left font-editorial-sans text-xs">
        <div className="p-3 rounded-lg bg-[#022442]/80 border border-cyan-500/30">
          <span className="block text-cyan-400 font-bold uppercase text-[10px]">Tàu cá</span>
          <span className="text-slate-100 font-medium">BD 97462-TS</span>
        </div>
        <div className="p-3 rounded-lg bg-[#022442]/80 border border-cyan-500/30">
          <span className="block text-cyan-400 font-bold uppercase text-[10px]">Đội tàu</span>
          <span className="text-slate-100 font-medium">4 tàu khơi xa</span>
        </div>
        <div className="p-3 rounded-lg bg-[#022442]/80 border border-cyan-500/30">
          <span className="block text-cyan-400 font-bold uppercase text-[10px]">Chi phí</span>
          <span className="text-amber-300 font-medium">350 triệu/chuyến</span>
        </div>
      </div>
    </div>
  </div>
);

export const FishingFleetTamQuanIllustration: React.FC = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-tr from-[#021f3b] via-[#023f73] to-[#03599e] overflow-hidden">
    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px]" />

    <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a355c]/80 border border-cyan-400/40 text-cyan-200 text-xs font-editorial-sans uppercase tracking-widest">
        <Anchor className="w-4 h-4 text-cyan-400" />
        <span>Rừng cờ Tổ quốc · Cảng cá Tam Quan</span>
      </div>

      <h3 className="text-2xl sm:text-4xl font-black font-editorial-sans tracking-tight text-white leading-tight">
        Đội tàu xa bờ trở về sau hành trình dài ở Hoàng Sa, Trường Sa
      </h3>

      <div className="flex flex-wrap justify-center gap-3 font-editorial-sans text-xs">
        <span className="px-3.5 py-1.5 rounded-lg bg-[#022442]/80 border border-cyan-500/30 text-cyan-200 font-semibold">
          Tàu chủ lực BD-91108-TS
        </span>
        <span className="px-3.5 py-1.5 rounded-lg bg-[#022442]/80 border border-cyan-500/30 text-cyan-200 font-semibold">
          Sản lượng cá ngừ &gt;7.500 tấn/năm
        </span>
        <span className="px-3.5 py-1.5 rounded-lg bg-[#022442]/80 border border-cyan-500/30 text-amber-300 font-semibold">
          Áp lực luồng lạch cảng hẹp
        </span>
      </div>
    </div>
  </div>
);

export const FishHoldIceIllustration: React.FC = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-tr from-[#032647] via-[#033c6e] to-[#055394] overflow-hidden">
    <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-editorial-sans uppercase tracking-widest">
        <AlertTriangle className="w-4 h-4 text-amber-400" />
        <span>Bảo quản sau thu hoạch · Hao hụt giá trị</span>
      </div>

      <h3 className="text-2xl sm:text-4xl font-black font-editorial-sans tracking-tight text-white leading-tight">
        Khoang tàu truyền thống khiến chất lượng hải sản hao hụt, thất thu
      </h3>

      <p className="text-sm sm:text-base text-cyan-100/90 font-editorial-sans max-w-xl mx-auto leading-relaxed">
        Ướp đá cây thủ công và hầm chứa gỗ truyền thống khiến cá ngừ mất chất lượng loại 1, bị rớt giá từ 150.000 đ/kg xuống chỉ còn 95.000 - 100.000 đ/kg khi cập bờ.
      </p>
    </div>
  </div>
);

export const CuMongCageConstructionIllustration: React.FC = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-tr from-[#02203a] via-[#03365e] to-[#034d82] overflow-hidden">
    <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-editorial-sans uppercase tracking-widest">
        <span>Đầm Cù Mông · Nuôi biển truyền thống</span>
      </div>

      <h3 className="text-2xl sm:text-4xl font-black font-editorial-sans tracking-tight text-white leading-tight">
        Đóng bè gỗ và thùng phuy truyền thống - Tiềm ẩn nhiều rủi ro
      </h3>

      <p className="text-sm sm:text-base text-cyan-100/90 font-editorial-sans max-w-xl mx-auto leading-relaxed">
        Phương thức gia công lồng bè thủ công bằng khung gỗ và thùng phuy nhựa 200 lít chưa thể chịu đựng được sóng lớn và bão biển, đòi hỏi lộ trình chuyển đổi sang công nghệ HDPE.
      </p>
    </div>
  </div>
);

export const DeGiBottleneckIllustration: React.FC = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-tr from-[#021a30] via-[#022f54] to-[#034475] overflow-hidden">
    <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs font-editorial-sans uppercase tracking-widest">
        <ShieldAlert className="w-4 h-4 text-rose-400" />
        <span>Cửa biển Đề Gi · Xung đột không gian</span>
      </div>

      <h3 className="text-2xl sm:text-4xl font-black font-editorial-sans tracking-tight text-white leading-tight">
        Vùng nuôi thủy sản tự phát bóp nghẹt cửa biển Đề Gi
      </h3>

      <p className="text-sm sm:text-base text-cyan-100/90 font-editorial-sans max-w-xl mx-auto leading-relaxed">
        Nuôi trồng tự phát, manh mún không theo quy hoạch gây cản trở nghiêm trọng luồng tàu thuyền ra vào và thoát lũ, đặt ra bài toán tổ chức lại không gian phát triển biển.
      </p>
    </div>
  </div>
);

export const XuanDaiBayAerialIllustration: React.FC = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-tr from-[#02182c] via-[#022c4f] to-[#034070] overflow-hidden">
    <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-editorial-sans uppercase tracking-widest">
        <span>Vịnh Xuân Đài · Toàn cảnh Flycam</span>
      </div>

      <h3 className="text-2xl sm:text-4xl font-black font-editorial-sans tracking-tight text-white leading-tight">
        Vùng nuôi thủy sản vịnh Xuân Đài đứng trước nguy cơ vỡ quy hoạch
      </h3>

      <p className="text-sm sm:text-base text-cyan-100/90 font-editorial-sans max-w-xl mx-auto leading-relaxed">
        Mặt nước ken đặc hàng ngàn lồng bè tôm hùm, cá biển vượt ngưỡng sức tải tự nhiên của đầm vịnh, dẫn đến ô nhiễm hữu cơ và thiệt hại nặng nề mỗi khi giao mùa thiên tai.
      </p>
    </div>
  </div>
);
