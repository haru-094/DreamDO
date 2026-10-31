import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

export default function PartnerModal({ isOpen, onClose }) {
  const [partnerType, setPartnerType] = useState('school');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    location: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      location: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-black/5 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-black/40 hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#143A22]/10 text-[#143A22] flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} className="text-[#143A22]" />
            </div>
            <h3 className="text-2xl font-bold text-[#143A22]">
              Thank you for reaching out!
            </h3>
            <p className="text-sm text-[#556358] max-w-sm mx-auto leading-relaxed">
              The DreamDo team in Kigali has received your message. We will connect with you within 24 hours to discuss bringing Little Farmer to your community.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#143A22] hover:bg-[#1a4a2c] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#143A22] tracking-tight mt-1">
                Partner with Little Farmer
              </h3>
              <p className="text-xs sm:text-sm text-[#556358] mt-1.5">
                Join schools, families, and community leaders across Rwanda.
              </p>
            </div>

            {/* Partner Category Selector */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { id: 'school', label: 'School' },
                { id: 'parent', label: 'Family' },
                { id: 'community', label: 'Community' },
              ].map((tab) => (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setPartnerType(tab.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    partnerType === tab.id
                      ? 'bg-[#143A22] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-[#556358] hover:bg-black/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#143A22] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marie Mukamana"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#143A22] focus:ring-1 focus:ring-[#143A22] outline-hidden text-sm bg-[#FAF8F5]/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#143A22] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@school.rw"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#143A22] focus:ring-1 focus:ring-[#143A22] outline-hidden text-sm bg-[#FAF8F5]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#143A22] mb-1">
                    Organization / School
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kigali International Academy"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#143A22] focus:ring-1 focus:ring-[#143A22] outline-hidden text-sm bg-[#FAF8F5]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#143A22] mb-1">
                  Location (District / City)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gasabo, Kigali"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#143A22] focus:ring-1 focus:ring-[#143A22] outline-hidden text-sm bg-[#FAF8F5]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#143A22] mb-1">
                  Message / Inquiries
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your cohort, students age range, or garden space..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#143A22] focus:ring-1 focus:ring-[#143A22] outline-hidden text-sm bg-[#FAF8F5]/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Submit Partnership Request</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

