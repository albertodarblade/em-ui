import React from 'react'
import IconButton from '../IconButton'
import styles from './styles.module.css'
import classnames from 'classnames'

function HorizontalScroll({
  children,
  scrollAmount,
  useEffectListener,
  className,
  ...props
}) {
  const ref = React.useRef(null)
  const [state, setState] = React.useState({
    showLeft: false,
    showRight: false
  })

  React.useEffect(() => {
    if (ref.current.scrollWidth > ref.current.clientWidth) {
      setState((oldState) => ({ ...oldState, showRight: true }))
    }
  }, useEffectListener)

  function handleScroll(event) {
    const width = event.target.offsetWidth
    const scrollWidth = event.target.scrollWidth
    const scrollLeft = event.target.scrollLeft

    if (scrollLeft === 0) {
      setState((oldState) => ({ ...oldState, showLeft: false }))
    } else {
      setState((oldState) => ({ ...oldState, showLeft: true }))
    }

    if (scrollWidth - width <= scrollLeft) {
      setState((oldState) => ({ ...oldState, showRight: false }))
    } else {
      setState((oldState) => ({ ...oldState, showRight: true }))
    }
  }

  function onScroll(direction) {
    if (direction === 'left') {
      ref.current.scrollTo({
        left: ref.current.scrollLeft - scrollAmount,
        behavior: 'smooth'
      })
    } else {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={styles.main}>
      {state.showLeft && (
        <IconButton
          onClick={() => onScroll('left')}
          name='ChevronLeft'
          color='secondary'
          isPrimaryAction
          className={classnames(styles.actions, styles.left)}
        />
      )}
      {state.showRight && (
        <IconButton
          color='secondary'
          name='ChevronRight'
          onClick={() => onScroll('right')}
          isPrimaryAction
          className={classnames(styles.actions, styles.right)}
        />
      )}

      <div
        onScroll={handleScroll}
        ref={ref}
        className={classnames(styles.content, className)}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

HorizontalScroll.defaultProps = {
  scrollAmount: 500,
  useEffectListener: []
}

export default HorizontalScroll
