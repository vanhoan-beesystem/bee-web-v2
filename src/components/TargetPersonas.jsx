import React from 'react';
import {
  Building2,
  Stethoscope,
  Home,
  CheckCircle2,
  Users2,
  ArrowRight,
} from 'lucide-react';

export default function TargetPersonas({ onOpenTrial }) {
  const personas = [
    {
      icon: Building2,
      badge: 'Mô Hình Phổ Biến',
      title: 'Viện Dưỡng Lão & Trung Tâm Nuôi Dưỡng',
      scale: 'Quy mô từ 30 đến 500+ người cao tuổi',
      desc: 'Dành cho các cơ sở dưỡng lão tư nhân hoặc công lập cần chuẩn hóa quy trình tiếp nhận, tự động phân ca điều dưỡng, quản lý dinh dưỡng và kết nối với gia đình.',
      highlights: [
        'Quản lý sơ đồ phòng & loại giường linh hoạt',
        'Tự động phân ca & tính bảng công nhân sự',
        'Cổng thông tin gia đình Family App chuyên biệt',
        'Tự động hóa xuất hóa đơn và đối soát viện phí',
      ],
    },
    {
      icon: Stethoscope,
      badge: 'Y Tế Chuyên Sâu',
      title: 'Bệnh Viện Lão Khoa & Phục Hồi Chức Năng',
      scale: 'Đơn vị có giường bệnh y tế',
      desc: 'Dành cho các cơ sở điều trị dài ngày yêu cầu giám sát sinh hiệu liên tục, lưu trữ hồ sơ bệnh án đa bệnh lý, y lệnh thuốc chặt chẽ và cảnh báo khẩn cấp realtime.',
      highlights: [
        'Hồ sơ bệnh án điện tử & phác đồ điều trị',
        'Cảnh báo sớm chỉ số sinh hiệu bất thường',
        'Theo dõi diễn tiến bệnh lý & xuất lịch sử',
        'Tích hợp thiết bị đo Bluetooth và hệ thống HIS',
      ],
    },
    {
      icon: Home,
      badge: 'Mô Hình Linh Hoạt',
      title: 'Dịch Vụ Chăm Sóc Người Cao Tuổi Tại Nhà',
      scale: 'Doanh nghiệp Home Healthcare',
      desc: 'Dành cho các công ty cung cấp điều dưỡng viên đến tận nhà chăm sóc theo ca/ngày. Điều phối nhân sự di động qua GPS và báo cáo trực tiếp cho gia đình sau mỗi ca.',
      highlights: [
        'Lập lịch ca trực di động theo yêu cầu gia đình',
        'Điểm danh check-in GPS tại địa chỉ khách hàng',
        'Báo cáo sinh hiệu & ảnh chăm sóc sau từng ca',
        'Quản lý công nợ & quyết toán tiền công nhanh',
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8FAFD] border-b border-gray-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="badge-pill bg-primary-light text-primary mb-3 mx-auto">
            <Users2 className="w-3.5 h-3.5 text-accent" />
            <span>Phù Hợp Mọi Mô Hình Chăm Sóc Lão Khoa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Được Tối Ưu Cho Mọi Quy Mô Cơ Sở
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Dù là viện dưỡng lão quy mô gia đình hay hệ thống chuỗi viện dưỡng lão cao cấp, BeeCare
            đều có giải pháp đóng gói linh hoạt triển khai trong vòng 48 giờ.
          </p>
        </div>

        {/* 3 Personas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-0.5">{p.title}</h3>
                  <div className="text-xs font-semibold text-primary mb-3">{p.scale}</div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{p.desc}</p>

                  <div className="space-y-2 pt-3 border-t border-gray-100 mb-5">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-navy-800 font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenTrial}
                  className="w-full py-2.5 rounded-xl border border-primary text-primary font-semibold text-xs hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Tư vấn mô hình này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
