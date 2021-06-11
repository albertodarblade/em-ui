import React from 'react'
import classnames from 'classnames'
import Icon from '../Icon'
import styles from './styles.module.css'

function LightPicker({ isDarkMode, onChange }) {
  return (
    <div
      className={classnames({
        [styles.picker]: true,
        [styles.dark]: isDarkMode,
        [styles.light]: !isDarkMode
      })}
    >
      <div
        className={classnames(styles.option, styles.light)}
        onClick={() => onChange(false)}
      >
        <Icon name='light_mode' size='large' />
      </div>
      <div
        className={classnames(styles.option, styles.dark)}
        onClick={() => onChange(true)}
      >
        <Icon name='dark_mode' size='large' />
      </div>
    </div>
  )
}

LightPicker.defaultProps = {
  isDarkMode: false,
  onChange: () => {}
}

export default LightPicker
