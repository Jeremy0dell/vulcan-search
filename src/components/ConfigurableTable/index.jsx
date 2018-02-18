import React from 'react'
import { compose } from 'recompose'
import every from 'lodash/every'
import Papa from 'papaparse'
import { Checkbox, CheckboxGroup } from 'react-checkbox-group'

import { formData } from '../../HOCs/form'
import { tableState } from '../../HOCs/tableState'

import { arrangeTableData, changeSort, changeQuery, columnFilter } from '../../util/arrangeTableData'

import Form from './Form'
import Table from './Table'


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
      form.headers && tabState.showColsHidden && <CheckboxGroup
        id="checkbox-group"
        value={tabState.colsHidden}
        onChange={handleCheckCol}
      >
        {
          tabState.showColsHidden && Papa.parse(form.headers).data[0].map((header, idx) =>
          <label key={idx}><Checkbox value={header}/>{header}</label>)
        }
      </CheckboxGroup>
    }
    { every([tabState.showTable, form.headers, form.data], x => !!x) && <Table
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
    /> }
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
