import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Square, 
  Type, 
  Sun, 
  Moon, 
  BookOpen, 
  List, 
  Share2, 
  Check, 
  Compass,
  Waves
} from 'lucide-react';
import { oceanSynth } from '../utils/audioSynth';
import { speechReader, SpeechStatus } from '../utils/speechHelper';

interface HeaderNavProps {
  readingProgress: number;
  theme: 'ocean' | 'paper' | 'sepia';
  setTheme: (theme: 'ocean' | 'paper' | 'sepia') => void;
  fontType: 'serif' | 'sans';
  setFontType: (font: 'serif' | 'sans') => void;
  fontSize: 'sm' | 'md' | 'lg';
  setFontSize: (size: 'sm' | 'md' | 'lg') => void;
  allParagraphs: string[];
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  readingProgress,
  theme,
  setTheme,
  fontType,
  setFontType,
  fontSize,
  setFontSize,
  allParagraphs
}) => {
  const [isOceanAudioPlaying, setIsOceanAudioPlaying] = useState(false);
  const [speechState, setSpeechState] = useState<SpeechStatus>({
    isPlaying: false,
    isPaused: false,
    currentParagraphIndex: 0
  });
  const [showToc, setShowToc] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    speechReader.setCallback((status) => {
      setSpeechState(status);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      speechReader.stop();
      oceanSynth.stop();
    };
  }, []);

  const toggleOceanSound = () => {
    const playing = oceanSynth.toggle();
    setIsOceanAudioPlaying(playing);
  };

  const handleSpeechToggle = () => {
    if (speechState.isPlaying) {
      if (speechState.isPaused) {
        speechReader.resume();
      } else {
        speechReader.pause();
      }
    } else {
      speechReader.startReading(allParagraphs, 0);
    }
  };

  const handleStopSpeech = () => {
    speechReader.stop();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Mạnh về biển, phát triển bền vững từ biển - Bài 1: Nỗi niềm chưa giàu từ biển",
          url: window.location.href
        });
      } catch {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToId = (id: string) => {
    setShowToc(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Nav styling depending on theme
  const getNavThemeClass = () => {
    switch (theme) {
      case 'paper':
        return 'bg-[#faf8f5]/90 border-stone-200/80 text-stone-800 shadow-sm';
      case 'sepia':
        return 'bg-[#f4ede1]/90 border-[#e3d5be] text-[#342b22] shadow-sm';
      case 'ocean':
      default:
        return 'bg-[#023359]/90 border-cyan-500/20 text-slate-100 backdrop-blur-md';
    }
  };

  return (
    <>
      {/* Top Fixed Reading Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/20">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, readingProgress))}%` }}
        />
      </div>

      {/* Main Header Bar */}
      <header className={`fixed top-1 left-0 right-0 z-40 border-b transition-all duration-300 ${getNavThemeClass()}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Brand Series Kicker */}
          <div className="flex items-center gap-3 min-w-0">
            <button 
              onClick={() => setShowToc(!showToc)}
              aria-label="Mục lục bài viết"
              className="p-2 -ml-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider shrink-0 cursor-pointer"
            >
              <List className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Mục lục</span>
            </button>

            <div className="h-4 w-px bg-slate-500/30 hidden sm:block" />

            <div className="truncate">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-400 block sm:inline">
                Tuyến 5 kỳ
              </span>
              <span className="hidden sm:inline text-slate-400 mx-1.5">·</span>
              <span className="text-xs font-medium opacity-90 truncate inline">
                {isScrolled ? 'Bài 1: Nỗi niềm chưa giàu từ biển' : 'Mạnh về biển, phát triển bền vững từ biển'}
              </span>
            </div>
          </div>

          {/* Right: Audio Ambience & Reader Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Ambient Ocean Waves Button */}
            <button
              onClick={toggleOceanSound}
              title={isOceanAudioPlaying ? "Tắt âm thanh sóng biển" : "Bật tiếng sóng biển rì rào"}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                isOceanAudioPlaying 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]' 
                  : 'hover:bg-white/10 text-slate-300 opacity-80 hover:opacity-100'
              }`}
            >
              <Waves className={`w-3.5 h-3.5 ${isOceanAudioPlaying ? 'animate-pulse text-cyan-400' : ''}`} />
              <span className="hidden md:inline">
                {isOceanAudioPlaying ? 'Sóng biển: Bật' : 'Sóng biển'}
              </span>
            </button>

            {/* Vietnamese Speech Read Aloud */}
            <div className="flex items-center rounded-lg bg-black/15 p-0.5 border border-white/10">
              <button
                onClick={handleSpeechToggle}
                title={speechState.isPlaying ? (speechState.isPaused ? "Tiếp tục đọc" : "Tạm dừng đọc") : "Đọc bài viết bằng giọng nói"}
                className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors ${
                  speechState.isPlaying 
                    ? 'bg-emerald-500 text-white shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {speechState.isPlaying && !speechState.isPaused ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
                <span className="hidden lg:inline text-[11px] pr-1">
                  {speechState.isPlaying ? (speechState.isPaused ? 'Tiếp tục' : 'Đang đọc') : 'Đọc bài'}
                </span>
              </button>

              {speechState.isPlaying && (
                <button
                  onClick={handleStopSpeech}
                  title="Dừng đọc"
                  className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-white/10 rounded-md transition-colors"
                >
                  <Square className="w-3 h-3 fill-current" />
                </button>
              )}
            </div>

            {/* Reading Settings Toggle */}
            <button
              onClick={() => setShowSettings(!showSettings)}
              aria-label="Tùy chỉnh đọc bài"
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                showSettings ? 'bg-cyan-500/20 text-cyan-400' : 'hover:bg-white/10 text-slate-300'
              }`}
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              title="Chia sẻ bài viết"
              className="p-2 rounded-lg hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Table of Contents Drawer */}
      {showToc && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-start animate-fade-in"
          onClick={() => setShowToc(false)}
        >
          <div 
            className={`w-full max-w-md h-full p-6 overflow-y-auto shadow-2xl transition-transform ${
              theme === 'ocean' 
                ? 'bg-[#091524] text-slate-100 border-r border-slate-800' 
                : theme === 'paper' 
                ? 'bg-[#faf8f5] text-stone-900 border-r border-stone-200' 
                : 'bg-[#f4ede1] text-[#342b22] border-r border-[#ded3be]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-sm tracking-wide uppercase">Cấu trúc bài viết</h3>
              </div>
              <button 
                onClick={() => setShowToc(false)}
                className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => scrollToId('lts-section')}
                className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">Mở đầu</span>
                <span className="text-sm font-semibold group-hover:text-cyan-300">Lời tòa soạn (LTS) & Sapo</span>
              </button>

              <button
                onClick={() => scrollToId('bat-duoc-ca-lon-van-ngheo')}
                className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">Kỳ 1 · Phần 1</span>
                <span className="text-sm font-semibold group-hover:text-cyan-300">Bắt được cá lớn, vẫn nghèo!</span>
              </button>

              <button
                onClick={() => scrollToId('hau-phuong-chua-theo-kip')}
                className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">Hạ tầng & Dịch vụ</span>
                <span className="text-sm font-semibold group-hover:text-cyan-300">“Hậu phương” chưa theo kịp</span>
              </button>

              <button
                onClick={() => scrollToId('quy-hoach-qua-cham')}
                className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">Nuôi biển & Mặt nước</span>
                <span className="text-sm font-semibold group-hover:text-cyan-300">Quy hoạch quá chậm</span>
              </button>

              <button
                onClick={() => scrollToId('lang-chai-500-nam')}
                className="w-full text-left p-3 rounded-lg bg-sky-950/20 border border-sky-500/20 hover:bg-sky-900/30 transition-colors group cursor-pointer"
              >
                <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider block">Tiêu điểm thực tế</span>
                <span className="text-sm font-semibold text-sky-200 group-hover:text-white">Làng chài 500 năm tuổi “thở dài”…</span>
              </button>

              <button
                onClick={() => scrollToId('doi-tu-duy-quan-tri')}
                className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">Tầm nhìn chiến lược</span>
                <span className="text-sm font-semibold group-hover:text-cyan-300">Đổi tư duy quản trị để làm giàu từ biển</span>
              </button>

              <div className="pl-4 space-y-1.5 border-l-2 border-white/10 ml-2">
                <button
                  onClick={() => scrollToId('kho-khan-ve-cang')}
                  className="w-full text-left py-1 text-xs text-slate-400 hover:text-cyan-300 transition-colors block cursor-pointer"
                >
                  · Khó khăn về cảng, đánh bắt, nuôi trồng…
                </button>
                <button
                  onClick={() => scrollToId('thach-thuc-du-lich')}
                  className="w-full text-left py-1 text-xs text-slate-400 hover:text-cyan-300 transition-colors block cursor-pointer"
                >
                  · Thách thức với du lịch biển
                </button>
                <button
                  onClick={() => scrollToId('nhieu-han-che-khac')}
                  className="w-full text-left py-1 text-xs text-slate-400 hover:text-cyan-300 transition-colors block cursor-pointer"
                >
                  · Nhiều hạn chế khác
                </button>
              </div>

              <button
                onClick={() => scrollToId('go-kho-2-nghi-quyet')}
                className="w-full text-left p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 hover:bg-emerald-900/30 transition-colors group cursor-pointer"
              >
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">Giải pháp đột phá</span>
                <span className="text-sm font-semibold text-emerald-200 group-hover:text-white">Gỡ khó nhìn từ 2 nghị quyết quan trọng</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reader Settings Modal / Popup */}
      {showSettings && (
        <div 
          className="fixed top-16 right-4 sm:right-6 z-50 w-80 p-4 rounded-xl shadow-2xl border backdrop-blur-lg animate-scale-up"
          style={{
            backgroundColor: theme === 'ocean' ? 'rgba(9, 21, 36, 0.95)' : theme === 'paper' ? 'rgba(250, 248, 245, 0.98)' : 'rgba(244, 237, 225, 0.98)',
            borderColor: theme === 'ocean' ? 'rgba(51, 65, 85, 0.8)' : 'rgba(226, 232, 240, 0.9)',
            color: theme === 'ocean' ? '#f8fafc' : '#1e293b'
          }}
        >
          <div className="flex items-center justify-between pb-3 border-b border-current/10 mb-4">
            <span className="font-semibold text-xs uppercase tracking-wider">Cấu hình đọc bài</span>
            <button 
              onClick={() => setShowSettings(false)}
              className="text-xs opacity-60 hover:opacity-100 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Theme selector */}
          <div className="mb-4">
            <label className="text-[11px] font-semibold uppercase tracking-wider opacity-70 block mb-2">
              Chế độ màu
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTheme('ocean')}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  theme === 'ocean' 
                    ? 'bg-slate-800 text-cyan-300 ring-2 ring-cyan-500' 
                    : 'bg-slate-900/40 hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Đại dương</span>
              </button>

              <button
                onClick={() => setTheme('paper')}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  theme === 'paper' 
                    ? 'bg-amber-50 text-stone-900 ring-2 ring-stone-500' 
                    : 'bg-stone-200/50 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>Báo giấy</span>
              </button>

              <button
                onClick={() => setTheme('sepia')}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  theme === 'sepia' 
                    ? 'bg-[#ebdcc4] text-[#342b22] ring-2 ring-amber-700' 
                    : 'bg-[#ebdcc4]/50 hover:bg-[#ebdcc4] text-[#4a3f33]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Cổ điển</span>
              </button>
            </div>
          </div>

          {/* Font Type */}
          <div className="mb-4">
            <label className="text-[11px] font-semibold uppercase tracking-wider opacity-70 block mb-2">
              Kiểu chữ nội dung
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setFontType('serif')}
                className={`py-2 px-3 rounded-lg text-xs font-editorial-serif transition-all cursor-pointer ${
                  fontType === 'serif' 
                    ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400' 
                    : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                Serif (Báo chí)
              </button>
              <button
                onClick={() => setFontType('sans')}
                className={`py-2 px-3 rounded-lg text-xs font-editorial-sans transition-all cursor-pointer ${
                  fontType === 'sans' 
                    ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400' 
                    : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                Sans (Hiện đại)
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider opacity-70 block mb-2">
              Cỡ chữ
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setFontSize('sm')}
                className={`py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  fontSize === 'sm' ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400' : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                Nhỏ (16px)
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  fontSize === 'md' ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400' : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                Chuẩn (18px)
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  fontSize === 'lg' ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400' : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                Lớn (21px)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
