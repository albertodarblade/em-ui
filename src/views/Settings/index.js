import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import useSettings from '../../hooks/useSettings'
import ColorPicker from '../../components/ColorPicker'
import LightPicker from '../../components/LightPicker'
import Button from '../../components/Button'
import styles from './styles.module.css'

function Settings({ darkModeText, colorText, languageText }) {
  const contextState = useSettings()
  const {
    languages,
    isDarkMode,
    setIsDarkMode,
    setThemeIndex,
    themes,
    language,
    setLanguage,
    themeIndex
  } = contextState

  function handleColorChange(index) {
    setThemeIndex(index)
  }
  return (
    <div>
      <div className={styles.label}>{languageText}</div>
      <ButtonGroup>
        {languages.map((lang) => {
          return (
            <Button
              disableElevation
              onClick={() => setLanguage(lang.value)}
              key={lang.value}
              variant={lang.value === language ? 'contained' : undefined}
              color={lang.value === language ? 'primary' : undefined}
            >
              {lang.name}
            </Button>
          )
        })}
      </ButtonGroup>
      <div className={styles.label}>{colorText}</div>
      <ColorPicker
        value={themeIndex}
        colors={themes}
        onChange={handleColorChange}
      />

      <div className={styles.label}>{darkModeText}</div>

      <LightPicker isDarkMode={isDarkMode} onChange={setIsDarkMode} />
    </div>
  )
}

Settings.defaultProps = {
  darkModeText: 'Choose your preferred light',
  languageText: 'Choose your preferred language',
  colorText: 'Choose your favorite color'
}

export default Settings
