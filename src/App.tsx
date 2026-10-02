/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { articleContent } from './data/articleData';
import { HeroSection } from './components/HeroSection';
import { FullScreenEditorialPhoto } from './components/FullScreenEditorialPhoto';
import { EditorialPhoto } from './components/EditorialPhoto';
import { AnimatedSectionHeading, AnimatedSection4Heading } from './components/AnimatedHeadings';

// Real High-Res Journalistic Photographs
import tauCaXaBoImg from './assets/images/regenerated_image_1790905061019.jpg';
import khoangTauDaImg from './assets/images/regenerated_image_1790846987152.jpg';
import damCuMongImg from './assets/images/regenerated_image_1790846990098.jpg';
import cuaBienDeGiImg from './assets/images/regenerated_image_1790845600529.jpg';
import vinhXuanDaiImg from './assets/images/regenerated_image_1790847833273.jpg';
import pgsVuThanhCaImg from './assets/images/regenerated_image_1790851119038.png';
import tauContainerEvergreenImg from './assets/images/regenerated_image_1790851760364.jpg';
import damPhaNuoiTrongImg from './assets/images/regenerated_image_1790852276174.jpg';
import caNguDaiDuongImg from './assets/images/regenerated_image_1790854196964.jpg';

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
          } else if (name.includes('cá ngừ') || name.includes('ca ngu') || name.includes('vươn khơi') || name.includes('mong đợi') || name.includes('đại dương')) {
            targetId = 'ca-ngu-dai-duong';
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
        <section id="lts-section" className="p-6 sm:p-8 rounded-2xl border border-cyan-400/40 bg-[#03345d]/85 text-slate-100 backdrop-blur-sm mb-12 shadow-xl space-y-4">
          {articleContent.lts.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-[17px] sm:text-[19px] leading-[1.8] italic text-justify opacity-95">
              {idx === 0 ? (
                <>
                  <strong className="not-italic text-cyan-300 font-bold">LTS: </strong>
                  {paragraph.replace(/^LTS:\s*/, '')}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </section>

        {/* Sapo / Article Subtitle - 100% Verbatim */}
        <div className="mb-14 sm:mb-16 border-l-4 border-cyan-400 pl-6 sm:pl-8 py-2 bg-gradient-to-r from-cyan-950/40 via-cyan-950/20 to-transparent rounded-r-2xl">
          <p className="text-xl sm:text-2xl md:text-[25px] font-editorial-sans font-semibold leading-[1.65] text-cyan-100 text-justify tracking-normal drop-shadow-sm">
            {articleContent.sapo}
          </p>
        </div>

        {/* SECTION 1: Bắt được cá lớn, vẫn nghèo! */}
        <article id="bat-duoc-ca-lon-van-ngheo" className="mb-14 sm:mb-20">
          <AnimatedSectionHeading heading={articleContent.sections[0].heading} />

          <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8]">
            {/* Paragraph 1 */}
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[0]}
            </p>

            {/* Paragraph 2 */}
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[1]}
            </p>

            {/* FULL SCREEN PHOTO: Tàu cá xa bờ trở về */}
            <FullScreenEditorialPhoto
              id="tau-ca-xa-bo"
              imageSrc={photoOverrides['tau-ca-xa-bo'] || tauCaXaBoImg}
              caption="Ngư dân tỉnh Đắk Lắk vươn khơi được mùa cá lớn nhưng giá trị mang về vẫn chưa cao như kỳ vọng."
              credit="Ảnh: HUỲNH HẢI"
              onPhotoChange={handlePhotoChange}
            />

            {/* Paragraph 3 (index 2) & Paragraph 4 (index 3): Sản lượng và giá cá ngừ */}
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[2]}
            </p>
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[3]}
            </p>

            {/* FULL SCREEN PHOTO: Nhiều chuyến tàu vươn khơi mang về lượng cá ngừ đại dương... */}
            <FullScreenEditorialPhoto
              id="ca-ngu-dai-duong"
              imageSrc={photoOverrides['ca-ngu-dai-duong'] || caNguDaiDuongImg}
              caption="Nhiều chuyến tàu vươn khơi mang về lượng cá ngừ đại dương khá cao, nhưng giá cá lại chưa được như mong đợi."
              credit="ẢNH: HUỲNH HẢI"
              onPhotoChange={handlePhotoChange}
            />

            {/* Paragraph 5 (index 4), Paragraph 6 (index 5), Paragraph 7 (index 6): Mùa trăng Tam Quan và Phỏng vấn doanh nghiệp */}
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[4]}
            </p>
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[5]}
            </p>
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[6]}
            </p>

            {/* FULL SCREEN PHOTO 3: Khoang tàu truyền thống hao hụt */}
            <FullScreenEditorialPhoto
              id="khoang-tau-da"
              imageSrc={photoOverrides['khoang-tau-da'] || khoangTauDaImg}
              caption="Những khoang tàu ngư dân vùng Tam Quan - Gia Lai vẫn còn truyền thống nên chất lượng hải sản hao hụt, thất thu."
              credit="Ảnh: NGỌC OAI"
              onPhotoChange={handlePhotoChange}
            />

            {/* Paragraph 8 (index 7): Trăn trở của chính quyền địa phương */}
            <p className="text-justify">
              {articleContent.sections[0].paragraphs[7]}
            </p>
          </div>
        </article>

        {/* SECTION 2: “Hậu phương” chưa theo kịp */}
        <article id="hau-phuong-chua-theo-kip" className="mb-14 sm:mb-20">
          <AnimatedSectionHeading heading={articleContent.sections[1].heading} />

          <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8]">
            {articleContent.sections[1].paragraphs.map((p, idx) => (
              <p key={idx} className="text-justify">
                {p}
              </p>
            ))}
          </div>
        </article>

        {/* SECTION 3: Quy hoạch quá chậm */}
        <article id="quy-hoach-qua-cham" className="mb-14 sm:mb-20">
          <AnimatedSectionHeading heading={articleContent.sections[2].heading} />

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
            <p className="text-justify">
              {articleContent.sections[2].paragraphs[3]}
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
              {articleContent.sections[2].paragraphs[4]}
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

        {/* SECTION 4: Tư duy quản trị mới đánh thức tiềm năng biển */}
        <article id="doi-tu-duy-quan-tri" className="mb-14 sm:mb-20">
          <AnimatedSection4Heading line1="Tư duy quản trị mới" line2="đánh thức tiềm năng biển" />

          <div className="mb-10">
            <p className="text-[19px] sm:text-[21px] leading-[1.8] italic text-justify text-slate-100">
              {articleContent.sections[4].paragraphs[0]}
            </p>
          </div>

          {/* FULL PHOTO 1: Evergreen Container Ship entering Seaport */}
          <FullScreenEditorialPhoto
            id="goc-nhin-tau-bien"
            src={photoOverrides['goc-nhin-tau-bien'] || tauContainerEvergreenImg}
            caption="Các tàu hàng siêu trường, siêu trọng cập cảng Quy Nhơn (Gia Lai) để bốc dỡ, nhập khẩu hàng hóa."
            credit="ẢNH: DŨNG NHÂN"
            onPhotoChange={handlePhotoChange}
          />

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

          {/* FULL PHOTO 2: Coastal Lagoon Aquaculture & Fishing Nets */}
          <FullScreenEditorialPhoto
            id="goc-nhin-nuoi-trong"
            src={photoOverrides['goc-nhin-nuoi-trong'] || damPhaNuoiTrongImg}
            caption="Ngư dân đi thả lưới đánh bắt cá trên phá Tam Giang - Cầu Hai."
            credit="ẢNH: VĂN THẮNG"
            onPhotoChange={handlePhotoChange}
          />

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
              <p className="text-justify leading-relaxed">
                {articleContent.sections[7].paragraphs[0]}
              </p>
              <p className="text-justify leading-relaxed">
                {articleContent.sections[7].paragraphs[1]}
              </p>

              {/* Photo of PGS-TS Vũ Thanh Ca - Fitted to the text column */}
              <EditorialPhoto
                id="pgs-vu-thanh-ca"
                src={photoOverrides['pgs-vu-thanh-ca'] || pgsVuThanhCaImg}
                caption={
                  <span className="block space-y-0.5">
                    <strong className="font-bold text-white uppercase tracking-wider block">
                      PGS-TS VŨ THANH CA
                    </strong>
                    <span className="font-normal italic text-slate-300 block">
                      Nguyên Viện trưởng Viện Nghiên cứu biển và hải đảo,
                    </span>
                    <span className="font-normal italic text-slate-300 block">
                      Tổng cục Biển và Hải đảo Việt Nam
                    </span>
                  </span>
                }
                aspectRatio="4/3"
                objectPosition="center"
                onPhotoChange={handlePhotoChange}
              />

              <p className="text-justify leading-relaxed">
                {articleContent.sections[7].paragraphs[2]}
              </p>
              <p className="text-justify leading-relaxed">
                {articleContent.sections[7].paragraphs[3]}
              </p>
            </div>

            {/* Author Attribution verbatim */}
            {articleContent.sections[7].author && (
              <div className="mt-8 pt-4 border-t border-cyan-400/20 text-right">
                <div className="text-sm sm:text-base font-editorial-sans text-right space-y-1">
                  <span className="font-bold uppercase tracking-wider block text-cyan-300">
                    PGS-TS VŨ THANH CA
                  </span>
                  <span className="font-normal italic text-slate-200 block">
                    Nguyên Viện trưởng Viện Nghiên cứu biển và hải đảo,
                  </span>
                  <span className="font-normal italic text-slate-300 block">
                    Tổng cục Biển và Hải đảo Việt Nam
                  </span>
                </div>
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

      </main>
    </div>
  );
}
