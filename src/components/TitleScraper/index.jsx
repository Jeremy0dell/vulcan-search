import React from 'react'
import { compose } from 'recompose'

import { titleState } from '../../HOCs/titleState'

import Form from './Form'
import Title from './Title'

const TitleScraper = ({ titleState, handleTitleChange }) =>
  <div>
    This is TitleScraper
    <Form
      handleTitleChange={handleTitleChange}
    />
    {console.log(titleState)}
    { titleState.showTitle && <Title title={titleState.title} isError={titleState.isError} /> }
  </div>

export default compose(
  titleState({ showTitle: false, title: null, isError: null }),
)(TitleScraper)
