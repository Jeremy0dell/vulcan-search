import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () =>
  <div className="flex-between dark-bar">
    <Link to="/"><div>Home</div></Link>
    <Link to="/search"><div>Google Search</div></Link>
    <Link to="/title"><div>Title Scraper</div></Link>
    <Link to="/table"><div>Configurable Table</div></Link>
    <Link to="/heatmap"><div>Heat Map</div></Link>
  </div>

export default TopBar
