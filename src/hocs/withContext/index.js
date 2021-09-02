import React from 'react'
import useAlerts from '../../hooks/useAlerts'
import View from '../../views/View'

const defaultConfig = {
  resolve: async () => ({}),
  resolveFailText: 'ops, something wrong on load the page, please try again.',
  defaultState: {},
  fullHeight: false
}

const defaultComponent = () => null

function withContext(Component = defaultComponent, config = defaultConfig) {
  const Context = React.createContext()

  function WrappedComponent(props) {
    const [state, setState] = React.useState(config.defaultState)
    const [value, setValue] = React.useState({})
    const [spinners, setSpinners] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const { addAlert } = useAlerts()

    function onStateChange(newState) {
      setState((oldState) => ({ ...oldState, ...newState }))
    }

    function onValueChange(newValue) {
      setValue((oldValue) => ({ ...oldValue, ...newValue }))
    }

    function onSpinnersChange(newValue) {
      setSpinners((oldValue) => ({ ...oldValue, ...newValue }))
    }

    function onLoadingChange(newValue) {
      setLoading(newValue)
    }

    async function handleResolve(...params) {
      try {
        const value = await config.resolve(...params)
        setValue(value)
        setLoading(false)
      } catch (error) {
        console.error(error)
        addAlert(config.resolveFailText, {
          variant: 'error',
          autoHideDuration: 60000
        })
      }
    }

    async function handleAsync(callback, key) {
      setSpinners({ [key]: true })
      const response = await callback()
      setState({ [key]: response })
      setSpinners({ [key]: false })
      return response
    }

    const contextValue = {
      state,
      onStateChange,
      value,
      onValueChange,
      spinners,
      onSpinnersChange,
      loading,
      onLoadingChange,
      resolve: handleResolve,
      onAsync: handleAsync
    }

    const componentProps = { ...props, ...contextValue }

    React.useEffect(() => {
      handleResolve()
    }, [])
    return (
      <Context.Provider value={contextValue}>
        <View loading={loading} fullHeight={config.fullHeight}>
          <Component {...componentProps} />
        </View>
      </Context.Provider>
    )
  }

  return [Context, WrappedComponent]
}

export default withContext
