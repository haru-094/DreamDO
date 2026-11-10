import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function PartnerModal({ isOpen, onClose, initialData = null }) {
  const { language } = useLanguage();
  const [partnerType, setPartnerType] = useState('school');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    location: '',
    message: '',
  });

  useEffect(() => {
    if (initialData) {
      if (initialData.type) setPartnerType(initialData.type);
      if (initialData.message) {
        setFormData((prev) => ({ ...prev, message: initialData.message }));
      }
    }
  }, [initialData, isOpen]);

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

  const isRw = language === 'rw';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-black/5 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
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
              {isRw ? 'Murakoze cyane kutwandikira!' : 'Thank you for reaching out!'}
            </h3>
            <p className="text-sm text-[#556358] max-w-sm mx-auto leading-relaxed">
              {isRw
                ? 'Itsinda rya DreamDo i Kigali ryakiriye ubutumwa bwanyu. Tuzabavugisha mu masaha 24 kugira ngo tuganire ku kuzana Umuhinzi Muto mu kigo cyangwa mu muryango wanyu.'
                : 'The DreamDo team in Kigali has received your message. We will connect with you within 24 hours to discuss bringing Little Farmer to your community.'}
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#143A22] hover:bg-[#1a4a2c] transition-colors cursor-pointer"
            >
              {isRw ? 'Funga' : 'Close'}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#E25822] uppercase font-mono">
                {isRw ? 'TUVUGISHE' : 'GET IN TOUCH'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#143A22] tracking-tight mt-1">
                {isRw ? 'Fatanya n’Umuhinzi Muto' : 'Partner with Little Farmer'}
              </h3>
              <p className="text-xs sm:text-sm text-[#556358] mt-1.5">
                {isRw
                  ? 'Kora ku mushinga w’ubuhinzi n’ubumenyi bw’imari ku bana b’u Rwanda.'
                  : 'Join schools, families, and community leaders across Rwanda.'}
              </p>
            </div>

            {/* Partner Category Selector */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { id: 'school', label: isRw ? 'Ikigo cy’Ishuri' : 'School' },
                { id: 'parent', label: isRw ? 'Umuryango' : 'Family' },
                { id: 'community', label: isRw ? 'Umufatanyabikorwa' : 'Partner / NGO' },
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
                  {isRw ? 'Amazina Yombi *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isRw ? 'urugero: Marie Mukamana' : 'e.g. Marie Mukamana'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#143A22] focus:ring-1 focus:ring-[#143A22] outline-hidden text-sm bg-[#FAF8F5]/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#143A22] mb-1">
                    {isRw ? 'Imeyili *' : 'Email Address *'}
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
                    {isRw ? 'Ikigo cyangwa Ishuri' : 'Organization / School'}
                  </label>
                  <input
                    type="text"
                    placeholder={isRw ? 'urugero: GS Masaka' : 'e.g. Kigali International Academy'}
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#143A22] focus:ring-1 focus:ring-[#143A22] outline-hidden text-sm bg-[#FAF8F5]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#143A22] mb-1">
                  {isRw ? 'Akarere / Aho Muherereye' : 'Location (District / City)'}
                </label>
                <input
                  type="text"
                  placeholder={isRw ? 'urugero: Kicukiro, Kigali' : 'e.g. Gasabo, Kigali'}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#143A22] focus:ring-1 focus:ring-[#143A22] outline-hidden text-sm bg-[#FAF8F5]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#143A22] mb-1">
                  {isRw ? 'Ubutumwa / Icyo mwifuza' : 'Message / Inquiries'}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    isRw
                      ? 'Tubwire ku banyeshuri banyu, umwanya w’ubusitani, cyangwa inkunga mwifuza gutanga...'
                      : 'Tell us about your cohort, students age range, or garden space...'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:border-[#143A22] focus:ring-1 focus:ring-[#143A22] outline-hidden text-sm bg-[#FAF8F5]/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-bold text-white bg-[#143A22] hover:bg-[#1a4a2c] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{isRw ? 'Ohereza Ubusabe bwo Gufatanya' : 'Submit Partnership Request'}</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
