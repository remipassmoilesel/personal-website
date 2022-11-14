import React, {ReactNode} from "react";
import styles from './Terminal.module.scss';
import clsx from 'clsx';
import {Twemoji} from "react-emoji-render";
import {useTranslation} from "react-i18next";

interface Props {
  children: ReactNode | ReactNode[];
}

export function Terminal(props: Props) {
  const {children} = props;
  const [t] = useTranslation("Landing");

  return <div>
    <div className={styles.window}>
      <div className={styles.topBar}>
        <div className={styles.title}>{t('Hello')} <Twemoji className={styles.tagLine} text="👋" /></div>

        <button className={clsx(styles.button, styles.close)}></button>
        <button className={clsx(styles.button, styles.maximize)}></button>
        <button className={clsx(styles.button, styles.minimize)}></button>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </div>
}
