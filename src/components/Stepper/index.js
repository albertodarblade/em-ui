import React from 'react'
import MuiStepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import UseStateless from '../../hooks/useStateless'
import styles from './styles.module.css'
import Button from '../Button'

function Stepper({ index, onChangeIndex, steps }) {
  const [state, setState] = UseStateless({
    value: index,
    setValue: onChangeIndex,
    initialState: 0
  })
  function handleBack() {
    setState(state - 1)
  }

  function handleNext() {
    setState(state + 1)
  }

  console.log(state, 'eee')
  return (
    <MuiStepper activeStep={state} orientation='vertical'>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.title}</StepLabel>
          <StepContent>
            <div className={styles.content}>{step.renderContent}</div>

            <div className={styles.actions}>
              <Button
                disabled={step.backAction.disabled || state === 0}
                onClick={step.backAction.onClick || handleBack}
              >
                {step.backAction.text}
              </Button>
              <Button
                variant='contained'
                color='primary'
                disabled={step.nextAction.disabled}
                onClick={step.nextAction.onClick || handleNext}
              >
                {step.nextAction.text}
              </Button>
            </div>
          </StepContent>
        </Step>
      ))}
    </MuiStepper>
  )
}

Stepper.defaultProps = {
  steps: []
}

export default Stepper
