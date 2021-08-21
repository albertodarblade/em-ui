import './index.css'
import 'engageme-ui/dist/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import EmUI from 'engageme-ui'
import config from './config'
import lang_es from './locale/es.json'
import lang_en from './locale/en.json'
import lang_fr from './locale/fr.json'
import lang_ja from './locale/ja.json'

const { EmProvider } = EmUI

//Read react i18n documentation.
EmProvider.initTranslations({
  defaultLanguage: navigator.language,
  translates: [
    {
      en: lang_en
    },
    {
      es: lang_es
    },
    {
      fr: lang_fr
    },
    {
      ja: lang_ja
    }
  ]
})

EmProvider.config = config

ReactDOM.render(
  <EmProvider>
    <App />
  </EmProvider>,
  document.getElementById('root')
)
