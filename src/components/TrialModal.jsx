import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function TrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    facility: '',
    email: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.facility.trim()) {
      setError('Vui lòng điền đầy đủ họ tên, số điện thoại và tên cơ sở.');
      return;
    }
    setError('');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-gray-400 hover:text-navy-900 hover:bg-gray-100 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-success-bg text-success mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">Đã Kích Hoạt Đăng Ký!</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Tài khoản trải nghiệm 30 ngày cho cơ sở <strong>{formData.facility}</strong> đang được
              khởi tạo. Chúng tôi sẽ gửi thông tin đăng nhập qua số <strong>{formData.phone}</strong>.
            </p>
            <button onClick={onClose} className="btn-primary w-full py-3 text-xs font-semibold">
              Xác nhận và đóng
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <Logo size="sm" className="mx-auto mb-2" />
              <h3 className="text-xl font-extrabold text-navy-900">
                Đăng Ký Dùng Thử 30 Ngày Miễn Phí
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Trải nghiệm trọn bộ Web Admin & 2 Mobile App không giới hạn tính năng
              </p>
            </div>

            {error && (
              <div className="p-2.5 rounded-lg bg-danger-bg text-danger text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                Họ và tên người đăng ký *
              </label>
              <input
                type="text"
                placeholder="VD: Bác sĩ Lê Văn B"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                Số điện thoại liên hệ *
              </label>
              <input
                type="tel"
                placeholder="VD: 0912 345 678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                Tên Viện dưỡng lão / Cơ sở *
              </label>
              <input
                type="text"
                placeholder="VD: Viện Lão Khoa Phúc Thọ"
                value={formData.facility}
                onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                Email nhận tài khoản (tùy chọn)
              </label>
              <input
                type="email"
                placeholder="VD: banlanhdao@phuctho.vn"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3.5 text-sm font-semibold shadow-md mt-2"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Kích Hoạt Tài Khoản Dùng Thử Ngay</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-success" />
              <span>Không cần nhập thẻ tín dụng · Hỗ trợ kỹ thuật 24/7</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
