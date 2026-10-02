import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  Clock,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  Share2,
} from 'lucide-react';
import { newsCategories, newsArticles } from '../data/newsData';

export default function NewsPage({ onSelectArticle }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = newsCategories;
  const allArticles = newsArticles;

  const filteredArticles = allArticles.filter((art) => {
    const matchesCat = selectedCategory === 'all' || art.categoryKey === selectedCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#FBF7F3] min-h-screen">
      <div className="section-container">
        {/* Page Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="badge-pill bg-primary-light text-primary mx-auto">
            <Newspaper className="w-4 h-4 text-accent" />
            <span>Tin Tức & Sự Kiện</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === c.id
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-[#F4F6FA] text-gray-600 hover:text-navy-900 hover:bg-gray-200/60'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 bg-[#FBF7F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Featured Article Top Card (If on 'all', no search and more than 2 articles) */}
        {selectedCategory === 'all' && !searchQuery && allArticles.length > 2 && (
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md mb-12 grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-7 h-72 sm:h-96 overflow-hidden bg-slate-100">
              <img
                src={allArticles[0].image}
                alt={allArticles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-cyan-50 px-3 py-1 rounded-full inline-block mb-4">
                  Bài viết tiêu điểm
                </span>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{allArticles[0].date}</span>
                  <span>•</span>
                  <span>{allArticles[0].readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 leading-snug mb-4 group-hover:text-primary transition-colors">
                  {allArticles[0].title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                  {allArticles[0].excerpt}
                </p>
              </div>

              <button
                onClick={() => onSelectArticle(allArticles[0])}
                className="btn-primary w-full py-3 text-xs font-semibold"
              >
                <span>Đọc bài viết tiêu điểm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8 max-w-xl mx-auto shadow-sm">
            <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Không tìm thấy bài viết nào phù hợp.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
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

                <div className="p-6">
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

                  <h3 className="text-base font-bold text-navy-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-2 border-t border-gray-100 mt-auto flex items-center justify-end">
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
        )}
      </div>
    </div>
  );
}
