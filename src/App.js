import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Landing from './components/Landing'
import Nav from './components/Nav/'
import Footer from './components/Footer'
import GoogleSearch from './components/GoogleSearch'
import TitleScraper from './components/TitleScraper/'
import ConfigurableTable from './components/ConfigurableTable/'
// import HeatMap from './components/HeatMap/'

class App extends Component {
  render() {
    return (
      <div id="app-body">
        <Nav />
        <div className="flex-center" style={{ height: 'calc(100% - 120px)' }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/search" component={GoogleSearch} />
            <Route exact path="/title" component={TitleScraper} />
            <Route exact path="/table" component={ConfigurableTable} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
