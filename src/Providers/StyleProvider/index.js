import React from 'react'
import styles from './style.module.css'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const emTheme = {
  primary: '#655dd0',
  secondary: '#f6a001'
}

const theme = createMuiTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: emTheme.primary
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: emTheme.secondary
    }
  }
})

function StyleProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />

      <div type='provider' className={styles.styleRoot}>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default StyleProvider
