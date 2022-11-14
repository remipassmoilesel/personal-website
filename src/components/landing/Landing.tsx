import * as styles from "./Landing.module.scss";
import React, {useEffect} from "react";
import {ShellCommands} from "./shell-commands/ShellCommands";
import Links from "./links/Links";
import {Twemoji} from "react-emoji-render";
import {useTranslation} from "react-i18next";
import {Terminal} from "./terminal/Terminal";

export function Landing() {
  const [t, i18n] = useTranslation("Landing");

  useEffect(() => {
    document.title = t("Remi_Pace_developer");
  }, [i18n.language]);

  return (
    <div className={styles.landing}>
      <Terminal>
        <div className={styles.tagLine}>
          <div>
            {t("My_name_is_remi")}&nbsp;
          </div>
          <div>
            {t("I_am_developer")}&nbsp;
            <Twemoji text="👷 💻"/>
          </div>
        </div>

        <ShellCommands className={styles.commands}/>

        <Links/>
      </Terminal>
    </div>
  );
}
