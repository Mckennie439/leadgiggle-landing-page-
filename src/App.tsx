import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import FloatingCTA from './components/common/FloatingCTA';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import QuotePage from './pages/QuotePage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import InteriorDesignNairobiPage from './pages/InteriorDesignNairobiPage';
import NotFoundPage from './pages/NotFoundPage';

// Service Pages
import ResidentialDesignPage from './pages/services/ResidentialDesignPage';
import HomeFurnishingPage from './pages/services/HomeFurnishingPage';
import VirtualDesignPage from './pages/services/VirtualDesignPage';
import CustomFurniturePage from './pages/services/CustomFurniturePage';
import HomeRenovationsPage from './pages/services/HomeRenovationsPage';

function AppContent() {
  const location = useLocation();

  // Hide FloatingCTA on quote page
  const shouldShowFloatingCTA = location.pathname !== '/quote';

  // Use compact header on individual blog post pages
  const isBlogPostPage = location.pathname.startsWith('/blog/') && location.pathname !== '/blog' && location.pathname !== '/blog/';
  const isNairobiPage = location.pathname === '/interior-design-nairobi';
  const headerPadding = isNairobiPage ? 'pt-0' : (isBlogPostPage ? 'pt-[64px]' : 'pt-[80px]');

  return (
    <div className={`flex flex-col min-h-screen ${headerPadding}`}>
      {!isNairobiPage && <Header compact={isBlogPostPage} />}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/full-design-services-kenya" element={<ResidentialDesignPage />} />
            <Route path="/services/renovations" element={<HomeRenovationsPage />} />
            <Route path="/services/furnishing" element={<HomeFurnishingPage />} />
            <Route path="/services/virtual-design" element={<VirtualDesignPage />} />
            <Route path="/services/custom-furniture" element={<CustomFurniturePage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:projectSlug" element={<ProjectDetailPage />} />
            <Route path="/portfolio/:projectSlug/:roomSlug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/interior-design-nairobi" element={<InteriorDesignNairobiPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      {shouldShowFloatingCTA && !isNairobiPage && <FloatingCTA />}
      {!isNairobiPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;