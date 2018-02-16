import React from 'react'
import Papa from 'papaparse'
import { Checkbox, CheckboxGroup } from 'react-checkbox-group'

const Form = ({ headers, data, query, colsHidden, handleCheckCol, onChange, onClick, handleUpdateQuery }) =>
  <div>
    <div><input value={headers} name="headers" onChange={onChange} /></div>
    <div><textarea value={data} name="data" onChange={onChange} /></div>
    This is form
    <button onClick={onClick}>Click me</button>
    <div><input value={query} name="query" onChange={handleUpdateQuery} /></div>
    {
      headers && <CheckboxGroup checkboxdepth={2} value={colsHidden} onChange={handleCheckCol}>
        {
          Papa.parse(headers).data[0].map((header, idx) =>
          <label key={idx}><Checkbox value={header}/>{header}</label>)
        }
      </CheckboxGroup>
    }
    {/* {
      headers && Papa.parse(headers).data[0].map((header, idx) =>
      <div key={idx}>
        {header}
        <input
          type="checkbox"
          onChange={(e,v,t) => { console.log(e.target, header, idx) }}
        />
      </div>)
    } */}
  </div>

export default Form
