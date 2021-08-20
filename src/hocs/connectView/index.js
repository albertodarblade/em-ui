import React from 'react'
import Container from './private/Container'
import useHistory from '../../hooks/useHistory'
import useTranslation from '../../hooks/useTranslation'
import queryString from 'query-string'

/**
 * Connect View handles state connect.
 * Resolve initial requests to load the view
 * Handle params value from the current URL
 * @param {Function} Component
 * @param {function} Component.resolve Initial resolve will be handled to load the page.
 */
function connectView(Component) {
  return function WrappedComponent(props) {
    const [history, { mergeQuery }] = useHistory()
    const { config } = Component
    const {
      Context,
      readContexts = {},
      events = () => () => {},
      handlers = () => {},
      resolve = () => {},
      queriesToListen = [],
      translateContext = ''
    } = config
    const [t] = useTranslation(translateContext)

    const contexts = {}
    for (const key in readContexts) {
      const context = readContexts[key]
      contexts[key] = React.useContext(context)
    }

    const queries = queryString.parse(history.location.search)
    const callbackProperties = {
      t,
      contexts,
      queries,
      onQueryChange: mergeQuery
    }

    function wrappedResolve(view) {
      return resolve({ ...callbackProperties, ...view })
    }

    function wrappedHandlers(view) {
      return handlers({ ...callbackProperties, ...view })
    }

    function mapToWrappedQueries(queries) {
      return queries.map((query) => ({
        ...query,
        callback() {
          return query.callback(callbackProperties)
        }
      }))
    }

    return (
      <Container
        t={t}
        Context={Context}
        contexts={contexts}
        loadingText={t(config.loadingText) || 'loading...'}
        resolve={wrappedResolve}
        handlers={wrappedHandlers}
        queriesToListen={mapToWrappedQueries(queriesToListen)}
        Component={Component}
        Mobile={config.Mobile}
        onQueryChange={mergeQuery}
        queries={queries}
        events={events}
        {...props}
      />
    )
  }
}

export default connectView
