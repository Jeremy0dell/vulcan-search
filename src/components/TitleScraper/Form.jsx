import React from 'react'
import { DebounceInput } from 'react-debounce-input'

const Form = ({ handleTitleChange }) =>
  <div>
    <DebounceInput
      minLength={2}
      debounceTimeout={2000}
      onChange={handleTitleChange}
    />
  </div>

export default Form
