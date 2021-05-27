import React from 'react'
import styles from './styles.module.css'
import EmButton from './components/Button'
import EmStyleProvider from './Providers/StyleProvider'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = EmButton
export const StyleProvider = EmStyleProvider

console.log(StyleProvider, '???')
export default {
  Button,
  StyleProvider
}
