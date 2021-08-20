import React from 'react'
import { Route, Switch } from 'react-router-dom'

function PrivateRoutes({ isAuthenticated, routes, Root }) {
  if (!isAuthenticated) {
    return null
  }
  return (
    <Root>
      <Switch>
        {routes.map((route) => (
          <Route exact key={route.path} {...route} />
        ))}
        <Route path='/' render={() => <div> not Found </div>} />
      </Switch>
    </Root>
  )
}

PrivateRoutes.defaultProps = {
  isAuthenticated: false,
  routes: [],
  Root: ({ children }) => children
}

export default PrivateRoutes
