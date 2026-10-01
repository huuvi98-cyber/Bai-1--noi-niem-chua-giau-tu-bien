import React from 'react';
import { Layers, CheckCircle2, ChevronRight } from 'lucide-react';

interface SeriesRoadmapProps {
  theme: 'ocean' | 'paper' | 'sepia';
}

export const SeriesRoadmap: React.FC<SeriesRoadmapProps> = ({ theme }) => {
  const isDark = theme === 'ocean';

  const parts = [
    {
      num: "Bài 1",
      title: "Nỗi niềm chưa giàu từ biển",
      status: "Đang đọc",
      current: true,
      desc: "Nghịch lý tại Tam Quan & Sông Cầu: Cá lớn, sản lượng nghìn tỷ nhưng thiếu hậu cần, chậm quy hoạch và chuỗi giá trị rơi rụng."
    },
    {
      num: "Bài 2",
      title: "Nâng giá trị sản vật, hiện đại hóa nuôi biển",
      status: "Sắp ra mắt",
      current: false,
      desc: "Ứng dụng công nghệ nuôi khơi xa lồng HDPE, truy xuất nguồn gốc, khép kín quy trình lạnh và gỡ thẻ vàng EC."
    },
    {
      num: "Bài 3",
      title: "Hệ sinh thái cảng biển, công nghiệp & logistics",
      status: "Sắp ra mắt",
      current: false,
      desc: "Đột phá luồng hàng hải, kết nối cao tốc, đường sắt chuyên dụng và chuyển đổi mô hình cảng xanh, cảng thông minh."
    },
    {
      num: "Bài 4",
      title: "Du lịch sinh thái & Năng lượng sạch ngoài khơi",
      status: "Sắp ra mắt",
      current: false,
      desc: "Quy hoạch không gian ven bờ, xử lý nước thải triệt để, phát triển điện gió ngoài khơi gắn với bảo tồn 6% diện tích biển."
    },
    {
      num: "Bài 5",
      title: "Triển vọng trung tâm hàng hải quốc tế & Đột phá thể chế",
      status: "Sắp ra mắt",
      current: false,
      desc: "Định vị TPHCM trên bản đồ hàng hải thế giới, cơ chế quản lý tổng hợp biển và kiến tạo năng lực biển quốc gia."
    }
  ];

  return (
    <div 
      className={`my-12 p-6 sm:p-8 rounded-2xl border transition-colors shadow-2xl ${
        isDark 
          ? 'bg-[#05111d] border-slate-800 text-slate-200' 
          : theme === 'paper'
          ? 'bg-stone-50 border-stone-200 text-stone-800'
          : 'bg-[#faf4ea] border-[#e2d5c3] text-[#2c221a]'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-current/10">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
            Theo dõi chuyên đề
          </span>
          <h4 className="text-lg sm:text-xl font-bold flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            Tuyến bài 5 kỳ: “Mạnh về biển, phát triển bền vững từ biển”
          </h4>
        </div>

        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 self-start sm:self-auto">
          Nghị quyết 20-NQ/TW & 218/NQ-CP
        </span>
      </div>

      <div className="space-y-3.5 pt-6">
        {parts.map((p, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              p.current 
                ? isDark 
                  ? 'bg-cyan-950/30 border-cyan-500/40 ring-1 ring-cyan-500/30' 
                  : 'bg-cyan-50 border-cyan-300'
                : isDark
                ? 'bg-slate-900/40 border-slate-800 opacity-75'
                : 'bg-white/80 border-stone-200 opacity-75'
            }`}
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                p.current 
                  ? 'bg-cyan-500 text-slate-950' 
                  : 'bg-black/10 text-slate-400'
              }`}>
                {idx + 1}
              </span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">{p.num}</span>
                  {p.current && (
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Đang đọc
                    </span>
                  )}
                </div>
                <h5 className="text-sm sm:text-base font-bold">{p.title}</h5>
                <p className="text-xs opacity-75 mt-0.5 line-clamp-1">{p.desc}</p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 self-end sm:self-center">
              {p.current ? (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Kỳ 1 đã tải</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-xs opacity-50">
                  <span>Kỳ tiếp theo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
