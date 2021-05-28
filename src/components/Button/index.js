import React from 'react'
import propTypes from 'prop-types'
import MButton from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import ENUMS, { COLORS as BTN_COLORS, SIZE as BTN_SIZE } from './enums'
import classnames from 'classnames'
import Icon from '../Icon'
import styles from './style.module.css'

function buildVariantProp(isPrimaryAction) {
  return isPrimaryAction ? 'contained' : 'text'
}

function buildColoProps(color) {
  if ([BTN_COLORS.PRIMARY, BTN_COLORS.SECONDARY].includes(color)) {
    return { color }
  }
  return { color: 'inherit' }
}

function buildStartIcon(loading, icon, iconProps = {}) {
  if (loading) {
    return <CircularProgress size={16} />
  }

  if (icon) {
    return <Icon {...iconProps}>{icon}</Icon>
  }
  return undefined
}

function Button({
  loading,
  icon,
  isPrimaryAction,
  className,
  disabled,
  color,
  iconProps,
  ...leftOverProps
}) {
  const variant = buildVariantProp(isPrimaryAction)
  const colorProps = buildColoProps(color)
  const classNames = classnames(styles.button, className, color)
  const startIcon = buildStartIcon(loading, icon, iconProps)
  return (
    <MButton
      {...leftOverProps}
      variant={variant}
      disabled={loading ? true : disabled}
      className={classNames}
      startIcon={startIcon}
      {...colorProps}
    />
  )
}

Button.ENUMS = ENUMS

Button.propTypes = {
  isPrimaryAction: propTypes.bool,
  color: propTypes.oneOf(Object.values(BTN_COLORS)),
  size: propTypes.oneOf(Object.values(BTN_SIZE)),
  disabled: propTypes.bool,
  loading: propTypes.bool,
  icon: propTypes.string
}

Button.defaultProps = {
  isPrimaryAction: false,
  color: BTN_COLORS.INHERIT,
  size: BTN_SIZE.MEDIUM,
  disabled: false,
  loading: false
}

export default Button
