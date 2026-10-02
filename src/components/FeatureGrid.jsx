import React from 'react';
import {
  FileText,
  Users2,
  Building2,
  BriefcaseMedical,
  WalletCards,
  UserCheck,
  BarChart3,
  BellRing,
  Grid,
} from 'lucide-react';

export default function FeatureGrid() {
  const masterFeatures = [
    {
      icon: FileText,
      title: 'Quản Lý Hồ Sơ Người Cao Tuổi',
      desc: 'Thông tin cá nhân, hồ sơ bệnh lý, kế hoạch thăm khám tự động, sinh hiệu, chất lượng bữa ăn, tắm rửa, bài tiết và liên hệ khẩn cấp.',
      tag: 'Bệnh án điện tử',
    },
    {
      icon: Users2,
      title: 'Quản Lý Nhân Viên & Phân Ca',
      desc: 'Hồ sơ nhân sự, tự động phân ca, chấm công Face ID/QR, lịch làm việc, nghỉ phép, đánh giá hiệu suất và chứng chỉ/kỹ năng chuyên môn.',
      tag: 'Nhân sự 4.0',
    },
    {
      icon: Building2,
      title: 'Quản Lý Cơ Sở Vật Chất & Phòng',
      desc: 'Sơ đồ Tòa/Tầng/Phòng trực quan, quản lý loại giường, trang thiết bị y tế tại phòng, sắp xếp chuyển phòng và lịch bảo trì thiết bị.',
      tag: 'Sơ đồ trực quan',
    },
    {
      icon: BriefcaseMedical,
      title: 'Quản Lý Dịch Vụ & Gói Chăm Sóc',
      desc: 'Danh mục dịch vụ, đơn giá, gói dịch vụ linh hoạt theo mức độ phụ thuộc, lịch cung cấp dịch vụ và biểu mẫu đánh giá đầu vào.',
      tag: 'Gói chăm sóc đa dạng',
    },
    {
      icon: WalletCards,
      title: 'Quản Lý Tài Chính & Công Nợ',
      desc: 'Theo dõi công nợ, lập hóa đơn tự động hàng tháng theo từng người cao tuổi, báo cáo doanh thu và liên kết ngân hàng kiểm tra thanh toán.',
      tag: 'Thanh toán tự động',
    },
    {
      icon: UserCheck,
      title: 'Quản Lý Tài Khoản Người Thân',
      desc: 'Cấp và quản lý tài khoản Family App, phân quyền xem hồ sơ sức khỏe, hỗ trợ 1 tài khoản theo dõi nhiều người cao tuổi trong cùng viện.',
      tag: 'Gắn kết gia đình',
    },
    {
      icon: BarChart3,
      title: 'Báo Cáo Thống Kê & Xuất Excel',
      desc: 'Thống kê biến động nhập/ra viện, tỷ lệ lấp đầy giường phòng, báo cáo diễn tiến sức khỏe, doanh thu viện phí và trích xuất file Excel.',
      tag: 'Dữ liệu thời gian thực',
    },
    {
      icon: BellRing,
      title: 'Thông Báo & Cảnh Báo SignalR',
      desc: 'Cảnh báo sự cố khẩn tới app nhân viên & người thân, thông báo thay đổi ca trực, lịch hoạt động và gửi hóa đơn tức thì.',
      tag: 'Cảnh báo tức thì',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill bg-primary-light text-primary mb-4 mx-auto">
            <Grid className="w-4 h-4 text-accent" />
            <span>Danh Mục Nghiệp Vụ Chốt (Master List)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Lưới Tính Năng 8 Trọng Tâm Vận Hành Toàn Diện
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Mọi mô-đun được thiết kế bám sát thực tiễn công tác quản lý viện dưỡng lão hiện đại,
            được kiểm chứng qua hơn 30 đơn vị y tế lão khoa.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {masterFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-[#FBF7F3] rounded-2xl p-6 border border-gray-200 shadow-xs transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 hover:bg-white hover:border-primary/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-gray-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 group-hover:bg-primary-light group-hover:text-primary transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-navy-900 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
