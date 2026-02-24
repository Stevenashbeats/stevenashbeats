import { useState, useEffect } from 'react';

export type Language = 'pl' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'pl' || saved === 'en') return saved;
    return navigator.language.startsWith('pl') ? 'pl' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pl' ? 'en' : 'pl');
  };

  return { language, toggleLanguage, setLanguage };
};
