import { compose, withState, withHandlers } from 'recompose'

export const tableState = initialValues => compose( // { showTable: false, query: '', order: 'asc', sortedBy: '' }
  withState('tabState', 'updateTableState', initialValues),
  withHandlers({
    handleShowTable: props => () => props.updateTableState({
      ...props.tabState,
      showTable: props.tabState.showTable ? false : true
    }),
    handleUpdateQuery: props => event => props.updateTableState({ ...props.tabState, query: event.target.value }),
    handleCheckCol: props => colsHidden => props.updateTableState({ ...props.tabState, colsHidden }),
    handleToggleChecks: props => () => props.updateTableState({ ...props.tabState, showColsHidden: !props.tabState.showColsHidden }),
    handleHeaderClick: props => sortedBy => {
      const prevSort = props.tabState.sortedBy
      const { order } = props.tabState

      props.updateTableState({
        ...props.tabState,
        sortedBy ,
        order: prevSort === sortedBy ? (order === 'asc' ? 'desc' : 'asc') : 'asc'
      })
    },
    handleSortedBy: props => event => props.updateTableState({ ...props.tabState, sortedBy: event.target.value }),
  }),
)
