import * as styles from "./App.module.scss";
import React, { useEffect } from "react";
import { ShellCommands } from "./shell-commands/ShellCommands";
import { Links } from "./links/Links";
import { useTranslation } from "react-i18next";
import { Terminal } from "./terminal/Terminal";
import { LanguageSelector } from "./language-selector/LanguageSelector";

export function App() {
  const [t, i18n] = useTranslation("App");

  useEffect(() => {
    document.title = t("Remi_Pace_software_engineer");
  }, [i18n.language, t]);

  return (
    <div className={styles.app}>
      <Terminal className={styles.terminal}>
        <div className={styles.tagLine}>
          <div>{t("Hello")}&nbsp;👋</div>
        </div>

        <div className={styles.tagLine}>
          <div>{t("My_name_is_remi")}&nbsp;</div>

          <div>{t("I_am_software_engineer")}&nbsp;👷💻</div>
        </div>

        <Links className={styles.links} />

        <ShellCommands className={styles.shellCommands} />

        <div className={styles.filler}></div>

        <LanguageSelector />
      </Terminal>
    </div>
  );
}
