import React, {ReactNode} from "react";
import styles from './Terminal.module.scss';
import clsx from 'clsx';

interface Props {
  children: ReactNode | ReactNode[];
}

export function Terminal(props: Props) {
  const {children} = props;

  return <div>
    <div className={styles.window}>
      <div className={styles.topBar}>
        <div className={styles.title}>remi@</div>

        <button className={clsx(styles.button, styles.close)}></button>
        <button className={clsx(styles.button, styles.maximize)}></button>
        <button className={clsx(styles.button, styles.minimize)}></button>
      </div>
      <div className={styles.content}>
        <span>[adnan@linux-pc ~]:$</span>
        <span>dnf update</span>
        <br/>
        <div>
          <span> Error : This command has to be run under the root user.</span>
        </div>

        {children}
      </div>
    </div>
  </div>
}
