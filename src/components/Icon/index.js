import MIcon from '@material-ui/core/Icon'
import classnames from 'classnames'
import ENUMS from './enums'
import styles from './styles.module.css'
import propTypes from 'prop-types'

function Icon({ name, size, children, ...leftOverProps }) {
  const classNames = classnames(styles.icon, styles[size])
  return (
    <MIcon {...leftOverProps} fontSize={size} className={classNames}>
      {name || children}
    </MIcon>
  )
}

Icon.propTypes = {
  name: propTypes.string,
  size: propTypes.oneOf(Object.values(ENUMS.SIZE))
}

Icon.propTypes = {
  size: ENUMS.SIZE.INHERIT
}

export const SIZE = ENUMS.SIZE

export default Icon
