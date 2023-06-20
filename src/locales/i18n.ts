import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, kr } from '.';

const resources = {
  en: {
    translation: en,
  },
  kr: {
    translation: kr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  detection: { order: ['path', 'navigator'] },
  react: {
    useSuspense: false,
  },
});

export default i18n;
