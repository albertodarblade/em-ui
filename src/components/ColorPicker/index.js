import React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'

function Color({ primary, secondary, selected, ...leftOverProps }) {
  const classNames = classnames({
    [styles.color]: true,
    [styles.selected]: Boolean(selected)
  })
  return (
    <div className={classNames} {...leftOverProps}>
      <div className={styles.primary} style={{ background: primary }} />
      <div className={styles.secondary} style={{ background: secondary }} />
    </div>
  )
}

function ColorPicker({ colors, value, onChange }) {
  function handleSelect(index, color) {
    onChange(index, color)
  }

  return (
    <div className={styles.colors}>
      {colors.map((color, index) => {
        return (
          <Color
            onClick={() => handleSelect(index, color)}
            selected={value === index}
            key={color.primary}
            primary={color.primary}
            secondary={color.secondary}
          />
        )
      })}
    </div>
  )
}

ColorPicker.defaultProps = {
  colors: [],
  onChange: () => {}
}

export default ColorPicker
