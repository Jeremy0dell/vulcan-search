import Papa from 'papaparse'
import every from 'lodash/every'
import cloneDeep from 'lodash/cloneDeep'

export const arrangeTableData = (headers, data) => [ Papa.parse(headers).data[0], Papa.parse(data).data ]

/*
  changeSort will take data, chosen header, maybe idx of header, the Order, and the 2d array to sort
  It will take that data, something like this: [[1,1],[1,2],[1,3]]
  and rearange the order of the subarrays based on the sort output of the given index
  and the order
*/

export const changeQuery = (data, query) => {
  if (!query) {
    return data
  }

  const result = data[1].filter(arr => arr.includes(query))

  return [data[0], result]
}

export const changeSort = (data, sortBy, order) => {
  console.log('data is', data, sortBy, order)
  if (!sortBy) {
    return data
  }

  const idxToSort = data[0].indexOf(sortBy)

  if (!every(data[1], arr => arr[idxToSort])) {
    console.log('This data is incomplete and cannot be sorted')
    return data
  }

  const result = data[1].sort((a, b) => a[idxToSort].localeCompare(b[idxToSort],
    undefined,
    {numeric: true, sensitivity: 'base'}
  ))
  console.log(result, data)
  return order === 'desc' ? [data[0], result.reverse()] : [data[0], result]
}

export const columnFilter = (data, colsHidden) => {
  // colsHidden is array of strings
  let result = cloneDeep(data)

  colsHidden.forEach((string) => {
    const idxToRemove = result[0].indexOf(string)

    if (idxToRemove > -1) {
      result[0].splice(idxToRemove, 1)
      result[1].map(arr => arr.splice(idxToRemove, 1))
    }
  })

  return result
}

/*
  query performs a filter on the data, leaving only subarrays that contain the value of query
*/
