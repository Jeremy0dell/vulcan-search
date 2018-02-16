import React from 'react'

const Table = ({ tableData, handleHeaderClick }) =>
  <div>
    This is table
    {console.log('tData is', tableData)}
    <table style={{ width: '80%' }}>
      <tbody>
        <tr>
          {
            tableData[0].map((header, idx) =>
            <th
              key={idx}
              value={header}
              name={header}
              onClick={() => { handleHeaderClick(header) }}
            >
              {header}
            </th>)
          }
        </tr>
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
