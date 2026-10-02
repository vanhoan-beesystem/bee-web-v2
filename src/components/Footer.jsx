import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Heart,
  ArrowUp,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-gray-400 font-sans border-t border-slate-800 pt-16 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="lg" />
            <div className="text-xs font-semibold text-slate-300">
              CÔNG TY TNHH HANIKI
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Tầng 30, Tòa nhà Handico, Phạm Hùng, Mễ Trì, Nam Từ Liêm, Hà Nội <br />
              Hotline: <strong className="text-white font-mono">0988 123 531</strong> · Email: <strong className="text-white">trang.haniki@gmail.com</strong>
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61582996425862"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors"
                aria-label="Facebook BeeCare"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors"
                aria-label="LinkedIn BeeCare"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors"
                aria-label="YouTube BeeCare"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Khám Phá</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/tin-tuc" className="hover:text-white transition-colors">
                  Tin Tức Y Khoa
                </Link>
              </li>
              <li>
                <Link to="/bang-gia" className="hover:text-white transition-colors">
                  Bảng Giá Gói Dịch Vụ
                </Link>
              </li>
              <li>
                <Link to="/cong-ty" className="hover:text-white transition-colors">
                  Về Công Ty Haniki
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="hover:text-white transition-colors">
                  Liên Hệ Tư Vấn
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Modules & Tech */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hệ Sinh Thái</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-300">Website Quản Lý Toàn Viện (Admin)</span>
              </li>
              <li>
                <span className="text-slate-300">Mobile App Điều Dưỡng (Staff)</span>
              </li>
              <li>
                <span className="text-slate-300">Mobile App Kết Nối Người Thân (Family)</span>
              </li>
              <li>
                <span className="text-slate-300">Hạ Tầng Đám Mây Tiêu Chuẩn Y Tế</span>
              </li>
              <li>
                <span className="text-slate-300">Đồng Bộ Dữ Liệu Thời Gian Thực</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Consultation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hỗ Trợ & Tư Vấn</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Đội ngũ chuyên viên cố vấn và kỹ thuật BeeCare luôn sẵn sàng hỗ trợ, đồng hành cùng quý viện dưỡng lão.
            </p>
            <div className="pt-2 text-xs text-gray-400">
              Hotline tư vấn & hỗ trợ kỹ thuật: <br />
              <strong className="text-white text-sm font-mono mt-1 block">0988 123 531 (24/7)</strong>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 BeeCare Solutions. Đã đăng ký bản quyền. Phát triển cho tương lai y tế lão khoa
            thông minh.
          </div>

          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-gray-300 transition-colors">
              Chính Sách Bảo Mật
            </a>
            <span>•</span>
            <a href="#hero" className="hover:text-gray-300 transition-colors">
              Điều Khoản Dịch Vụ
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-gray-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Lên đầu trang</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
