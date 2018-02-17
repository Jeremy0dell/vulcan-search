import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/'
import Footer from './components/Footer'
import GoogleSearch from './components/GoogleSearch'
import TitleScraper from './components/TitleScraper/'
import ConfigurableTable from './components/ConfigurableTable/'
// import HeatMap from './components/HeatMap/'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <GoogleSearch />
        <TitleScraper />
        <ConfigurableTable />
        <Footer />
      </div>
    );
  }
}

export default App;
