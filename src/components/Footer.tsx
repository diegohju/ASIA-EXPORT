import React from 'react';
import { useApp } from '../context/AppContext';
import { T } from '../data/translations';

export const Footer: React.FC = () => {
  const { lang, navigateTo } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1318] text-[#AAA] pt-[70px] pb-[36px] text-[14px] border-t border-white/10">
      <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Col 1: Brand & Holding */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/brand/asia.png"
              alt="Holding Sarrazin - Asia"
              className="h-8 w-auto object-contain filter drop-shadow"
            />
            <img
              src="/src/assets/brand/logo-4.png"
              alt="Asia Export"
              className="h-10 w-auto object-contain brightness-110"
            />
          </div>
          
          <p className="mt-4 text-[#CCC] leading-relaxed">
            {T.footer.tagline[lang]}
          </p>
          <p className="mt-3 text-[#888]">
            Holding Sarrazin ·{' '}
            <a
              href="https://www.sarrazin.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB000] hover:underline"
            >
              sarrazin.cl
            </a>{' '}
            ·{' '}
            <a
              href="https://www.rukaa.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB000] hover:underline"
            >
              rukaa.es
            </a>
          </p>
        </div>

        {/* Col 2: Sitemap & Services */}
        <div>
          <h4 className="text-white font-medium mb-3 text-[16px] tracking-tight">
            {T.footer.directorate[lang]}
          </h4>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => navigateTo('home')}
              className="text-left text-[#CCC] hover:text-[#FFB000] transition-colors focus:outline-none cursor-pointer"
            >
              {T.nav.home[lang]}
            </button>
            <button
              onClick={() => navigateTo('nosotros')}
              className="text-left text-[#CCC] hover:text-[#FFB000] transition-colors focus:outline-none cursor-pointer"
            >
              {T.nav.about[lang]}
            </button>
            <button
              onClick={() => navigateTo('servicios')}
              className="text-left text-[#CCC] hover:text-[#FFB000] transition-colors focus:outline-none cursor-pointer"
            >
              {T.nav.services[lang]}
            </button>
            <button
              onClick={() => navigateTo('exportaciones')}
              className="text-left text-[#CCC] hover:text-[#FFB000] transition-colors focus:outline-none cursor-pointer"
            >
              {T.nav.exportaciones[lang]}
            </button>
            <button
              onClick={() => navigateTo('importaciones')}
              className="text-left text-[#CCC] hover:text-[#FFB000] transition-colors focus:outline-none cursor-pointer"
            >
              {T.nav.importaciones[lang]}
            </button>
            <button
              onClick={() => navigateTo('negocios')}
              className="text-left text-[#CCC] hover:text-[#FFB000] transition-colors focus:outline-none cursor-pointer"
            >
              {T.nav.negocios[lang]}
            </button>
            <button
              onClick={() => navigateTo('contacto')}
              className="text-left text-[#CCC] hover:text-[#FFB000] transition-colors focus:outline-none cursor-pointer"
            >
              {T.nav.contact[lang]}
            </button>
          </div>
        </div>

        {/* Col 3: Contact details */}
        <div>
          <h4 className="text-white font-medium mb-3 text-[16px] tracking-tight">
            {T.footer.contact[lang]}
          </h4>
          <p className="text-[#CCC] leading-relaxed">
            {T.footer.address[lang]}
          </p>
          <div className="mt-4 flex flex-col space-y-1.5">
            <a
              href="tel:+56222333730"
              className="text-[#CCC] hover:text-[#FFB000] transition-colors"
            >
              +56 2 223 337 30
            </a>
            <a
              href="mailto:Contacto@asiaexport.cl"
              className="text-[#CCC] hover:text-[#FFB000] transition-colors"
            >
              Contacto@asiaexport.cl
            </a>
            <a
              href="https://wa.me/56222333730?text=Hola,%20solicito%20información%20sobre%20operaciones%20de%20comercio%20exterior%20con%20Asia%20Export."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB000] hover:underline pt-1 inline-flex items-center gap-1.5"
            >
              <span>WhatsApp Corporativo (+56 2 223 337 30)</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="col-span-1 md:col-span-3 border-t border-white/10 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777] gap-2">
          <p>© {currentYear} {T.footer.rights[lang]}</p>
          <p>{T.footer.corridorLine[lang]}</p>
        </div>

      </div>
    </footer>
  );
};
