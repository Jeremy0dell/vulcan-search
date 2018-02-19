import Papa from 'papaparse'
import flatten from 'lodash/flatten'

const parsedData = Papa.parse('Day_of_week,Friday,Monday,Saturday,Sunday,Thursday,Tuesday,Wednesday\nHour of the day,,,,,,,\n0,56,56,56,57,53,56,55\n1,56,55,56,59,52,54,54\n2,58,56,62,60,57,59,57\n3,57,56,60,63,60,58,58\n4,60,62,61,62,61,61,59\n5,63,60,65,66,60,61,64\n6,62,58,68,66,62,61,60\n7,59,61,63,63,60,60,60\n8,62,60,63,65,62,61,58\n9,59,57,64,62,56,58,59\n10,58,58,64,62,57,58,58\n11,57,58,62,60,56,58,57\n12,59,59,61,61,57,58,57\n13,58,58,62,62,58,57,58\n14,57,59,62,59,55,57,58\n15,57,59,61,61,55,57,57\n16,55,57,60,58,55,56,54\n17,56,55,60,58,54,54,53\n18,55,55,60,58,55,55,52\n19,55,52,59,56,53,53,54\n20,56,53,58,57,52,52,54\n21,56,54,58,56,53,51,54\n22,55,54,57,55,52,52,54\n23,55,51,60,54,52,50,53', { dynamicTyping: true }).data


export const modifiedData = [
  {
    z: parsedData.slice(2).map(arr => arr.slice(1)),
    x: parsedData[0].slice(1),
    y: parsedData.slice(2).map(arr => arr[0]),
    type: 'heatmap',
    colorscale: [
       [0, '#D5F5E3'],
       [1, '#6A1B9A'],
    ]
  }
]

export const layout = {
  annotations: flatten(modifiedData[0].z.reduce((st, arr, redIdx) => {
    st.push(arr.map((val, mapIdx) => ({
      xref: 'x',
      yref: 'y',
      x: mapIdx,
      y: redIdx,
      text: val,
      showarrow: false,
      font: {
        color: val < 57 ? 'black' : 'white'
      }
    })))
    return st
  }, [])),
  xaxis: {
    fixedrange: true,
    ticks: '-',
    side: 'top'
  },
  yaxis: {
    fixedrange: true,
    ticks: 'outside',
    dtick: 1,
    ticksuffix: ''
  },
  margin: {
    l: 50,
    r: 50,
    b: 0,
    t: 60,
    pad: 4
  },
  font: {
    color: 'white'
  },
  width: 500,
  height: 550,
  paper_bgcolor: '#465A63',
  showlegend: true
}

const parsedOrderedData = Papa.parse('Day_of_week,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday\nHour of the day,,,,,,,\n0,57,56,56,55,53,56,56\n1,59,55,54,54,52,56,56\n2,60,56,59,57,57,58,62\n3,63,56,58,58,60,57,60\n4,62,62,61,59,61,60,61\n5,66,60,61,64,60,63,65\n6,66,58,61,60,62,62,68\n7,63,61,60,60,60,59,63\n8,65,60,61,58,62,62,63\n9,62,57,58,59,56,59,64\n10,62,58,58,58,57,58,64\n11,60,58,58,57,56,57,62\n12,61,59,58,57,57,59,61\n13,62,58,57,58,58,58,62\n14,59,59,57,58,55,57,62\n15,61,59,57,57,55,57,61\n16,58,57,56,54,55,55,60\n17,58,55,54,53,54,56,60\n18,58,55,55,52,55,55,60\n19,56,52,53,54,53,55,59\n20,57,53,52,54,52,56,58\n21,56,54,51,54,53,56,58\n22,55,54,52,54,52,55,57\n23,54,51,50,53,52,55,60', { dynamicTyping: true }).data

export const modifiedOrderedData = [
  {
    z: parsedOrderedData.slice(2).map(arr => arr.slice(1)),
    x: parsedOrderedData[0].slice(1),
    y: parsedOrderedData.slice(2).map(arr => arr[0]),
    type: 'heatmap',
    colorscale: [
       [0, '#D5F5E3'],
       [1, '#6A1B9A'],
    ]
  }
]

export const layoutOrdered = {
  annotations: flatten(modifiedOrderedData[0].z.reduce((st, arr, redIdx) => {
    st.push(arr.map((val, mapIdx) => ({
      xref: 'x',
      yref: 'y',
      x: mapIdx,
      y: redIdx,
      text: val,
      showarrow: false,
      font: {
        color: val < 57 ? 'black' : 'white'
      }
    })))
    return st
  }, [])),
  xaxis: {
    fixedrange: true,
    ticks: '-',
    side: 'top'
  },
  yaxis: {
    fixedrange: true,
    ticks: 'outside',
    dtick: 1,
    ticksuffix: ''
  },
  margin: {
    l: 50,
    r: 50,
    b: 0,
    t: 60,
    pad: 4
  },
  font: {
    color: 'white'
  },
  width: 500,
  height: 550,
  paper_bgcolor: '#465A63',
  showlegend: true
}
