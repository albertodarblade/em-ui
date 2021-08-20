import React from 'react'
import MuiFab from '@material-ui/core/Fab'
import withEmColors from '../../hocs/withEmColors'
import classnames from 'classnames'
import Icon from '../Icon'
import ENUMS from './enums'
import styles from './styles.module.css'

function Fab({ icon, fixed, className, text, variant, ...leftOverProps }) {
  const showText = Boolean(text) && variant === ENUMS.VARIANTS.EXTENDED
  return (
    <MuiFab
      variant={variant}
      className={classnames(className, { [styles.fixed]: fixed })}
      {...leftOverProps}
    >
      <Icon name={icon} size={Icon.ENUMS.SIZE.MEDIUM} />
      {showText && <div className={styles.text}>{text}</div>}
    </MuiFab>
  )
}

Fab.ENUMS = ENUMS

Fab.defaultProps = {
  fixed: false
}

export default withEmColors(Fab)
