import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export default function Header({ onOpenLogin, onOpenTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', path: '/', id: 'home' },
    { label: 'Tin tức', path: '/tin-tuc', id: 'news' },
    { label: 'Bảng giá', path: '/bang-gia', id: 'pricing' },
    { label: 'Công ty', path: '/cong-ty', id: 'company' },
    { label: 'Liên hệ', path: '/lien-he', id: 'contact' },
  ];

  const isLinkActive = (linkPath) => {
    if (linkPath === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(linkPath);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF7F3]/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-3'
            : 'bg-[#FBF7F3] py-4 border-b border-transparent'
        }`}
      >
        <div className="section-container relative flex items-center justify-between">
          {/* Logo with link to Home */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none z-10"
            aria-label="BeeCare Trang chủ"
          >
            <Logo layout="horizontal" variant="default" size="md" />
          </Link>

          {/* Desktop Navigation (>= 1081px, mathematically centered) */}
          <nav
            aria-label="Điều hướng chính"
            className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-xl border border-gray-200/80 shadow-xs absolute left-1/2 -translate-x-1/2"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-gray-600 hover:text-primary hover:bg-primary-light/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 z-10">
            <a
              href="http://103.170.123.248:8088/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2 text-sm font-semibold shadow-sm hover:shadow-glow inline-flex items-center gap-2"
              aria-label="Trải nghiệm ngay BeeCare"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Trải nghiệm ngay</span>
            </a>
          </div>

          {/* Mobile / Tablet Hamburger Toggle (<= 1080px) */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="http://103.170.123.248:8088/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary px-3.5 py-1.5 text-xs font-semibold"
            >
              Trải nghiệm ngay
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-navy-800 bg-white border border-gray-200 hover:bg-primary-light hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (<= 1080px) with smooth backdrop */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-navy-950/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#FBF7F3] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <Logo layout="horizontal" size="sm" showSubtitle={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                aria-label="Đóng menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2" aria-label="Menu di động">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      active
                        ? 'bg-primary text-white shadow-xs'
                        : 'text-navy-900 hover:bg-white hover:text-primary'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 border-t border-gray-200 flex flex-col gap-3">
            <a
              href="http://103.170.123.248:8088/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full py-3 text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Trải nghiệm ngay</span>
            </a>
            <div className="text-center mt-2">
              <a
                href="tel:0988123531"
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary"
              >
                <PhoneCall className="w-3.5 h-3.5 text-primary" />
                <span>Hotline tư vấn: 0988 123 531</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
