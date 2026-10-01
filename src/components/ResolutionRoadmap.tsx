import React from 'react';
import { 
  FileText, 
  Map, 
  Scale, 
  Network, 
  Building2, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';

interface ResolutionRoadmapProps {
  theme: 'ocean' | 'paper' | 'sepia';
}

export const ResolutionRoadmap: React.FC<ResolutionRoadmapProps> = ({ theme }) => {
  const isDark = theme === 'ocean';

  const steps = [
    {
      num: "01",
      icon: Map,
      title: "Rà soát quy hoạch biển",
      desc: "Rà soát, điều chỉnh Quy hoạch không gian biển quốc gia trên cơ sở phân vùng chức năng chi tiết, sau đó sửa đổi quy hoạch các tỉnh, thành có biển."
    },
    {
      num: "02",
      icon: Scale,
      title: "Hoàn thiện khung pháp luật",
      desc: "Nghiên cứu chỉnh sửa và bổ sung Luật tài nguyên, môi trường biển và hải đảo theo các quan điểm chỉ đạo của Nghị quyết 20-NQ/TW."
    },
    {
      num: "03",
      icon: Network,
      title: "Quản lý tổng hợp",
      desc: "Xây dựng mô hình quản lý tổng hợp biển, vùng bờ và hải đảo, đảm bảo thống nhất giữa các cấp chính quyền và liên ngành liên kết chặt chẽ."
    },
    {
      num: "04",
      icon: Building2,
      title: "Hạ tầng thích ứng",
      desc: "Đầu tư cơ sở hạ tầng phục vụ phát triển kinh tế biển, luồng lạch, cảng cá, thích ứng với biến đổi khí hậu và phòng chống thiên tai."
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: "Bảo tồn & Môi trường",
      desc: "Tăng cường quản lý tài nguyên, bảo vệ môi trường, mở rộng diện tích các khu bảo tồn biển hướng tới mục tiêu 6% và phục hồi hệ sinh thái."
    },
    {
      num: "06",
      icon: GraduationCap,
      title: "Nhân lực & Số hóa",
      desc: "Đầu tư phát triển nguồn nhân lực biển chất lượng cao, nghiên cứu khoa học, chuyển giao công nghệ và số hóa đại dương toàn diện."
    }
  ];

  return (
    <div 
      className={`my-8 p-5 sm:p-7 rounded-2xl border transition-colors shadow-xl ${
        isDark 
          ? 'bg-[#051c24] border-emerald-900/60 text-emerald-100' 
          : theme === 'paper'
          ? 'bg-emerald-50/70 border-emerald-200 text-stone-800'
          : 'bg-[#f4efe4] border-[#d8cfbe] text-[#2c221a]'
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <FileText className="w-5 h-5 text-emerald-400" />
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
          Trọng tâm 6 đột phá từ Nghị quyết 20-NQ/TW & Nghị quyết 218/NQ-CP
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-5">
        {steps.map((st) => {
          const Icon = st.icon;
          return (
            <div 
              key={st.num}
              className={`p-4 rounded-xl border transition-all ${
                isDark 
                  ? 'bg-black/30 border-emerald-900/40 hover:border-emerald-500/50' 
                  : 'bg-white/90 border-emerald-100 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-emerald-400 tracking-wider font-mono">
                  {st.num}
                </span>
                <Icon className="w-4 h-4 text-emerald-400" />
              </div>
              <h5 className="text-sm font-bold mb-1.5">{st.title}</h5>
              <p className="text-xs opacity-85 leading-relaxed">{st.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
