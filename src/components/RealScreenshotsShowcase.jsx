import React, { useState, useEffect } from 'react';
import {
  Laptop,
  Smartphone,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Layers,
  ArrowRight,
  Activity,
  Calendar,
  Building2,
  Users,
  ShieldCheck,
  Bot,
  Receipt,
  Camera,
  Heart,
  Zap,
} from 'lucide-react';
import {
  webAdminScreenshots,
  mobileStaffScreenshots,
  mobileFamilyScreenshots,
  dayInLifeSteps,
} from '../data/realScreenshots';

export default function RealScreenshotsShowcase() {
  // Chế độ xem: 'option1' (Showroom) | 'option2' (Storyboard) | 'option3' (Gallery)
  const [activeOption, setActiveOption] = useState('option1');

  // Trạng thái cho Phương án 1 (Showroom)
  const [showroomPlatform, setShowroomPlatform] = useState('admin'); // 'admin' | 'staff' | 'family'
  const [selectedAdminIndex, setSelectedAdminIndex] = useState(0);
  const [selectedStaffIndex, setSelectedStaffIndex] = useState(0);
  const [selectedFamilyIndex, setSelectedFamilyIndex] = useState(0);

  // Trạng thái cho Phương án 3 (Gallery)
  const [galleryFilter, setGalleryFilter] = useState('all'); // 'all' | 'admin' | 'staff' | 'family'

  // Trạng thái Lightbox phóng to ảnh
  const [lightboxImage, setLightboxImage] = useState(null);

  // Hỗ trợ phím Escape đóng Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Tổng hợp ảnh cho Phương án 3 (Gallery)
  const allGalleryItems = [
    ...webAdminScreenshots.map((item) => ({ ...item, platform: 'admin', platformLabel: 'Web Admin' })),
    ...mobileStaffScreenshots.map((item) => ({ ...item, platform: 'staff', platformLabel: 'App Điều Dưỡng' })),
    ...mobileFamilyScreenshots.map((item) => ({ ...item, platform: 'family', platformLabel: 'App Người Thân' })),
  ];

  const filteredGallery = allGalleryItems.filter((item) => {
    if (galleryFilter === 'all') return true;
    return item.platform === galleryFilter;
  });

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-white via-[#F8FAFD] to-white border-y border-gray-100 relative overflow-hidden" id="real-showcase">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

      <div className="section-container relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề mục */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="badge-pill bg-emerald-100 text-emerald-800 mb-3.5 mx-auto shadow-xs border border-emerald-300/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Giao Diện Phần Mềm Thực Tế 100%</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Khám Phá Toàn Diện Hệ Sinh Thái BeeCare
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Chiêm ngưỡng hình ảnh thực tế từ hệ thống đang vận hành tại các viện dưỡng lão. Bạn có thể chọn thử <strong>3 Phương Án Trình Bày</strong> bên dưới:
          </p>
        </div>

        {/* ========================================================================= */}
        {/* BỘ CHUYỂN ĐỔI 3 PHƯƠNG ÁN (SEGMENTED OPTION CONTROLLER)                    */}
        {/* ========================================================================= */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 backdrop-blur-md border border-slate-300/80 shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveOption('option1')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeOption === 'option1'
                  ? 'bg-white text-primary shadow-md scale-100'
                  : 'text-gray-600 hover:text-navy-900 hover:bg-white/40'
              }`}
            >
              <Layers className="w-4 h-4 text-primary" />
              <span>Phương Án 1: Showroom 3 Nền Tảng</span>
            </button>

            <button
              onClick={() => setActiveOption('option2')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeOption === 'option2'
                  ? 'bg-white text-secondary shadow-md scale-100'
                  : 'text-gray-600 hover:text-navy-900 hover:bg-white/40'
              }`}
            >
              <Clock className="w-4 h-4 text-secondary" />
              <span>Phương Án 2: Câu Chuyện 1 Ngày</span>
            </button>

            <button
              onClick={() => setActiveOption('option3')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeOption === 'option3'
                  ? 'bg-white text-accent shadow-md scale-100'
                  : 'text-gray-600 hover:text-navy-900 hover:bg-white/40'
              }`}
            >
              <Filter className="w-4 h-4 text-accent" />
              <span>Phương Án 3: Thư Viện Màn Hình</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PHƯƠNG ÁN 1: SHOWROOM TRẢI NGHIỆM 3 NỀN TẢNG (INTERACTIVE PRODUCT TOUR)    */}
        {/* ========================================================================= */}
        {activeOption === 'option1' && (
          <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-10 border border-gray-200/80 shadow-xl space-y-8 animate-in fade-in duration-300">
            
            {/* Tabs chọn nền tảng: Web Admin / Staff / Family */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setShowroomPlatform('admin')}
                className={`px-5 py-2.5 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  showroomPlatform === 'admin'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-primary-light/70 text-primary hover:bg-primary-light'
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span>Web Quản Lý Viện (26 Màn hình)</span>
              </button>

              <button
                onClick={() => setShowroomPlatform('staff')}
                className={`px-5 py-2.5 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  showroomPlatform === 'staff'
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/25 scale-105'
                    : 'bg-sky-100/70 text-secondary hover:bg-sky-100'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>App Điều Dưỡng (26 Màn hình)</span>
              </button>

              <button
                onClick={() => setShowroomPlatform('family')}
                className={`px-5 py-2.5 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  showroomPlatform === 'family'
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25 scale-105'
                    : 'bg-cyan-100/70 text-cyan-800 hover:bg-cyan-100'
                }`}
              >
                <HeartHandshake className="w-4 h-4" />
                <span>App Người Thân (15 Màn hình)</span>
              </button>
            </div>

            {/* TAB 1: WEB ADMIN SHOWROOM */}
            {showroomPlatform === 'admin' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Menu chọn tính năng bên trái */}
                <div className="lg:col-span-5 space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Chọn phân hệ quản lý để xem màn hình thực tế:
                  </div>
                  {webAdminScreenshots.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedAdminIndex(index)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left ${
                        selectedAdminIndex === index
                          ? 'bg-primary-light/60 border-primary shadow-sm ring-1 ring-primary/30 translate-x-1'
                          : 'bg-gray-50/60 border-gray-200/70 hover:bg-white hover:border-primary/30'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {item.tag}
                        </span>
                        {selectedAdminIndex === index && (
                          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        )}
                      </div>
                      <h4 className="font-extrabold text-navy-900 text-xs sm:text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Khung Mockup MacBook Pro hiển thị ảnh thực tế */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  <div className="w-full rounded-2xl bg-[#1A1C20] p-3 shadow-2xl border border-gray-700/80">
                    {/* Topbar MacBook */}
                    <div className="flex items-center justify-between pb-2 px-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-300">
                        {webAdminScreenshots[selectedAdminIndex]?.title}
                      </span>
                      <button
                        onClick={() => setLightboxImage(webAdminScreenshots[selectedAdminIndex])}
                        className="px-2 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-cyan-300 text-[10px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>Phóng to</span>
                      </button>
                    </div>

                    {/* Màn hình hiển thị ảnh thật */}
                    <div
                      className="relative rounded-xl overflow-hidden bg-white aspect-[16/10] cursor-pointer group"
                      onClick={() => setLightboxImage(webAdminScreenshots[selectedAdminIndex])}
                    >
                      <img
                        src={webAdminScreenshots[selectedAdminIndex]?.src}
                        alt={webAdminScreenshots[selectedAdminIndex]?.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2">
                        <Maximize2 className="w-5 h-5 text-white" />
                        <span>Nhấn để xem Full-HD</span>
                      </div>
                    </div>
                  </div>

                  {/* Chú thích phía dưới màn hình */}
                  <div className="mt-4 p-3 rounded-xl bg-blue-50/70 border border-blue-100 w-full text-left text-xs text-navy-800 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Đặc tả nghiệp vụ:</strong> {webAdminScreenshots[selectedAdminIndex]?.desc}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MOBILE STAFF SHOWROOM */}
            {showroomPlatform === 'staff' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Menu chọn tính năng bên trái */}
                <div className="lg:col-span-6 space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Chọn nghiệp vụ tại giường của Điều dưỡng:
                  </div>
                  {mobileStaffScreenshots.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedStaffIndex(index)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left ${
                        selectedStaffIndex === index
                          ? 'bg-sky-50 border-secondary shadow-sm ring-1 ring-secondary/30 translate-x-1'
                          : 'bg-gray-50/60 border-gray-200/70 hover:bg-white hover:border-secondary/30'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">
                          {item.tag}
                        </span>
                        {selectedStaffIndex === index && (
                          <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                        )}
                      </div>
                      <h4 className="font-extrabold text-navy-900 text-xs sm:text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Khung Mockup iPhone hiển thị ảnh thực tế */}
                <div className="lg:col-span-6 flex flex-col items-center">
                  <div className="relative w-full max-w-[290px] rounded-[48px] bg-gradient-to-b from-[#2A2B30] to-[#121316] p-3 shadow-2xl border-4 border-[#3D3F47]">
                    {/* Dynamic Island */}
                    <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#1A1A1A] mr-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>

                    {/* Màn hình điện thoại hiển thị ảnh thật */}
                    <div
                      className="relative rounded-[36px] overflow-hidden bg-white aspect-[9/19] cursor-pointer group shadow-inner"
                      onClick={() => setLightboxImage(mobileStaffScreenshots[selectedStaffIndex])}
                    >
                      <img
                        src={mobileStaffScreenshots[selectedStaffIndex]?.src}
                        alt={mobileStaffScreenshots[selectedStaffIndex]?.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                        <Maximize2 className="w-4 h-4 text-white" />
                        <span>Xem chi tiết</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-sky-50 border border-sky-100 max-w-md text-left text-xs text-navy-800 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Quy trình thao tác:</strong> {mobileStaffScreenshots[selectedStaffIndex]?.desc}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: MOBILE FAMILY SHOWROOM */}
            {showroomPlatform === 'family' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Menu chọn tính năng bên trái */}
                <div className="lg:col-span-6 space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Tính năng trên App Người Thân (Gia đình an tâm 24/7):
                  </div>
                  {mobileFamilyScreenshots.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedFamilyIndex(index)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left ${
                        selectedFamilyIndex === index
                          ? 'bg-cyan-50 border-accent shadow-sm ring-1 ring-accent/30 translate-x-1'
                          : 'bg-gray-50/60 border-gray-200/70 hover:bg-white hover:border-accent/30'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
                          {item.tag}
                        </span>
                        {selectedFamilyIndex === index && (
                          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                        )}
                      </div>
                      <h4 className="font-extrabold text-navy-900 text-xs sm:text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Khung Mockup iPhone hiển thị ảnh thực tế */}
                <div className="lg:col-span-6 flex flex-col items-center">
                  <div className="relative w-full max-w-[290px] rounded-[48px] bg-gradient-to-b from-[#2A2B30] to-[#121316] p-3 shadow-2xl border-4 border-[#3D3F47]">
                    {/* Dynamic Island */}
                    <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#1A1A1A] mr-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>

                    {/* Màn hình điện thoại hiển thị ảnh thật */}
                    <div
                      className="relative rounded-[36px] overflow-hidden bg-white aspect-[9/19] cursor-pointer group shadow-inner"
                      onClick={() => setLightboxImage(mobileFamilyScreenshots[selectedFamilyIndex])}
                    >
                      <img
                        src={mobileFamilyScreenshots[selectedFamilyIndex]?.src}
                        alt={mobileFamilyScreenshots[selectedFamilyIndex]?.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                        <Maximize2 className="w-4 h-4 text-white" />
                        <span>Xem chi tiết</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-cyan-50 border border-cyan-100 max-w-md text-left text-xs text-navy-800 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Trải nghiệm gia đình:</strong> {mobileFamilyScreenshots[selectedFamilyIndex]?.desc}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ========================================================================= */}
        {/* PHƯƠNG ÁN 2: CÂU CHUYỆN 1 NGÀY CHĂM SÓC (DAY-IN-THE-LIFE STORYBOARD)       */}
        {/* ========================================================================= */}
        {activeOption === 'option2' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="px-3.5 py-1 rounded-full bg-blue-100 text-primary font-bold text-xs uppercase tracking-wider">
                Dòng Thời Gian Vận Hành Y Khoa
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 mt-2">
                Một Ngày Số Hóa Trọn Vẹn Cùng BeeCare
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                Xem toàn bộ dữ liệu thực tế luân chuyển liên tục từ kíp trực tại giường đến gia đình và Ban Giám Đốc.
              </p>
            </div>

            <div className="space-y-6">
              {dayInLifeSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Cột thông tin bước & thời gian */}
                    <div className="lg:col-span-5 text-left space-y-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                          {item.step}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-secondary uppercase flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{item.time}</span>
                            <span>•</span>
                            <span>{item.platform}</span>
                          </div>
                          <div className="text-[11px] text-gray-500 font-medium">
                            Vai trò: <strong>{item.role}</strong>
                          </div>
                        </div>
                      </div>

                      <h4 className="text-lg sm:text-xl font-extrabold text-navy-900">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item.highlight}</span>
                      </div>
                    </div>

                    {/* Cột hiển thị 2 ảnh màn hình thật của bước đó */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Ảnh 1 */}
                      <div
                        onClick={() => setLightboxImage(item.screen1)}
                        className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-gray-200 shadow-md cursor-pointer aspect-[4/3] flex items-center justify-center"
                      >
                        <img
                          src={item.screen1.src}
                          alt={item.screen1.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-3 text-white">
                          <span className="text-xs font-bold flex items-center gap-1">
                            <span>{item.screen1.title}</span>
                            <Maximize2 className="w-3 h-3 text-cyan-300 ml-1" />
                          </span>
                        </div>
                      </div>

                      {/* Ảnh 2 */}
                      <div
                        onClick={() => setLightboxImage(item.screen2)}
                        className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-gray-200 shadow-md cursor-pointer aspect-[4/3] flex items-center justify-center"
                      >
                        <img
                          src={item.screen2.src}
                          alt={item.screen2.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-3 text-white">
                          <span className="text-xs font-bold flex items-center gap-1">
                            <span>{item.screen2.title}</span>
                            <Maximize2 className="w-3 h-3 text-cyan-300 ml-1" />
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PHƯƠNG ÁN 3: THƯ VIỆN MÀN HÌNH TOÀN DIỆN (GALLERY & LIGHTBOX)              */}
        {/* ========================================================================= */}
        {activeOption === 'option3' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Bộ lọc danh mục */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <button
                onClick={() => setGalleryFilter('all')}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  galleryFilter === 'all'
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Tất cả ({allGalleryItems.length})
              </button>

              <button
                onClick={() => setGalleryFilter('admin')}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  galleryFilter === 'admin'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                🖥️ Web Admin ({webAdminScreenshots.length})
              </button>

              <button
                onClick={() => setGalleryFilter('staff')}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  galleryFilter === 'staff'
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                📱 App Điều Dưỡng ({mobileStaffScreenshots.length})
              </button>

              <button
                onClick={() => setGalleryFilter('family')}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  galleryFilter === 'family'
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                💖 App Người Thân ({mobileFamilyScreenshots.length})
              </button>
            </div>

            {/* Lưới hiển thị các thẻ ảnh (Gallery Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImage(item)}
                  className="group rounded-2xl bg-white border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Thumbnail Ảnh */}
                  <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-navy-900 text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5 text-primary" />
                        <span>Phóng to</span>
                      </span>
                    </div>

                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-navy-900/80 text-white backdrop-blur-sm">
                      {item.platformLabel}
                    </span>
                  </div>

                  {/* Thông tin mô tả dưới ảnh */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase block mb-1">
                        {item.tag}
                      </span>
                      <h4 className="font-extrabold text-navy-900 text-xs sm:text-sm line-clamp-1 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-[11px] line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* CỬA SỔ PHÓNG TO ẢNH FULL-HD (LIGHTBOX MODAL)                              */}
      {/* ========================================================================= */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[95vh] bg-slate-900 rounded-3xl p-3 sm:p-5 shadow-2xl border border-white/20 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Lightbox */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white px-2">
              <div>
                <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider block">
                  {lightboxImage.tag || 'Màn hình thực tế'}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  {lightboxImage.title}
                </h3>
              </div>

              <button
                onClick={() => setLightboxImage(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Khung hiển thị ảnh thật sắc nét */}
            <div className="flex-1 overflow-auto py-3 flex items-center justify-center bg-black/40 rounded-xl my-2">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Footer Lightbox */}
            <div className="pt-2 text-left px-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <p className="max-w-3xl leading-relaxed">
                {lightboxImage.desc}
              </p>
              <button
                onClick={() => setLightboxImage(null)}
                className="px-4 py-1.5 rounded-xl bg-white text-navy-900 font-bold text-xs hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
