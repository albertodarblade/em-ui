import Button from './components/Button'
import Icon from './components/Icon'
import IconButton from './components/IconButton'
import DateTimePicker from './components/DateTimePicker'
import Autocomplete from './components/Autocomplete'
import Login from './views/Login'
import Settings from './views/Settings'
import Snackbar from './components/Snackbar'
import EmProvider from './Providers/EmProvider'
import useAlerts from './hooks/useAlerts'
import useSettings from './hooks/useSettings'
import useTranslation from './hooks/useTranslation'
const hooks = {
  useAlerts,
  useSettings,
  useTranslation
}

const views = {
  Login,
  Settings
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
  Snackbar
}
