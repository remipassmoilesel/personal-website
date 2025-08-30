import React, { useCallback } from "react";
import * as styles from "./LanguageSelector.module.scss";
import { useTranslation } from "react-i18next";
import loglevel from "loglevel";

export function LanguageSelector() {
  const { i18n } = useTranslation("LanguageSelector");

  const handleChangeLanguage = useCallback(() => {
    const lang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(lang).catch((err) => {
      loglevel.error("Change language error: ", err);
    });
  }, [i18n]);

  return (
    <div className={styles.container}>
      <button onClick={handleChangeLanguage} className={styles.button}>
        Not your language ? 🇬🇧/🇫🇷
      </button>
    </div>
  );
}
