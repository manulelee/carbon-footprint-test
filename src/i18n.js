import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslate from "./locales/en/translation.json";
import itTranslate from "./locales/it/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
//Language Detector imposta la lingua della pagina in base alla lingua del browser

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: enTranslate,
      },
      it: {
        translation: itTranslate,
      },
    },
    //Per cambiare lingua manualmente decommenta la lingua che preferisci

    //Italiano
    //lng: "it",

    //English
    lng: "en",

    //Francese (non presente)
    //lng: "fr",
  });

export default i18n;
