import React from 'react'

import Em from 'em-ui'
import 'em-ui/dist/index.css'

const App = () => {
  return (
    <Em.StyleProvider>
      <Em.Login
        head={
          <img src='https://previews.123rf.com/images/alluranet/alluranet1712/alluranet171200004/91011424-educaci%C3%B3n-c-plantilla-de-dise%C3%B1o-del-logotipo-de-la-representaci%C3%B3n-.jpg' />
        }
        label='Sign in with your favorite account'
        footer='terms and services'
        facebookId='692152614907871'
        googleId='876492811509-ji5aqh6i1chh7qg8hrgfg50sga5ni2ru.apps.googleusercontent.com'
        buttonText='Sign in with'
        onAuthenticate={(pay, response) => console.log(pay, response)}
        size='large'
      />
    </Em.StyleProvider>
  )
}

export default App
