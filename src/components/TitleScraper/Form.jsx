import React from 'react'
import { DebounceInput } from 'react-debounce-input'

const Form = ({ handleTitleChange }) =>
  <div>
    <DebounceInput
      className="input"
      style={{ margin: 20 }}
      minLength={2}
      debounceTimeout={2000}
      onChange={handleTitleChange}
      placeholder="Website URL..."
    />
  </div>

export default Form
