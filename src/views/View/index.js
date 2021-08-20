import React from 'react'

function View({ children, loading }) {
  if (loading) {
    return <div> ... loading</div>
  }
  return <div> {children} </div>
}

export default View
