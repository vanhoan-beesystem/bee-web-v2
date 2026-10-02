import React, { useState } from 'react';
import {
  Laptop,
  Smartphone,
  HeartHandshake,
  Database,
  Radio,
  ArrowRight,
  CheckCircle,
  Layers,
  Sparkles,
  Shield,
  Zap,
} from 'lucide-react';

export default function Ecosystem() {
  const [activePlatform, setActivePlatform] = useState('admin');

  const platforms = [
    {
      id: 'admin',
      title: 'Website Quản Trị (Admin)',
      badge: 'Nền tảng Web Trực Tuyến',
      target: 'Ban Giám Đốc & Điều Dưỡng Trưởng',
      icon: Laptop,
      color: 'primary',
      description:
        'Trung tâm chỉ huy toàn diện của cơ sở: quản lý hồ sơ người cao tuổi, xếp ca thông minh, điều phối dịch vụ, giám sát cơ sở vật chất và quyết toán tài chính minh bạch.',
      features: [
        'Hồ sơ bệnh án & kế hoạch khám tự động',
        'Tự động phân ca & quản lý chấm công nhân sự',
        'Sơ đồ tòa nhà, phân phòng/giường & bảo trì',
        'Lập hóa đơn viện phí tự động hàng tháng & kết nối ngân hàng',
        'Cảnh báo sự cố SignalR tức thời đến các ứng dụng',
        'Báo cáo thống kê trực quan & trích xuất file Excel',
      ],
      mockupDetails: {
        title: 'Bảng Điều Khiển Viện Trưởng',
        stats: [
          { label: 'Tổng số cụ', value: '142', sub: '92% công suất' },
          { label: 'Điều dưỡng trực', value: '28', sub: 'Đã check-in đủ' },
          { label: 'Chỉ số bất thường', value: '0', sub: 'Toàn viện ổn định' },
        ],
      },
    },
    {
      id: 'staff',
      title: 'Mobile App Điều Dưỡng (Staff)',
      badge: 'iOS & Android App',
      target: 'Điều Dưỡng Viên & Hộ Lý Tại Giường',
      icon: Smartphone,
      color: 'secondary',
      description:
        'Trợ lý số di động ngay tại đầu giường: xem phân ca, điểm danh FaceID, đo và nhập sinh hiệu nhanh, ghi nhận bữa ăn, tắm rửa, bài tiết và phát báo động khẩn cấp.',
      features: [
        'Xem lịch làm việc theo ca & điểm danh QR/Face ID',
        'Ghi nhận sinh hiệu (huyết áp, đường huyết, tim mạch)',
        'Ghi nhận chất lượng bữa ăn (đơn lẻ / hàng loạt)',
        'Ghi nhận trạng thái tắm rửa & bài tiết',
        'Ghi nhận hoạt động vui chơi kèm chụp ảnh',
        'Nút bấm báo động khẩn cấp (té ngã, khó thở) 1 chạm',
      ],
      mockupDetails: {
        title: 'App Nhân Viên Tại Giường',
        stats: [
          { label: 'Phòng phụ trách', value: 'Phòng 201 - 206', sub: '12 người cao tuổi' },
          { label: 'Nhiệm vụ sáng', value: '8 / 8 hoàn thành', sub: 'Đo sinh hiệu xong' },
          { label: 'Trạng thái ca', value: 'Ca sáng (07h-15h)', sub: 'Đang hoạt động' },
        ],
      },
    },
    {
      id: 'family',
      title: 'Mobile App Người Thân (Family)',
      badge: 'iOS & Android App',
      target: 'Gia Đình & Thân Nhân Người Cao Tuổi',
      icon: HeartHandshake,
      color: 'accent',
      description:
        'Cầu nối yêu thương và an tâm tuyệt đối: theo dõi tình trạng sức khỏe của cha mẹ mỗi ngày, nhận hình ảnh hoạt động thường nhật, xem lịch trình điều dưỡng và thanh toán viện phí online.',
      features: [
        'Hồ sơ sức khỏe & biểu đồ sinh hiệu theo ngày',
        'Cập nhật ảnh hoạt động thể thao, văn nghệ của cụ',
        'Theo dõi lịch trình các dịch vụ đã đăng ký',
        'Thông tin điều dưỡng chịu trách nhiệm chăm sóc',
        'Nhận thông báo sự cố & nhắc lịch đóng viện phí',
        'Hỗ trợ 1 tài khoản theo dõi nhiều người cao tuổi',
      ],
      mockupDetails: {
        title: 'App Gia Đình An Tâm',
        stats: [
          { label: 'Người thân', value: 'Cụ Lê Thị M. (79t)', sub: 'Phòng 302' },
          { label: 'Sinh hiệu hôm nay', value: 'Rất tốt', sub: 'HA 118/78, SpO2 99%' },
          { label: 'Ảnh mới', value: '3 khoảnh khắc', sub: 'Hoạt động cờ tướng 10h' },
        ],
      },
    },
  ];

  const current = platforms.find((p) => p.id === activePlatform) || platforms[0];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFD]">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill bg-primary-light text-primary mb-4 mx-auto">
            <Layers className="w-4 h-4 text-accent" />
            <span>Kiến Trúc Hợp Nhất 3 Nền Tảng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Hệ Sinh Thái Đồng Bộ Toàn Diện Cho Viện Dưỡng Lão
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Dữ liệu đồng bộ tức thời theo thời gian thực, đảm bảo mọi
            thông tin tại giường lập tức xuất hiện trên màn hình Ban Giám Đốc và điện thoại Người Thân.
          </p>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isSelected = activePlatform === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePlatform(p.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isSelected
                    ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]'
                    : 'bg-white text-navy-800 border border-gray-200 hover:border-primary/40 hover:bg-primary-light/30'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-primary'}`} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Platform Detail Box */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Description & Master Features */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-light text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <span>Dành cho: {current.target}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4 flex items-center gap-3">
                <CurrentIcon className="w-8 h-8 text-primary" />
                <span>{current.title}</span>
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Master Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-navy-800">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Realtime Tech Guarantee */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FBF7F3] border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary flex-shrink-0">
                  <Radio className="w-5 h-5 text-accent animate-pulse" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-navy-900">
                    Đồng bộ thời gian thực
                  </div>
                  <div className="text-gray-500">
                    Kết nối thông suốt tức thì giữa Web Quản lý và Thiết bị di động của Nhân viên / Gia đình
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Platform Screen Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFD] rounded-xl p-6 border border-gray-200/80 shadow-inner">
                {/* Mockup Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success animate-ping" />
                    <span className="text-xs font-bold text-navy-900">
                      {current.mockupDetails.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                    Trạng thái: Trực tuyến
                  </span>
                </div>

                {/* Simulated Metrics Card */}
                <div className="space-y-3">
                  {current.mockupDetails.stats.map((st, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs text-gray-500 font-medium">{st.label}</div>
                        <div className="text-lg font-bold text-primary mt-0.5">{st.value}</div>
                      </div>
                      <div className="text-xs font-semibold text-success bg-success-bg px-2.5 py-1 rounded-full">
                        {st.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shared Engine Badge */}
                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Database className="w-4 h-4 text-primary" />
                  <span>Bảo mật y tế đa lớp · Điện toán đám mây · Mã hóa SSL 256-bit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
