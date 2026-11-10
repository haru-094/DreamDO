import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar({ onOpenPartnerModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navHome'), path: '/' },
    { name: t('navLittleFarmer'), path: '/little-farmer' },
    { name: t('navAbout'), path: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-3 border-b border-black/5'
          : 'bg-[#FAF8F5]/60 backdrop-blur-xs py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-3.5 h-3.5 rounded-full bg-[#E25822] inline-block transition-transform duration-300 group-hover:scale-125" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#143A22] font-sans">
              dreamdo
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 bg-black/[0.03] p-1.5 rounded-full border border-black/5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200 ${
                    active
                      ? 'bg-[#143A22] text-white shadow-2xs'
                      : 'text-[#536156] hover:text-[#143A22] hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher Toggle */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-black/10 hover:border-black/20 bg-white/80 text-[#143A22] transition-all cursor-pointer shadow-2xs"
              title="Toggle English / Ikinyarwanda"
              aria-label="Change language"
            >
              <Globe size={13} className="text-[#E25822]" />
              <span className={language === 'en' ? 'font-black text-[#143A22]' : 'text-gray-400 font-normal'}>EN</span>
              <span className="text-gray-300">/</span>
              <span className={language === 'rw' ? 'font-black text-[#143A22]' : 'text-gray-400 font-normal'}>RW</span>
            </button>

            <button
              onClick={onOpenPartnerModal}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#143A22] hover:bg-[#1d4f30] active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              {t('navPartner')}
            </button>
          </div>

          {/* Mobile Right Controls: Language + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full text-[11px] font-bold border border-black/10 bg-white text-[#143A22] flex items-center gap-1"
            >
              <Globe size={11} className="text-[#E25822]" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#143A22] hover:bg-black/5 transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-black/10 px-6 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-base font-semibold py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                    active
                      ? 'bg-[#143A22] text-white'
                      : 'text-[#143A22] hover:bg-black/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={16} className={active ? 'text-white/70' : 'text-[#88968C]'} />
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPartnerModal();
            }}
            className="w-full mt-2 py-3 rounded-full text-sm font-semibold text-white bg-[#143A22] hover:bg-[#1d4f30] transition-colors shadow-sm cursor-pointer"
          >
            {t('navPartner')}
          </button>
        </div>
      )}
    </header>
  );
}
