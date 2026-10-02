import React from 'react';

/**
 * Official BeeCare Logo component
 * Uses the authentic BeeCare logo directly from the user's official asset:
 * (Bee + Heart ECG rhythm + "BEE CARE" typography)
 *
 * Supported options:
 * - layout: 'horizontal' (default, optimal for headers/footers) | 'vertical' (stacked square)
 * - variant: 'default' (Navy Blue #285498 on light/cream) | 'dark' | 'footer' (Pure White on navy #0C1E37)
 * - size: 'sm' | 'md' | 'lg' | 'xl'
 */
export default function Logo({
  layout = 'horizontal',
  variant = 'default',
  size = 'md',
  showSubtitle = true,
  className = '',
}) {
  const isDark = variant === 'dark' || variant === 'footer';

  // Sizing definitions
  const sizeMap = {
    sm: {
      horizontalHeight: 'h-8 sm:h-9',
      verticalHeight: 'h-10 sm:h-11',
      subtitle: 'text-[9px]',
    },
    md: {
      horizontalHeight: 'h-10 sm:h-11',
      verticalHeight: 'h-12 sm:h-14',
      subtitle: 'text-[10px]',
    },
    lg: {
      horizontalHeight: 'h-12 sm:h-14',
      verticalHeight: 'h-16 sm:h-18',
      subtitle: 'text-xs',
    },
    xl: {
      horizontalHeight: 'h-16 sm:h-20',
      verticalHeight: 'h-24 sm:h-28',
      subtitle: 'text-sm',
    },
  };

  const { horizontalHeight, verticalHeight, subtitle } = sizeMap[size] || sizeMap.md;

  let logoSrc = '';
  let imgHeightClass = '';

  if (layout === 'vertical') {
    logoSrc = isDark ? '/logo-white.png' : '/logo-transparent.png';
    imgHeightClass = verticalHeight;
  } else {
    logoSrc = isDark ? '/logo-horizontal-white.png' : '/logo-horizontal.png';
    imgHeightClass = horizontalHeight;
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Authentic BeeCare Logo Image */}
      <img
        src={logoSrc}
        alt="BeeCare – Phần Mềm Viện Dưỡng Lão"
        className={`${imgHeightClass} w-auto object-contain transition-transform duration-300 hover:scale-105`}
        loading="eager"
      />

      {/* Optional Subtitle Tag */}
      {showSubtitle && (
        <div className="hidden sm:flex flex-col justify-center border-l border-gray-300/80 dark:border-slate-700 pl-3">
          <span
            className={`font-semibold tracking-wider uppercase text-[10px] sm:${subtitle} ${
              isDark ? 'text-gray-300' : 'text-primary'
            }`}
          >
            Phần Mềm Viện Dưỡng Lão
          </span>
          <span
            className={`text-[9px] tracking-tight ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            Hệ Sinh Thái Quản Lý Toàn Diện
          </span>
        </div>
      )}
    </div>
  );
}
