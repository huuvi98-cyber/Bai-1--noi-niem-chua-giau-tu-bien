import React, { useRef, useEffect, useState } from 'react';

/**
 * Animated Section Heading for Sections 1, 2, 3
 * Features:
 * - Thin vertical red line expands vertically ("động")
 * - Text slides out gracefully from behind the line ("chạy ra")
 * - Triggered via IntersectionObserver when scrolled into view
 */
interface SectionHeadingProps {
  heading: string;
  className?: string;
}

export const AnimatedSectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  className = "text-2xl sm:text-3xl lg:text-4xl font-black font-editorial-sans mb-8 tracking-tight text-white",
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check initial position in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setIsInView(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={`${className} flex items-center gap-3.5 pt-1.5 pb-1 group`}
    >
      {/* 1. Thin vertical red line - scales down / expands */}
      <span
        className={`w-[3px] self-stretch min-h-[1.15em] bg-red-600 inline-block shrink-0 rounded-none transition-all duration-700 ease-out origin-top group-hover:bg-red-500 group-hover:shadow-[0_0_8px_rgba(239,68,68,0.7)] ${
          isInView ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      />

      {/* 2. Text heading - slides out ("chạy ra") */}
      <span
        className={`inline-block tracking-normal leading-snug py-0.5 transition-all duration-700 delay-150 ease-out group-hover:translate-x-1 ${
          isInView
            ? 'translate-x-0 opacity-100'
            : '-translate-x-10 sm:-translate-x-14 opacity-0'
        }`}
      >
        {heading}
      </span>
    </h2>
  );
};

/**
 * Animated Section 4 Monumental Heading
 * - Thin vertical red line
 * - Two-line title slides out staggered ("động, chạy ra")
 * - Diacritics ("dấu") clearly visible with generous line-height and no clipping
 */
interface Section4HeadingProps {
  line1?: string;
  line2?: string;
}

export const AnimatedSection4Heading: React.FC<Section4HeadingProps> = ({
  line1 = "Đổi tư duy quản trị",
  line2 = "để làm giàu từ biển",
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setIsInView(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={`text-3xl sm:text-4xl lg:text-5xl font-black font-editorial-sans mb-8 pl-4 sm:pl-5 border-l-[4px] leading-[1.3] uppercase pt-2 pb-1.5 group transition-all duration-700 ease-out ${
        isInView ? 'border-red-600' : 'border-transparent'
      }`}
    >
      <span
        className={`block text-cyan-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide uppercase pt-1 pb-0.5 transition-all duration-700 delay-100 ease-out group-hover:translate-x-1 ${
          isInView
            ? 'translate-x-0 opacity-100'
            : '-translate-x-12 sm:-translate-x-16 opacity-0'
        }`}
      >
        {line1}
      </span>
      <span
        className={`block text-white mt-1.5 sm:mt-2.5 uppercase tracking-wide pb-1 transition-all duration-700 delay-250 ease-out group-hover:translate-x-1.5 ${
          isInView
            ? 'translate-x-0 opacity-100'
            : '-translate-x-12 sm:-translate-x-16 opacity-0'
        }`}
      >
        {line2}
      </span>
    </h2>
  );
};
