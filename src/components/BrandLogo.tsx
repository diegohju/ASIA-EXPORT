import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact';
}

/**
 * Logotipo oficial inalterado subido por el usuario:
 * - asia.png (Silueta dorada oficial del mapa de Asia - Holding Sarrazin)
 * - logo-4.png (Logotipo caligráfico oficial de Asia Export)
 * Se mantiene 100% fiel, sin deformar, recolorear ni redibujar.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'full' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Isotipo oficial: asia.png */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center p-1 rounded-md bg-[#0A192F] border border-slate-700/60 shadow-xs">
        <img
          src="/src/assets/brand/asia.png"
          alt="Holding Sarrazin - Mapa de Asia"
          className="w-full h-full object-contain drop-shadow-xs"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Logotipo oficial caligráfico: logo-4.png */}
      <div className="flex flex-col justify-center">
        <div className="h-8 flex items-center px-2.5 py-1 rounded-md bg-[#0A192F] border border-slate-700/60 shadow-xs">
          <img
            src="/src/assets/brand/logo-4.png"
            alt="Asia Export"
            className="h-6 w-auto object-contain brightness-110"
            referrerPolicy="no-referrer"
          />
        </div>
        {variant === 'full' && (
          <span className="text-[9.5px] font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-1 pl-0.5">
            Holding Sarrazin · Chile
          </span>
        )}
      </div>
    </div>
  );
};
