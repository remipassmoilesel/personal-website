import * as styles from './App.module.scss'
import React, { useEffect } from 'react'
import { ShellCommands } from './shell-commands/ShellCommands'
import { Links } from './links/Links'
import { Twemoji } from 'react-emoji-render'
import { useTranslation } from 'react-i18next'
import { Terminal } from './terminal/Terminal'

export function App () {
  const [t, i18n] = useTranslation('App')

  useEffect(() => {
    document.title = t('Remi_Pace_software_engineer')
  }, [i18n.language])

  return (
    <div className={styles.app}>
      <Terminal>
        <div className={styles.tagLine}>
          <div>{t('Hello')}&nbsp;<Twemoji text='👋' /></div>
        </div>

        <div className={styles.tagLine}>
          <div>{t('My_name_is_remi')}&nbsp;</div>

          <div>
            {t('I_am_software_engineer')}&nbsp;
            <Twemoji text='👷💻' />
          </div>
        </div>

        <Links className={styles.links} />

        <ShellCommands />
      </Terminal>
    </div>
  )
}
