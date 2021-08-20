import Cookies from 'js-cookie'
import emitter from '../emitter'

const jsCookies = {
  get: function (name, options) {
    const value = Cookies.get(name, options)
    return value
  },
  set: function (name, value, options) {
    Cookies.set(name, value, options)
    emitter.emit('cookies', { name, value })
  },
  remove: function (name, options) {
    Cookies.remove(name, options)
    emitter.emit('cookies', { name, value: null })
  }
}

export default jsCookies
