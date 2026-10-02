import React from 'react';
import {
  FileWarning,
  ActivitySquare,
  HeartCrack,
  CalendarX,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export default function PainPoints() {
  const painPoints = [
    {
      icon: FileWarning,
      tag: 'Hồ sơ phân tán',
      title: 'Hồ sơ giấy dễ thất lạc & khó tra cứu',
      image: '/painpoints/painpoint-records.jpg',
      imageAlt: 'Hồ sơ bệnh án giấy tại viện dưỡng lão',
      description:
        'Hàng trăm sổ khám bệnh và biên bản theo dõi bằng giấy gây tốn diện tích, dễ nhầm lẫn thông tin giữa các ca trực và mất nhiều giờ khi cần kiểm tra lại tiền sử bệnh án.',
      solution: '100% Số hóa bệnh án điện tử, tra cứu tức thì theo mã định danh người cao tuổi.',
    },
    {
      icon: ActivitySquare,
      tag: 'Giám sát gián đoạn',
      title: 'Thiếu giám sát sinh hiệu thời gian thực',
      image: '/painpoints/painpoint-vitals.jpg',
      imageAlt: 'Đo sinh hiệu thủ công bằng tay ghi chép sổ giấy',
      description:
        'Việc ghi chép sinh hiệu thủ công trên sổ giấy theo ca trực gây gián đoạn dữ liệu, không theo dõi được liên tục và tiềm ẩn nhiều sai lệch thông tin',
      solution: 'Tự động đồng bộ dữ liệu qua Bluetooth vào ứng dụng, ghi nhận kết quả chính xác tức thì.',
    },
    {
      icon: HeartCrack,
      tag: 'Khoảng cách niềm tin',
      title: 'Gia đình thân nhân lo âu & thiếu kết nối',
      image: '/painpoints/painpoint-family.jpg',
      imageAlt: 'Thân nhân người bệnh lo lắng theo dõi từ xa',
      description:
        'Người thân không nắm được tình hình ăn uống, uống thuốc, tâm trạng của cha mẹ. Mọi trao đổi qua tin nhắn cá nhân gây áp lực giải trình lớn cho điều dưỡng.',
      solution: 'Family App cập nhật từng bữa ăn, giấc ngủ, sinh hiệu và album ảnh sinh hoạt trong ngày.',
    },
    {
      icon: CalendarX,
      tag: 'Vận hành thủ công',
      title: 'Xếp ca trực & quyết toán viện phí phức tạp',
      image: '/painpoints/painpoint-shifts.jpg',
      imageAlt: 'Quản lý viện dưỡng lão xếp ca trực và tính viện phí bằng bảng tính Excel',
      description:
        'Xếp lịch trực bằng Excel dễ trùng ca, sót phòng. Cuối tháng đối soát công nợ, phụ phí dịch vụ và thuốc men phát sinh mất nhiều ngày tính toán thủ công.',
      solution: 'Tự động phân ca thông minh, lập hóa đơn tự động & kiểm tra thanh toán qua QR.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="badge-pill bg-danger-bg text-danger mb-3 mx-auto">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Thực Trạng Quản Lý Viện Dưỡng Lão</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Những Rào Cản Khiến Viện Dưỡng Lão Truyền Thống <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">
              Quá Tải Và Lãng Phí Nguồn Lực
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Quản lý sổ sách giấy và bảng tính rời rạc đang kìm hãm chất lượng chăm sóc, gia tăng áp
            lực lên điều dưỡng và làm suy giảm sự an tâm từ thân nhân.
          </p>
        </div>

        {/* 4 Pain Points Horizontal Split Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-[#FBF7F3] rounded-2xl border border-gray-200/90 transition-all duration-300 hover:shadow-card-hover hover:border-primary/30 overflow-hidden flex flex-col sm:flex-row"
              >
                {/* Left Column: Authentic Documentary Photo */}
                <div className="relative w-full sm:w-[210px] md:w-[220px] lg:w-[230px] flex-shrink-0 h-52 sm:h-auto overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-navy-950/30 via-transparent to-transparent pointer-events-none" />

                  {/* Mobile Tag Overlay */}
                  <div className="absolute top-3 left-3 sm:hidden">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-red-700 shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Right Column: Pain Point Description & Solution */}
                <div className="p-5 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Desktop Icon & Badge Header */}
                    <div className="hidden sm:flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-gray-200 flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-100/70 text-red-700">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Solution Highlight Box */}
                  <div className="pt-3.5 border-t border-gray-200/80 mt-auto">
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-navy-800 bg-white/90 p-3 rounded-xl border border-primary/20 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-primary">Giải pháp BeeCare: </span>
                        <span className="text-gray-700 font-medium">{item.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
