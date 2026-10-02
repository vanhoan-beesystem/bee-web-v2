import React from 'react';
import {
  X,
  Laptop,
  Smartphone,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import Logo from './Logo';

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const portals = [
    {
      title: 'Cổng Quản Lý Viện (Web Admin)',
      role: 'Dành cho Ban Giám Đốc, Bác sĩ & Quản lý',
      icon: Laptop,
      color: 'bg-primary-light text-primary border-primary/20',
      actionText: 'Truy cập Web Admin',
      url: 'http://103.170.123.248:8088/login',
    },
    {
      title: 'Cổng Điều Dưỡng (Staff Portal)',
      role: 'Dành cho Điều dưỡng viên & Hộ lý tại viện',
      icon: Smartphone,
      color: 'bg-sky-50 text-secondary border-secondary/20',
      actionText: 'Đăng nhập App Staff',
      url: 'https://staff.beecare.vn',
    },
    {
      title: 'Cổng Thân Nhân (Family App)',
      role: 'Dành cho Gia đình theo dõi người cao tuổi',
      icon: HeartHandshake,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      actionText: 'Đăng nhập Family Portal',
      url: 'https://family.beecare.vn',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FBF7F3] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-gray-400 hover:text-navy-900 hover:bg-gray-200/60 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8">
          <Logo size="md" className="mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
            Chọn Cổng Đăng Nhập Hệ Thống
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Vui lòng chọn vai trò tương ứng để chuyển đến trang đăng nhập phân quyền
          </p>
        </div>

        {/* Portals List */}
        <div className="space-y-3 mb-6">
          {portals.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-xl p-4 border border-gray-200 shadow-xs hover:border-primary/40 hover:shadow-card-hover transition-all flex items-center justify-between cursor-pointer"
                onClick={() => {
                  alert(`Đang chuyển hướng đến ${p.title} (Môi trường Live Demo)`);
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center border ${p.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy-900 group-hover:text-primary transition-colors">
                      {p.title}
                    </div>
                    <div className="text-[11px] text-gray-500">{p.role}</div>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            );
          })}
        </div>

        {/* Security Footer Note */}
        <div className="p-3.5 rounded-lg bg-white/80 border border-gray-200/80 flex items-center justify-center gap-2 text-xs text-gray-500">
          <Lock className="w-3.5 h-3.5 text-primary" />
          <span>Bảo mật 2 lớp SSL/TLS 256-bit & Chứng thực JWT Token</span>
        </div>
      </div>
    </div>
  );
}
