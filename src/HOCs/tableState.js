import { compose, withState, withHandlers } from 'recompose'

export const tableState = initialValues => compose( // { showTable: false, query: '', order: 'asc', sortedBy: '' }
  withState('tabState', 'updateTableState', initialValues),
  withHandlers({
    handleShowTable: props => () => props.updateTableState({ ...props.tabState, showTable: true }),
    handleUpdateQuery: props => event => props.updateTableState({ ...props.tabState, query: event.target.value }),
    handleCheckCol: props => colsHidden => props.updateTableState({ ...props.tabState, colsHidden }),
    handleHeaderClick: props => sortedBy => {
      props.tabState.order === 'asc' ?
      props.updateTableState({ ...props.tabState, sortedBy , order: 'desc' }) :
      props.updateTableState({ ...props.tabState, sortedBy , order: 'asc' })
    },
    handleSortedBy: props => event => props.updateTableState({ ...props.tabState, sortedBy: event.target.value }),
  }),
)
