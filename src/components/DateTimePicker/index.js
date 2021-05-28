import React from 'react'
import 'moment/locale/es'
import {
  DateTimePicker as MDateTimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import propTypes from 'prop-types'
import ENUMS from './enums'

function DateTimePicker({ value, onChange, language, ampm, ...leftOverProps }) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={language}>
      <MDateTimePicker
        allowKeyboardControl
        ampm={ampm}
        label='DateTimePicker'
        inputVariant='outlined'
        value={value}
        onChange={onChange}
        {...leftOverProps}
      />
    </MuiPickersUtilsProvider>
  )
}

DateTimePicker.ENUMS = ENUMS

DateTimePicker.propTypes = {
  /* Read https://material-ui-pickers.dev/api/DateTimePicker */
  value: propTypes.object,
  onChange: propTypes.func,
  language: propTypes.oneOf(Object.values(ENUMS.LANGUAGES))
}

DateTimePicker.defaultProps = {
  language: 'en',
  onChange: () => {}
}

export default DateTimePicker
