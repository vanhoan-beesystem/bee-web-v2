import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Award,
  Target,
  Eye,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Cpu,
  Globe2,
  Heart,
  Quote,
} from 'lucide-react';
import Partners from '../components/Partners';

export default function CompanyPage({ onOpenTrial }) {
  useEffect(() => {
    document.title = 'Về Công Ty HANIKI – Đơn Vị Phát Triển Hệ Sinh Thái BeeCare';
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      number: '6+',
      label: 'Năm kinh nghiệm Kaigo Nhật Bản',
      desc: 'Nghiên cứu & phát triển phần mềm y tế dưỡng lão',
    },
    {
      number: '30+',
      label: 'Kỹ sư & chuyên gia công nghệ',
      desc: 'Đội ngũ chuyên môn cao tại trụ sở Hà Nội',
    },
    {
      number: '1.000+',
      label: 'Người cao tuổi an tâm',
      desc: 'Được quản lý sức khỏe an toàn trên hệ thống',
    },
    {
      number: '200+',
      label: 'Gia đình kết nối thường nhật',
      desc: 'Đồng hành cùng cha mẹ qua Mobile App',
    },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Lấy Gia Đình Làm Trung Tâm',
      color: 'text-rose-600 bg-rose-50 border-rose-100',
      description:
        'Đồng hành và mang lại sự an tâm tuyệt đối cho người thân trong suốt hành trình chăm sóc cha mẹ tại viện.',
    },
    {
      icon: ShieldCheck,
      title: 'Tin Cậy & Minh Bạch',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      description:
        'Mọi dữ liệu sinh hiệu, y lệnh thuốc và viện phí đều được đồng bộ thời gian thực (Realtime), minh bạch 100%.',
    },
    {
      icon: Cpu,
      title: 'Đột Phá Công Nghệ',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
      description:
        'Hạ tầng Cloud hiện đại, công nghệ SignalR đồng bộ dưới 1 giây và bảo mật dữ liệu y tế đa tầng.',
    },
    {
      icon: Award,
      title: 'Phụng Sự Tận Tâm',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      description:
        'Tôn trọng và phụng dưỡng người cao tuổi chu đáo. Cam kết hỗ trợ kỹ thuật và vận hành 24/7 cùng các cơ sở dưỡng lão.',
    },
  ];

  const officeImages = [
    {
      src: '/company/hop-ky-thuat-san-pham.jpg',
      title: 'Nghiên Cứu & Phát Triển',
      desc: 'Họp kỹ thuật phân tích luồng dữ liệu và thiết kế giao diện phần mềm BeeCare.',
    },
    {
      src: '/company/dao-tao-demo-he-thong.jpg',
      title: 'Đào Tạo & Kiểm Thử',
      desc: 'Demo trực tiếp hệ thống dữ liệu điều dưỡng và luồng nghiệp vụ quản lý viện.',
    },
    {
      src: '/company/van-phong-lap-trinh-1.jpg',
      title: 'Không Gian Lập Trình',
      desc: 'Khu vực làm việc mở với trang thiết bị hiện đại của đội ngũ nhân viên HANIKI.',
    },
    {
      src: '/company/van-phong-lap-trinh-2.jpg',
      title: 'Văn Phòng Năng Động',
      desc: 'Môi trường làm việc trẻ trung, sáng tạo tại Tầng 30 Tòa nhà Handico Phạm Hùng.',
    },
  ];

  return (
    <div className="pt-[76px] pb-14 md:pt-[82px] md:pb-20 bg-[#FBF7F3] min-h-screen">
      {/* 1. HERO: CÔNG TY TNHH HANIKI (Cân đối trọn vẹn màn hình, không vướng phần trắng dưới) */}
      <section className="section-container mb-16 md:mb-24 relative">
        <div className="relative bg-gradient-to-b from-white via-white to-[#F8FAFD] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 pb-5 sm:pb-6 md:pb-7 border border-blue-100/80 shadow-[0_15px_40px_-15px_rgba(38,83,151,0.06)] overflow-hidden">
          <div className="text-center max-w-3xl mx-auto relative z-10 mb-4 sm:mb-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-primary text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <Globe2 className="w-3.5 h-3.5 text-accent" />
              <span>Kinh Nghiệm Chuẩn Nhật – Phát Triển Tại Thị Trường Việt Nam</span>
            </div>

            {/* H1 Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy-950 tracking-tight mb-2 sm:mb-2.5 leading-tight">
              CÔNG TY TNHH <span className="bg-gradient-to-r from-primary via-[#204780] to-secondary bg-clip-text text-transparent">HANIKI</span>
            </h1>

            {/* Description Paragraph with refined typography */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Kế thừa hơn <strong className="font-bold text-navy-900">6 năm kinh nghiệm thực chiến</strong> phát triển phần mềm điều dưỡng (<strong className="text-primary font-bold">Kaigo</strong>) chuẩn mực tại Nhật Bản, HANIKI mang đến <strong className="font-bold text-navy-900">Hệ sinh thái BeeCare</strong> thuần Việt, giúp các viện dưỡng lão số hóa toàn diện vận hành và gắn kết bền chặt niềm tin với gia đình.
            </p>
          </div>

          {/* Ảnh Backdrop Nhận Diện Thương Hiệu HANIKI - Thu gọn lại khoảng 10px vừa vặn */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 bg-slate-100 group w-full max-w-[1120px] mx-auto">
            <img
              src="/company/backdrop-cong-ty.png"
              alt="Không gian nhận diện thương hiệu và sảnh đón tiếp CÔNG TY TNHH HANIKI"
              className="w-full h-[240px] sm:h-[310px] md:h-[390px] lg:h-[455px] xl:h-[475px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 2. Thông Điệp Từ Ban Lãnh Đạo */}
      <section className="section-container mb-16 md:mb-24">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Ảnh Tổng Giám Đốc Kích Thước Lớn */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group bg-slate-100">
                <img
                  src="/company/tong-giam-doc-mac-duy-hung.jpg"
                  alt="Tổng Giám Đốc Mạc Duy Hưng - CÔNG TY TNHH HANIKI"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="text-base sm:text-lg font-extrabold text-white">Ông Mạc Duy Hưng</div>
                  <div className="text-xs text-cyan-300 font-medium">Tổng Giám Đốc CÔNG TY TNHH HANIKI</div>
                </div>
              </div>
            </div>

            {/* Lời Ngỏ Từ Tổng Giám Đốc */}
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
                <Quote className="w-5 h-5" />
              </div>

              <div className="text-xs uppercase tracking-wider text-primary font-bold">
                Thông Điệp Từ Ban Lãnh Đạo
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight leading-snug">
                "Công Nghệ Tận Tâm, Nâng Tầm Dưỡng Lão"
              </h2>

              <blockquote className="text-gray-600 text-xs sm:text-sm leading-relaxed italic border-l-3 border-primary pl-3.5 my-3">
                "Mang công nghệ và chuẩn mực quản lý dưỡng lão khắt khe từ Nhật Bản về Việt Nam, sứ mệnh của HANIKI là xây dựng hệ sinh thái BeeCare thông minh, chuẩn y khoa và tràn đầy sự ấm áp — giúp các viện dưỡng lão vận hành an tâm và các gia đình trọn vẹn niềm tin."
              </blockquote>

              <div className="pt-1">
                <div className="text-sm font-extrabold text-navy-900">Mạc Duy Hưng</div>
                <div className="text-xs text-gray-500">Tổng Giám Đốc – Người Sáng Lập HANIKI & BeeCare</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Kế Thừa Chuẩn Nhật - Tối Ưu Cho Việt Nam */}
      <section className="section-container mb-16 md:mb-24">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="badge-pill bg-primary-light text-primary">
                <Globe2 className="w-3.5 h-3.5 text-accent" />
                <span>Năng Lực Công Nghệ Cốt Lõi</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Kế Thừa Chuẩn Mực Nhật Bản <br className="hidden sm:inline" />
                Tối Ưu Riêng Cho Viện Dưỡng Lão Việt
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Được tôi luyện qua tiêu chuẩn y tế khắt khe của Nhật Bản, đội ngũ nhân viên HANIKI đã bản địa hóa toàn bộ quy trình thành giải pháp thuần Việt: giao diện trực quan, dễ dùng cho mọi điều dưỡng, vận hành mượt mà thời gian thực.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-navy-900 font-semibold bg-[#F8FAFD] p-2.5 rounded-xl border border-gray-200/70">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Quy trình chuẩn Kaigo Nhật Bản</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-navy-900 font-semibold bg-[#F8FAFD] p-2.5 rounded-xl border border-gray-200/70">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span>100% Giao diện & nghiệp vụ thuần Việt</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-navy-900 font-semibold bg-[#F8FAFD] p-2.5 rounded-xl border border-gray-200/70">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Đồng bộ Realtime SignalR &lt; 1 giây</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-navy-900 font-semibold bg-[#F8FAFD] p-2.5 rounded-xl border border-gray-200/70">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Bảo mật dữ liệu y tế đa tầng</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                <img
                  src="/company/tap-the-haniki.jpg"
                  alt="Tập thể cán bộ nhân viên Công ty TNHH HANIKI"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-cyan-300 font-bold mb-0.5">
                    Đội Ngũ Nhân Sự HANIKI
                  </span>
                  <p className="text-xs font-medium leading-snug">
                    Tập thể nhân viên tận tâm đồng hành cùng các viện dưỡng lão
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Không Gian Nghiên Cứu & Phát Triển (Gallery) */}
      <section className="section-container mb-16 md:mb-24">
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="badge-pill bg-primary-light text-primary">
            <Building2 className="w-3.5 h-3.5 text-accent" />
            <span>Môi Trường Làm Việc</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {officeImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm group hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-72 sm:h-80 md:h-[360px] lg:h-[420px] overflow-hidden bg-slate-100">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1.5 group-hover:text-primary transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Tầm Nhìn & Sứ Mệnh */}
      <section className="section-container mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Sứ Mệnh */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">Sứ Mệnh Phụng Sự</div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-3">
                Số Hóa Toàn Diện & Nâng Tầm Dưỡng Lão Việt
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                Ứng dụng công nghệ chuẩn Nhật để giải phóng điều dưỡng khỏi sổ sách giấy tờ, trao quyền kiểm soát chuẩn xác cho ban quản lý viện và mang lại sự an tâm tuyệt đối cho các gia đình.
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t border-gray-100 text-xs text-navy-900 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                <span>Số hóa 100% hồ sơ chăm sóc & y lệnh tại giường</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                <span>Tối ưu hóa thời gian chăm sóc trực tiếp của điều dưỡng</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                <span>Gắn kết niềm tin bền chặt giữa viện và người thân</span>
              </div>
            </div>
          </div>

          {/* Tầm Nhìn */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-secondary flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">Tầm Nhìn Chiến Lược</div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-3">
                Doanh Nghiệp Số 1 Về Quản Lý Dưỡng Lão
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                Trở thành công ty công nghệ số 1 tại Việt Nam về giải pháp quản lý viện dưỡng lão và y tế lão khoa; kiên định là cầu nối công nghệ chuẩn mực giữa Nhật Bản và Việt Nam.
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t border-gray-100 text-xs text-navy-900 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>Tiên phong ứng dụng Cloud & SignalR Realtime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>Đồng hành cùng hệ thống viện dưỡng lão toàn quốc</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>Quy trình chăm sóc chuẩn mực y tế quốc tế</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4 Giá Trị Cốt Lõi */}
      <section className="section-container mb-16 md:mb-24">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="badge-pill bg-primary-light text-primary mb-2 mx-auto">
            <Award className="w-3.5 h-3.5 text-accent" />
            <span>Văn Hóa Doanh Nghiệp</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">
            Giá Trị Cốt Lõi Định Hình HANIKI
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Bốn nguyên tắc bất biến dẫn dắt mọi quyết định nghiên cứu và phụng sự khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-card-hover hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 border ${val.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-1.5">{val.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* 7. Đối Tác Hiện Nay */}
      <div className="mb-16 md:mb-24">
        <Partners />
      </div>

      {/* 8. Thông Tin Pháp Nhân & Bản Đồ Văn Phòng */}
      <section className="section-container mb-16 md:mb-24">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info Col */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <div className="badge-pill bg-primary-light text-primary mb-2">
                  <Building2 className="w-3.5 h-3.5 text-accent" />
                  <span>Thông Tin Pháp Nhân Chính Thức</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight">
                  CÔNG TY TNHH HANIKI
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Đơn vị chủ quản và phát triển bản quyền hệ sinh thái BeeCare
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Trụ sở văn phòng điều hành</div>
                    <div className="text-xs sm:text-sm font-bold text-navy-900 leading-snug">
                      Tầng 30, Tòa nhà Handico, KĐT mới Mễ Trì Hạ, Đường Phạm Hùng, Phường Mễ Trì, Quận Nam Từ Liêm, TP. Hà Nội
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-success flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Hotline tư vấn & hỗ trợ kỹ thuật 24/7</div>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:0336123444"
                        className="text-xs sm:text-sm font-bold text-navy-900 hover:text-primary transition-colors font-mono"
                      >
                        0336 123 444
                      </a>
                      <span className="text-gray-300">•</span>
                      <a
                        href="tel:0988123531"
                        className="text-xs sm:text-sm font-bold text-navy-900 hover:text-primary transition-colors font-mono"
                      >
                        0988 123 531
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Hòm thư điện tử chính thức</div>
                    <div className="flex items-center gap-2">
                      <a
                        href="mailto:vuongnguyen@bee-system.vn"
                        className="text-xs sm:text-sm font-bold text-navy-900 hover:text-primary transition-colors font-mono"
                      >
                        vuongnguyen@bee-system.vn
                      </a>
                      <span className="text-gray-300">•</span>
                      <a
                        href="mailto:trang.haniki@gmail.com"
                        className="text-xs font-semibold text-gray-600 hover:text-primary transition-colors font-mono"
                      >
                        trang.haniki@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Thời gian làm việc văn phòng</div>
                    <div className="text-xs sm:text-sm font-bold text-navy-900">
                      Thứ 2 – Thứ 7: 08:00 – 18:00 (Hệ thống Cloud & Hotline trực 24/7/365)
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center gap-2.5">
                <Link
                  to="/lien-he"
                  className="btn-primary px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Gửi yêu cầu tư vấn & Demo</span>
                </Link>

                <a
                  href="http://103.170.123.248:8088/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-2 text-xs font-bold border border-gray-300 hover:bg-gray-50 inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>Dùng thử phần mềm</span>
                </a>
              </div>
            </div>

            {/* Map Col */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xs h-[320px] md:h-[360px] bg-gray-100 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.468766440816!2d105.77970541533202!3d21.016692893660525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d69594b35%3A0x56c7da1281efdc2f!2sHandico%20Tower!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ văn phòng Tòa nhà Handico Tower - CÔNG TY TNHH HANIKI"
                  className="w-full h-full grayscale-[0.2] contrast-[1.05]"
                />
                <a
                  href="https://maps.app.goo.gl/ck1aXfgcijSMhmdc9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white text-navy-900 text-xs font-semibold rounded-lg shadow-md border border-gray-200/80 backdrop-blur-sm transition-all duration-200 hover:text-primary hover:border-primary/40 hover:shadow-lg cursor-pointer"
                  title="Mở tòa nhà Handico Tower trên Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Mở trong Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Call To Action Footer Banner */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary via-[#204780] to-secondary rounded-3xl p-6 sm:p-10 text-center text-white shadow-lg relative overflow-hidden">
          <div className="max-w-xl mx-auto relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">
              Sẵn Sàng Nâng Tầm Quản Lý Viện Dưỡng Lão Cùng HANIKI?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm mb-6 leading-relaxed">
              Đồng hành cùng HANIKI để số hóa toàn diện quy trình chăm sóc người cao tuổi, tối ưu chi phí và nâng tầm uy tín viện dưỡng lão.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="http://103.170.123.248:8088/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-white text-primary font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Trải nghiệm ngay</span>
              </a>
              <Link
                to="/lien-he"
                className="px-6 py-2.5 rounded-xl bg-primary-dark/80 text-white font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-all border border-white/20 inline-flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Đặt lịch hẹn tư vấn</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
