import React from 'react'
import MIcon from '@material-ui/core/Icon'
import classnames from 'classnames'
import ENUMS from './enums'
import styles from './styles.module.css'
import propTypes from 'prop-types'

function Icon({ name, size, children, ...leftOverProps }) {
  const classNames = classnames(styles.icon, styles[size])
  return (
    <MIcon {...leftOverProps} fontSize={size} className={classNames}>
      {children || name}
    </MIcon>
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
