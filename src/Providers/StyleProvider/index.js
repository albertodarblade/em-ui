import React from 'react'
import styles from './style.module.css'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

function createEmTheme(theme = {}, isDarkMode) {
  return createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      primary: {
        main: theme.primary
      },
      secondary: {
        main: theme.secondary
      }
    }
  })
}

function getVariableNameValue(name, palette) {
  const colors = palette[name]
  const PREFIX = `--em-${name}-`
  const items = Object.entries(colors)
  const variables = items.map((item) => {
    const [key, value] = item
    return [PREFIX + key, value]
  })
  return variables
}

function updateCssVars({ node, palette, shadows }) {
  const primaryColor = palette.primary.main
  const secondaryColor = palette.secondary.main

  document.body.style.setProperty(
    'background-color',
    palette.background.default
  )
  const variables = [
    getVariableNameValue('background', palette),
    getVariableNameValue('primary', palette),
    getVariableNameValue('secondary', palette),
    getVariableNameValue('grey', palette),
    getVariableNameValue('info', palette),
    getVariableNameValue('error', palette),
    getVariableNameValue('success', palette),
    getVariableNameValue('text', palette),
    getVariableNameValue('warning', palette)
  ]

  variables.forEach((variablesCollection) => {
    variablesCollection.forEach((variablePair) => {
      const [variableName, variableValue] = variablePair
      node.style.setProperty(variableName, variableValue)
    })
  })

  const primaryRGBA = convertHexToRGBA(primaryColor, 8)
  const primaryRGBAHover = convertHexToRGBA(primaryColor, 20)
  const secondaryRGBA = convertHexToRGBA(secondaryColor, 8)
  const secondaryRGBAHover = convertHexToRGBA(secondaryColor, 20)

  node.style.setProperty('--em-primary-background', primaryRGBA)
  node.style.setProperty('--em-primary-background-hover', primaryRGBAHover)
  node.style.setProperty('--em-secondary-background', secondaryRGBA)
  node.style.setProperty('--em-secondary-background-hover', secondaryRGBAHover)
  shadows.forEach((shadow, index) => {
    node.style.setProperty(`--em-shadow-${index}`, shadow)
  })
}

function convertHexToRGBA(hexCode, opacity) {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `rgba(${r},${g},${b},${opacity / 100})`
}

function StyleProvider({ themes, themeIndex, isDarkMode, children }) {
  const theme = themes[themeIndex]
  const emTheme = createEmTheme(theme, isDarkMode)

  React.useEffect(() => {
    updateCssVars({
      node: document.body,
      palette: emTheme.palette,
      shadows: emTheme.shadows
    })
  }, [themeIndex, isDarkMode])

  return (
    <ThemeProvider theme={emTheme}>
      <div className={styles.styleRoot}>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        {children}
      </div>
    </ThemeProvider>
  )
}

StyleProvider.defaultProps = {
  theme: 0,
  isDarkMode: false
}

export default StyleProvider
