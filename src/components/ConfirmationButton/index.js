import React from 'react'
import Button from '../Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

function ConfirmationButton({
  modalProps,
  onClick,
  title,
  description,
  cancelText,
  acceptText,
  ...leftOverProps
}) {
  const [state, setState] = React.useState({ showModal: false })

  function handleClick(e) {
    setState((oldState) => ({ ...oldState, showModal: true }))
  }

  return (
    <React.Fragment>
      <Button {...leftOverProps} onClick={handleClick} />
      <Dialog open={state.showModal} {...modalProps}>
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              setState((oldState) => ({ ...oldState, showModal: false }))
            }
          >
            {cancelText}
          </Button>
          <Button
            onClick={(event) => {
              setState((oldState) => ({
                ...oldState,
                showModal: false
              }))
              onClick(event)
            }}
            color='error'
            isPrimaryAction
            autoFocus
          >
            {acceptText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

ConfirmationButton.defaultProps = {
  modalProps: {}
}

export default ConfirmationButton
