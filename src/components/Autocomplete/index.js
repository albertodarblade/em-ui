import React from 'react'
import MAutocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'

function Autocomplete({
  label,
  open,
  loading,
  options,
  value,
  onChange,
  ...leftOverProps
}) {
  const defaults = {
    getOptionSelected: (option, value) => option.id === value.id,
    getOptionLabel: (option) => option.name
  }
  return (
    <MAutocomplete
      value={value}
      onChange={onChange}
      loading={loading}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant='outlined'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color='primary' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
      selectOnFocus
      openOnFocus
      autoHighlight
      getOptionSelected={defaults.getOptionSelected}
      getOptionLabel={defaults.getOptionLabel}
      {...leftOverProps}
    />
  )
}

Autocomplete.defaultProps = {
  options: []
}

export default Autocomplete
