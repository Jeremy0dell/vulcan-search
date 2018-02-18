import React from 'react'
import { compose } from 'recompose'

import { titleState } from '../../HOCs/titleState'

import Form from './Form'
import Title from './Title'

const TitleScraper = ({ titleState, handleTitleChange }) =>
  <div
    id="title-container"
    className="flex-center"
    style={{ flexDirection: 'column' }}
  >
    <div id="title-header">TitleScraper</div>

    <div id="title-error" style={{ visibility: !titleState.isError && 'hidden' }}>
      Server responded with {titleState.title}
    </div>

    <Form handleTitleChange={handleTitleChange} />

    <Title title={titleState.title} loading={titleState.loading} visible={titleState.showTitle} />
  </div>

export default compose(
  titleState({ loading: false, showTitle: false, title: null, isError: null }),
)(TitleScraper)
