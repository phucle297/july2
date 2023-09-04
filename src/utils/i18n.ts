// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en-US.json";
import viTranslation from "../locales/vi-VN.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    vi: {
      translation: viTranslation,
    },
  },
  fallbackLng: "vi",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // React already escapes values by default
  },
});

export default i18n;
