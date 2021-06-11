import { useContext } from 'react'
import context from '../../Providers/EmProvider/context'
function useSettings() {
  return useContext(context)
}

export default useSettings
