import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () =>
  <div className="flex-between dark-bar">
    <Link to="/"><div>Home</div></Link>
    <Link to="/search"><div>Question 1</div></Link>
    <Link to="/title"><div>Question 2</div></Link>
    <Link to="/table"><div>Question 3</div></Link>
  </div>

export default TopBar
