import React from 'react'

import Em from 'em-ui'

console.log(Em);

const App = () => {
  return <Em.StyleProvider>
      <Em.Button  color="warning" isPrimaryAction> Btton </Em.Button>
      <Em.DateTimePicker language="es" />
      <Em.DateTimePicker />
      <Em.DateTimePicker />
      <Em.DateTimePicker />
      <Em.DateTimePicker />

    </Em.StyleProvider>
}

export default App
