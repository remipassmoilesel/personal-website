import * as styles from "./Landing.module.scss";
import React, { useEffect } from "react";
import ShellCommands from "./shell-commands/ShellCommands";
import Links from "./links/Links";
import { Twemoji } from "react-emoji-render";
import { useTranslation } from "react-i18next";
import {Terminal} from "./terminal/Terminal";

export function Landing() {
  const [t, i18n] = useTranslation("Landing");

  useEffect(() => {
    document.title = t("Remi_Pace_developer");
  }, [i18n.language]);

  return (
    <div className={styles.landing}>
      <Terminal>
        <div style={{ display: "flex" }}>
          {t("My_name_is_remi_i_am_developer")}
          <Twemoji className={styles.tagLine} text="👷 💻 " />
        </div>

        <div>Hum hum</div>
      </Terminal>


      <ShellCommands />
      <div className={styles.filler} />
      <Links />
    </div>
  );
}
