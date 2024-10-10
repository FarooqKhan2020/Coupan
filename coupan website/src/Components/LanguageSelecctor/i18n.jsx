import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from '../locales/en/translation.json';
import frTranslation from '../locales/fr/translation.json';
import deTranslation from '../locales/de/translation.json'; 

// i18n configuration
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
    de: { translation: deTranslation }, // Add German
  },
  lng: 'de', // default language
  // lng: 'en', // default language
  fallbackLng: 'de', // language fallback if translation is missing
  // fallbackLng: 'en', // language fallback if translation is missing
  interpolation: { escapeValue: false }, // React escapes by default
});

export default i18n;
