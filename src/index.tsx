import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import loglevel from 'loglevel'
import './index.scss'
import './i18n/i18n'

if (!!process.env.DEBUG) {
  loglevel.setDefaultLevel('debug')
} else {
  loglevel.setDefaultLevel('error')
}

const container = document.getElementById('root')
if (container == null) {
  throw new Error('Not ready !')
}

const root = createRoot(container)
root.render(<App />)
