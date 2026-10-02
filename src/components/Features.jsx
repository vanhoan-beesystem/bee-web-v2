import React from 'react';
import {
  CalendarClock,
  HeartPulse,
  UtensilsCrossed,
  Receipt,
  FileText,
  Building2,
  UserCheck,
  BarChart3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default function Features() {
  const highlightFeatures = [
    {
      id: 'scheduling',
      icon: CalendarClock,
      tag: 'Nhân Sự & Ca Trực',
      title: 'Tự Động Phân Ca & Chấm Công Face ID',
      desc: 'Thuật toán xếp ca thông minh chống trùng lịch, cân đối ngày nghỉ và ca đêm. Nhân viên điểm danh Face ID có định vị GPS ngay tại khuôn viên viện.',
      highlights: ['Chống trùng ca trực tự động', 'Điểm danh Face ID/QR định vị GPS', 'Xuất bảng công & tính lương tức thì'],
      color: 'text-primary bg-primary-light',
    },
    {
      id: 'vitals',
      icon: HeartPulse,
      tag: 'Y Tế & Sinh Hiệu',
      title: 'Giám Sát Sinh Hiệu & Cảnh Báo Khẩn Realtime',
      desc: 'Nhập số đo huyết áp, SpO2, đường huyết tại giường hoặc nhận qua Bluetooth. Khi phát hiện chỉ số nguy hiểm, hệ thống cảnh báo tức thì tới bác sĩ trực.',
      highlights: ['Biểu đồ xu hướng sinh hiệu tuần/tháng', 'Cảnh báo khẩn cấp tức thời qua SignalR', 'Lịch nhắc uống thuốc & phác đồ điều trị'],
      color: 'text-red-600 bg-red-50',
    },
    {
      id: 'care-log',
      icon: UtensilsCrossed,
      tag: 'Chăm Sóc Hàng Ngày',
      title: 'Nhật Ký Chăm Sóc Đơn Lẻ & Hàng Loạt',
      desc: 'Thao tác dưới 30 giây: ghi nhận chất lượng bữa ăn, tắm gội, trạng thái bài tiết và chụp ảnh hoạt động thường nhật gửi thẳng về ứng dụng gia đình.',
      highlights: ['Ghi nhận 1 chạm cho cả phòng', 'Chụp ảnh giao lưu gửi Family App', 'Theo dõi bài tiết & dinh dưỡng chuẩn y khoa'],
      color: 'text-secondary bg-sky-50',
    },
    {
      id: 'finance',
      icon: Receipt,
      tag: 'Tài Chính & Viện Phí',
      title: 'Lập Hóa Đơn Tự Động & Quyết Toán Viện Phí',
      desc: 'Tự động tổng hợp tiền phòng, thuốc men và phụ phí phát sinh. Gửi hóa đơn điện tử kèm mã QR tới gia đình, tự động gạch nợ khi ngân hàng báo có.',
      highlights: ['Tự động tính viện phí cuối tháng', 'Thanh toán quét mã QR tự động gạch nợ', 'Báo cáo doanh thu & công nợ trích xuất Excel'],
      color: 'text-emerald-600 bg-emerald-50',
    },
  ];

  const supportingFeatures = [
    {
      icon: FileText,
      title: 'Hồ Sơ Bệnh Án Điện Tử',
      desc: 'Quản lý thông tin cá nhân, tiền sử bệnh lý, dị ứng thuốc và kế hoạch khám tự động.',
      tag: 'Bệnh án số',
    },
    {
      icon: Building2,
      title: 'Sơ Đồ Phòng & Cơ Sở Vật Chất',
      desc: 'Sơ đồ tòa/tầng/phòng trực quan, tình trạng giường bệnh và lịch bảo trì thiết bị.',
      tag: 'Sơ đồ trực quan',
    },
    {
      icon: UserCheck,
      title: 'Cổng Thông Tin Thân Nhân',
      desc: 'Cấp tài khoản Family App, phân quyền theo dõi hồ sơ sức khỏe và nhiều cụ cùng lúc.',
      tag: 'Gắn kết gia đình',
    },
    {
      icon: BarChart3,
      title: 'Báo Cáo & Cảnh Báo SignalR',
      desc: 'Thống kê tỷ lệ lấp đầy, diễn biến sức khỏe toàn viện và phát chuông báo động sự cố.',
      tag: 'Dữ liệu thời gian thực',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="badge-pill bg-primary-light text-primary mb-3 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Nghiệp Vụ Cốt Lõi Đặc Tả Chuẩn</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            8 Phân Hệ Nghiệp Vụ Vận Hành Chuẩn Y Khoa
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Xây dựng dựa trên khảo sát thực tế tại hơn 30 viện dưỡng lão, bao quát trọn vẹn từ tiếp
            nhận, chăm sóc tại giường đến thanh quyết toán viện phí.
          </p>
        </div>

        {/* 4 Core Highlight Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {highlightFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-[#FBF7F3] rounded-2xl p-5 sm:p-6 border border-gray-200 transition-all duration-300 hover:shadow-card-hover hover:border-primary/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${feat.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-gray-200/80 space-y-1.5 mt-auto">
                  {feat.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-navy-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Supporting Features Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportingFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-xs hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center text-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-navy-900 mb-1">{item.title}</h4>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
