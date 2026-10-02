import React, { useState, useRef, useEffect } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Building2,
  Users,
  Sparkles,
  ChevronDown,
  Check,
  ExternalLink,
} from 'lucide-react';

const scaleOptions = [
  {
    value: 'under-30',
    title: 'Dưới 30 người cao tuổi',
    badge: 'Gói Cơ Bản',
    badgeColor: 'bg-blue-50 text-primary border-primary/20',
    desc: 'Phù hợp viện dưỡng lão gia đình hoặc quy mô nhỏ',
    icon: Users,
  },
  {
    value: '30-50',
    title: 'Từ 30 – 50 người cao tuổi',
    badge: 'Phổ Biến Nhất',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    desc: 'Quy mô tiêu chuẩn cho đa số cơ sở dưỡng lão tư nhân',
    icon: Building2,
  },
  {
    value: '50-100',
    title: 'Từ 50 – 100 người cao tuổi',
    badge: 'Gói Chuyên Nghiệp',
    badgeColor: 'bg-sky-50 text-secondary border-secondary/20',
    desc: 'Dành cho cơ sở đa khoa phòng, yêu cầu phân ca chi tiết',
    icon: Building,
  },
  {
    value: 'over-100',
    title: 'Trên 100 người cao tuổi',
    badge: 'Gói Doanh Nghiệp',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    desc: 'Tổ hợp dưỡng lão cao cấp hoặc chuỗi viện toàn quốc',
    icon: Sparkles,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    facilityName: '',
    bedCount: '30-50',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [scaleDropdownOpen, setScaleDropdownOpen] = useState(false);
  const scaleDropdownRef = useRef(null);

  const selectedScaleOption =
    scaleOptions.find((opt) => opt.value === formData.bedCount) || scaleOptions[1];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (scaleDropdownRef.current && !scaleDropdownRef.current.contains(event.target)) {
        setScaleDropdownOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setScaleDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên của bạn.';
    }

    // Vietnamese phone number regex: 10 digits starting with 03, 05, 07, 08, 09
    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại liên hệ.';
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Số điện thoại không hợp lệ (cần 10 chữ số, bắt đầu bằng 03, 05, 07, 08, 09).';
    }

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Vui lòng nhập địa chỉ email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Định dạng email không hợp lệ (ví dụ: bamd@beecare.vn).';
    }

    if (!formData.facilityName.trim()) {
      errs.facilityName = 'Vui lòng nhập tên Viện dưỡng lão hoặc Cơ sở chăm sóc.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call to backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFD] border-b border-gray-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill bg-primary-light text-primary mb-4 mx-auto">
            <PhoneCall className="w-4 h-4 text-accent" />
            <span>Tư Vấn & Triển Khai Toàn Quốc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Đăng Ký Khảo Sát & Nhận Demo Miễn Phí
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Đội ngũ chuyên gia công nghệ và cố vấn y khoa BeeCare luôn sẵn sàng lắng nghe bài toán
            vận hành thực tế tại cơ sở của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-navy-900 border-b border-gray-100 pb-4">
                Thông Tin Trực Tuyến 24/7
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Hotline Cố Vấn Triển Khai</div>
                  <a
                    href="tel:0988123531"
                    className="text-lg font-bold text-primary hover:underline font-mono"
                  >
                    0988 123 531
                  </a>
                  <div className="text-xs text-gray-400">Tư vấn giải pháp & Hỗ trợ kỹ thuật 24/7</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Email Ban Giám Đốc Dự Án</div>
                  <a
                    href="mailto:trang.haniki@gmail.com"
                    className="text-base font-bold text-navy-900 hover:text-primary"
                  >
                    trang.haniki@gmail.com
                  </a>
                  <div className="text-xs text-gray-400">CÔNG TY TNHH HANIKI</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Trụ Sở Điều Hành</div>
                  <a
                    href="https://maps.app.goo.gl/ck1aXfgcijSMhmdc9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-navy-900 hover:text-primary transition-colors inline-flex items-center gap-1.5 group"
                    title="Mở vị trí Tòa nhà Handico trên Google Maps"
                  >
                    <span>Tầng 30, Tòa nhà Handico, Phạm Hùng, Mễ Trì, Hà Nội</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary flex-shrink-0" />
                  </a>
                  <div className="text-xs text-gray-500 mt-1">
                    CÔNG TY TNHH HANIKI
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-success flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Giờ Làm Việc Cố Vấn</div>
                  <div className="text-sm font-bold text-navy-900">Thứ 2 – Thứ 7: 08:00 – 18:00</div>
                  <div className="text-xs text-success font-medium">
                    Hệ thống Server & Cảnh báo hoạt động 24/7/365
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed with Handico Tower Pin */}
            <div className="relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm h-64 group">
              <iframe
                title="Bản đồ văn phòng Handico Tower - CÔNG TY TNHH HANIKI"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.468766440816!2d105.77970541533202!3d21.016692893660525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d69594b35%3A0x56c7da1281efdc2f!2sHandico%20Tower!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.app.goo.gl/ck1aXfgcijSMhmdc9"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white text-navy-900 text-xs font-semibold rounded-lg shadow-md border border-gray-200/80 backdrop-blur-sm transition-all duration-200 hover:text-primary hover:border-primary/40 hover:shadow-lg cursor-pointer"
                title="Mở trực tiếp Tòa nhà Handico Tower trên Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Mở trong Google Maps</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-8 sm:p-10 border border-gray-200 shadow-md">
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-success-bg text-success mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Đăng Ký Thành Công!</h3>
                  <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                    Cảm ơn Quý viện đã gửi yêu cầu. Chuyên viên cố vấn chuyển đổi số BeeCare sẽ liên
                    hệ trực tiếp qua số điện thoại <strong>{formData.phone}</strong> trong vòng 30
                    phút để hẹn lịch demo chi tiết.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        facilityName: '',
                        bedCount: '30-50',
                        message: '',
                      });
                    }}
                    className="btn-secondary px-6 py-2.5 text-xs font-semibold mt-4"
                  >
                    Gửi thêm yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-gray-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-navy-900">
                      Gửi Thông Tin Cơ Sở Để Nhận Khảo Sát & Báo Giá
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Chúng tôi cam kết bảo mật 100% thông tin cơ sở của bạn.
                    </p>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5"
                      >
                        Họ và tên người liên hệ <span className="text-danger">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: null });
                        }}
                        placeholder="VD: Nguyễn Văn An"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? 'border-danger focus:ring-danger/20'
                            : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-danger mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5"
                      >
                        Số điện thoại di động <span className="text-danger">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        placeholder="VD: 0908 123 456"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-danger focus:ring-danger/20'
                            : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-danger mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Facility Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5"
                      >
                        Địa chỉ Email <span className="text-danger">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="VD: giamdoc@vienduonglao.vn"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-danger focus:ring-danger/20'
                            : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-danger mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="facilityName"
                        className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5"
                      >
                        Tên Viện dưỡng lão / Cơ sở <span className="text-danger">*</span>
                      </label>
                      <input
                        id="facilityName"
                        type="text"
                        value={formData.facilityName}
                        onChange={(e) => {
                          setFormData({ ...formData, facilityName: e.target.value });
                          if (errors.facilityName) setErrors({ ...errors, facilityName: null });
                        }}
                        placeholder="VD: Viện Dưỡng Lão An Nhiên"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.facilityName
                            ? 'border-danger focus:ring-danger/20'
                            : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                        }`}
                      />
                      {errors.facilityName && (
                        <p className="text-xs text-danger mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.facilityName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Senior Scale Custom SaaS Dropdown */}
                  <div className="relative" ref={scaleDropdownRef}>
                    <label
                      htmlFor="scaleSelectButton"
                      className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5"
                    >
                      Quy mô người cao tuổi hiện tại
                    </label>

                    {/* Trigger Button */}
                    <button
                      id="scaleSelectButton"
                      type="button"
                      onClick={() => setScaleDropdownOpen(!scaleDropdownOpen)}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-left transition-all duration-200 flex items-center justify-between gap-3 shadow-xs cursor-pointer ${
                        scaleDropdownOpen
                          ? 'border-primary ring-2 ring-primary/20 shadow-md'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                      aria-haspopup="listbox"
                      aria-expanded={scaleDropdownOpen}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                          {React.createElement(selectedScaleOption?.icon || Users, { className: 'w-4 h-4' })}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 min-w-0">
                          <span className="font-semibold text-navy-900 text-sm truncate">
                            {selectedScaleOption?.title || 'Chọn quy mô người cao tuổi'}
                          </span>
                          {selectedScaleOption?.badge && (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md border w-fit ${selectedScaleOption.badgeColor}`}
                            >
                              {selectedScaleOption.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center text-gray-400 pl-2">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            scaleDropdownOpen ? 'rotate-180 text-primary' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Floating Dropdown Menu (No scroll, exactly 4 items) */}
                    {scaleDropdownOpen && (
                      <div
                        role="listbox"
                        className="absolute left-0 right-0 top-full mt-2 z-40 bg-white rounded-xl border border-gray-200 shadow-2xl p-1.5 animate-in fade-in zoom-in-95 duration-150 overflow-hidden"
                      >
                        {scaleOptions.map((opt) => {
                          const isSelected = formData.bedCount === opt.value;
                          const IconComp = opt.icon;
                          return (
                            <div
                              key={opt.value}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData({ ...formData, bedCount: opt.value });
                                setScaleDropdownOpen(false);
                              }}
                              className={`p-2 sm:p-2.5 rounded-lg transition-all duration-150 cursor-pointer flex items-center justify-between gap-3 mb-1 last:mb-0 group ${
                                isSelected
                                  ? 'bg-primary-light/70 text-navy-900 shadow-xs'
                                  : 'hover:bg-[#F8FAFD] text-gray-700'
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div
                                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                                    isSelected
                                      ? 'bg-primary text-white shadow-xs'
                                      : 'bg-gray-100 text-gray-500 group-hover:bg-primary-light group-hover:text-primary'
                                  }`}
                                >
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`text-sm ${
                                        isSelected ? 'font-bold text-navy-900' : 'font-semibold text-gray-800'
                                      }`}
                                    >
                                      {opt.title}
                                    </span>
                                    <span
                                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md border hidden sm:inline-block ${opt.badgeColor}`}
                                    >
                                      {opt.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-gray-500 truncate mt-0.5">{opt.desc}</p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md border sm:hidden ${opt.badgeColor}`}
                                >
                                  {opt.badge}
                                </span>
                                {isSelected ? (
                                  <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shadow-xs">
                                    <Check className="w-3 h-3 stroke-[3]" />
                                  </div>
                                ) : (
                                  <div className="w-4 h-4 rounded-full border border-gray-300 opacity-60 group-hover:border-primary/50" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5"
                    >
                      Nhu cầu cần tư vấn thêm (tùy chọn)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mô tả khó khăn hiện tại trong xếp ca, quản lý bệnh án hoặc kế hoạch triển khai của viện..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-base font-semibold shadow-md hover:shadow-glow disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Đang xử lý thông tin...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Đăng Ký Khảo Sát & Nhận Demo 30 Ngày</span>
                      </div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
