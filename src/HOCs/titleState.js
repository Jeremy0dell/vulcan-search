import { compose, withState, withHandlers } from 'recompose'

import fetch from '../util/getFromUrl'

export const titleState = initialValues => compose(
  withState('titleState', 'updateTitleState', initialValues),
  withHandlers({
    handleTitleChange: props => event => {
    props.updateTitleState({ ...props.titleState, showTitle: true, isError: false  })

    fetch('/ping', { url: event.target.value })
    .then(res => props.updateTitleState({ ...props.titleState, showTitle: true, title: res.data.title }))
    .catch(props.updateTitleState({ ...props.titleState, showTitle: true, isError: true }))
    },
  }),
)
