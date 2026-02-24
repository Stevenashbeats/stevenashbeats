import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage, Language } from '@/hooks/useLanguage';
import { useTranslation } from '@/locales';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof useTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { language, toggleLanguage, setLanguage } = useLanguage();
  const t = useTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
