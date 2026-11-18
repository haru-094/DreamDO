import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import PartnerModal from './components/common/PartnerModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LittleFarmerPage from './pages/LittleFarmerPage';
import SponsorPage from './pages/SponsorPage';
import ProductsServicesPage from './pages/ProductsServicesPage';
import StoriesResourcesPage from './pages/StoriesResourcesPage';

export default function App() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [modalPreFill, setModalPreFill] = useState(null);

  const handleOpenModal = (prefillData = null) => {
    setModalPreFill(prefillData);
    setPartnerModalOpen(true);
  };

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#161C18] font-sans antialiased selection:bg-[#C0F038] selection:text-[#143A22]">
          {/* Persistent Navigation */}
          <Navbar onOpenPartnerModal={() => handleOpenModal()} />

          {/* Page Views (6 Core Routes) */}
          <main className="flex-1">
            <Routes>
              {/* 1. Home */}
              <Route
                path="/"
                element={<HomePage onOpenPartnerModal={handleOpenModal} />}
              />

              {/* 2. Our Approach */}
              <Route
                path="/our-approach"
                element={<AboutPage onOpenPartnerModal={handleOpenModal} />}
              />

              {/* 3. Little Farmer */}
              <Route
                path="/little-farmer"
                element={<LittleFarmerPage onOpenPartnerModal={handleOpenModal} />}
              />

              {/* 4. Products & Services */}
              <Route
                path="/products-services"
                element={<ProductsServicesPage onOpenPartnerModal={handleOpenModal} />}
              />

              {/* 5. For Schools & Communities */}
              <Route
                path="/schools-communities"
                element={<SponsorPage onOpenPartnerModal={handleOpenModal} />}
              />

              {/* 6. Stories & Resources */}
              <Route
                path="/stories-resources"
                element={<StoriesResourcesPage onOpenPartnerModal={handleOpenModal} />}
              />

              {/* Backward-compatibility aliases */}
              <Route
                path="/sponsor"
                element={<SponsorPage onOpenPartnerModal={handleOpenModal} />}
              />
              <Route
                path="/about"
                element={<AboutPage onOpenPartnerModal={handleOpenModal} />}
              />

              {/* Fallback catch-all */}
              <Route
                path="*"
                element={<HomePage onOpenPartnerModal={handleOpenModal} />}
              />
            </Routes>
          </main>

          {/* Persistent Footer */}
          <Footer onOpenPartnerModal={() => handleOpenModal()} />

          {/* Global Partnership Inquiry Modal */}
          <PartnerModal
            isOpen={partnerModalOpen}
            onClose={() => setPartnerModalOpen(false)}
            initialData={modalPreFill}
          />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
