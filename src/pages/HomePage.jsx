import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import EcosystemShowcase from '../components/EcosystemShowcase';
import Partners from '../components/Partners';
import News from '../components/News';
import { Sparkles, ArrowRight, PhoneCall, HelpCircle, FileText } from 'lucide-react';

export default function HomePage({ onOpenVideo, onOpenTrial, onSelectArticle }) {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero onOpenVideo={onOpenVideo} onOpenTrial={onOpenTrial} />

      {/* 2. Hệ Sinh Thái Hợp Nhất 3 Nền Tảng */}
      <EcosystemShowcase />

      {/* 3. Đối Tác Chiến Lược & Khách Hàng Đồng Hành */}
      <Partners />

      {/* 4. Tin Tức & Văn Hóa Doanh Nghiệp */}
      <News onSelectArticle={onSelectArticle} />

      {/* 5. Call-To-Action Banner Tối Ưu Kết Thúc Trang Chủ */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-primary-dark to-navy-950 text-white relative overflow-hidden">
        {/* Decorative Ambient Background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Sẵn Sàng Chuyển Đổi Số Viện Dưỡng Lão</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight text-white">
            Nâng Tầm Chất Lượng  <br className="hidden sm:inline" />
            Và Tối Ưu Hóa Chi Phí Cùng BeeCare
          </h2>

          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl mx-auto mb-8">
            Hơn 20+ cơ sở dưỡng lão trên toàn quốc đã tin tưởng ứng dụng hệ sinh thái BeeCare để giải
            phóng nhân sự khỏi sổ sách giấy tờ và gắn kết niềm tin trọn vẹn với gia đình.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href="http://103.170.123.248:8088/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-primary font-bold text-sm sm:text-base shadow-lg hover:bg-blue-50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Trải Nghiệm Ngay</span>
            </a>

            <Link
              to="/bang-gia"
              className="w-full sm:w-auto px-7 py-3 rounded-xl border-2 border-white/80 text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span>Xem Bảng Giá Chi Tiết</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/lien-he"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-accent text-navy-950 font-bold text-sm sm:text-base hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-navy-950" />
              <span>Liên Hệ Khảo Sát</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-blue-100 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 text-cyan-300" />
              <span>Đào tạo & Hướng dẫn tận nơi</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Hỗ trợ chuyển dữ liệu từ Excel</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
