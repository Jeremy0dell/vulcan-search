import React from 'react'

const Form = ({ title, websiteUrl, description, onChange }) =>
  <div>
    <div><input value={title} name="title" onChange={onChange} /></div>
    <div><input value={websiteUrl} name="websiteUrl" onChange={onChange} /></div>
    <div><input value={description} name="description" onChange={onChange} /></div>
  </div>

export default Form
