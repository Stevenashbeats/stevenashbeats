import { pl } from './pl';
import { en } from './en';
import { Language } from '@/hooks/useLanguage';

export const translations = {
  pl,
  en,
} as const;

export const useTranslation = (language: Language) => {
  return translations[language];
};
