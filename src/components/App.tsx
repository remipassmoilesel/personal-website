import * as styles from './App.module.scss'
import React, { useEffect } from 'react'
import { ShellCommands } from './shell-commands/ShellCommands'
import { Links } from './links/Links'
import { Twemoji } from 'react-emoji-render'
import { useTranslation } from 'react-i18next'
import { Terminal } from './terminal/Terminal'

export function App () {
  const [t, i18n] = useTranslation()

  useEffect(() => {
    document.title = t('Remi_Pace_developer')
  }, [i18n.language])

  return (
    <div className={styles.app}>
      <Terminal>
        <div className={styles.tagLine1}>
          {t('Hello')} <Twemoji className={styles.tagLine} text='👋' />
        </div>

        <div className={styles.tagLine1}>
          <div>{t('My_name_is_remi')}&nbsp;</div>

          <div>
            {t('I_am_developer')}&nbsp;
            <Twemoji text='👷 💻' />
          </div>
        </div>

        <div className={styles.tagLine2}>
          <div>
            {t('A_project_idea')}&nbsp;
            <Twemoji text='➡️' />
            &nbsp;
          </div>
          <div>
            <a href='mailto:remi.pace@protonmail.com'>
              remi.pace@protonmail.com
            </a>
          </div>
        </div>

        <Links className={styles.links} />

        <ShellCommands />
      </Terminal>
    </div>
  )
}
