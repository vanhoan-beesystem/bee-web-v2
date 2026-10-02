import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';

// Dedicated Pages
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import PricingPage from './pages/PricingPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';

// Modals
import VideoModal from './components/VideoModal';
import LoginModal from './components/LoginModal';
import NewsModal from './components/NewsModal';
import TrialModal from './components/TrialModal';

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleOpenTrial = () => setTrialModalOpen(true);
  const handleOpenLogin = () => setLoginModalOpen(true);
  const handleOpenVideo = () => setVideoModalOpen(true);

  return (
    <BrowserRouter>
      {/* Scroll to top automatically on route navigation */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-bg-body text-navy-900 font-sans selection:bg-primary-light selection:text-primary">
        {/* Sticky Header with Dynamic Route Highlighting */}
        <Header
          onOpenLogin={handleOpenLogin}
          onOpenTrial={handleOpenTrial}
        />

        {/* Main Content Router */}
        <main className="flex-1">
          <Routes>
            {/* 1. Trang Chủ */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenVideo={handleOpenVideo}
                  onOpenTrial={handleOpenTrial}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                />
              }
            />

            {/* 2. Trang Tin Tức Riêng Biệt */}
            <Route
              path="/tin-tuc"
              element={
                <NewsPage
                  onSelectArticle={(art) => setSelectedArticle(art)}
                />
              }
            />

            {/* 3. Trang Bảng Giá Riêng Biệt */}
            <Route
              path="/bang-gia"
              element={
                <PricingPage
                  onOpenTrial={handleOpenTrial}
                />
              }
            />

            {/* 4. Trang Công Ty (Giới thiệu HANIKI) */}
            <Route
              path="/cong-ty"
              element={
                <CompanyPage
                  onOpenTrial={handleOpenTrial}
                />
              }
            />

            {/* 5. Trang Liên Hệ Riêng Biệt */}
            <Route
              path="/lien-he"
              element={
                <ContactPage
                  onOpenTrial={handleOpenTrial}
                />
              }
            />

            {/* Fallback to Home */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenVideo={handleOpenVideo}
                  onOpenTrial={handleOpenTrial}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                />
              }
            />
          </Routes>
        </main>

        {/* Chân Trang Đồng Bộ */}
        <Footer />

        {/* Nút liên hệ nhanh bên góc phải (Floating Speed Dial) */}
        <FloatingContact />

        {/* Toàn Cục Modals */}
        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
        />

        <LoginModal
          isOpen={loginModalOpen}
          onClose={() => setLoginModalOpen(false)}
        />

        <NewsModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

        <TrialModal
          isOpen={trialModalOpen}
          onClose={() => setTrialModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
