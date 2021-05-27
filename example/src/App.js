import React from 'react'

import Em from 'em-ui'
import 'em-ui/dist/index.css'
console.log(Em);
const App = () => {
  return <Em.StyleProvider>
      <Em.Button  color="error"> Btton </Em.Button>
    </Em.StyleProvider>
}

export default App
