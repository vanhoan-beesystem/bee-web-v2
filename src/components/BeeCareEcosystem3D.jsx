import React, { useState, useRef } from 'react';
import {
  Laptop,
  Smartphone,
  HeartHandshake,
  CheckCircle2,
  Radio,
  Activity,
  Layers,
  Sparkles,
  Zap,
  Cloud,
  Check,
  ShieldAlert,
  ArrowRight,
  Upload,
  RotateCcw,
  Camera,
  Heart,
  Building2,
  Users,
  Calendar,
  CreditCard,
  UserCheck,
} from 'lucide-react';

export default function BeeCareEcosystem3D({
  adminScreenshot = null,
  mobileScreenshot = null,
}) {
  const [screens, setScreens] = useState({
    admin: adminScreenshot,
    mobile: mobileScreenshot,
  });

  // Tab chuyển đổi nội dung hiển thị trên điện thoại: 'staff' (Điều Dưỡng) hoặc 'family' (Người Thân)
  const [phoneMode, setPhoneMode] = useState('staff');
  const [showUploader, setShowUploader] = useState(false);

  const adminInputRef = useRef(null);
  const mobileInputRef = useRef(null);

  // Xử lý nạp ảnh từ máy tính
  const handleUpload = (type, e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setScreens((prev) => ({
          ...prev,
          [type]: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setScreens({ admin: null, mobile: null });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Hidden File Inputs */}
      <input
        type="file"
        ref={adminInputRef}
        accept="image/*"
        className="hidden"
        onChange={(e) => handleUpload('admin', e)}
      />
      <input
        type="file"
        ref={mobileInputRef}
        accept="image/*"
        className="hidden"
        onChange={(e) => handleUpload('mobile', e)}
      />

      {/* Toolbar Chèn Ảnh Thực Tế */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowUploader(!showUploader)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-primary/30 text-primary font-bold text-xs hover:bg-primary-light/50 transition-all shadow-xs cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-accent" />
            <span>{showUploader ? 'Đóng Công Cụ Chèn Ảnh' : 'Chèn Ảnh Màn Hình Thật Của Bạn'}</span>
          </button>

          {(screens.admin || screens.mobile) && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 text-gray-600 hover:text-red-600 text-xs font-semibold transition-all cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Khôi phục mẫu</span>
            </button>
          )}
        </div>

        {/* Switcher chế độ trên Điện Thoại: Staff vs Family */}
        <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300 shadow-inner">
          <button
            onClick={() => setPhoneMode('staff')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              phoneMode === 'staff'
                ? 'bg-white text-secondary shadow-xs'
                : 'text-gray-600 hover:text-navy-900'
            }`}
          >
            📱 App Điều Dưỡng
          </button>
          <button
            onClick={() => setPhoneMode('family')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              phoneMode === 'family'
                ? 'bg-white text-accent shadow-xs'
                : 'text-gray-600 hover:text-navy-900'
            }`}
          >
            💖 App Người Thân
          </button>
        </div>
      </div>

      {/* Thanh công cụ Tải ảnh khi mở */}
      {showUploader && (
        <div className="mb-6 p-4 rounded-2xl bg-white border border-blue-200 shadow-md max-w-xl mx-auto flex flex-wrap items-center justify-center gap-3 animate-in fade-in zoom-in-95">
          <button
            onClick={() => adminInputRef.current?.click()}
            className="px-3.5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-primary text-xs font-bold border border-blue-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Laptop className="w-4 h-4" />
            <span>{screens.admin ? '✓ Đã Có Ảnh Web Admin' : '+ Tải Ảnh Web Admin'}</span>
          </button>

          <button
            onClick={() => mobileInputRef.current?.click()}
            className="px-3.5 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-secondary text-xs font-bold border border-sky-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>{screens.mobile ? '✓ Đã Có Ảnh App Mobile' : '+ Tải Ảnh App Mobile'}</span>
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SÂN KHẤU 3D ISOMETRIC CHUẨN 100% BỨC ẢNH MẪU CỦA BẠN                      */}
      {/* ========================================================================= */}
      <div className="relative rounded-[36px] sm:rounded-[48px] p-4 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-b from-white/95 via-white/80 to-blue-50/40 backdrop-blur-2xl border border-white/90 shadow-[0_35px_90px_-20px_rgba(15,23,42,0.18),0_0_0_1px_rgba(255,255,255,0.9)] overflow-hidden">
        
        {/* Đường Mạch Điện Cyan Phát Sáng Nối Giữa Laptop và Phone Trên Bệ Kính */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="podiumCircuitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
            </linearGradient>
            <filter id="circuitBloom" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Đường mạch uốn quanh bệ kính */}
          <path
            d="M 520 420 L 720 420 L 760 360 L 850 360"
            fill="none"
            stroke="url(#podiumCircuitGlow)"
            strokeWidth="3"
            strokeDasharray="8 8"
            className="animate-ecg-path"
            filter="url(#circuitBloom)"
          />
          <path
            d="M 500 450 L 700 450 L 780 390 L 880 390"
            fill="none"
            stroke="url(#podiumCircuitGlow)"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-ecg-path"
          />

          <circle cx="720" cy="420" r="4.5" fill="#06B6D4" className="animate-ping" />
          <circle cx="850" cy="360" r="4.5" fill="#10B981" className="animate-ping" />
        </svg>

        {/* Khung Bệ Kính Thủy Tinh Vát Cạnh 3D Dày (Extruded Glass Slab) */}
        <div className="absolute right-6 sm:right-12 bottom-6 sm:bottom-10 w-[45%] h-[55%] rounded-3xl bg-gradient-to-tr from-white/40 via-cyan-100/30 to-white/70 backdrop-blur-xl border-t-2 border-l-2 border-white shadow-[0_25px_50px_-10px_rgba(6,182,212,0.25),inset_0_2px_4px_rgba(255,255,255,0.8)] pointer-events-none hidden md:block">
          {/* Cạnh vát dày 15mm của bệ kính */}
          <div className="absolute inset-x-2 -bottom-3 h-3 bg-gradient-to-b from-cyan-300/40 via-slate-400/20 to-transparent rounded-b-2xl blur-xs" />
        </div>

        {/* BỐ CỤC: CỘT HUY HIỆU BÊN TRÁI + MACBOOK 3D ISOMETRIC + IPHONE 3D ISOMETRIC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-20">
          
          {/* 1. CỘT HUY HIỆU LƠ LỬNG BÊN TRÁI (NHƯ ẢNH MẪU) - 2 CỘT */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center space-y-4">
            {/* Cloud Server Badge */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white transform hover:scale-105 transition-transform">
              <Cloud className="w-8 h-8 text-white" />
            </div>

            {/* Apple / iOS Badge */}
            <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center justify-center text-slate-800 transform hover:scale-105 transition-transform">
              <span className="text-xl">🍎</span>
            </div>

            {/* Android Badge */}
            <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center justify-center text-emerald-600 transform hover:scale-105 transition-transform">
              <span className="text-xl">🤖</span>
            </div>

            {/* Windows Badge */}
            <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center justify-center text-sky-600 transform hover:scale-105 transition-transform">
              <span className="text-xl">🪟</span>
            </div>
          </div>

          {/* 2. LAPTOP MACBOOK PRO 3D ISOMETRIC (NGHIÊNG ~35°) - 6 CỘT */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Tag Tiêu Đề */}
            <div className="mb-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-md">
              <Laptop className="w-3.5 h-3.5 text-accent" />
              <span>Web Quản Lý Viện (Web Admin)</span>
              {screens.admin && <span className="text-[10px] text-emerald-400 font-bold">• Ảnh thật</span>}
            </div>

            {/* KHỐI 3D LAPTOP GÓC NGHIÊNG ISOMETRIC */}
            <div 
              className="w-full max-w-[560px] transition-all duration-500 ease-out transform hover:-translate-y-1.5"
              style={{
                perspective: '1400px',
              }}
            >
              <div 
                className="transform"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(22deg) rotateX(10deg) rotateZ(-3deg)',
                }}
              >
                {/* Màn Hình Mở Góc Nghiêng (MacBook Lid) */}
                <div className="relative bg-[#1A1C20] rounded-t-[20px] p-2 sm:p-2.5 pb-0 border-t border-x border-[#383A42] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.45)]">
                  
                  {/* Camera FaceTime & Đèn xanh */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-b-md z-30 flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111] border border-slate-700 relative">
                      <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping" />
                    </span>
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  </div>

                  {/* VÙNG MÀN HÌNH RETINA (CHÈN ẢNH THẬT HOẶC HIỂN THỊ UI BEECARE) */}
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-[#0C1E37] border border-black aspect-[16/10] shadow-inner">
                    {/* Vệt Kính Phản Quang Góc Chéo 3D */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.06] pointer-events-none z-20" />

                    {screens.admin ? (
                      /* ẢNH CHỤP MÀN HÌNH THẬT CỦA BẠN */
                      <img 
                        src={screens.admin} 
                        alt="Ảnh chụp màn hình Web Quản Trị BeeCare" 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      /* GIAO DIỆN WEB ADMIN CHUẨN ĐỒ HOẠ NHƯ ẢNH MẪU */
                      <div className="w-full h-full flex flex-col text-slate-200 font-sans text-xs select-none">
                        
                        {/* Topbar */}
                        <div className="h-8 bg-[#081528] px-3 flex items-center justify-between border-b border-white/10 z-10">
                          <div className="flex items-center gap-2 font-bold text-white tracking-tight">
                            <div className="w-4 h-4 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-[9px] font-black">
                              B
                            </div>
                            <span className="text-[11px] font-extrabold">BeeCare Admin</span>
                            <span className="text-white/20">|</span>
                            <span className="text-[9.5px] text-slate-300 font-normal hidden sm:inline">Tổng quan viện</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[8.5px] font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              SignalR: Live 18ms
                            </span>
                          </div>
                        </div>

                        {/* Body Dashboard */}
                        <div className="flex-1 flex overflow-hidden">
                          {/* Sidebar Trái */}
                          <div className="w-24 sm:w-28 bg-[#0A182F] p-1.5 border-r border-white/5 space-y-1 hidden sm:block">
                            <div className="px-1.5 py-1 rounded bg-primary text-white font-semibold text-[9px] flex items-center gap-1">
                              <Activity className="w-3 h-3 text-cyan-300" />
                              <span>Dashboard</span>
                            </div>
                            <div className="px-1.5 py-1 rounded text-slate-400 text-[9px] flex items-center gap-1">
                              <Building2 className="w-3 h-3" />
                              <span>Sơ Đồ Phòng</span>
                            </div>
                            <div className="px-1.5 py-1 rounded text-slate-400 text-[9px] flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>Bệnh Án</span>
                            </div>
                            <div className="px-1.5 py-1 rounded text-slate-400 text-[9px] flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>Phân Ca</span>
                            </div>
                          </div>

                          {/* Nội dung Dashboard với các biểu đồ như ảnh mẫu */}
                          <div className="flex-1 p-2 sm:p-2.5 bg-[#0C1E37] space-y-2 overflow-hidden text-left">
                            {/* 3 Thẻ chỉ số kèm mini chart */}
                            <div className="grid grid-cols-3 gap-1.5">
                              <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                                <div className="text-[7.5px] text-slate-400 uppercase">Tỷ Lệ Giường</div>
                                <div className="text-xs font-bold text-white mt-0.5">138 / 150</div>
                                <div className="text-[7.5px] text-emerald-400">92% Lấp đầy</div>
                              </div>
                              <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                                <div className="text-[7.5px] text-slate-400 uppercase">Điều Dưỡng Trực</div>
                                <div className="text-xs font-bold text-sky-400 mt-0.5">26 / 26 NV</div>
                                <div className="text-[7.5px] text-slate-400">Đã FaceID</div>
                              </div>
                              <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                                <div className="text-[7.5px] text-slate-400 uppercase">Cảnh Báo Y Tế</div>
                                <div className="text-xs font-bold text-emerald-400 mt-0.5">0 Nguy Cấp</div>
                                <div className="text-[7.5px] text-emerald-400">Toàn viện ổn</div>
                              </div>
                            </div>

                            {/* Bảng sơ đồ phòng Khu A */}
                            <div className="bg-white/5 p-1.5 rounded-lg border border-white/10">
                              <div className="flex justify-between items-center text-[8.5px] font-bold text-white mb-1">
                                <span className="flex items-center gap-1">
                                  <Activity className="w-2.5 h-2.5 text-cyan-400" />
                                  Khu A Tầng 2 - Giám Sát Realtime
                                </span>
                                <span className="text-[7.5px] text-slate-400 font-mono">16/16 Giường</span>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
                                {[
                                  { room: 'P.201-G1', name: 'Cụ Lê Văn T.', bp: '120/80', st: 'Ổn định' },
                                  { room: 'P.201-G2', name: 'Cụ Trần Thị M.', bp: '118/75', st: 'Ổn định' },
                                  { room: 'P.202-G1', name: 'Cụ Nguyễn Văn H.', bp: '130/85', st: 'Uống thuốc' },
                                  { room: 'P.202-G2', name: 'Cụ Vũ Thị K.', bp: '125/80', st: 'Khám BS' },
                                ].map((b, i) => (
                                  <div key={i} className="p-1 rounded bg-[#0F2442] border border-white/5 text-[8px]">
                                    <div className="text-slate-400 font-mono text-[7px]">{b.room}</div>
                                    <div className="font-bold text-white truncate">{b.name}</div>
                                    <div className="text-emerald-400 font-semibold text-[7px]">{b.st}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                </div>

                {/* THÂN MÁY BÀN PHÍM VÁT NGHIÊNG 3D THẤY RÕ TỪNG PHÍM VÀ CỔNG KẾT NỐI */}
                <div className="relative">
                  {/* Bản lề */}
                  <div className="h-1.5 w-[22%] mx-auto bg-[#161719] border-x border-b border-[#2C2D32]" />
                  
                  {/* Mặt Bàn Phím Kim Loại Vát Nghiêng 3D */}
                  <div className="relative bg-gradient-to-b from-[#33353A] via-[#2A2B2F] to-[#1C1D20] rounded-b-xl border-t border-white/30 p-2 sm:p-2.5 shadow-[0_25px_50px_-5px_rgba(15,23,42,0.35)]">
                    {/* Bàn Phím Chiclet Backlit */}
                    <div className="w-[88%] mx-auto bg-[#1A1B1E] rounded-md p-1 border border-[#3A3B40] shadow-inner">
                      <div className="grid grid-cols-12 gap-0.5 mb-0.5">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="h-1 bg-[#28292E] rounded-xs opacity-75" />
                        ))}
                      </div>
                      <div className="grid grid-cols-10 gap-0.5 mb-0.5">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div key={i} className="h-1.5 bg-[#28292E] rounded-xs opacity-80" />
                        ))}
                      </div>
                      <div className="flex justify-center mt-0.5">
                        <div className="w-16 h-1.5 bg-[#28292E] rounded-xs opacity-80" />
                      </div>
                    </div>
                    {/* Trackpad */}
                    <div className="w-20 h-5 mx-auto mt-1 rounded-sm border border-[#44464D] bg-[#222327]/60 shadow-xs" />
                  </div>

                  {/* Đổ bóng tiếp xúc mặt bàn */}
                  <div className="w-[88%] mx-auto h-3 bg-gradient-to-b from-navy-950/20 to-transparent blur-md rounded-full mt-0.5" />
                </div>

              </div>
            </div>
          </div>

          {/* 3. ĐIỆN THOẠI IPHONE 3D NGHIÊNG BẮT SÁNG TITANIUM (NHƯ ẢNH MẪU) - 4 CỘT */}
          <div className="lg:col-span-4 flex flex-col items-center">
            
            {/* Tag Tiêu Đề */}
            <div className="mb-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-md">
              <Smartphone className="w-3.5 h-3.5 text-secondary" />
              <span>{phoneMode === 'staff' ? 'App Điều Dưỡng (Staff)' : 'App Người Thân (Family)'}</span>
              {screens.mobile && <span className="text-[10px] text-emerald-400 font-bold">• Ảnh thật</span>}
            </div>

            {/* KHỐI 3D IPHONE NGHIÊNG ĐỨNG TRÊN BỆ KÍNH */}
            <div 
              className="w-full max-w-[250px] transition-all duration-500 ease-out transform hover:-translate-y-2"
              style={{ perspective: '1100px' }}
            >
              <div 
                className="transform"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(-18deg) rotateX(10deg) rotateZ(2deg)',
                }}
              >
                {/* Phím bấm vật lý cạnh máy */}
                <div className="absolute -left-[2.5px] top-16 w-[2.5px] h-6 bg-slate-500 rounded-l-xs shadow-xs" />
                <div className="absolute -left-[2.5px] top-26 w-[2.5px] h-9 bg-slate-500 rounded-l-xs shadow-xs" />
                <div className="absolute -right-[2.5px] top-22 w-[2.5px] h-12 bg-slate-500 rounded-r-xs shadow-xs" />

                {/* Vỏ Titanium bắt sáng kim loại bóng bẩy dọc cạnh sườn */}
                <div className="relative p-2.5 bg-gradient-to-b from-[#4A4C55] via-[#24252A] to-[#141517] rounded-[44px] shadow-[0_30px_60px_-10px_rgba(15,23,42,0.45),-2px_0_4px_rgba(255,255,255,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)] border border-[#5A5C68]">
                  
                  {/* Màn Hình OLED Viền Siêu Mỏng */}
                  <div className="relative rounded-[36px] overflow-hidden bg-[#0A101D] aspect-[9/19] border border-black shadow-inner flex flex-col justify-between select-none">
                    
                    {/* Vệt Kính Phản Chiếu Ánh Sáng Cường Lực */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.09] pointer-events-none z-20" />

                    {/* Dynamic Island Apple & Status Bar */}
                    <div className="relative z-30 pt-2 px-4 pb-1 flex items-center justify-between text-white text-[10px] font-bold">
                      <span>08:30</span>
                      <div className="w-16 h-4 bg-black rounded-full flex items-center justify-between px-1.5 border border-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700" />
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[9px] font-extrabold text-slate-300">5G</span>
                    </div>

                    {screens.mobile ? (
                      /* ẢNH CHỤP MÀN HÌNH THẬT CỦA BẠN TRÊN ĐIỆN THOẠI */
                      <img 
                        src={screens.mobile} 
                        alt="Ảnh chụp màn hình App Mobile BeeCare" 
                        className="w-full h-full object-cover" 
                      />
                    ) : phoneMode === 'staff' ? (
                      /* GIAO DIỆN APP ĐIỀU DƯỠNG (STAFF) */
                      <div className="p-3 text-left space-y-2.5 flex-1 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-[8px] text-slate-400">Ca sáng: Đang trực</div>
                              <div className="text-[11px] font-bold text-white">ĐD. Nguyễn Mai Lan</div>
                            </div>
                            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                              Khu A
                            </span>
                          </div>

                          <div className="p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-1.5 text-[9px] text-emerald-300">
                            <UserCheck className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span>Đã Face ID 06:55 AM</span>
                          </div>
                        </div>

                        {/* Nút Báo Động SOS */}
                        <div className="p-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <ShieldAlert className="w-4 h-4 text-white animate-pulse" />
                            <div>
                              <div className="text-[10px] font-extrabold uppercase">Báo Động SOS</div>
                              <div className="text-[7.5px] text-red-100">Định vị giường tức thì</div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-white text-red-600 font-black text-[9px]">
                            1 CHẠM
                          </span>
                        </div>

                        {/* Đo sinh hiệu tại giường */}
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                          <div className="flex justify-between items-center text-[9px]">
                            <span className="font-bold text-sky-400">P.204 - Giường 01</span>
                            <span className="text-slate-400 font-mono text-[8px]">08:15 AM</span>
                          </div>
                          <div className="text-[10px] font-bold text-white">Cụ Hoàng Văn K. (80t)</div>
                          <div className="grid grid-cols-2 gap-1 text-[8px]">
                            <div className="p-1 rounded bg-black/40 border border-white/5">
                              <span className="text-slate-400 block">Huyết áp:</span>
                              <strong className="text-emerald-400 text-[10px] font-mono">120/80</strong>
                            </div>
                            <div className="p-1 rounded bg-black/40 border border-white/5">
                              <span className="text-slate-400 block">Khẩu phần:</span>
                              <strong className="text-white text-[9px]">Hết 100%</strong>
                            </div>
                          </div>
                        </div>

                        <div className="pt-1 border-t border-white/10 flex justify-around text-[8px] text-slate-400">
                          <span className="text-sky-400 font-bold">Lịch trực</span>
                          <span>Đầu giường</span>
                          <span>Bệnh án</span>
                        </div>
                      </div>
                    ) : (
                      /* GIAO DIỆN APP NGƯỜI THÂN (FAMILY) */
                      <div className="p-3 text-left space-y-2.5 flex-1 flex flex-col justify-between text-navy-900 font-sans bg-[#F8FAFD]">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-[8px] text-gray-500">Đang theo dõi mẹ</div>
                            <div className="text-[11px] font-bold text-navy-900">Cụ Bà: Lê Thị Lan (78t)</div>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold text-[9px]">
                            LTL
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-sm space-y-1">
                          <div className="text-[7.5px] text-blue-100 uppercase tracking-wider font-semibold">
                            Sức Khỏe Hôm Nay • 29/09
                          </div>
                          <div className="text-[11px] font-bold flex items-center gap-1">
                            Trạng thái: Rất Tốt ✨
                          </div>
                          <div className="grid grid-cols-2 gap-1 pt-1 border-t border-white/20 text-[8px]">
                            <div>Nhịp tim: <strong>74 bpm</strong></div>
                            <div>Huyết áp: <strong>118/76</strong></div>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-gray-200/80 shadow-xs space-y-1.5">
                          <div className="flex justify-between items-center text-[9px] font-bold text-navy-900">
                            <span>Khoảnh khắc hôm nay</span>
                            <span className="text-[7.5px] text-primary">Xem tất cả</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1 text-center">
                            <div className="p-1 rounded-lg bg-sky-50 border border-sky-100">
                              <div className="text-xs">☕</div>
                              <div className="text-[8px] font-bold text-navy-900">Dưỡng Sinh</div>
                            </div>
                            <div className="p-1 rounded-lg bg-amber-50 border border-amber-100">
                              <div className="text-xs">🎨</div>
                              <div className="text-[8px] font-bold text-navy-900">Vẽ Tranh</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-[8px] text-emerald-900">
                          <div className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>Viện phí T09: <strong>Đã nộp</strong></span>
                          </div>
                          <span className="text-[7.5px] text-emerald-600 font-bold">QR</span>
                        </div>
                      </div>
                    )}

                    {/* Thanh Home bar */}
                    <div className="relative z-30 pb-1.5 pt-0.5 flex justify-center bg-black/10">
                      <div className="w-20 h-1 bg-slate-500/50 rounded-full" />
                    </div>

                  </div>
                </div>

                {/* Đổ bóng tiếp xúc mặt kính */}
                <div className="w-[80%] mx-auto h-3 bg-gradient-to-b from-navy-950/25 to-transparent blur-md rounded-full mt-1" />

              </div>
            </div>

          </div>

        </div>

        {/* Dòng Chú Thích Dữ Liệu Dưới Cùng Của Bệ Kính */}
        <div className="mt-8 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-navy-900">Cơ chế đồng bộ thời gian thực:</span>
            <span>Đồng bộ hai chiều tức thời giữa Web Quản Trị và Mobile App</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Web Admin (Quản Trị)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span>App Staff (Tại Giường)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>App Family (Gia Đình)</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
