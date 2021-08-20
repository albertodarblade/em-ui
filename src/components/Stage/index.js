import React from 'react'
import styles from './styles.module.css'
import withEmColors from '../../hocs/withEmColors'
import classnames from 'classnames'

function Stage({ text, className, editable, onChange, ...props }) {
  return (
    <div {...props} className={classnames(styles.stage, className)}>
      {!editable && text}
      {editable && (
        <input
          autoFocus={!text}
          className={styles.input}
          value={text}
          onChange={onChange}
        />
      )}
    </div>
  )
}

export default withEmColors(Stage)
