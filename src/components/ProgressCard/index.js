import React from 'react'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'
import classnames from 'classnames'
import styles from './styles.module.css'

function ProgressCard({ paperProps, label, count, total }) {
  const value = (count * 100) / total
  return (
    <Paper
      {...paperProps}
      className={classnames(styles.card, { [styles.success]: value >= 100 })}
    >
      <div className={styles.name}>{label}</div>
      <div className={styles.progress}>
        <LinearProgress
          className={styles.bar}
          variant='determinate'
          value={value}
        />
        <div>
          {count}/{total}
        </div>
      </div>
    </Paper>
  )
}

ProgressCard.defaultProps = {
  paperProps: {},
  count: 0,
  total: 0
}

export default ProgressCard
