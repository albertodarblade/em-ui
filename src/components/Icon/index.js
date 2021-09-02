import React from 'react'
import classnames from 'classnames'
import ENUMS from './enums'
import * as MaterialIcons from '@material-ui/icons'
import styles from './styles.module.css'
import propTypes from 'prop-types'

function Icon({ name, size, children, ...leftOverProps }) {
  const classNames = classnames(styles.icon, styles[size])
  const Icon = MaterialIcons[name]
  if (!Icon) {
    return null
  }

  return (
    <Icon {...leftOverProps} fontSize={size} className={classNames}>
      {children || name}
    </Icon>
  )
}

Icon.ENUMS = ENUMS

Icon.propTypes = {
  name: propTypes.string,
  size: propTypes.oneOf(Object.values(ENUMS.SIZE))
}

Icon.defaultProps = {
  name: 'info',
  size: ENUMS.SIZE.DEFAULT
}

export const SIZE = ENUMS.SIZE

export default Icon
