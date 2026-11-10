import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import PartnerModal from './components/common/PartnerModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LittleFarmerPage from './pages/LittleFarmerPage';

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

          {/* Page Views */}
          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={<HomePage onOpenPartnerModal={handleOpenModal} />}
              />
              <Route
                path="/about"
                element={<AboutPage onOpenPartnerModal={handleOpenModal} />}
              />
              <Route
                path="/little-farmer"
                element={<LittleFarmerPage onOpenPartnerModal={handleOpenModal} />}
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
