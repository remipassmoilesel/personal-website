import React from 'react'
import { LINKS } from './links'
import * as styles from './Links.module.scss'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Twemoji } from 'react-emoji-render'

interface Props {
  className?: string
}

export function Links (props: Props) {
  const { className } = props
  const [t] = useTranslation('Links')

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.tagLine}>{t('A_project_idea')}</div>

      <div className={styles.link}>
        <Twemoji text='➡️'/>
        &nbsp;
        <a href='mailto:remi.pace@protonmail.com'>
          remi.pace@protonmail.com
        </a>
      </div>

      <div className={styles.tagLine}>{t('Want_to_see_more')}</div>

      {LINKS.map((link) => (
        <div key={link.target} className={styles.link}>
          *&nbsp;
          <a href={link.target} target={'_blank'} rel="noreferrer">
            {t(link.i18nLabel)}
          </a>
        </div>
      ))}
    </div>
  )
}
