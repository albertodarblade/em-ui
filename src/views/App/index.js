import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

function App({ isAuthenticated, renderFallback, routes, Root }) {
  return (
    <BrowserRouter>
      {!isAuthenticated && renderFallback}
      <PrivateRoutes
        isAuthenticated={isAuthenticated}
        Root={Root}
        routes={routes}
      />
    </BrowserRouter>
  )
}

export default App
