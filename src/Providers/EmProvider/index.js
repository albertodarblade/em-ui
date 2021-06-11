import React from 'react'
import StyleProvider from '../StyleProvider'
import AlertProvider from '../AlertProvider'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

function EmProvider({ children }) {
  return (
    <I18nextProvider i18n={i18next}>
      <StyleProvider>
        <AlertProvider>{children}</AlertProvider>
      </StyleProvider>
    </I18nextProvider>
  )
}

EmProvider.initTranslations = function ({
  defaultLanguage = 'en',
  translates = [],
  ...leftOverProps
}) {
  const resources =
    translates.reduce((accumulator, languageSettings) => {
      const [language] = Object.entries(languageSettings)
      const [languageKey, value] = language
      accumulator[languageKey] = value
      return accumulator
    }, {}) || {}

  i18next.init({
    interpolation: { escapeValue: false },
    lng: defaultLanguage, // language to use
    resources,
    ...leftOverProps
  })
}

export default EmProvider
