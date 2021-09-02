import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'

function View({ children, loading, fullHeight }) {
  if (loading) {
    return (
      <div
        className={classnames({
          [styles.fullHeight]: Boolean(fullHeight)
        })}
      >
        <div className={styles['sk-folding-cube']}>
          <div className={`${styles['sk-cube1']} ${styles['sk-cube']}`} />
          <div className={`${styles['sk-cube2']} ${styles['sk-cube']}`} />
          <div className={`${styles['sk-cube4']} ${styles['sk-cube']}`} />
          <div className={`${styles['sk-cube3']} ${styles['sk-cube']}`} />
        </div>
      </div>
    )
  }
  return children
}

export default View
