import React from 'react'
import styles from './TextInput.module.scss'

interface Props {
  onChange: (value: string) => void
  value: string
}

const TextInput = ({ onChange, value }: Props): JSX.Element => {
  return (
    <input
      className={styles.input}
      type='text'
      value={value}
      onChange={(e): void => onChange(e.target.value)}
    />
  )
}

export default TextInput
