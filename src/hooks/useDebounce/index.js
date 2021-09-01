import React from 'react'

function useDebounce() {
  const ref = React.useRef(null)
  function debounce(callback, time) {
    clearTimeout(ref.current)
    ref.current = setTimeout(() => {
      callback()
    }, time)
  }
  return debounce
}

export default useDebounce
