import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import MaterialLink from '@material-ui/core/Link'

function Link({ to, children }) {
  return (
    <RouterLink to={to} style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <MaterialLink component='span'>{children}</MaterialLink>
    </RouterLink>
  )
}

export default Link
