import React from 'react';
import Contact from '../components/Contact';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
} from 'lucide-react';

export default function ContactPage({ onOpenTrial }) {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#FBF7F3] min-h-screen">
      <div className="section-container">
        {/* Page Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-pill bg-primary-light text-primary mb-4 mx-auto">
            <PhoneCall className="w-4 h-4 text-accent" />
            <span>Kênh Tư Vấn & Triển Khai Toàn Quốc</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Đăng Ký Tư Vấn & Trải Nghiệm Giải Pháp BeeCare
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Nhận ngay buổi demo trực quan toàn diện hệ sinh thái BeeCare và được đội ngũ chuyên gia
            lắng nghe, giải đáp chi tiết mọi bài toán vận hành thực tế cho cơ sở của bạn.
          </p>
        </div>

        {/* 3 Quick Cards Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Cam kết phản hồi</div>
              <div className="text-base font-bold text-navy-900">Trong vòng 30 phút</div>
              <div className="text-[11px] text-success">Kể từ lúc nhận đăng ký</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-secondary flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Khảo sát & Demo</div>
              <div className="text-base font-bold text-navy-900">Trực tiếp tại viện</div>
              <div className="text-[11px] text-gray-500">Hoặc trực tuyến qua Zoom</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-success flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Bảo mật thông tin</div>
              <div className="text-base font-bold text-navy-900">Cam kết bảo mật 100%</div>
              <div className="text-[11px] text-gray-500">An toàn & bảo mật dữ liệu</div>
            </div>
          </div>
        </div>

        {/* The Main Contact Form Section */}
        <div className="bg-white rounded-3xl p-2 sm:p-4 border border-gray-200 shadow-sm">
          <Contact />
        </div>
      </div>
    </div>
  );
}
