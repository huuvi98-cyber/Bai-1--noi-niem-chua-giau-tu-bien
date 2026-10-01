/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { articleContent } from './data/articleData';
import { HeroSection } from './components/HeroSection';
import { FullScreenEditorialPhoto } from './components/FullScreenEditorialPhoto';

// 6 Real High-Res Journalistic Photographs by Reporter Ngọc Oai
import nguDanMinhImg from './assets/images/regenerated_image_1790847187524.jpg';
import tauCaXaBoImg from './assets/images/regenerated_image_1790845731681.jpg';
import khoangTauDaImg from './assets/images/regenerated_image_1790846987152.jpg';
import damCuMongImg from './assets/images/regenerated_image_1790846990098.jpg';
import cuaBienDeGiImg from './assets/images/regenerated_image_1790845600529.jpg';
import vinhXuanDaiImg from './assets/images/regenerated_image_1790847833273.jpg';

import { ArrowUp } from 'lucide-react';

export default function App() {
  const articleRef = useRef<HTMLDivElement>(null);
  
  // Hydrate photo overrides from localStorage
  const [photoOverrides, setPhotoOverrides] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('editorial_photo_overrides');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handlePhotoChange = (id: string, newUrl: string) => {
    setPhotoOverrides((prev) => {
      const updated = { ...prev, [id]: newUrl };
      try {
        localStorage.setItem('editorial_photo_overrides', JSON.stringify(updated));
      } catch (err) {
        console.warn('LocalStorage write failed:', err);
      }
      return updated;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Support silent drag-and-drop of images anywhere on the window
  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      if (!e.dataTransfer?.files) return;

      Array.from(e.dataTransfer.files).forEach((file) => {
        const reader = new FileReader();
        const name = file.name.toLowerCase();

        reader.onload = (event) => {
          const url = event.target?.result as string;
          if (!url) return;

          let targetId = '';
          if (name.includes('nguyễn văn minh') || name.includes('nguyen van minh') || name.includes('hậu cần')) {
            targetId = 'ngu-dan-minh';
          } else if (name.includes('những tàu cá') || name.includes('xa bờ') || name.includes('hoàng sa') || name.includes('bán hải sản')) {
            targetId = 'tau-ca-xa-bo';
          } else if (name.includes('khoang tàu') || name.includes('hao hụt') || name.includes('thất thu')) {
            targetId = 'khoang-tau-da';
          } else if (name.includes('cù mông') || name.includes('cu mong') || name.includes('đóng các bè')) {
            targetId = 'dam-cu-mong';
          } else if (name.includes('đề gi') || name.includes('de gi') || name.includes('bóp nghẹt') || name.includes('tự phát')) {
            targetId = 'cua-bien-de-gi';
          } else if (name.includes('xuân đài') || name.includes('xuan dai') || name.includes('vỡ quy hoạch') || name.includes('suy thoái')) {
            targetId = 'vinh-xuan-dai';
          }

          if (targetId) {
            handlePhotoChange(targetId, url);
          }
        };

        reader.readAsDataURL(file);
      });
    };

    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('drop', handleDrop);
    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#024070] via-[#023157] to-[#01223e] text-[#f0f9ff] selection:bg-cyan-500/30 selection:text-cyan-100 font-editorial-serif overflow-x-hidden">
      {/* Hero Visual Section matching the uploaded cover image */}
      <HeroSection />

      {/* Main Longform Article Reader Container - 100% Verbatim Original Text */}
      <main ref={articleRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* LTS: Lời Tòa Soạn Block - 100% Verbatim */}
        <section id="lts-section" className="p-6 sm:p-8 rounded-2xl border border-cyan-400/40 bg-[#03345d]/85 text-slate-100 backdrop-blur-sm mb-12 shadow-xl">
          <p className="text-[17px] sm:text-[19px] leading-[1.8] italic text-justify opacity-95">
            <strong className="not-italic text-cyan-300 font-bold">LTS: </strong>
            {articleContent.lts.replace(/^LTS:\s*/, '')}
          </p>
        </section>

        {/* Sapo / Article Subtitle - 100% Verbatim */}
        <div className="mb-14 sm:mb-16">
          <p className="text-xl sm:text-2xl font-editorial-sans font-medium leading-relaxed sm:leading-relaxed text-cyan-200 border-l-4 border-cyan-400 pl-5 sm:pl-6 py-1">
            {articleContent.sapo}
          </p>
        </div>

        {/* SECTION 1: Bắt được cá lớn, vẫn nghèo! */}
        <article id="bat-duoc-ca-lon-van-ngheo" className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-editorial-sans mb-8 tracking-tight text-white flex items-center gap-3">
            <span className="w-8 h-1 bg-cyan-400 rounded-full inline-block" />
            <span>{articleContent.sections[0].heading}</span>
          </h2>

          <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8]">
            {/* Paragraph 1 */}
            <p className="editorial-drop-cap text-justify">
              {articleContent.sections[0].paragraphs[0]}
            </p>

            {/* FULL SCREEN PHOTO 1: Ngư dân Nguyễn Văn Minh */}
            <FullScreenEditorialPhoto
              id="ngu-dan-minh"
              imageSrc={photoOverrides['ngu-dan-minh'] || nguDanMinhImg}
              caption="Ngư dân Nguyễn Văn Minh (45 tuổi, phường Hoài Nhơn, Gia Lai) điều khiển tàu hậu cần về cập cảng cá Tam Quan sau chuyến biển 2 tháng ở vùng biển Trường Sa."
              credit="Ảnh: NGỌC OAI"
              onPhotoChange={handlePhotoChange}
            />

            {/* Paragraph 2 */}
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[1]}
            </p>

            {/* FULL SCREEN PHOTO 2: Tàu cá xa bờ trở về */}
            <FullScreenEditorialPhoto
              id="tau-ca-xa-bo"
              imageSrc={photoOverrides['tau-ca-xa-bo'] || tauCaXaBoImg}
              caption="Những tàu cá xa bờ ở tỉnh Gia Lai đang trở về cảng bờ sau hành trình dài đánh bắt ở các ngư trường Hoàng Sa, Trường Sa trở về bờ bán hải sản."
              credit="Ảnh: NGỌC OAI"
              onPhotoChange={handlePhotoChange}
            />

            {/* Paragraph 3 */}
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[2]}
            </p>

            {/* Paragraph 4 */}
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[3]}
            </p>

            {/* FULL SCREEN PHOTO 3: Khoang tàu truyền thống hao hụt */}
            <FullScreenEditorialPhoto
              id="khoang-tau-da"
              imageSrc={photoOverrides['khoang-tau-da'] || khoangTauDaImg}
              caption="Những khoang tàu ngư dân vùng Tam Quan - Gia Lai vẫn còn truyền thống nên chất lượng hải sản hao hụt, thất thu."
              credit="Ảnh: NGỌC OAI"
              onPhotoChange={handlePhotoChange}
            />

            {/* Paragraph 5 */}
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[4]}
            </p>
          </div>
        </article>

        {/* SECTION 2: “Hậu phương” chưa theo kịp */}
        <article id="hau-phuong-chua-theo-kip" className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-editorial-sans mb-8 tracking-tight text-white flex items-center gap-3">
            <span className="w-8 h-1 bg-cyan-400 rounded-full inline-block" />
            <span>{articleContent.sections[1].heading}</span>
          </h2>

          <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8]">
            <p className="text-justify">
              {articleContent.sections[1].paragraphs[0]}
            </p>
            <p className="text-justify">
              {articleContent.sections[1].paragraphs[1]}
            </p>
          </div>
        </article>

        {/* SECTION 3: Quy hoạch quá chậm */}
        <article id="quy-hoach-qua-cham" className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-editorial-sans mb-8 tracking-tight text-white flex items-center gap-3">
            <span className="w-8 h-1 bg-cyan-400 rounded-full inline-block" />
            <span>{articleContent.sections[2].heading}</span>
          </h2>

          <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8]">
            <p className="text-justify">
              {articleContent.sections[2].paragraphs[0]}
            </p>
            <p className="text-justify">
              {articleContent.sections[2].paragraphs[1]}
            </p>

            {/* FULL SCREEN PHOTO 4: Đầm Cù Mông đóng bè nuôi cá */}
            <FullScreenEditorialPhoto
              id="dam-cu-mong"
              imageSrc={photoOverrides['dam-cu-mong'] || damCuMongImg}
              caption="Người nuôi trồng thủy hải sản ở đầm Cù Mông (tỉnh Đắk Lắk) sử dụng gỗ để đóng các bè nuôi cá với phương thức truyền thống, nhiều rủi ro."
              credit="Ảnh: NGỌC OAI"
              onPhotoChange={handlePhotoChange}
            />

            <p className="text-justify">
              {articleContent.sections[2].paragraphs[2]}
            </p>

            {/* FULL SCREEN PHOTO 5: Vùng nuôi bóp nghẹt cửa biển Đề Gi */}
            <FullScreenEditorialPhoto
              id="cua-bien-de-gi"
              imageSrc={photoOverrides['cua-bien-de-gi'] || cuaBienDeGiImg}
              caption="Nghề nuôi trồng thủy hải sản các tỉnh miền Trung vẫn còn tự phát, manh mún, chưa thể lớn mạnh, hiện đại. Trong ảnh một vùng nuôi thủy sản tự phát bóp nghẹt cửa biển Đề Gi, tỉnh Gia Lai."
              credit="Ảnh: NGỌC OAI"
              onPhotoChange={handlePhotoChange}
            />

            <p className="text-justify">
              {articleContent.sections[2].paragraphs[3]}
            </p>
          </div>
        </article>

        {/* BOX 1: (BOX) Làng chài 500 năm tuổi “thở dài”… */}
        <aside id="lang-chai-500-nam" className="my-14 p-6 sm:p-8 rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-[#04284d] to-[#021c38] text-slate-100 relative overflow-hidden shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black font-editorial-sans mb-6 text-cyan-300">
            {articleContent.sections[3].heading}
          </h3>

          <div className="space-y-5 text-[17px] sm:text-[19px] leading-[1.8]">
            <p className="text-justify leading-relaxed">
              {articleContent.sections[3].paragraphs[0]}
            </p>
            <p className="text-justify leading-relaxed">
              {articleContent.sections[3].paragraphs[1]}
            </p>
            <p className="text-justify leading-relaxed">
              {articleContent.sections[3].paragraphs[2]}
            </p>
          </div>
        </aside>

        {/* FULL SCREEN PHOTO 6: Vịnh Xuân Đài vỡ quy hoạch */}
        <FullScreenEditorialPhoto
          id="vinh-xuan-dai"
          imageSrc={photoOverrides['vinh-xuan-dai'] || vinhXuanDaiImg}
          caption="Vùng nuôi thủy sản vịnh Xuân Đài (tỉnh Đắk Lắk) đang bị vỡ quy hoạch, dần suy thoái vì ô nhiễm và tổn thất thiên tai."
          credit="Ảnh: NGỌC OAI"
          onPhotoChange={handlePhotoChange}
        />

        {/* SECTION 4: Đổi tư duy quản trị để làm giàu từ biển */}
        <article id="doi-tu-duy-quan-tri" className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-editorial-sans mb-8 tracking-tight text-white flex items-center gap-3">
            <span className="w-8 h-1 bg-cyan-400 rounded-full inline-block" />
            <span>{articleContent.sections[4].heading}</span>
          </h2>

          <div className="text-[17px] sm:text-[19px] leading-[1.8] mb-10">
            <p className="text-justify leading-relaxed">
              {articleContent.sections[4].paragraphs[0]}
            </p>
          </div>

          {/* Sub-heading 4.1: Khó khăn về cảng, đánh bắt, nuôi trồng… */}
          <div id="kho-khan-ve-cang" className="mb-10 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold font-editorial-sans mb-6 text-cyan-300">
              {articleContent.sections[5].heading}
            </h3>

            <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8]">
              {articleContent.sections[5].paragraphs.map((p, idx) => (
                <p key={idx} className="text-justify leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Sub-heading 4.2: Thách thức với du lịch biển */}
          <div id="thach-thuc-du-lich" className="mb-10 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold font-editorial-sans mb-6 text-cyan-300">
              {articleContent.sections[6].heading}
            </h3>

            <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8]">
              {articleContent.sections[6].paragraphs.map((p, idx) => (
                <p key={idx} className="text-justify leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Sub-heading 4.3: Nhiều hạn chế khác */}
          <div id="nhieu-han-che-khac" className="mb-10 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold font-editorial-sans mb-6 text-cyan-300">
              {articleContent.sections[7].heading}
            </h3>

            <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8]">
              {articleContent.sections[7].paragraphs.map((p, idx) => (
                <p key={idx} className="text-justify leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Author Attribution verbatim */}
            {articleContent.sections[7].author && (
              <div className="mt-8 pt-4 border-t border-cyan-400/20 text-right">
                <span className="font-bold text-sm sm:text-base font-editorial-sans block text-cyan-300">
                  {articleContent.sections[7].author}
                </span>
              </div>
            )}
          </div>
        </article>

        {/* BOX 2: (BOX) Gỡ khó nhìn từ 2 nghị quyết quan trọng */}
        <aside id="go-kho-2-nghi-quyet" className="my-14 p-6 sm:p-8 rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-[#032e54] to-[#011e3b] text-slate-100 relative overflow-hidden shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black font-editorial-sans mb-6 text-cyan-300">
            {articleContent.concludingBox.title}
          </h3>

          <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8]">
            {articleContent.concludingBox.paragraphs.map((p, idx) => (
              <p key={idx} className="text-justify leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </aside>

        {/* Minimal Scroll to top */}
        <div className="mt-14 pt-8 border-t border-white/10 flex justify-end">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400" />
            <span>Lên đầu trang</span>
          </button>
        </div>

      </main>
    </div>
  );
}
