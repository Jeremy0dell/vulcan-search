import React from 'react'
import { compose } from 'recompose'
import every from 'lodash/every'

import { formData } from '../../HOCs/form'
import { tableState } from '../../HOCs/tableState'

import { arrangeTableData, changeSort, changeQuery, columnFilter } from '../../util/arrangeTableData'

import Form from './Form'
import Table from './Table'
import Checkboxes from './Checkboxes'

const ConfigurableTable = ({
  form,
  tabState,
  handleCheckCol,
  handleChange,
  handleShowTable,
  handleUpdateQuery,
  handleHeaderClick,
  handleToggleChecks,
}) =>
  <div id="table-container" className="flex-between">
    <Form
      headers={form.headers}
      data={form.data}
      onChange={handleChange}
      onClick={handleShowTable}
      query={tabState.query}
      showTable={tabState.showTable}
      showColsHidden={tabState.showColsHidden}
      handleUpdateQuery={handleUpdateQuery}
      colsHidden={tabState.colsHidden}
      handleCheckCol={handleCheckCol}
      handleToggleChecks={handleToggleChecks}
    />
    {
      (form.headers && tabState.showColsHidden) ?
      <Checkboxes
        onChange={handleCheckCol}
        colsHidden={tabState.colsHidden}
        showColsHidden={tabState.showColsHidden}
        headers={form.headers}
      /> : <div />
    }
    { every([tabState.showTable, form.headers, form.data], x => !!x) && tabState.showTable ?
      <Table
        handleHeaderClick={handleHeaderClick}
        sortedBy={tabState.sortedBy}
        order={tabState.order}

        tableData={
          changeSort(
            changeQuery(
              columnFilter(
                arrangeTableData(
                  form.headers, form.data
                ), tabState.colsHidden
              ), tabState.query
            ), tabState.sortedBy, tabState.order
          )
        }
    /> : <div /> }
  </div>

export default compose(
  formData({ headers: '', data: '' }),
  tableState({
    showTable: false,
    query: '',
    order: 'asc',
    sortedBy: '',
    showColsHidden: false,
    colsHidden: [],
  }),
)(ConfigurableTable)
