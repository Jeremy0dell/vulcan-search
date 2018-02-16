import { compose, withState, withHandlers } from 'recompose'

export const formData = initialValues => compose(
  withState('form', 'updateState', initialValues),
  withHandlers({
    handleChange:
    props =>
    event =>
    props.updateState({ ...props.form, [event.target.name]: event.target.value }),
  }),
)
