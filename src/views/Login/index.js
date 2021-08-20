import React from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import ENUMS from './enums'
import Dialog from '@material-ui/core/Dialog'
import CircularProgress from '@material-ui/core/CircularProgress'
import classnames from 'classnames'
import styles from './styles.module.css'
import useAlerts from '../../hooks/useAlerts'
import propTypes from 'prop-types'

function Login({
  buttonText,
  loadingText,
  facebookId,
  googleId,
  size,
  head,
  label,
  footer,
  facebookProps,
  googleProps,
  onAuthenticate,
  onFailure,
  onClickButtons,
  successText,
  errorText
}) {
  const [loading, setLoading] = React.useState(false)
  const classNames = classnames({
    [styles.login]: true,
    [styles[size]]: Boolean(size)
  })

  const { addAlert } = useAlerts()

  function handleClick(event) {
    onClickButtons(event)
    setLoading(true)
  }

  function handleFacebookAuth(response) {
    const {
      email,
      accessToken,
      name,
      data_access_expiration_time: dataAccessExpirationTime,
      expiresIn,
      picture
    } = response

    const imageUrl = picture.data.url
    const user = {
      name,
      email,
      image: imageUrl
    }

    const payload = {
      provider: 'facebook',
      token: accessToken,
      user,
      tokeInformation: {
        dataAccessExpirationTime,
        expiresIn
      }
    }
    onAuthenticate(payload, response)
    setLoading(false)
    addAlert(successText, { variant: 'success', autoHideDuration: 3000 })
  }

  function handleGoogleAuth(response) {
    const { profileObj, accessToken, tokenObj } = response
    const user = {
      name: profileObj.name,
      email: profileObj.email,
      image: profileObj.imageUrl
    }

    const payload = {
      provider: 'google',
      token: accessToken,
      user,
      tokeInformation: tokenObj
    }
    onAuthenticate(payload, response)
    setLoading(false)
    addAlert(successText, { variant: 'success', autoHideDuration: 3000 })
  }

  function handleFail(provider, error) {
    setLoading(false)
    onFailure({ provider, error })
    addAlert(errorText, {
      variant: 'error',
      autoHideDuration: 3000,
      persist: true
    })
  }

  return (
    <div className={classNames}>
      <Dialog open={loading}>
        <div className={styles.loading}>
          <CircularProgress />
          <div>{loadingText}</div>
        </div>
      </Dialog>
      <div className={styles.background} />
      <div className={styles.backgroundFooter} />

      <div className={styles.buttonsArea}>
        <div className={styles.head}>{head}</div>
        <div className={styles.label}>{label}</div>
        {facebookId && (
          <FacebookLogin
            cssClass={styles.facebookButton}
            appId={facebookId}
            textButton={`${buttonText} Facebook`}
            fields='name,email,picture'
            onClick={handleClick}
            callback={handleFacebookAuth}
            onFailure={(response) => handleFail('facebook', response)}
            disableMobileRedirect
            {...facebookProps}
          />
        )}
        {facebookId && googleId && <span className={styles.divider} />}
        {googleId && (
          <div onClick={handleClick}>
            <GoogleLogin
              clientId={googleId}
              buttonText={`${buttonText} Google`}
              onSuccess={handleGoogleAuth}
              onFailure={(response) => handleFail('google', response)}
              {...googleProps}
            />
          </div>
        )}
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  )
}

Login.ENUMS = ENUMS

Login.defaultProps = {
  googleProps: {},
  facebookProps: {},
  size: ENUMS.SIZE.SMALL,
  buttonText: '',
  loadingText: 'Loading...',
  successText: 'Successfully authenticated',
  errorText: 'An error appear on authentication',
  onAuthenticate: () => {},
  onFailure: () => {},
  onClickButtons: () => {}
}

Login.propTypes = {
  size: propTypes.oneOf(Object.values(ENUMS.SIZE)),
  buttonText: propTypes.string,
  loadingText: propTypes.string,
  successText: propTypes.string,
  errorText: propTypes.string,
  googleProps: propTypes.object,
  facebookProps: propTypes.object,
  onAuthenticate: propTypes.func,
  onFailure: propTypes.func,
  onClickButtons: propTypes.func
}

export default Login
