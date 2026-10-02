import React from 'react';
import {
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  FileText,
  Server,
  Layers,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import Pricing from '../components/Pricing';

export default function PricingPage({ onOpenTrial }) {

  const faqs = [

    {
      q: 'Thời gian triển khai và cài đặt hệ thống mất bao lâu?',
      a: 'Với quy mô cơ sở dưới 100 người cao tuổi, BeeCare có thể cài đặt máy chủ và chuyển giao toàn bộ dữ liệu trong vòng 24 - 48 giờ. Đội ngũ chuyên gia sẽ đến tận cơ sở để hướng dẫn cho Ban Quản trị và Điều dưỡng viên.',
    },
    {
      q: 'Chi phí cài đặt và chuyển giao ban đầu bao gồm những gì?',
      a: 'Chi phí cài đặt và đào tạo được trao đổi linh hoạt theo thỏa thuận hợp đồng, bao gồm: Thiết lập máy chủ Cloud chuyên dụng, cấu hình bảo mật dữ liệu, hướng dẫn sử dụng chi tiết tận nơi cho cả 3 nhóm người dùng (Admin, Nhân viên, Người thân) và hỗ trợ chuẩn hóa dữ liệu từ Excel.',
    },
    {
      q: 'Chính sách bảo hành và bảo trì trong thời gian hợp đồng như thế nào?',
      a: 'Toàn bộ các lỗi phát sinh của phần mềm đều được bảo hành và sửa lỗi 100% miễn phí trong suốt thời gian ký hợp đồng. Khách hàng được cam kết hỗ trợ kỹ thuật liên tục.',
    },
    {
      q: 'Nếu viện có nhu cầu phát triển thêm tính năng riêng thì tính phí thế nào?',
      a: 'Theo cam kết trong hợp đồng, nếu cơ sở có nhu cầu thay đổi hoặc phát triển thêm tính năng riêng ngoài phụ lục, hai bên sẽ ký phụ lục bổ sung với mức giá ưu đãi đặc biệt bằng 70% giá trị phát triển mới thông thường.',
    },
  ];

  return (
    <div className="pt-20 pb-16 md:pt-28 md:pb-24 bg-[#FBF7F3] min-h-screen">
      <div className="section-container">
        {/* 3 Main Pricing Cards */}
        <div className="mb-14">
          <Pricing onOpenTrial={onOpenTrial} />
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-1">
              Câu Hỏi Thường Gặp Về Báo Giá & Triển Khai
            </h2>
            <p className="text-xs text-gray-500">
              Giải đáp các băn khoăn phổ biến của Ban Giám Đốc các viện dưỡng lão
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs"
              >
                <div className="font-bold text-xs sm:text-sm text-navy-900 mb-1.5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center text-xs font-mono">?</span>
                  <span>{faq.q}</span>
                </div>
                <div className="text-xs text-gray-600 leading-relaxed pl-7">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Company Signature Card from docx */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-secondary mb-1">
                Đơn Vị Phát Triển & Vận Hành
              </div>
              <h3 className="text-base sm:text-lg font-bold text-navy-900">
                CÔNG TY TNHH HANIKI
              </h3>
              <div className="text-xs text-gray-600 mt-2 space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Tầng 30, tòa Handico, Phạm Hùng, Mễ Trì, Hà Nội</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>SĐT: <strong className="font-mono text-navy-900">0988 123 531</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Email: <strong className="text-navy-900">trang.haniki@gmail.com</strong></span>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFD] p-5 rounded-xl border border-gray-200 text-center sm:text-right flex flex-col items-center sm:items-end justify-center">
              <div className="text-sm font-bold text-navy-900 mb-1">Nếu bạn cần tư vấn trực tiếp theo quy mô</div>
              <div className="text-xs text-gray-500 mb-3">Đội ngũ chuyên viên HANIKI luôn sẵn lòng hỗ trợ khảo sát và tư vấn chi tiết 24/7</div>
              <button
                onClick={onOpenTrial}
                className="btn-primary px-5 py-2.5 text-xs font-semibold cursor-pointer shadow-sm hover:shadow-glow"
              >
                Liên hệ tư vấn trực tiếp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

