import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OnlineChatModal } from './components/OnlineChatModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ExportacionesView } from './views/ExportacionesView';
import { ImportacionesView } from './views/ImportacionesView';
import { NegociosView } from './views/NegociosView';
import { ProcessView } from './views/ProcessView';
import { FaqView } from './views/FaqView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';
import { NotFoundView } from './views/NotFoundView';

const MainContent: React.FC = () => {
  const { currentRoute } = useApp();

  const renderCurrentView = () => {
    switch (currentRoute) {
      case 'home':
        return <HomeView />;
      case 'nosotros':
        return <AboutView />;
      case 'servicios':
        return <ServicesView />;
      case 'exportaciones':
        return <ExportacionesView />;
      case 'importaciones':
        return <ImportacionesView />;
      case 'negocios':
        return <NegociosView />;
      case 'process':
        return <ProcessView />;
      case 'faq':
        return <FaqView />;
      case 'contacto':
        return <ContactView />;
      case 'privacidad':
        return <LegalView type="privacy" />;
      case 'terminos':
        return <LegalView type="terms" />;
      case '404':
      default:
        return <NotFoundView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] dark:bg-[#12161C] text-[#0F1318] dark:text-[#ECEBE6] transition-colors">
      <Navbar />
      
      {/* Framer Motion View Transition with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentRoute}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          {renderCurrentView()}
        </motion.main>
      </AnimatePresence>

      <Footer />
      <OnlineChatModal />
      <ServiceDetailModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
