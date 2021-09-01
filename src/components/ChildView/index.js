import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '../Link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import IconButton from '../IconButton'
import styles from './styles.module.css'

function ChildView({ backLink, title, children, path, renderOptions }) {
  return (
    <div className={styles.view}>
      <div className={styles.navigation}>
        {backLink && (
          <Link to={backLink}>
            <IconButton name='arrow_back' />
          </Link>
        )}
        <div className={styles.navigationText}>
          <Breadcrumbs aria-label='breadcrumb' className={styles.breadcrumbs}>
            {path.map((route) => {
              if (route.link) {
                return (
                  <Link color='inherit' to={route.link} key={route.text}>
                    {route.text}
                  </Link>
                )
              }
              return (
                <Typography key={route.text} color='textPrimary'>
                  {route.text}
                </Typography>
              )
            })}
          </Breadcrumbs>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.options}>{renderOptions}</div>
      </div>
      <div>{children}</div>
    </div>
  )
}

ChildView.defaultProps = {
  path: []
}

export default ChildView
