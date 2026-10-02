import React from 'react';
import { Link } from 'react-router-dom';
import {
  Newspaper,
  Calendar,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { newsArticles } from '../data/newsData';

export default function News({ onSelectArticle }) {
  const articles = newsArticles;

  return (
    <section id="news" className="py-20 md:py-28 bg-[#FBF7F3] border-b border-gray-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="badge-pill bg-primary-light text-primary mb-3">
              <Newspaper className="w-4 h-4 text-accent" />
              <span>Tin Tức & Sự Kiện</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              Tin Tức
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Cập nhật các tin tức, hoạt động thiện nguyện vì cộng đồng và sự kiện mới nhất.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/tin-tuc"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-semibold text-primary hover:bg-primary-light transition-all shadow-xs"
            >
              <span>Xem tất cả tin tức</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    width="800"
                    height="500"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {art.category}
                  </span>
                </div>

                {/* Article Meta */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 sm:px-7 pb-5 pt-2 border-t border-gray-100 mt-auto flex items-center justify-end">
                <button
                  onClick={() => onSelectArticle(art)}
                  className="inline-flex items-center gap-1.5 text-primary font-bold text-xs py-2 px-3 rounded-lg hover:bg-primary-light transition-colors group/btn"
                  aria-label={`Đọc bài viết: ${art.title}`}
                >
                  <span>Đọc tiếp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
