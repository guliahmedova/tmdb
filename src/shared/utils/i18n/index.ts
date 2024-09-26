import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import frLang from "./locales/fr/fr.json";
import ruLang from "./locales/ru/ru.json";

const resources = {
  en: {
    translation: enLang,
  },
  fr: {
    translation: frLang,
  },
  ru: {
    translation: ruLang,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: localStorage.getItem("lang") || "en",
    detection: {
      order: ["queryString", "cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
