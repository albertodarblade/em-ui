import React from 'react'
import MSnackbar from '@material-ui/core/Snackbar'
import IconButton from '../IconButton'
import Button from '../Button'
import Icon from '../Icon'
import Paper from '@material-ui/core/Paper'
import styles from './styles.css'

function Snackbar({
  icon,
  onClose,
  message,
  anchorOrigin,
  autoHideDuration,
  open
}) {
  return (
    <MSnackbar
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Paper elevation={3} className={styles.paper}>
        {icon && <Icon name={icon} size='small' />}
        <div className={styles.message}>{message}</div>

        <Button color='secondary' size='small' onClick={onClose}>
          UNDO
        </Button>
        <IconButton
          name='Close'
          size='small'
          aria-label='close'
          onClick={onClose}
        />
      </Paper>
    </MSnackbar>
  )
}

Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  autoHideDuration: 6000
}

export default Snackbar
