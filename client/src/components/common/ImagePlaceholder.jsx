import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function ImagePlaceholder({
  src,
  alt = 'DreamDo Rwanda Little Farmer activity',
  caption,
  badge = 'DreamDo Field Photo',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  isAuthentic = false,
  uploadNote = 'Add your photo here (e.g. /images/...)',
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-[#F2EFE8] shadow-xs ${className}`}>
      
      {/* Aspect Ratio Container */}
      <div className={`w-full ${aspectRatio} relative overflow-hidden bg-[#ECE8DF]`}>
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Placeholder Fallback when image is not provided or fails */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#ECE8DF] to-[#DFDACF]">
            <div className="w-14 h-14 rounded-2xl bg-white/80 text-[#143A22] flex items-center justify-center mb-3 shadow-xs">
              <Camera size={26} className="text-[#143A22]" />
            </div>
            <span className="text-xs font-bold text-[#143A22] uppercase tracking-wider mb-1">
              Photo Space
            </span>
            <p className="text-xs text-[#6A786E] max-w-xs leading-relaxed">
              {alt}
            </p>
          </div>
        )}

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badge */}
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-xs ${
                isAuthentic
                  ? 'bg-[#BAF035] text-[#143A22] border border-[#BAF035]/60'
                  : 'bg-black/60 text-white border border-white/20'
              }`}
            >
              {isAuthentic && <Sparkles size={11} className="text-[#143A22]" />}
              {badge}
            </span>
          </div>
        )}

        {/* Hover Upload / Source Hint */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[10px] font-medium text-[#143A22] shadow-xs">
            <ImageIcon size={11} />
            <span>{uploadNote}</span>
          </div>
        </div>

        {/* Bottom Caption Overlay (if provided) */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
            <p className="text-xs sm:text-sm text-white font-medium leading-snug drop-shadow-sm">
              {caption}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

