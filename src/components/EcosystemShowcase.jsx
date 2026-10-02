import React, { useState, useEffect } from 'react';
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
  X,
  Eye,
  Maximize2,
  Calendar,
  Building2,
  Users,
  CreditCard,
  UserCheck,
} from 'lucide-react';

export default function EcosystemShowcase() {
  const [activeHighlight, setActiveHighlight] = useState(null); // 'admin' | 'staff' | 'family' | null
  const [modalPlatform, setModalPlatform] = useState(null); // 'admin' | 'staff' | 'family' | null

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [modalZoomImage, setModalZoomImage] = useState(null);

  // Đóng modal khi bấm phím Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (modalZoomImage) setModalZoomImage(null);
        else setModalPlatform(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalZoomImage]);

  // Reset active feature index khi đổi platform
  const handleSelectPlatform = (platform) => {
    setModalPlatform(platform);
    setActiveFeatureIndex(0);
  };

  const platformDetails = {
    admin: {
      type: 'desktop',
      title: 'Website Quản Lý Viện (Web Admin)',
      subtitle: 'Nền tảng Quản trị & Điều phối Trung tâm',
      badge: 'Dành cho Ban Giám Đốc & Điều Dưỡng Trưởng',
      badgeColor: 'bg-primary-light text-primary border-primary/20',
      icon: Laptop,
      iconColor: 'text-primary bg-primary-light',
      desc: 'Trung tâm chỉ huy toàn diện: theo dõi sơ đồ giường phòng thời gian thực, quản lý bệnh án điện tử, phân ca trực thông minh và quyết toán viện phí tự động minh bạch.',
      features: [
        {
          title: 'Sơ đồ giường phòng trực quan theo thời gian thực',
          desc: 'Ma trận giường phòng theo tầng và tòa nhà: kiểm tra tình trạng giường trống, đang phục vụ, cần cách ly y tế qua SignalR.',
          image: '/screenshots/web-admin/' + encodeURIComponent('Quản lý phòng.png'),
          tag: 'Cơ Sở Vật Chất',
        },
        {
          title: 'Quản lý hoạt động sinh hoạt & sự kiện viện dưỡng lão',
          desc: 'Lên lịch và theo dõi các hoạt động văn hóa, dưỡng sinh, giao lưu; ghi nhận số lượng người cao tuổi tham gia kèm hình ảnh kỷ niệm và phê duyệt trạng thái.',
          image: '/screenshots/web-admin/' + encodeURIComponent('Quản lý hoạt động.png'),
          tag: 'Quản Lý Hoạt Động',
        },
        {
          title: 'Tự động phân ca & Quản lý khối lượng công việc',
          desc: 'Tự động xếp lịch trực điều dưỡng công bằng theo tiêu chuẩn tỷ lệ nhân sự/người cao tuổi, chống trùng ca và cân đối tải làm việc.',
          image: '/screenshots/web-admin/' + encodeURIComponent('Quản lý ca - Khối lượng công việc nhân viên.png'),
          tag: 'Phân Ca & Nhân Sự',
        },
        {
          title: 'Tổng quan Dashboard & Biểu đồ thống kê toàn diện',
          desc: 'Biểu đồ trực quan doanh thu theo tháng, cơ cấu người cao tuổi, tỷ lệ lấp đầy giường phòng và tiến độ tài chính theo thời gian thực.',
          image: '/screenshots/web-admin/' + encodeURIComponent('Tổng quan (Dashboard).png'),
          tag: 'Dashboard & Thống Kê',
        },
      ],
      highlights: [
        'Đồng bộ dữ liệu tức thời với App Điều Dưỡng',
        'Phân quyền bảo mật đa cấp chuẩn HIPAA/GDPR',
        'Xuất báo cáo tài chính & vận hành định dạng Excel/PDF',
      ],
    },
    staff: {
      type: 'mobile',
      title: 'Mobile App Điều Dưỡng (Staff)',
      subtitle: 'Trợ lý số di động tại giường cho Điều Dưỡng & Hộ Lý',
      badge: 'iOS & Android • Dành cho Điều Dưỡng & Hộ Lý Tại Giường',
      badgeColor: 'bg-sky-100 text-secondary border-sky-200',
      icon: Smartphone,
      iconColor: 'text-secondary bg-sky-100',
      desc: 'Ứng dụng di động chuyên biệt được thiết kế cho thao tác 1 tay nhanh gọn: điểm danh FaceID, ghi nhận chỉ số sức khỏe đầu giường, cập nhật tình trạng ăn uống/tắm rửa/bài tiết và ghi chú khi bàn giao ca trực tức thì.',
      features: [
        {
          title: 'Chấm công ca trực bằng QR & FaceID',
          desc: 'Xác thực khuôn mặt chính xác tại cổng viện, nhận ngay danh sách người cao tuổi phụ trách trong ca trực.',
          image: '/screenshots/mobile-staff/' + encodeURIComponent('Màn chấm công .png'),
          tag: 'Chấm Công FaceID',
        },
        {
          title: 'Ghi nhận chỉ số sức khỏe',
          desc: 'Nhập nhanh huyết áp, nhịp tim, SpO2, đường huyết, nhiệt độ; cảnh báo tức thì khi chỉ số vượt ngưỡng nguy hiểm.',
          image: '/screenshots/mobile-staff/vital-signs.png',
          tag: 'Chỉ Số Sức Khỏe',
        },
        {
          title: 'Ghi nhận chăm sóc thường nhật 1 chạm',
          desc: 'Checklist nhanh khẩu phần bữa ăn sáng/trưa/tối, tắm rửa, thay đồ, bài tiết và giấc ngủ trong 30 giây.',
          image: '/screenshots/mobile-staff/breakfast-record.png',
          tag: 'Chăm Sóc Hàng Ngày',
        },
        {
          title: 'Ghi chú khi bàn giao ca',
          desc: 'Báo cáo bàn giao ca tự động không độ trễ, lưu vết ghi chú đầy đủ chuẩn y tế cho kíp trực tiếp theo.',
          image: '/screenshots/mobile-staff/' + encodeURIComponent('Báo cáo bàn giao ca cho người sau .png'),
          tag: 'Bàn Giao Ca Trực',
        },
      ],
      highlights: [
        'Thao tác 1 chạm tối ưu cho điều dưỡng đang đeo găng tay y tế',
        'Hoạt động cả khi mất sóng Internet tạm thời (Offline First)',
        'Cảnh báo thuốc đến giờ uống bằng thông báo đẩy Push Notification',
      ],
    },
    family: {
      type: 'mobile',
      title: 'Mobile App Người Thân (Family)',
      subtitle: 'Kênh kết nối yêu thương & an tâm tuyệt đối 24/7',
      badge: 'iOS & Android • Dành cho Thân Nhân & Con Cháu',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      icon: HeartHandshake,
      iconColor: 'text-accent bg-cyan-100',
      desc: 'Giúp gia đình luôn ở bên cạnh cha mẹ dù ở bất cứ đâu: theo dõi biểu đồ sức khỏe cập nhật liên tục, ngắm nhìn hình ảnh sinh hoạt thường nhật, tương tác cùng Trợ lý AI và thanh toán viện phí minh bạch tiện lợi.',
      features: [
        {
          title: 'Trang chủ sức khỏe & Trợ lý AI BeeCare',
          desc: 'Theo dõi chỉ số sinh hiệu gần nhất (tim, huyết áp, SpO2, đường huyết) cập nhật từng ca, trợ lý AI tư vấn 24/7.',
          image: '/screenshots/mobile-family/' + encodeURIComponent('Trang chủ người thân .png'),
          tag: 'Dashboard Gia Đình',
        },
        {
          title: 'Biểu đồ sức khỏe cập nhật theo từng ca trực',
          desc: 'Đồ thị biểu diễn huyết áp, nhịp tim, SpO2 theo tuần/tháng, cảnh báo sớm biến động sức khỏe bất thường.',
          image: '/screenshots/mobile-family/' + encodeURIComponent('Biểu đồ Huyết áp .png'),
          tag: 'Biểu Đồ Sức Khỏe',
        },
        {
          title: 'Album khoảnh khắc & hoạt động thường nhật',
          desc: 'Hình ảnh cha mẹ tham gia tập dưỡng sinh, làm bánh, giao lưu bạn bè do viện dưỡng lão đăng tải mỗi ngày.',
          image: '/screenshots/mobile-family/' + encodeURIComponent('Ảnh sinh họa của người cao tuổi .png'),
          tag: 'Khoảnh Khắc Cha Mẹ',
        },
        {
          title: 'Nhận thông báo & Thanh toán viện phí QR 1 chạm',
          desc: 'Chi tiết sao kê từng khoản ăn uống, bỉm tã, thuốc men hàng tháng; quét mã QR thanh toán nhanh chóng, an toàn.',
          image: '/screenshots/mobile-family/' + encodeURIComponent('Chi tiết bảng kê phí .png'),
          tag: 'Thanh Toán QR',
        },
      ],
      highlights: [
        'Thông báo tức thời khi có sự kiện y tế bất thường',
        'Chia sẻ quyền truy cập cho nhiều thành viên trong gia đình',
        'Được các gia đình đánh giá 4.9/5 sao về độ tin cậy và hài lòng',
      ],
    },
  };

  const selectedPlatform = modalPlatform ? platformDetails[modalPlatform] : null;
  const currentActiveFeature = selectedPlatform?.features[activeFeatureIndex] || selectedPlatform?.features[0];

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F8FAFD] border-y border-gray-100 relative overflow-hidden" id="ecosystem">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

      <div className="section-container relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Badge */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="badge-pill bg-primary-light text-primary mx-auto shadow-xs">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span>Hệ Sinh Thái Hợp Nhất 3 Nền Tảng</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SÂN KHẤU 3D ISOMETRIC CHUẨN STUDIO: 1 MACBOOK PRO + 2 IPHONE TRÊN BỆ KÍNH */}
        {/* ========================================================================= */}
        <div className="relative max-w-6xl mx-auto mb-0">
          
          {/* Khung Bao Kính Thủy Tinh Cao Cấp Glassmorphism */}
          <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 bg-gradient-to-b from-white/95 via-white/80 to-slate-50/60 backdrop-blur-xl border border-white/90 shadow-[0_30px_70px_-20px_rgba(38,83,151,0.22),0_10px_30px_-10px_rgba(15,23,42,0.1),inset_0_2px_4px_rgba(255,255,255,0.9)]">
            
            {/* Ảnh Render 3D Ultra-HD Chuẩn Studio */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-900 group">
              <img
                src="/beecare-3d-ecosystem.png"
                alt="Hệ sinh thái BeeCare 3D: Máy tính Web Quản lý và 2 Điện thoại iPhone trên bệ kính thủy tinh vát cạnh nối mạch phát sáng"
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                loading="eager"
              />

              {/* Lớp Phủ Hào Quang Nhẹ Nhàng (Subtle Vignette) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />

              {/* HOTSPOT 1: Laptop Web Admin (Tâm icon tròn nằm chính xác tại chấm đỏ dưới chữ BEE CARE) */}
              <div 
                className={`absolute top-[49%] left-[29.8%] -translate-x-1/2 transition-all duration-300 z-20 cursor-pointer flex flex-col items-center ${
                  activeHighlight === 'admin' ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => handleSelectPlatform('admin')}
                onMouseEnter={() => setActiveHighlight('admin')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                {/* Vòng lan tỏa sinh học (Pulse Ripple) - Tâm icon tại vị trí chấm đỏ */}
                <div className="relative flex items-center justify-center -translate-y-1/2">
                  <span className="absolute w-10 h-10 rounded-full bg-primary/40 animate-ping" />
                  <span className="absolute w-7 h-7 rounded-full bg-primary/60 animate-pulse" />
                  <div className="relative w-5 h-5 rounded-full bg-primary border-2 border-white shadow-lg flex items-center justify-center text-white">
                    <Laptop className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Badge thông tin nổi trên màn hình Laptop */}
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-[9.5px] text-cyan-300 font-bold uppercase tracking-wider">Nền tảng 1</div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>Web Quản Lý Viện</span>
                      <Maximize2 className="w-3 h-3 text-cyan-300 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* HOTSPOT 2: iPhone 1 - App Điều Dưỡng (Tâm icon tròn nằm chính xác tại chấm đỏ Phone 1) */}
              <div 
                className={`absolute top-[46%] left-[66%] -translate-x-1/2 transition-all duration-300 z-20 cursor-pointer flex flex-col items-center ${
                  activeHighlight === 'staff' ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => handleSelectPlatform('staff')}
                onMouseEnter={() => setActiveHighlight('staff')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                {/* Vòng lan tỏa sinh học (Pulse Ripple) - Tâm icon tại vị trí chấm đỏ */}
                <div className="relative flex items-center justify-center -translate-y-1/2">
                  <span className="absolute w-10 h-10 rounded-full bg-secondary/40 animate-ping" />
                  <span className="absolute w-7 h-7 rounded-full bg-secondary/60 animate-pulse" />
                  <div className="relative w-5 h-5 rounded-full bg-secondary border-2 border-white shadow-lg flex items-center justify-center text-white">
                    <Smartphone className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Badge thông tin nổi trên Phone 1 */}
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-[9.5px] text-sky-300 font-bold uppercase tracking-wider">Nền tảng 2</div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>App Điều Dưỡng</span>
                      <Maximize2 className="w-3 h-3 text-sky-300 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* HOTSPOT 3: iPhone 2 - App Người Thân (Tâm icon tròn nằm chính xác tại chấm đỏ Phone 2) */}
              <div 
                className={`absolute top-[54.5%] left-[76.8%] -translate-x-1/2 transition-all duration-300 z-20 cursor-pointer flex flex-col items-center ${
                  activeHighlight === 'family' ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => handleSelectPlatform('family')}
                onMouseEnter={() => setActiveHighlight('family')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                {/* Vòng lan tỏa sinh học (Pulse Ripple) - Tâm icon tại vị trí chấm đỏ */}
                <div className="relative flex items-center justify-center -translate-y-1/2">
                  <span className="absolute w-10 h-10 rounded-full bg-accent/40 animate-ping" />
                  <span className="absolute w-7 h-7 rounded-full bg-accent/60 animate-pulse" />
                  <div className="relative w-5 h-5 rounded-full bg-accent border-2 border-white shadow-lg flex items-center justify-center text-white">
                    <HeartHandshake className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Badge thông tin nổi trên Phone 2 */}
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-[9.5px] text-emerald-300 font-bold uppercase tracking-wider">Nền tảng 3</div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>App Người Thân</span>
                      <Maximize2 className="w-3 h-3 text-emerald-300 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* BADGE NỔI: Đồng bộ thời gian thực (Góc dưới giữa) */}
              <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 text-white shadow-xl items-center gap-2 text-xs">
                <Radio className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span>Đồng bộ dữ liệu <strong>thời gian thực</strong> kết nối thông suốt tức thì</span>
              </div>
            </div>

            {/* Thanh Chuyển Đổi & Khám Phá Nhanh 3 Ứng Dụng */}
            <div className="mt-4 sm:mt-5 pt-3.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-navy-900">Khám phá màn hình thật:</span>
                <span>Bấm vào bất kỳ thiết bị nào trên bệ 3D để xem ảnh chụp phần mềm thực tế</span>
              </div>

              {/* 3 Nút Bấm Khám Phá Nhanh */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSelectPlatform('admin')}
                  className="px-3.5 py-1.5 rounded-lg bg-primary-light hover:bg-primary/20 text-primary font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>Web Admin</span>
                </button>
                <button
                  onClick={() => handleSelectPlatform('staff')}
                  className="px-3.5 py-1.5 rounded-lg bg-sky-100 hover:bg-sky-200 text-secondary font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>App Staff</span>
                </button>
                <button
                  onClick={() => handleSelectPlatform('family')}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-100 hover:bg-cyan-200 text-cyan-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>App Family</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL CHI TIẾT 2 CỘT KÈM ẢNH CHỤP THẬT (INTERACTIVE 2-COLUMN SHOWCASE)   */}
      {/* ========================================================================= */}
      {selectedPlatform && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalPlatform(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/60 overflow-hidden max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-start justify-between gap-4 pb-3 sm:pb-3.5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shadow-xs ${selectedPlatform.iconColor}`}>
                  <selectedPlatform.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold border mb-0.5 sm:mb-1 ${selectedPlatform.badgeColor}`}>
                    {selectedPlatform.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 tracking-tight">
                    {selectedPlatform.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setModalPlatform(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-navy-900 transition-colors cursor-pointer"
                aria-label="Đóng"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* BỐ CỤC 2 CỘT: BÊN TRÁI TÍNH NĂNG - BÊN PHẢI MÀN HÌNH THẬT */}
            <div className="flex-1 overflow-y-auto py-3 sm:py-4 pr-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* CỘT TRÁI (5 CỘT): DANH MỤC 4 TÍNH NĂNG CỐT LÕI */}
                <div className="lg:col-span-5 space-y-3 text-left">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Bấm vào tính năng để đổi ảnh màn hình thật:
                  </div>

                  {selectedPlatform.features.map((feat, i) => (
                    <div 
                      key={i} 
                      onClick={() => setActiveFeatureIndex(i)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeFeatureIndex === i
                          ? 'bg-primary-light/70 border-primary shadow-sm ring-1 ring-primary/30 translate-x-1'
                          : 'bg-[#F8FAFD] border-gray-200/80 hover:bg-white hover:border-primary/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                          {feat.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-bold text-navy-900 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                    </div>
                  ))}

                  {/* Ưu thế công nghệ độc quyền */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50/80 via-sky-50/60 to-cyan-50/80 border border-blue-100">
                    <div className="text-[11px] font-extrabold text-navy-900 mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                      <span>Ưu thế công nghệ</span>
                    </div>
                    <div className="space-y-1">
                      {selectedPlatform.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-navy-800">
                          <Zap className="w-3 h-3 text-secondary flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CỘT PHẢI (7 CỘT): KHUNG MÀN HÌNH HIỂN THỊ ẢNH THẬT */}
                <div className="lg:col-span-7 flex flex-col items-center sticky top-0">
                  
                  {/* TIÊU ĐỀ ẢNH ĐANG CHỌN */}
                  <div className="w-full flex items-center justify-between mb-2 px-1 text-xs">
                    <span className="font-extrabold text-navy-900 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-primary" />
                      <span>{currentActiveFeature?.title}</span>
                    </span>
                    <button
                      onClick={() => setModalZoomImage(currentActiveFeature?.image)}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-navy-900 font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Maximize2 className="w-3 h-3 text-primary" />
                      <span>Phóng to Full-HD</span>
                    </button>
                  </div>

                  {/* NẾU LÀ WEB ADMIN: KHUNG CỬA SỔ TRÌNH DUYỆT SAFARI MACOS SÁNG SANG TRỌNG */}
                  {selectedPlatform.type === 'desktop' ? (
                    <div className="w-full rounded-xl bg-gradient-to-b from-slate-100 to-slate-200/90 p-1.5 sm:p-2 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.18),0_0_0_1px_rgba(203,213,225,0.8)] border border-white">
                      {/* Topbar Safari macOS thanh lịch */}
                      <div className="flex items-center justify-between pb-1.5 pt-0.5 px-2">
                        {/* 3 nút traffic light nhẹ nhàng chuẩn Apple */}
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-xs" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-xs" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-xs" />
                        </div>

                        {/* Thanh địa chỉ URL dạng viên thuốc sang trọng */}
                        <div className="flex-1 max-w-[260px] mx-auto px-3 py-0.5 rounded-md bg-white/80 border border-slate-300/60 shadow-xs flex items-center justify-center gap-1.5 text-[10px] text-slate-600 font-medium">
                          <span className="text-emerald-600 font-bold">🔒</span>
                          <span className="font-mono text-slate-700 font-semibold tracking-tight">https://beecare.vn/admin</span>
                        </div>

                        <div className="w-10 flex justify-end">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider hidden sm:inline">Live</span>
                        </div>
                      </div>

                      {/* Vùng hiển thị ảnh chụp màn hình Web Admin - Hiển thị trọn vẹn 100% không bị cắt */}
                      <div 
                        className="relative rounded-lg overflow-hidden bg-slate-50 cursor-pointer group shadow-sm border border-slate-200/70"
                        onClick={() => setModalZoomImage(currentActiveFeature?.image)}
                      >
                        <img 
                          src={currentActiveFeature?.image} 
                          alt={currentActiveFeature?.title} 
                          className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                          <Maximize2 className="w-4 h-4 text-white" />
                          <span>Bấm để phóng to sắc nét</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* NẾU LÀ APP MOBILE (STAFF HOẶC FAMILY): KHUNG MOCKUP IPHONE SÁNG BẠC TITANIUM (THU GỌN VỪA KHÍT TẦM MẮT) */
                    <div className="relative w-full max-w-[215px] mx-auto rounded-[24px] bg-gradient-to-b from-slate-100 via-slate-200/95 to-slate-300 p-2 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.18),0_0_0_1px_rgba(203,213,225,0.9),inset_0_1px_2px_rgba(255,255,255,0.9)] border border-white">
                      {/* Màn hình hiển thị ảnh chụp mobile thật - Hiển thị trọn vẹn */}
                      <div 
                        className="relative rounded-[18px] overflow-hidden bg-slate-50 aspect-[9/19] cursor-pointer group shadow-sm border border-slate-300/80 flex items-center justify-center"
                        onClick={() => setModalZoomImage(currentActiveFeature?.image)}
                      >
                        <img 
                          src={currentActiveFeature?.image} 
                          alt={currentActiveFeature?.title} 
                          className="w-full h-full object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                          <Maximize2 className="w-4 h-4 text-white" />
                          <span>Bấm để phóng to</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Chú thích phía dưới màn hình */}
                  <div className="mt-2.5 p-2 rounded-xl bg-slate-50 border border-gray-200 text-left text-xs text-gray-600 w-full flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Mô tả:</strong> {currentActiveFeature?.desc}
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Footer Modal với các nút chuyển nhanh */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span>Xem nền tảng khác:</span>
                <button
                  onClick={() => handleSelectPlatform('admin')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    modalPlatform === 'admin' ? 'bg-primary text-white shadow-xs' : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  🖥️ Web Admin
                </button>
                <button
                  onClick={() => handleSelectPlatform('staff')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    modalPlatform === 'staff' ? 'bg-secondary text-white shadow-xs' : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  📱 App Staff
                </button>
                <button
                  onClick={() => handleSelectPlatform('family')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    modalPlatform === 'family' ? 'bg-accent text-white shadow-xs' : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  💖 App Family
                </button>
              </div>

              <button
                onClick={() => setModalPlatform(null)}
                className="px-5 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Đóng cửa sổ
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CỬA SỔ PHÓNG TO ẢNH FULL-HD TRONG MODAL */}
      {modalZoomImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalZoomImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalZoomImage(null)}
              className="absolute top-2 right-2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={modalZoomImage} 
              alt="Màn hình phóng to sắc nét" 
              className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="mt-3 text-white text-xs font-semibold">
              Bấm phím ESC hoặc bấm ra ngoài để quay lại
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
