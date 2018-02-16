import React from 'react'
import { compose } from 'recompose'

import { formData } from '../../HOCs/form'
import { tableState } from '../../HOCs/tableState'

import { arrangeTableData, changeSort, changeQuery, columnFilter } from '../../util/arrangeTableData'

import Form from './Form'
import Table from './Table'


const ConfigurableTable = ({ form, tabState, handleCheckCol, handleChange, handleShowTable, handleUpdateQuery, handleHeaderClick }) =>
  <div>
    This is config table
    {console.log(tabState)}
    <Form
      headers={form.headers}
      data={form.data}
      onChange={handleChange}
      onClick={handleShowTable}
      query={tabState.query}
      handleUpdateQuery={handleUpdateQuery}
      colsHidden={tabState.colsHidden}
      handleCheckCol={handleCheckCol}
    />
    { tabState.showTable && <Table
      handleHeaderClick={handleHeaderClick}

      tableData={
        changeSort(changeQuery(columnFilter(arrangeTableData(form.headers, form.data), tabState.colsHidden), tabState.query), tabState.sortedBy, tabState.order)
      }
    /> }
  </div>

export default compose(
  formData({ headers: '', data: '' }),
  tableState({ showTable: false, query: '', order: 'asc', sortedBy: '', colsHidden: [] }),
)(ConfigurableTable)
