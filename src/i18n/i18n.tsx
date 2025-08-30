import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import log from "loglevel";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import fr from "./fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, fr },
    debug: !!process.env.DEBUG,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((err) => {
    log.error("I18n init failed: ", err);
  });
