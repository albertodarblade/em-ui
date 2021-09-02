import Button from './components/Button'
import Icon from './components/Icon'
import IconButton from './components/IconButton'
import DateTimePicker from './components/DateTimePicker'
import Autocomplete from './components/Autocomplete'
import Wizard from './components/Wizard'
import Snackbar from './components/Snackbar'
import Avatar from './components/Avatar'
import ProgressCard from './components/ProgressCard'
import GroupList from './components/GroupList'
import Fab from './components/Fab'
import SwipeCard from './components/SwipeCard'
import Placeholder from './components/Placeholder'
import QueryModals from './components/QueryModals'
import Stepper from './components/Stepper'
import TextField from './components/TextField'
import Stage from './components/Stage'
import ImageUploader from './components/ImageUploader'
import ImageGallery from './components/ImageGallery'
import ConfirmationButton from './components/ConfirmationButton'
import ColorPicker from './components/ColorPicker'
import HorizontalScroll from './components/HorizontalScroll'
import ChildView from './components/ChildView'
import Link from './components/Link'

import Login from './views/Login'
import Settings from './views/Settings'
import App from './views/App'
import EmProvider from './Providers/EmProvider'

import useAlerts from './hooks/useAlerts'
import useSettings from './hooks/useSettings'
import useTranslation from './hooks/useTranslation'
import useCookies from './hooks/useCookies'
import useHistory from './hooks/useHistory'
import useDebounce from './hooks/useDebounce'

import jsCookies from './utils/jsCookies'
import emitter from './utils/emitter'

import connectView from './hocs/connectView'
import withContext from './hocs/withContext'

const utils = {
  jsCookies,
  emitter
}

const hooks = {
  useAlerts,
  useSettings,
  useTranslation,
  useCookies,
  useHistory,
  useDebounce
}

const views = {
  Login,
  Settings,
  App
}

const hocs = {
  connectView,
  withContext
}

export default {
  hocs,
  utils,
  hooks,
  views,
  EmProvider,
  Button,
  Icon,
  IconButton,
  DateTimePicker,
  Autocomplete,
  Wizard,
  Snackbar,
  Avatar,
  ProgressCard,
  GroupList,
  Fab,
  SwipeCard,
  Placeholder,
  QueryModals,
  Stepper,
  TextField,
  Stage,
  ImageUploader,
  ImageGallery,
  ConfirmationButton,
  ColorPicker,
  HorizontalScroll,
  Link,
  ChildView
}
