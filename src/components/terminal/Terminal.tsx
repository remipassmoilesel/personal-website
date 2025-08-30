import React, { type ReactNode } from "react";
import * as styles from "./Terminal.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  children: ReactNode | ReactNode[];
}

export function Terminal(props: Props) {
  const { className, children } = props;
  const [t] = useTranslation("Terminal");

  return (
    <div className={clsx(className, styles.window)}>
      <div className={styles.topBar}>
        <div className={styles.title}>{t("Terminal_emulator")}</div>

        <button className={clsx(styles.button, styles.close)}></button>
        <button className={clsx(styles.button, styles.maximize)}></button>
        <button className={clsx(styles.button, styles.minimize)}></button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
