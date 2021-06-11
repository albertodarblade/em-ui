import Button from './components/Button'
import Icon from './components/Icon'
import IconButton from './components/IconButton'
import DateTimePicker from './components/DateTimePicker'
import Autocomplete from './components/Autocomplete'
import Login from './views/Login'
import Snackbar from './components/Snackbar'
import Alert from './components/Alert'
import useAlerts from './hooks/useAlerts'
import EmProvider from './Providers/EmProvider'

const hooks = {
  useAlerts
}

const views = {
  Login
}

export default {
  hooks,
  views,
  EmProvider,
  Button,
  Icon,
  IconButton,
  DateTimePicker,
  Autocomplete,
  Snackbar,
  Alert
}
