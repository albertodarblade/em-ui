import React from 'react'
import { SnackbarProvider } from 'notistack'
import IconButton from '../../components/IconButton'

function AlertProvider({ children }) {
  const notistackRef = React.createRef()
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key)
  }
  return (
    <SnackbarProvider
      maxSnack={6}
      ref={notistackRef}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)} name='close' />
      )}
    >
      {children}
    </SnackbarProvider>
  )
}

export default AlertProvider
