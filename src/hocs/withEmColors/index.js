import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'
import propTypes from 'prop-types'
import ENUMS from './enums'

function withEmColors(Component) {
  function WrappedComponent({ className, color, ...leftOverProps }) {
    return (
      <Component
        className={classnames(className, styles.emComponent, styles[color])}
        color='inherit'
        {...leftOverProps}
      />
    )
  }
  WrappedComponent.propTypes = {
    color: propTypes.oneOf(Object.values(ENUMS.COLORS))
  }
  WrappedComponent.defaultProps = {
    color: 'inherit'
  }
  return WrappedComponent
}

export default withEmColors
