import { useHistory as reactRouterUseHistory } from 'react-router-dom'
import queryString from 'query-string'

export default function useHistory() {
  const history = reactRouterUseHistory()

  function mergeQuery(props, action = 'push') {
    const search = queryString.parse(history.location.search)
    const newSearch = { ...search, ...props }
    history[action]({
      search: queryString.stringify(newSearch)
    })
  }

  function hasQuery(query) {
    const search = queryString.parse(history.location.search)
    return Boolean(search[query])
  }
  const methods = {
    mergeQuery,
    hasQuery
  }

  return [history, methods]
}
