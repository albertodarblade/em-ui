import React from 'react'
import Icon from '../Icon'
import MIconButton from '@material-ui/core/IconButton'
import classnames from 'classnames'
import ENUMS from './enums'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './styles.module.css'

function buildColor(color) {
  const { COLORS } = ENUMS
  if ([COLORS.SECONDARY, COLORS.PRIMARY].includes(color)) {
    return color
  }
  return COLORS.INHERIT
}

function IconButton({
  loading,
  isPrimaryAction,
  shadow,
  name,
  className,
  size,
  color,
  disabled,
  ...leftOverProps
}) {
  const buttonColor = buildColor(color)
  const classNames = classnames({
    shadow,
    primaryAction: isPrimaryAction,
    [className]: Boolean(className),
    [styles.iconButton]: true,
    [name]: true,
    [size]: true,
    [color]: true
  })

  const progressSize = size === ENUMS.SIZE.SMALL ? 18 : 24
  const content = loading ? (
    <CircularProgress size={progressSize} />
  ) : (
    <Icon name={name} />
  )
  return (
    <MIconButton
      className={classNames}
      color={buttonColor}
      {...leftOverProps}
      size={size}
      disabled={loading ? true : disabled}
    >
      {content}
    </MIconButton>
  )
}

IconButton.ENUMS = ENUMS

IconButton.defaultProps = {
  size: ENUMS.SIZE.MEDIUM
}

export default IconButton
