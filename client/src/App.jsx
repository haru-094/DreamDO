import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import PartnerModal from './components/common/PartnerModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LittleFarmerPage from './pages/LittleFarmerPage';

export default function App() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#161C18] font-sans antialiased selection:bg-[#C0F038] selection:text-[#143A22]">
        {/* Persistent Navigation */}
        <Navbar onOpenPartnerModal={() => setPartnerModalOpen(true)} />

        {/* Page Views */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenPartnerModal={() => setPartnerModalOpen(true)} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenPartnerModal={() => setPartnerModalOpen(true)} />}
            />
            <Route
              path="/little-farmer"
              element={<LittleFarmerPage onOpenPartnerModal={() => setPartnerModalOpen(true)} />}
            />
            {/* Fallback catch-all */}
            <Route
              path="*"
              element={<HomePage onOpenPartnerModal={() => setPartnerModalOpen(true)} />}
            />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer onOpenPartnerModal={() => setPartnerModalOpen(true)} />

        {/* Global Partnership Inquiry Modal */}
        <PartnerModal
          isOpen={partnerModalOpen}
          onClose={() => setPartnerModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
