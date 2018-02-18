import { compose, withState, withHandlers } from 'recompose'

import fetch from '../util/getFromUrl'

export const titleState = initialValues => compose(
  withState('titleState', 'updateTitleState', initialValues),
  withHandlers({
    handleTitleChange: props => event => {
      props.updateTitleState({ ...props.titleState, showTitle: true, loading: true })

      fetch('/ping', { url: event.target.value })
      .then(res => {
        if (typeof res.data === "string") {
          props.updateTitleState({
            ...props.titleState,
            isError: true,
            showTitle: false,
            title: res.data
          })
        } else {
          props.updateTitleState({
            ...props.titleState,
            isError: false,
            showTitle: true,
            title: res.data.title
          })
        }
      })
    },
  }),
)
