import React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'
import Icon from '../Icon'
import SwipeableViews from 'react-swipeable-views'
import withEmColors from '../../hocs/withEmColors'

function _Action({ children, className }) {
  return <div className={className}>{children}</div>
}

const Action = withEmColors(_Action)

function SwipeCard({ children, leftAction, rightAction, ...leftOverProps }) {
  const [value, setValue] = React.useState(1)

  function handleChange(index) {
    if (index === 1) {
      return
    }

    if (index === 0) {
      leftAction && leftAction.onSwipe()
    }

    if (index === 2) {
      rightAction && rightAction.onSwipe()
    }
    setValue(index)
    setTimeout(() => {
      setValue(1)
    })
  }
  return (
    <SwipeableViews
      index={value}
      hysteresis={0.3}
      onChangeIndex={handleChange}
      {...leftOverProps}
    >
      {leftAction ? (
        <div className={classnames(styles.action, styles.left)}>
          <Action color={leftAction.color} className={styles.actionInfo}>
            {leftAction.icon && <Icon name={leftAction.icon} />}
            {leftAction.text}
          </Action>
        </div>
      ) : (
        <div />
      )}
      <div className={styles.content}>{children}</div>
      {rightAction ? (
        <div className={classnames(styles.action, styles.right)}>
          <Action color={rightAction.color} className={styles.actionInfo}>
            {rightAction.icon && <Icon name={rightAction.icon} />}
            {rightAction.text}
          </Action>
        </div>
      ) : (
        <div />
      )}
    </SwipeableViews>
  )
}

SwipeCard.defaultProps = {}

export default SwipeCard
