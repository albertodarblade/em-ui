import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import styles from './styles.module.css'
import Button from '../Button'
import classnames from 'classnames'
import UseStateless from '../../hooks/useStateless'
function Wizard({
  index,
  onChangeIndex,
  slides,
  onComplete,
  completeText,
  prevText,
  nextText
}) {
  const [value, setValue] = UseStateless({
    value: index,
    setValue: onChangeIndex,
    initialState: 0,
    loading: false
  })

  async function handleComplete() {
    setValue({ loading: true })
    await onComplete()
    setValue({ loading: false })
  }

  return (
    <div className={styles.root}>
      <SwipeableViews index={value} onChangeIndex={setValue}>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={styles.slide}>
              {slide.title && <div className={styles.title}>{slide.title}</div>}
              <div>{slide.render}</div>
            </div>
          )
        })}
      </SwipeableViews>
      <div className={styles.dots}>
        <div className={styles.buttonsArea}>
          {value > 0 && (
            <Button color='primary' onClick={() => setValue(value - 1)}>
              {prevText}
            </Button>
          )}
        </div>
        <div className={styles.dotsGroup}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={classnames({
                [styles.dot]: true,
                [styles.active]: slideIndex === value
              })}
            />
          ))}
        </div>
        <div className={classnames(styles.buttonsArea, styles.right)}>
          {value < slides.length - 1 && (
            <Button
              isPrimaryAction
              color='primary'
              onClick={() => setValue(value + 1)}
            >
              {nextText}
            </Button>
          )}

          {value === slides.length - 1 && (
            <Button
              isPrimaryAction
              icon='task_alt'
              color='success'
              loading={value.loading}
              onClick={handleComplete}
            >
              {completeText}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

Wizard.defaultProps = {
  onComplete: () => {},
  prevText: 'Prev',
  nextText: 'Next',
  completeText: 'Complete'
}

export default Wizard
