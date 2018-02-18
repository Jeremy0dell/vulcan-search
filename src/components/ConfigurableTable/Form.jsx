import React from 'react'
import Papa from 'papaparse'
import { Checkbox, CheckboxGroup } from 'react-checkbox-group'

const Form = ({
  headers,
  data,
  query,
  colsHidden,
  showTable,
  showColsHidden,
  handleCheckCol,
  onChange,
  onClick,
  handleUpdateQuery,
  handleToggleChecks,
}) =>
  <div id="table-forms">
    <div>
      <div>Enter Headers here:</div>
      <input
        className="input"
        value={headers}
        name="headers"
        onChange={onChange}
      />
    </div>
    <div>
      <div>Enter Table Values here:</div>
      <textarea
        className="input"
        value={data}
        name="data"
        onChange={onChange}
      />
    </div>
    <div>
      <div>Enter Search Query here:</div>
      <input
        className="input"
        value={query}
        name="query"
        onChange={handleUpdateQuery}
      />
    </div>
    <button onClick={onClick}>{showTable ? 'Hide Table' : 'Generate Table'}</button>
    <button onClick={handleToggleChecks}>Enable/Disable Column Toggling</button>
    {/* {
      headers && <CheckboxGroup
        id="checkbox-group"
        value={colsHidden}
        onChange={handleCheckCol}
      >
        {
          showColsHidden && Papa.parse(headers).data[0].map((header, idx) =>
          <label key={idx}><Checkbox value={header}/>{header}</label>)
        }
      </CheckboxGroup>
    } */}
  </div>

export default Form
