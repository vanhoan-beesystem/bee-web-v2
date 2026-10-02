import React from 'react';
import { X, Calendar, Clock, Share2, Bookmark, Check } from 'lucide-react';

export default function NewsModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl overflow-y-auto border border-gray-200 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-light px-3 py-1 rounded-full">
            {article.category}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:text-navy-900 hover:bg-gray-100 transition-colors"
            aria-label="Đóng bài viết"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Cover Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pb-4 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
            {article.title}
          </h2>

          <div className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans whitespace-pre-line space-y-4">
            {article.fullContent}
          </div>

          {/* Photo Gallery if article has extra photos */}
          {article.gallery && article.gallery.length > 0 && (
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Hình ảnh trải nghiệm thực tế</span>
                </h4>
                <span className="text-xs text-gray-500 font-medium">({article.gallery.length} khoảnh khắc)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {article.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.caption || 'Hình ảnh sự kiện'}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {item.caption && (
                      <p className="p-3.5 text-xs text-gray-700 bg-white border-t border-gray-100 leading-snug italic">
                        {item.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Social Share & Close */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              © CÔNG TY TNHH HANIKI 2026 • Hệ sinh thái quản lý viện dưỡng lão BeeCare
            </div>
            <button
              onClick={onClose}
              className="btn-primary px-6 py-2.5 text-xs font-semibold"
            >
              Đóng và tiếp tục xem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
