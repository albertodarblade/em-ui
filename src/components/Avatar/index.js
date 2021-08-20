import React from 'react'
import MuiAvatar from '@material-ui/core/Avatar'
import classnames from 'classnames'
import propTypes from 'prop-types'
import ENUMS from './enums'
import styles from './styles.module.css'

export default function Avatar({ size, name, className, ...leftOverProps }) {
  console.log(size)
  return (
    <MuiAvatar
      alt={name}
      className={classnames(className, styles[size], styles.avatar)}
      {...leftOverProps}
    />
  )
}

Avatar.ENUMS = ENUMS

Avatar.propTypes = {
  size: propTypes.oneOf(Object.values(ENUMS.SIZE)),
  name: propTypes.string,
  className: propTypes.string
}

Avatar.defaultProps = {
  name: '?',
  size: ENUMS.SIZE.MEDIUM
}
