import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import EmView from '../../../../views/View'
import viewSize from '../../../../utils/viewSize'

function Container({
  t,
  Context,
  contexts,
  events,
  Component,
  resolve,
  title,
  loadingText,
  Mobile,
  queries,
  onQueryChange,
  queriesToListen,
  handlers,
  ...props
}) {
  const [view, setView] = useState({
    loading: true,
    error: null,
    spinners: {},
    errors: {},
    value: {}
  })

  function setLoading(value) {
    setView((view) => ({ ...view, loading: value }))
  }

  function setError(value) {
    setView((view) => ({ ...view, error: value }))
  }

  function updateSpinners(properties) {
    setView((view) => {
      const newSpinners = { ...view.spinners, ...properties }
      return { ...view, spinners: newSpinners }
    })
  }

  function updateErrors(properties) {
    setView((view) => {
      const newErrors = { ...view.errors, ...properties }
      return { ...view, errors: newErrors }
    })
  }

  function updateView(properties) {
    setView((view) => ({ ...view, ...properties }))
  }

  function updateValue(properties) {
    setView((view) => {
      const newValue = { ...view.value, ...properties }
      return { ...view, value: newValue }
    })
  }

  const viewProps = {
    state: view,
    onStateChange: updateView,
    onValueChange: updateValue,
    onRequestResolve: requestResolve,
    onSpinnersChange: updateSpinners,
    onErrorsChange: updateErrors,
    setLoading,
    setError
  }

  async function handleResolve() {
    try {
      setLoading(true)
      await resolve(viewProps)
      setLoading(false)
    } catch (error) {
      setView({ ...view, error: error, loading: false })
    }
  }

  async function requestResolve(resolve, key) {
    try {
      updateSpinners({ [key]: true })
      const response = await resolve()
      updateSpinners({ [key]: false })
      return response
    } catch (error) {
      updateSpinners({ [key]: false })
      updateErrors({ [key]: error })
    }
  }

  useEffect(() => {
    return events({
      handlers: handlers(viewProps),
      onQueryChange,
      contexts,
      ...viewProps
    })
  }, [viewProps])

  useEffect(() => {
    if (resolve) {
      handleResolve()
    } else {
      setLoading(false)
    }
  }, [])

  for (let index = 0; index < queriesToListen.length; index++) {
    const { key, callback = () => {} } = queriesToListen[index]
    useEffect(() => {
      if (queries[key] !== undefined) {
        requestResolve(callback, `${key}Query`)
      }
    }, [queries[key]])
  }

  const sharedProperties = {
    t,
    handlers: handlers(viewProps),
    onQueryChange: onQueryChange,
    queries: queries,
    contexts,
    ...props,
    ...viewProps
  }

  return (
    <Context.Provider value={sharedProperties}>
      <EmView
        error={view.error}
        title={title}
        loading={view.loading}
        loadingText={loadingText}
      >
        {Mobile && viewSize.isMobile() ? (
          <Mobile {...sharedProperties} />
        ) : (
          <Component {...sharedProperties} />
        )}
      </EmView>
    </Context.Provider>
  )
}

Container.propTypes = {
  Component: propTypes.any,
  resolve: propTypes.func,
  title: propTypes.string,
  loadingText: propTypes.string,
  Mobile: propTypes.any,
  queries: propTypes.object,
  queriesToListen: propTypes.array,
  onQueryChange: propTypes.func,
  handlers: propTypes.func,
  events: propTypes.func
}

Container.defaultProps = {
  title: '',
  Mobile: null,
  loadingText: 'Loading...',
  queriesToListen: [],
  queries: {},
  handlers: () => {},
  onQueryChange: () => {},
  events: () => () => {},
  Context: {
    Provider: ({ children }) => children
  },
  contexts: {}
}

export const viewPropTypes = {
  view: propTypes.shape({
    state: propTypes.object,
    requestResolve: propTypes.func,
    setLoading: propTypes.func,
    setError: propTypes.func,
    updateSpinners: propTypes.func,
    updateView: propTypes.func
  }),
  handlers: propTypes.object,
  onQueryChange: propTypes.func,
  queries: propTypes.object,
  contexts: propTypes.object
}

export default Container
