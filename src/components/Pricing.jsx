import React from 'react';
import {
  Check,
  Sparkles,
  Zap,
  ArrowRight,
  Server,
  FileCheck,
  PhoneCall,
} from 'lucide-react';

export default function Pricing({ onOpenTrial }) {
  const packages = [
    {
      code: 'BC01',
      name: 'Gói Tiêu Chuẩn BC01',
      badge: 'Dưới 50 Người Cao Tuổi',
      scale: 'Quy mô viện dưới 50 cụ',
      priceDisplay: 'Liên Hệ',
      priceNote: 'Báo giá linh hoạt cho viện dưới 50 người cao tuổi',
      desc: 'Phù hợp cho các cơ sở dưỡng lão quy mô nhỏ, viện dưỡng lão gia đình dưới 50 người cao tuổi.',
      isPopular: false,
      features: [
        'Đầy đủ 3 nền tảng: Web Admin, Staff App, Family App',
        'Quản lý hồ sơ bệnh án điện tử & phân bổ giường phòng',
        'Tự động phân ca & chấm công Face ID / QR',
        'Ghi nhận sinh hiệu, bữa ăn, tắm rửa, bài tiết tại giường',
        'Lập hóa đơn viện phí tự động & kết nối ngân hàng QR',
        'Bảo hành & sửa lỗi miễn phí trong suốt thời gian hợp đồng',
      ],
      ctaText: 'Nhận báo giá gói BC01',
    },
    {
      code: 'BC02',
      name: 'Gói Tối Ưu BC02',
      badge: 'Được Chọn Nhiều Nhất ⭐',
      scale: 'Quy mô từ 50 đến 100 cụ',
      priceDisplay: 'Liên Hệ',
      priceNote: 'Tối ưu theo số giường & ca trực nhân sự (50 - 100 cụ)',
      desc: 'Lựa chọn tiêu chuẩn của hơn 80% viện dưỡng lão hiện đại đang trên đà mở rộng và phát triển.',
      isPopular: true,
      features: [
        'Toàn bộ tính năng trọn gói hệ thống BeeCare',
        'Kết nối dữ liệu thời gian thực không độ trễ',
        'Cảnh báo sự cố khẩn cấp (té ngã, khó thở) tới Admin & Bác sĩ',
        'Chế độ ghi nhận chăm sóc hàng loạt 1 chạm cho cả phòng',
        'Hạ tầng Cloud Server tối ưu cho 50 - 100 người cao tuổi',
        'Ưu tiên hỗ trợ kỹ thuật và đào tạo chuyển giao định kỳ',
      ],
      ctaText: 'Nhận báo giá gói BC02',
    },
    {
      code: 'BC03',
      name: 'Gói Toàn Diện BC03',
      badge: 'Quy Mô Lớn & Chuỗi',
      scale: 'Quy mô trên 100 cụ',
      priceDisplay: 'Liên Hệ',
      priceNote: 'Tùy biến riêng cho chuỗi cơ sở & bệnh viện lão khoa',
      desc: 'Thiết kế cho các bệnh viện lão khoa, trung tâm điều dưỡng quy mô lớn hoặc chuỗi cơ sở liên viện.',
      isPopular: false,
      features: [
        'Toàn diện cho cơ sở trên 100 người cao tuổi',
        'Hạ tầng Cloud Enterprise tải cao, lưu trữ album ảnh & video lớn',
        'Báo cáo thống kê chuyên sâu & xuất dữ liệu phân tích Excel',
        'Cơ chế 1 tài khoản Family theo dõi nhiều cụ linh hoạt',
        'Hỗ trợ kỹ thuật 24/7 chuyên biệt cùng kỹ sư phụ trách riêng',
        'Chính sách ưu đãi nâng cấp tính năng mới chỉ 70% chi phí',
      ],
      ctaText: 'Nhận báo giá gói BC03',
    },
  ];

  return (
    <section id="pricing" className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="badge-pill bg-primary-light text-primary mb-3 mx-auto">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span>Chính Sách Báo Giá & Triển Khai Hệ Thống</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Báo Giá Gói Dịch Vụ Theo Quy Mô
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Báo giá trọn gói bao gồm đầy đủ Web Admin, Mobile Staff, Mobile Family và Cloud Server.
            Không phát sinh chi phí ẩn, cam kết đồng hành và bảo hành miễn phí suốt thời gian hợp đồng.
          </p>

          {/* Highlights pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-navy-800">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F6FA] border border-gray-200">
              <Check className="w-3.5 h-3.5 text-success" />
              Đầy đủ 3 nền tảng (Web + 2 App Mobile)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F6FA] border border-gray-200">
              <Check className="w-3.5 h-3.5 text-success" />
              Hạ tầng Cloud bảo mật riêng
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F6FA] border border-gray-200">
              <Check className="w-3.5 h-3.5 text-success" />
              Bảo hành & sửa lỗi 100% miễn phí
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid (3 Packages) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {packages.map((pkg) => {
            const isFeatured = pkg.isPopular;

            return (
              <div
                key={pkg.code}
                className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-[#FBF7F3] border-2 border-primary shadow-glow hover:shadow-card-hover scale-[1.02] z-10'
                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Popular Pill */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm flex items-center gap-1 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-primary-light text-primary">
                      MÃ {pkg.code}
                    </span>
                    {!isFeatured && (
                      <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-1">{pkg.name}</h3>
                  <div className="text-xs font-semibold text-secondary mb-3">{pkg.scale}</div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-5">{pkg.desc}</p>

                  {/* Price Tag: "Liên Hệ" */}
                  <div className="mb-5 pb-5 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight font-heading">
                        {pkg.priceDisplay}
                      </span>
                      <span className="text-[11px] font-semibold text-secondary bg-primary-light px-2.5 py-0.5 rounded-md">
                        Báo giá theo quy mô
                      </span>
                    </div>
                    <div className="text-[12px] text-gray-500 mt-1.5 font-medium">
                      {pkg.priceNote}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                      Quyền lợi gói dịch vụ:
                    </div>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isFeatured ? 'bg-primary text-white' : 'bg-primary-light text-primary'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs text-navy-800 font-medium leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenTrial}
                  className={`w-full py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isFeatured
                      ? 'btn-primary shadow-md hover:shadow-glow'
                      : 'btn-secondary hover:bg-primary-light'
                  }`}
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Setup Fee & Terms Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-6 rounded-2xl bg-[#F8FAFD] border border-gray-200">
          <div className="md:col-span-6 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-secondary">
                Cài Đặt, Chuyển Giao & Đào Tạo Ban Đầu
              </div>
              <div className="text-lg font-extrabold text-navy-900 mt-0.5">
                Hỗ trợ trọn gói <span className="text-xs font-normal text-gray-500">(Theo thỏa thuận hợp đồng)</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Bao gồm: Cài đặt hệ thống máy chủ Cloud riêng, cấu hình bảo mật, hướng dẫn sử dụng và chuyển giao công nghệ cho cả 3 nhóm người dùng (Admin, Nhân viên điều dưỡng, Người thân).
              </p>
            </div>
          </div>

          <div className="md:col-span-6 flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-5">
            <div className="w-10 h-10 rounded-xl bg-success-bg text-success flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-success">
                Điều Khoản & Cam Kết Đồng Hành
              </div>
              <ul className="text-xs text-gray-600 mt-1.5 space-y-1">
                <li>• <strong>Bảo hành:</strong> Miễn phí 100% trong suốt thời gian ký hợp đồng (lỗi phần mềm).</li>
                <li>• <strong>Thanh toán:</strong> Hình thức thanh toán linh hoạt theo kỳ hạn thỏa thuận với nhiều ưu đãi.</li>
                <li>• <strong>Cam kết phát triển:</strong> Yêu cầu tính năng mới ngoài danh mục được ưu đãi giảm 30% (tính 70% giá trị phát triển).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
