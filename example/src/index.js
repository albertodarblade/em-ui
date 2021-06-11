import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Engageme from 'em-ui'
import lang_es from './locale/es.json'
import lang_en from './locale/en.json'

const { EmProvider } = Engageme

EmProvider.initTranslations({
  translates: [
    {
      en: lang_en
    },
    {
      es: lang_es
    }
  ]
})

ReactDOM.render(
  <EmProvider>
    <App />
  </EmProvider>,
  document.getElementById('root')
)
