import React from 'react'
import Engageme from 'em-ui'
import 'em-ui/dist/index.css'

const { Wizard } = Engageme
const { useAlerts, useSettings, useTranslation } = Engageme.hooks

const { Login, Settings } = Engageme.views

const App = () => {
  const alerts = useAlerts()
  const { addAlert } = alerts
  const [t] = useTranslation('common')

  const slides = [
    {
      title: 'Before start, lets do a quick configuration.',
      render: (
        <Settings
          darkModeText={t('chooseDarkMode')}
          languageText={t('chooseLanguage')}
          colorText={t('chooseColor')}
        />
      )
    },
    {
      title: 'Thank you',
      render: <div> let start it </div>
    }
  ]
  return (
    <div>
      <Wizard slides={slides} />
      {/* <Settings
        darkModeText={t('chooseDarkMode')}
        languageText={t('chooseLanguage')}
        colorText={t('chooseColor')}
      />
      <br />
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
        onAuthenticate={(payload) =>
          addAlert(t('welcome') + ' ' + payload.user.name)
        }
        size='large'
      /> */}
    </div>
  )
}
App.count = 0

export default App

/* Wizard Demo


import React from 'react'
import Engageme from 'em-ui'
import 'em-ui/dist/index.css'

const { Wizard } = Engageme
const { useAlerts, useSettings, useTranslation } = Engageme.hooks

const { Login, Settings } = Engageme.views

const App = () => {
  const alerts = useAlerts()
  const { addAlert } = alerts
  const [t] = useTranslation('common')

  const slides = [
    {
      title:
        'Welcome to on sync app, in this app we will manage your tasks and collaborative work',
      render: <div> ON sync </div>
    },
    {
      title: 'Customize your favorite settings before start.',
      render: (
        <Settings
          darkModeText={t('chooseDarkMode')}
          languageText={t('chooseLanguage')}
          colorText={t('chooseColor')}
        />
      )
    },
    {
      tile: 'Invite your friends by email',
      render: <div> friends list </div>
    },
    {
      title: 'Thank you',
      render: <div> let start it </div>
    }
  ]
  return (
    <div>
      <Wizard slides={slides} />



*/
