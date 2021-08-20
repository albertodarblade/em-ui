import React from 'react'
import emitter from '../../utils/emitter'

export default function useCookies(initialState = {}) {
  const [cookies, setCookies] = React.useState(initialState)
  React.useEffect(() => {
    function updateState({ name, value }) {
      setCookies((cookie) => ({ ...cookie, [name]: value }))
    }
    emitter.on('cookies', updateState)
    return () => {
      emitter.off('cookies', updateState)
    }
  }, [])

  return cookies
}
