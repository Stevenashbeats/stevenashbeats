import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslation } from '@/locales';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation(language);

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 px-3 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-black/90 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
    >
      {t.language.toggle}
    </button>
  );
};

export default LanguageToggle;
