import React, { createContext, useContext, useState, useEffect } from 'react';
import { ServiceItem } from '../data/siteContent';

export type Language = 'es' | 'en' | 'zh';
export type PageRoute =
  | 'home'
  | 'nosotros'
  | 'servicios'
  | 'exportaciones'
  | 'importaciones'
  | 'negocios'
  | 'process'
  | 'faq'
  | 'contacto'
  | 'privacidad'
  | 'terminos'
  | '404';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentRoute: PageRoute;
  navigateTo: (route: PageRoute | string) => void;
  selectedService: ServiceItem | null;
  openServiceDetail: (service: ServiceItem) => void;
  closeServiceDetail: () => void;
  isChatOpen: boolean;
  openChat: (initialMessage?: string) => void;
  closeChat: () => void;
  scrollProgress: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync theme with document.documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Normalize route strings
  const normalizeRoute = (raw: string): PageRoute => {
    const clean = raw.replace(/^#\/?/, '').toLowerCase();
    if (!clean || clean === 'index' || clean === 'home') return 'home';
    if (clean === 'about' || clean === 'nosotros') return 'nosotros';
    if (clean === 'services' || clean === 'servicios') return 'servicios';
    if (clean === 'exportaciones' || clean === 'exports') return 'exportaciones';
    if (clean === 'importaciones' || clean === 'imports') return 'importaciones';
    if (clean === 'negocios' || clean === 'business') return 'negocios';
    if (clean === 'process' || clean === 'proceso' || clean === 'como-trabajamos') return 'process';
    if (clean === 'faq' || clean === 'preguntas-frecuentes') return 'faq';
    if (clean === 'contact' || clean === 'contacto') return 'contacto';
    if (clean === 'privacy' || clean === 'privacidad') return 'privacidad';
    if (clean === 'terms' || clean === 'terminos') return 'terminos';
    return '404';
  };

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentRoute(normalizeRoute(hash));
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute | string) => {
    const normalized = normalizeRoute(route);
    setCurrentRoute(normalized);
    const hash = normalized === 'home' ? '#index' : `#${normalized}`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openServiceDetail = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
  };

  const openChat = (_initialMessage?: string) => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        theme,
        toggleTheme,
        currentRoute,
        navigateTo,
        selectedService,
        openServiceDetail,
        closeServiceDetail,
        isChatOpen,
        openChat,
        closeChat,
        scrollProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
