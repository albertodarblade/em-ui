import { useSnackbar } from 'notistack'

const defaultOptions = {
  anchorOrigin: {
    horizontal: 'center',
    vertical: 'top'
  },
  variant: 'info'
}

function useAlerts() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  function addAlert(message, options = {}) {
    enqueueSnackbar(message, { ...defaultOptions, ...options })
  }

  function closeAlert(...args) {
    closeSnackbar(...args)
  }

  return { addAlert, closeAlert }
}

export default useAlerts
