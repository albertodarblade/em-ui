import React from 'react'

function loadScript(d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) {
    return
  }
  js = d.createElement(s)
  js.id = id
  js.src = '//connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}

function FacebookLogin({ appId, fields }) {
  React.useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: appId,
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: 'v7.0' // Use this Graph API version for this call.
      })
    }
    loadScript(document, 'script', 'facebook-jssdk')
  }, [])
  function handleClick() {
    FB.init({
      appId: appId,
      cookie: true, // Enable cookies to allow the server to access the session.
      xfbml: true, // Parse social plugins on this webpage.
      version: 'v7.0' // Use this Graph API version for this call.
    })
    setTimeout(() => {
      FB.login(
        function (response) {
          // handle the response
          console.log('responseeeee', response)
        },
        { scope: 'public_profile,email' }
      )
    }, 4000)
  }
  return (
    <div>
      <button onClick={handleClick}> FAceboo </button>
      <div id='fb-root' />

      <script
        async
        defer
        crossOrigin='anonymous'
        src='https://connect.facebook.net/en_US/sdk.js'
      />
    </div>
  )
}

export default FacebookLogin
