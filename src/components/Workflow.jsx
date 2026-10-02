import React from 'react';
import {
  UserPlus,
  HeartHandshake,
  AlertOctagon,
  FileCheck,
  GitCommit,
  CheckCircle2,
} from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      step: '01',
      title: 'Tiếp Nhận & Lập Hồ Sơ',
      subtitle: 'Định hình dịch vụ đầu vào',
      icon: UserPlus,
      color: 'bg-blue-50 text-primary border-primary/20',
      description:
        'Biểu mẫu đánh giá thể trạng ban đầu, thiết lập bệnh án số, phân phòng/giường và cấp tài khoản Family App cho người thân.',
      details: ['Đánh giá thể trạng NCT', 'Phân sơ đồ phòng & giường', 'Cấp tài khoản Family App'],
    },
    {
      step: '02',
      title: 'Chăm Sóc Tại Giường',
      subtitle: 'Thao tác 1 chạm trên mobile',
      icon: HeartHandshake,
      color: 'bg-cyan-50 text-secondary border-secondary/20',
      description:
        'Điểm danh Face ID nhận ca. Nhập chỉ số sinh hiệu, tick chất lượng bữa ăn, tắm rửa, bài tiết và chụp ảnh sinh hoạt thường nhật.',
      details: ['Chấm công Face ID định vị', 'Đo sinh hiệu tại giường', 'Nhật ký ăn/tắm/bài tiết'],
    },
    {
      step: '03',
      title: 'Bàn Giao Ca & Báo Động',
      subtitle: 'Đồng bộ SignalR không độ trễ',
      icon: AlertOctagon,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      description:
        'Khi có sự cố (té ngã, khó thở), nút khẩn cấp báo động ngay đến Admin và Bác sĩ. Dữ liệu tự động tổng hợp chuyển giao ca trực tiếp theo.',
      details: ['Báo động sự cố 1 chạm', 'Cảnh báo đẩy tới Family App', 'Bàn giao ca tự động'],
    },
    {
      step: '04',
      title: 'Quyết Toán & Báo Cáo',
      subtitle: 'Minh bạch 100% tài chính',
      icon: FileCheck,
      color: 'bg-emerald-50 text-success border-emerald-200',
      description:
        'Hệ thống tự động lập hóa đơn tháng, gửi qua Family App, kiểm tra thanh toán qua QR và trích xuất báo cáo doanh thu, lấp đầy giường.',
      details: ['Lập hóa đơn tự động', 'Quét QR gạch nợ tức thì', 'Báo cáo trích xuất Excel'],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8FAFD]">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="badge-pill bg-primary-light text-primary mb-3 mx-auto">
            <GitCommit className="w-3.5 h-3.5 text-accent" />
            <span>Quy Trình Chuẩn Hóa 4 Bước</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Vận Hành Liền Mạch Từ Tiếp Nhận Đến Quyết Toán
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Quy trình chuẩn y khoa được số hóa trọn vẹn, đảm bảo mọi khâu chăm sóc đều có dữ liệu
            chứng minh và không thể xảy ra tình trạng sót việc.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-primary-light text-primary">
                      BƯỚC {item.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border ${item.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-navy-900 mb-0.5">{item.title}</h3>
                  <div className="text-xs font-semibold text-secondary mb-2">{item.subtitle}</div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-1.5 mt-auto">
                  {item.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-navy-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
