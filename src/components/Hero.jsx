import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Sparkles,
  Video,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function Hero({ onOpenVideo, onOpenTrial }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Auto-play Slider Carousel for Top Banner
  const slides = [
    {
      src: '/anh-tren-cung.png',
      alt: 'BeeCare - Hệ sinh thái công nghệ quản lý và chăm sóc toàn diện',
      badge: 'Hệ Sinh Thái Chăm Sóc Toàn Diện',
      position: 'object-top',
    },
    {
      src: '/anh-bia-1.jpg',
      alt: 'BeeCare - Không gian viện dưỡng lão và giải pháp chăm sóc y tế đồng bộ',
      badge: 'Kết Nối Đồng Bộ 3 Nền Tảng',
      position: 'object-center',
    },
    {
      src: '/anh-bia-2.png?v=2',
      alt: 'BeeCare - Hệ sinh thái quản lý viện dưỡng lão thông minh trên nền tảng Cloud',
      badge: 'Mạng Lưới Đám Mây Realtime',
      position: 'object-[center_20%]',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <>
      {/* 1. Key Visual Banner Tràn Viền 100% Full-Width Bám Sát Header */}
      <section
        id="hero"
        className="w-full relative pt-[68px] sm:pt-[72px] overflow-hidden bg-slate-900 border-b border-gray-200/80 shadow-md group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-[320px] sm:h-[440px] md:h-[540px] lg:h-[640px] xl:h-[720px] 2xl:h-[800px] overflow-hidden">
          {/* Slides List */}
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isActive
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-[1.015] pointer-events-none z-0'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={`w-full h-full object-cover ${slide.position || 'object-center'} select-none`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {/* Subtle Bottom & Top Gradient for Elegance and Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-black/10 pointer-events-none" />
              </div>
            );
          })}

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-navy-900 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-navy-900 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Dots and Slide Counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950/65 backdrop-blur-md border border-white/20 shadow-xl">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index
                    ? 'w-7 sm:w-9 bg-white'
                    : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Chuyển đến ảnh ${index + 1}`}
              />
            ))}
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white/95 ml-1 pl-1.5 border-l border-white/30">
              {currentSlide + 1}/3
            </span>
          </div>
        </div>
      </section>

      {/* 2. Video & Introduction Section - Chiều cao chuẩn đúng 1 màn hình trừ Header */}
      <section
        id="hero-video"
        className="relative min-h-0 lg:min-h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] flex items-center justify-center py-12 lg:py-0 overflow-hidden bg-[#F8FAFD]"
      >
        {/* Decorative Radial Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-secondary/5 to-transparent pointer-events-none" />

        {/* Decorative Floating Bio-Grid Elements */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10 w-full py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Single H1 Title for Technical SEO */}
              <h1 className="text-[clamp(2rem,3.8vw,3.2rem)] font-extrabold text-navy-900 leading-[1.18] tracking-tight mb-4">
                Phần Mềm Quản Lý{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Viện Dưỡng Lão
                </span>{' '}
                Thông Minh Toàn Diện
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl">
                <span className="font-semibold text-navy-900 block mb-1">
                  Đồng bộ hóa vận hành, nâng tầm chất lượng chăm sóc y tế.
                </span>
                Kết nối chặt chẽ giữa <strong>Quản lý viện</strong>, <strong>Điều dưỡng</strong> và{' '}
                <strong>Gia đình người bệnh</strong> trên một nền tảng duy nhất: Xếp ca tự động thông minh – Cập nhật sinh hiệu tại giường – Minh bạch dữ liệu mọi lúc, mọi nơi.
              </p>
            </div>

            {/* Right Column: Interactive Video Player Display */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Visual Card: Embedded Video Player in Safari Mac Frame */}
                <div className="relative rounded-xl bg-white p-2.5 sm:p-3 shadow-xl border border-gray-200 transition-all duration-500 hover:shadow-card-hover group">
                  {/* Window Topbar */}
                  <div className="flex items-center gap-3 px-3 py-1.5 border-b border-gray-100 bg-[#FBF7F3] rounded-t-lg mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-[11px] font-medium text-gray-600 flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5 text-primary" />
                      <span className="font-semibold text-navy-900">BeeCare – Video Giới Thiệu Giải Pháp</span>
                    </div>
                  </div>

                  {/* HTML5 Video Player Container (16:9 Aspect Ratio) */}
                  <div className="relative rounded-lg overflow-hidden bg-slate-950 aspect-video shadow-inner flex items-center justify-center">
                    <video
                      ref={videoRef}
                      src="/beecare-intro.mp4"
                      controls
                      playsInline
                      preload="metadata"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className="w-full h-full object-cover"
                    />

                    {/* Play Overlay Thumbnail when paused / before play */}
                    {!isPlaying && (
                      <div
                        onClick={handlePlayVideo}
                        className="absolute inset-0 bg-navy-950/45 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-navy-950/35 group/play"
                      >
                        <div className="relative flex items-center justify-center">
                          <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/25 animate-ping" />
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-primary shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover/play:scale-110">
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-primary" />
                          </div>
                        </div>
                        <div className="mt-3 px-3.5 py-1.5 rounded-md bg-white/95 text-navy-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-accent" />
                          <span>Bấm để phát video giới thiệu</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
