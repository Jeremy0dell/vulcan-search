import React, { Component } from 'react';
import './App.css';


import GoogleSearch from './components/GoogleSearch'
import TitleScraper from './components/TitleScraper/'
import ConfigurableTable from './components/ConfigurableTable/'
import HeatMap from './components/HeatMap/'

class App extends Component {
  render() {
    return (
      <div>
        <GoogleSearch />
        <TitleScraper />
        <ConfigurableTable />
        <HeatMap />
      </div>
    );
  }
}

export default App;
