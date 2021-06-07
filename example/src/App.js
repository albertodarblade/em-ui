import React from 'react'

import Em from 'em-ui'

const App = () => {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  async function getValues() {
    setLoading(true);
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json();
    setOptions(data);
    setLoading(false)

  }
  return <Em.StyleProvider>
      <Em.Button  color="warning" isPrimaryAction> Btton </Em.Button>
      <Em.DateTimePicker readOnly language="es" />

      <Em.Autocomplete
        onOpen={getValues}
        value={value}
        onChange={handleChange}
        loading={loading}
        label="Epics"
        options={options}
        getOptionSelected={(option, value) => option.name === value.name}

      />

    </Em.StyleProvider>
}

export default App
