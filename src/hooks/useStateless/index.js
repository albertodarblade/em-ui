import React from 'react'

function UseStateless({ value, setValue, initialState }) {
  if (value === undefined && setValue === undefined) {
    return React.useState(initialState)
  }

  return [value, setValue]
}

export default UseStateless
