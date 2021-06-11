import React from 'react'
import MSnackbar from '@material-ui/core/Snackbar'
import IconButton from '../IconButton'
import Icon from '../Icon'
import Paper from '@material-ui/core/Paper'
import styles from './styles.css'
import classnames from 'classnames'
import ENUMS from './enums'

const icons = {
  [ENUMS.VARIANTS.INFO]: 'info',
  [ENUMS.VARIANTS.SUCCESS]: 'check_circle',
  [ENUMS.VARIANTS.ERROR]: 'error',
  [ENUMS.VARIANTS.WARNING]: 'arning'
}

function Alert({
  onClose,
  message,
  anchorOrigin,
  autoHideDuration,
  open,
  variant
}) {
  const icon = icons[variant]
  const classNames = classnames(styles.paper, variant)
  return (
    <MSnackbar
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Paper elevation={3} className={classNames}>
        {icon && <Icon name={icon} size='small' />}
        <div className={styles.message}>{message}</div>
        <IconButton
          name='close'
          size='small'
          aria-label='close'
          onClick={onClose}
        />
      </Paper>
    </MSnackbar>
  )
}

Alert.ENUMS = ENUMS

Alert.defaultProps = {
  variant: ENUMS.INFO,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  autoHideDuration: 6000
}

export default Alert
