import React from 'react'
import { compose } from 'recompose'

import { formData } from '../../HOCs/form'

import Form from './Form'
import SearchResult from './SearchResult'

const GoogleSearch = ({ form, handleChange }) =>
  <div id="search-container" className="flex-between">
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
  formData({
    title: 'Vulcan Search: Digital Marketing Solutions Powered by Data Intelligence',
    websiteUrl: 'https://vulcansearch.com',
    description: 'Digital marketing solutions designed to amplify performance and drive sustainable growth through multi-channel integration and cognitive technology.',
  }),
)(GoogleSearch)
