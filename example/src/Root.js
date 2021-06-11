import React from 'react'
import Engageme from 'em-ui'
import { useTranslation } from 'react-i18next'
import 'em-ui/dist/index.css'

const { useAlerts } = Engageme.hooks

const { Login } = Engageme.views

const App = () => {
  const alerts = useAlerts()
  const { addAlert, closeAlert } = alerts
  const [t] = useTranslation('common')

  return (
    <div>
      <button
        onClick={() => {
          App.count++
          addAlert('tengo un mensage' + App.count, {
            variant: 'success'
          })
        }}
      >
        temporal
      </button>

      <button onClick={() => closeAlert()}> Closee</button>
      <Login
        head={
          <img src='https://previews.123rf.com/images/alluranet/alluranet1712/alluranet171200004/91011424-educaci%C3%B3n-c-plantilla-de-dise%C3%B1o-del-logotipo-de-la-representaci%C3%B3n-.jpg' />
        }
        label={t('loginMessage')}
        footer='terms and services'
        facebookId='692152614907871'
        googleId='876492811509-ji5aqh6i1chh7qg8hrgfg50sga5ni2ru.apps.googleusercontent.com'
        buttonText={t('signItWith')}
        loadingText={t('loading')}
        onAuthenticate={(pay, response) => addAlert('Login it')}
        size='large'
      />
    </div>
  )
}
App.count = 0

export default App
