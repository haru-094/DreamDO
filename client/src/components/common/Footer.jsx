import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenPartnerModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091C10] text-white py-16 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between">
          
          {/* Left Brand Details */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 group cursor-pointer"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-[#E25822] inline-block transition-transform duration-300 group-hover:scale-125" />
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                dreamdo
              </span>
            </Link>

            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Equipping children with practical life skills, entrepreneurial thinking, and personal responsibility through hands-on learning.
            </p>

            <div className="pt-2 text-xs text-white/40 font-mono">
              © {new Date().getFullYear()} DreamDo Africa. All rights reserved.
            </div>
          </div>

          {/* Center Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C0F038]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Home (Website Concept)
                </Link>
              </li>
              <li>
                <Link to="/little-farmer" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Little Farmer Program
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-white transition-colors">
                  About DreamDo Africa
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Navigation & Socials */}
          <div className="md:col-span-4 flex flex-col md:items-end space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C0F038]">
              Headquarters
            </div>
            <div className="text-xs sm:text-sm text-white/80 md:text-right space-y-1">
              <div className="font-semibold text-white">Kigali, Rwanda</div>
              <div className="text-white/60">African Leadership University (ALU) Campus</div>
              <div className="text-white/60">Innovation City, Gasabo, Kigali</div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <button
                onClick={onOpenPartnerModal}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#C0F038] hover:text-[#143A22] font-semibold text-white transition-all cursor-pointer"
              >
                Inquire / Partner
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

