import "./Landing.scss";
import React, {useEffect} from "react";
import ShellCommands from "./shell-commands/ShellCommands";
import Links from "./links/Links";
import { Twemoji } from "react-emoji-render";
import {useTranslation} from "react-i18next";

export function Landing(){
  const [t, i18n] = useTranslation('Landing');

  useEffect(() => { document.title = t('Remi_Pace_developer') }, [i18n.language]);

  return (
    <div className={"landing"}>
      <h1>{t('Hello')}</h1>
      <div style={{display: 'flex'}}>
        {t('My_name_is_remi_i_am_developer')}
        <Twemoji
          className={"tag-line"}
          text="👷 💻 "
        />
      </div>

      <ShellCommands />
      <div className={"filler"} />
      <Links />
    </div>
  );
}
