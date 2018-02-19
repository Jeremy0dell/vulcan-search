/* global Plotly:true */

import React from 'react'
import { withState } from 'recompose'
import createPlotlyComponent from 'react-plotly.js/factory'

import { modifiedData, layout, modifiedOrderedData, layoutOrdered } from './data'

const Plot = createPlotlyComponent(Plotly)

const HeatMap = ({ heatmap, updateHeatmap }) =>
  <div className="flex-between">
    {console.log(heatmap, 'asdf')}
    <button
      onClick={() => updateHeatmap(heatmap === 'weekday' ? 'alphabetical' : 'weekday')}
    >
      Toggle {heatmap === 'weekday' ? 'alphabetical' : 'weekday'} order
    </button>
    <Plot
      data={heatmap === 'weekday' ? modifiedOrderedData : modifiedData}
      layout={heatmap === 'weekday' ? layoutOrdered : layout}
    />
  </div>

export default withState('heatmap', 'updateHeatmap', 'weekday')(HeatMap)
