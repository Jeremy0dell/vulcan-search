import React from 'react'
import { compose } from 'recompose'

import { formData } from '../../HOCs/form'

import Form from './Form'
import SearchResult from './SearchResult'

const GoogleSearch = ({ form, handleChange }) =>
  <div>
    {console.log(form)}
    <Form
      title={form.title}
      websiteUrl={form.websiteUrl}
      description={form.description}
      onChange={handleChange}
    />
    <SearchResult
      title={form.title}
      websiteUrl={form.websiteUrl}
      description={form.description}
    />
  </div>

export default compose(
  formData({ title: '', websiteUrl: '', description: '' }),
)(GoogleSearch)
