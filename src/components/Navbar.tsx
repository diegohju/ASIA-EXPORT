import React, { useState } from 'react';
import { useApp, PageRoute } from '../context/AppContext';
import { T } from '../data/translations';
import { Sun, Moon, Menu, X, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang, theme, toggleTheme, currentRoute, navigateTo, scrollProgress, openChat } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { route: PageRoute; key: keyof typeof T.nav }[] = [
    { route: 'home', key: 'home' },
    { route: 'nosotros', key: 'about' },
    { route: 'servicios', key: 'services' },
    { route: 'exportaciones', key: 'exportaciones' },
    { route: 'importaciones', key: 'importaciones' },
    { route: 'negocios', key: 'negocios' },
    { route: 'contacto', key: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top 3px Amber Scroll Progress Indicator (.pg) */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#FFB000] z-50 origin-left transition-transform duration-75 pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Main Corporate Header */}
      <header className="fixed inset-x-0 top-0 z-40 bg-[#0F1318]/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
        <div className="max-w-[1160px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6 sm:gap-10">
          
          {/* Logo brand linking to #index - NO BOX on asia.png, generous right margin */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 select-none text-left focus:outline-none cursor-pointer group shrink-0 mr-4 sm:mr-8"
            aria-label="Asia Export - Inicio"
          >
            {/* Holding Sarrazin Golden Asia Continent Map - NO BOX CONTAINER */}
            <img
              src="/src/assets/brand/asia.png"
              alt="Sarrazin Group - Asia"
              className="h-8 w-auto object-contain shrink-0 filter drop-shadow group-hover:scale-105 transition-transform"
            />
            
            {/* Official Calligraphic Golden Asia Export Mark */}
            <img
              src="/src/assets/brand/logo-4.png"
              alt="Asia Export"
              className="h-9 w-auto object-contain brightness-110 filter drop-shadow-sm"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`text-[14px] transition-colors focus:outline-none cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#FFB000] font-semibold'
                      : 'text-[#DDD] hover:text-[#FFB000]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {T.nav[link.key][lang]}
                </button>
              );
            })}

            {/* Language Switcher */}
            <div className="text-[12px] text-[#999] flex items-center gap-2 pl-3 border-l border-white/15" aria-label="Idioma">
              {(['es', 'en', 'zh'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`uppercase transition-colors cursor-pointer font-medium ${
                    lang === l ? 'text-[#FFB000] font-bold' : 'hover:text-white'
                  }`}
                  aria-current={lang === l ? 'true' : undefined}
                >
                  {l === 'zh' ? '中文' : l}
                </button>
              ))}
            </div>

            {/* Dark / Light Mode Switch */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#FFB000]" />
              ) : (
                <Moon className="w-4 h-4 text-white" />
              )}
            </button>

            {/* Online Chat Desk quick button */}
            <button
              onClick={() => openChat()}
              className="p-2 rounded-full text-white/70 hover:text-[#FFB000] hover:bg-white/10 transition-colors focus:outline-none"
              aria-label={T.nav.chatBtn[lang]}
              title={T.nav.chatBtn[lang]}
            >
              <MessageSquare className="w-4 h-4 text-[#FFB000]" />
            </button>

            {/* Golden Pill CTA button */}
            <button
              onClick={() => handleNavClick('contacto')}
              className="btn-shimmer inline-block bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0] px-5 py-2.5 rounded-full font-semibold text-[13px] transition-colors shadow-sm focus:outline-none cursor-pointer whitespace-nowrap"
            >
              {T.nav.quoteBtn[lang]}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-white/80 hover:text-white"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#FFB000]" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white text-2xl p-1 focus:outline-none"
              aria-label="Menú"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F1318] border-b border-white/15 px-6 py-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-white/50">Idioma / Language</span>
              <div className="flex items-center gap-3 text-xs">
                {(['es', 'en', 'zh'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`uppercase font-semibold ${
                      lang === l ? 'text-[#FFB000]' : 'text-white/60'
                    }`}
                  >
                    {l === 'zh' ? '中文' : l}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`text-left text-[16px] py-1 transition-colors ${
                    currentRoute === link.route
                      ? 'text-[#FFB000] font-semibold'
                      : 'text-[#DDD]'
                  }`}
                >
                  {T.nav[link.key][lang]}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openChat();
                }}
                className="w-full py-2.5 rounded-full text-center text-sm font-semibold border border-[#FFB000]/40 text-[#FFB000] hover:bg-[#FFB000]/10 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#FFB000]" />
                <span>{T.nav.chatBtn[lang]}</span>
              </button>
              <button
                onClick={() => handleNavClick('contacto')}
                className="w-full py-3 rounded-full text-center text-sm font-semibold bg-[#FFB000] text-[#0F1318] hover:bg-[#FDFBA0]"
              >
                {T.nav.quoteBtn[lang]}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
