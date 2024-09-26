import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from './locales/en/en.json';
import frLang from './locales/fr/fr.json';

const resources = {
    en: {
        translation: enLang
    },
    fr: {
        translation: frLang
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        lng: localStorage.getItem('lang') || 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;