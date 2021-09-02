import React from 'react'
import 'moment/locale/es'
import {
  DateTimePicker as MDateTimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import propTypes from 'prop-types'
import ENUMS from './enums'
import locale from './locale'
import IconButton from '../IconButton'
import styles from './styles.module.css'

function buildLabelsFromLocale(locale, language) {
  const labelProps = locale[language]
  return labelProps || {}
}

function buildFormatFromAmpm(dateFormat, ampm) {
  if (!dateFormat) {
    return undefined
  }

  if (ampm) {
    return `${dateFormat} h:mm a`
  }
  return `${dateFormat} HH:mm`
}

function DateTimePicker({
  dateFormat,
  value,
  onChange,
  language,
  ampm,
  variant,
  ...leftOverProps
}) {
  const labelProps = buildLabelsFromLocale(locale, language)

  function handleClear() {
    onChange(null)
  }

  const format = buildFormatFromAmpm(dateFormat, ampm)
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={language}>
      <div className={styles.component}>
        <MDateTimePicker
          allowKeyboardControl
          ampm={ampm}
          label='DateTimePicker'
          inputVariant='outlined'
          value={value}
          variant={variant}
          onChange={onChange}
          format={format}
          {...labelProps}
          {...leftOverProps}
        />
        {variant !== ENUMS.VARIANTS.STATIC && Boolean(value) && (
          <IconButton
            className={styles.floatButton}
            name='Clear'
            size={IconButton.ENUMS.SIZE.SMALL}
            onClick={handleClear}
          />
        )}
      </div>
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
