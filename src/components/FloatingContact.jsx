import React, { useState } from 'react';

export default function FloatingContact({
  phone = '0988 123 531',
  phoneTel = '0988123531',
  zaloUrl = 'https://zalo.me/0988123531',
  facebookUrl = 'https://www.facebook.com/profile.php?id=61582996425862',
  tiktokUrl = 'https://www.tiktok.com',
}) {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = (e) => {
    // Desktop: copy phone to clipboard and allow instant dialing
    if (navigator.clipboard && window.innerWidth >= 1024) {
      navigator.clipboard.writeText(phoneTel);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const contactItems = [
    {
      id: 'facebook',
      name: 'Facebook Messenger',
      subtitle: 'Tư vấn trực tuyến 24/7',
      href: facebookUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      outerBorder: 'border-[#bfdbfe]', // light blue ring exactly like screenshot
      outerRingHover: 'hover:border-[#60a5fa] hover:shadow-blue-200/70',
      innerBg: 'bg-[#1877F2]',
      waveBorder1: 'border-[#1877F2]/60',
      waveBorder2: 'border-[#3b82f6]/40',
      delay1: '-0.0s',
      delay2: '-0.7s',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: 'zalo',
      name: 'Chat Zalo',
      subtitle: `Kết nối ngay: ${phone}`,
      href: zaloUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      outerBorder: 'border-[#bfdbfe]', // light blue ring exactly like screenshot
      outerRingHover: 'hover:border-[#60a5fa] hover:shadow-sky-200/70',
      innerBg: 'bg-[#0068FF]',
      waveBorder1: 'border-[#0068FF]/60',
      waveBorder2: 'border-[#38bdf8]/40',
      delay1: '-0.6s',
      delay2: '-1.3s',
      icon: (
        <svg viewBox="0 0 100 100" className="w-7 h-7 sm:w-[30px] sm:h-[30px]">
          {/* White speech bubble */}
          <path
            d="M50 15 C26 15 12 28 12 44 C12 53 17 61 25 66 L21 84 C20.5 86 22.7 87.5 24.3 86.3 L42 74 C44.6 74.6 47.3 75 50 75 C74 75 88 62 88 44 C88 28 74 15 50 15 Z"
            fill="#FFFFFF"
          />
          {/* Blue Zalo wordmark */}
          <text
            x="49"
            y="49"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#0068FF"
            fontWeight="800"
            fontSize="27"
            fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="-0.5px"
          >
            Zalo
          </text>
        </svg>
      ),
    },
    {
      id: 'hotline',
      name: 'Hotline Tư Vấn',
      subtitle: copied ? '✓ Đã sao chép số điện thoại!' : `Gọi ngay: ${phone}`,
      href: `tel:${phoneTel}`,
      onClick: handlePhoneClick,
      isHotline: true,
      outerBorder: 'border-[#fecdd3]', // light red/pink ring exactly like screenshot
      outerRingHover: 'hover:border-[#f43f5e] hover:shadow-red-200/80',
      innerBg: 'bg-[#E53935]',
      waveBorder1: 'border-[#E53935]/70',
      waveBorder2: 'border-[#f87171]/45',
      delay1: '-1.2s',
      delay2: '-1.9s',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white animate-contact-phone"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            fill="currentColor"
          />
          <path d="M14 2a9 9 0 0 1 8 8" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M14 6a5 5 0 0 1 4 4" fill="none" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      ),
    },
    {
      id: 'tiktok',
      name: 'TikTok BeeCare',
      subtitle: 'Xem video giải pháp thực tế',
      href: tiktokUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      outerBorder: 'border-[#e2e8f0]', // light gray ring exactly like screenshot
      outerRingHover: 'hover:border-slate-400 hover:shadow-slate-200/80',
      innerBg: 'bg-[#000000]',
      waveBorder1: 'border-slate-800/60',
      waveBorder2: 'border-[#25F4EE]/45',
      delay1: '-1.8s',
      delay2: '-0.1s',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-[22px] sm:h-[22px]">
          {/* Cyan layer offset */}
          <path
            d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 2.308-4.634c.307 0 .604.05.882.141V9.405a6.34 6.34 0 0 0-.882-.062 6.34 6.34 0 1 0 6.338 6.34V7.868a8.214 8.214 0 0 0 4.77 1.517V6.686z"
            fill="#25F4EE"
            transform="translate(-0.8, -0.8)"
          />
          {/* Magenta / Red layer offset */}
          <path
            d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 2.308-4.634c.307 0 .604.05.882.141V9.405a6.34 6.34 0 0 0-.882-.062 6.34 6.34 0 1 0 6.338 6.34V7.868a8.214 8.214 0 0 0 4.77 1.517V6.686z"
            fill="#FE2C55"
            transform="translate(0.8, 0.8)"
          />
          {/* White top layer */}
          <path
            d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 2.308-4.634c.307 0 .604.05.882.141V9.405a6.34 6.34 0 0 0-.882-.062 6.34 6.34 0 1 0 6.338 6.34V7.868a8.214 8.214 0 0 0 4.77 1.517V6.686z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside
      aria-label="Liên hệ nhanh qua mạng xã hội và hotline"
      className="fixed right-3 sm:right-5 bottom-6 sm:bottom-8 z-40 flex flex-col items-center gap-2.5 sm:gap-3 select-none"
    >
      {contactItems.map((item) => (
        <div
          key={item.id}
          className="relative group flex items-center justify-end"
        >
          {/* Interactive Tooltip on hover (Desktop) */}
          <div className="hidden lg:flex absolute right-full mr-3.5 items-center pointer-events-none opacity-0 translate-x-2 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-200 ease-out z-50">
            <div className="bg-navy-950/95 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-2xl border border-slate-700/70 whitespace-nowrap flex flex-col items-end">
              <span className="text-xs font-bold leading-tight flex items-center gap-1.5 text-white">
                {item.name}
                {item.isHotline && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </span>
              <span className="text-[11px] text-slate-300 font-medium">{item.subtitle}</span>
            </div>
            {/* Triangular arrow point */}
            <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-navy-950/95 ml-[-1px]" />
          </div>

          {/* Radiating Ripple Pulse Rings for ALL 4 buttons (Option 1 - Mức A) */}
          <span
            className={`absolute inset-0 rounded-full border ${item.waveBorder1} animate-contact-wave pointer-events-none`}
            style={{ animationDelay: item.delay1 }}
          />
          <span
            className={`absolute inset-0 rounded-full border ${item.waveBorder2} animate-contact-wave pointer-events-none`}
            style={{ animationDelay: item.delay2 }}
          />

          {/* Main Floating Button with concentric double ring matching the photo */}
          <a
            href={item.href}
            target={item.target}
            rel={item.rel}
            onClick={item.onClick}
            title={item.name}
            aria-label={item.name}
            className={`relative flex items-center justify-center w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full border ${item.outerBorder} ${item.outerRingHover} bg-white shadow-sm hover:shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 p-0.5 sm:p-1`}
          >
            {/* Inner Solid Brand Circle */}
            <div
              className={`w-full h-full rounded-full ${item.innerBg} flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105`}
            >
              {item.icon}
            </div>
          </a>
        </div>
      ))}
    </aside>
  );
}
