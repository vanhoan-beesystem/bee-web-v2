import React, { useState } from 'react';
import {
  Briefcase,
  Stethoscope,
  HeartHandshake,
  CheckCircle2,
  BadgeCheck,
} from 'lucide-react';

export default function Benefits() {
  const [activeTab, setActiveTab] = useState('director');

  const benefitGroups = {
    director: {
      role: 'Ban Giám Đốc & Quản Lý Viện',
      icon: Briefcase,
      badge: 'Tối Ưu Vận Hành & Lợi Nhuận',
      headline: 'Kiểm Soát Toàn Diện Mọi Hoạt Động Mà Không Cần Có Mặt Trực Tiếp',
      metrics: [
        { value: '40%', label: 'Giảm chi phí quản trị & văn phòng phẩm' },
        { value: '85%', label: 'Tiết kiệm thời gian phân ca & đối soát công' },
        { value: '100%', label: 'Minh bạch doanh thu, không thất thoát phụ phí' },
      ],
      points: [
        'Giám sát công suất phòng và tỷ lệ lấp đầy theo thời gian thực',
        'Báo cáo tự động chỉ số sức khỏe, dinh dưỡng và chất lượng phục vụ',
        'Phát hiện sự cố hoặc khiếu nại để chỉ đạo xử lý kịp thời',
        'Tối ưu hóa định biên nhân sự, giảm tỷ lệ nghỉ việc của điều dưỡng',
      ],
    },
    staff: {
      role: 'Điều Dưỡng & Hộ Lý Viên',
      icon: Stethoscope,
      badge: 'Giảm Tải Áp Lực Nghề Nghiệp',
      headline: 'Thêm Thời Gian Chăm Sóc Người Cao Tuổi, Không Ngập Trong Sổ Sách',
      metrics: [
        { value: '2 giờ', label: 'Tiết kiệm mỗi ca trực không phải ghi chép tay' },
        { value: '0%', label: 'Nguy cơ quên y lệnh hoặc lặp lại việc thừa' },
        { value: '1 chạm', label: 'Ghi nhận sinh hiệu, bữa ăn & bài tiết trên app' },
      ],
      points: [
        'Lịch trực minh bạch, xem ca và điểm danh Face ID trên mobile',
        'Danh sách nhiệm vụ cụ thể cho từng giường bệnh, không lo bỏ sót',
        'Báo động khẩn cấp tức thời khi người cao tuổi có biến chuyển sức khỏe',
        'Được ghi nhận công sức và đánh giá KPI công bằng, minh bạch',
      ],
    },
    family: {
      role: 'Gia Đình & Thân Nhân',
      icon: HeartHandshake,
      badge: 'An Tâm Yêu Thương Tuyệt Đối',
      headline: 'Đồng Hành Cùng Cha Mẹ Dù Đang Ở Bất Cứ Đâu Qua Ứng Dụng Di Động',
      metrics: [
        { value: '24/7', label: 'Cập nhật tình trạng sức khỏe & chỉ số sinh hiệu' },
        { value: 'Realtime', label: 'Nhận thông báo khi cụ có diễn biến bất thường' },
        { value: 'Minh bạch', label: 'Xem chi tiết bữa ăn, ảnh sinh hoạt & hóa đơn' },
      ],
      points: [
        'Xem trực tiếp hình ảnh sinh hoạt thể thao, văn nghệ của cha mẹ',
        'Biết rõ danh tính điều dưỡng viên phụ trách chăm sóc từng ca',
        'Theo dõi hồ sơ sức khỏe và phác đồ điều trị được bác sĩ cập nhật',
        'Thanh toán viện phí và các khoản dịch vụ phát sinh online nhanh chóng',
      ],
    },
  };

  const current = benefitGroups[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#F8FAFD] to-[#EFF6FF] border-b border-gray-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="badge-pill bg-primary-light text-primary mb-3 mx-auto">
            <BadgeCheck className="w-3.5 h-3.5 text-accent" />
            <span>Lợi Ích Đa Chiều Cho Mọi Đối Tượng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Giá Trị Khác Biệt Khi Ứng Dụng BeeCare
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Nâng tầm trải nghiệm của toàn bộ hệ sinh thái: Ban lãnh đạo, nhân viên điều dưỡng và gia
            đình thân nhân.
          </p>
        </div>

        {/* 3 Stakeholders Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {Object.entries(benefitGroups).map(([key, group]) => {
            const Icon = group.icon;
            const isSelected = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]'
                    : 'bg-white text-navy-800 border border-gray-200 hover:border-primary/40 hover:bg-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-primary'}`} />
                <span>{group.role}</span>
              </button>
            );
          })}
        </div>

        {/* Benefit Content Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headline and Points */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-sky-50 px-3 py-1 rounded-md mb-2.5 inline-block">
                {current.badge}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-navy-900 leading-snug mb-4">
                {current.headline}
              </h3>

              <div className="space-y-2.5 mb-2">
                {current.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Metrics Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#FBF7F3] rounded-2xl p-4 sm:p-5 border border-gray-200 space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-primary border-b border-gray-200 pb-2">
                  Hiệu Quả Định Lượng Thực Tế
                </div>
                {current.metrics.map((m, i) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-xs">
                    <div className="text-xl sm:text-2xl font-extrabold text-primary font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-600 mt-0.5 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
