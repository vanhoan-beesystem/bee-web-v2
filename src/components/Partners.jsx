import React from 'react';
import {
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  const partners = [
    {
      id: 'dien-hong',
      name: 'Dưỡng Lão Diên Hồng',
      category: 'Chuỗi Viện Dưỡng Lão Tiên Phong',
      logoUrl: '/partners/dienhong-logo.png',
      logoAlt: 'Logo Viện Dưỡng Lão Diên Hồng',
      logoHeight: 'h-10 sm:h-12',
      website: 'https://duonglaodienhong.vn',
    },
    {
      id: 'nozomicare',
      name: 'Nozomi Care',
      category: 'Chăm Sóc Chuẩn Kaigo Nhật Bản',
      logoUrl: '/partners/nozomicare-logo.png',
      logoAlt: 'Logo Nozomi Care Việt Nam',
      logoHeight: 'h-10 sm:h-12',
      website: 'https://nozomicare.vn',
    },
    {
      id: 'bee-system',
      name: 'Bee System',
      category: 'Hạ Tầng & Công Nghệ Thông Minh',
      logoUrl: '/partners/beesystem-logo-mark.png',
      logoAlt: 'Logo Bee System',
      logoHeight: 'h-11 sm:h-13',
      website: 'https://www.bee-system.co.jp',
    },
  ];

  return (
    <section id="partners" className="py-16 md:py-20 bg-white border-t border-b border-gray-200/80">
      <div className="section-container">
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="badge-pill bg-primary-light text-primary mx-auto">
            <HeartHandshake className="w-4 h-4 text-accent" />
            <span>Đối Tác Chiến Lược & Khách Hàng Đồng Hành</span>
          </div>
        </div>

        {/* Highlighted Partner Logos Grid */}
        <div className="bg-[#FBF7F3] rounded-3xl p-6 sm:p-8 border border-gray-200/90 mb-8 shadow-xs">
          <div className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
            Thương Hiệu & Tổ Chức Đồng Hành Tiêu Biểu
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {partners.map((partner) => (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] text-center group relative overflow-hidden"
              >
                <div className="h-14 flex items-center justify-center mb-3">
                  <img
                    src={partner.logoUrl}
                    alt={partner.logoAlt}
                    className={`${partner.logoHeight} w-auto max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-105`}
                    loading="lazy"
                  />
                </div>
                <div className="text-sm font-bold text-navy-900 group-hover:text-primary transition-colors flex items-center gap-1.5 justify-center">
                  <span>{partner.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity text-primary" />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {partner.category}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="bg-bg-card-subtle rounded-2xl p-6 border border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-900">
                Cam Kết Đồng Hành Toàn Diện
              </div>
              <div className="text-xs text-gray-500">
                Khảo sát tận viện · Cài đặt dữ liệu mẫu · Đào tạo cầm tay chỉ việc · Hỗ trợ 24/7
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/lien-he"
              className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-xs"
            >
              <span>Đăng Ký Tư Vấn & Triển Khai Cho Viện</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
