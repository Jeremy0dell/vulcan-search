import React from 'react'
import Papa from 'papaparse'
import { Checkbox, CheckboxGroup } from 'react-checkbox-group'

const Checkboxes = ({ onChange, colsHidden, showColsHidden, headers }) =>
  <div>
    <div>Check to show or hide columns</div>
    <CheckboxGroup
      id="checkbox-group"
      value={colsHidden}
      onChange={onChange}
    >
      {
        showColsHidden && Papa.parse(headers).data[0].map((header, idx) =>
        <label key={idx}><Checkbox value={header}/>{header}</label>)
      }
    </CheckboxGroup>
  </div>

export default Checkboxes
