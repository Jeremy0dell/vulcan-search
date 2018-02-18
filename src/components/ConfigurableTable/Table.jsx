import React from 'react'
import Up from 'react-icons/lib/fa/chevron-up'
import Down from 'react-icons/lib/fa/chevron-down'

const Table = ({ tableData, sortedBy, order, handleHeaderClick }) =>
  <div id="table-show-container">
    <table id="table-body">
      <thead>

        <tr>
          {
            tableData[0].map((header, idx) =>
            <th
              key={idx}
              value={header}
              name={header}
              onClick={() => { handleHeaderClick(header) }}
            >
              {header} { sortedBy === header && (order === 'asc' ? <Down /> : <Up />) }
            </th>)
          }
        </tr>
        </thead>
        <tbody>
        {
          tableData[1].map((subArray, idx) =>
          <tr key={idx}>
            {subArray.map((value, idx) => <td key={idx}>{value}</td>)}
          </tr>)
        }
      </tbody>
    </table>
  </div>

export default Table
