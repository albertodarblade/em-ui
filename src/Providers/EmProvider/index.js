import React from 'react'
import StyleProvider from '../StyleProvider'
import AlertProvider from '../AlertProvider'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import defaultConfig from './defaultConfig'
import Context from './context'

function EmProvider({ children }) {
  const [language, setLanguage] = React.useState(i18next.language)
  const [themeIndex, setThemeIndex] = React.useState(0)
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const configurations = EmProvider.config || defaultConfig
  const { themes, languages } = configurations
  React.useEffect(() => {
    if (language) {
      i18next.changeLanguage(language)
    }
  }, [language])

  return (
    <Context.Provider
      value={{
        languages,
        themeIndex,
        themes,
        language,
        setLanguage,
        setThemeIndex,
        isDarkMode,
        setIsDarkMode
      }}
    >
      <I18nextProvider i18n={i18next}>
        <StyleProvider
          themes={themes}
          isDarkMode={isDarkMode}
          themeIndex={themeIndex}
        >
          <AlertProvider>{children}</AlertProvider>
        </StyleProvider>
      </I18nextProvider>
    </Context.Provider>
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
