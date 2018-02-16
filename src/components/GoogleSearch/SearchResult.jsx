import React from 'react'

const resultStyles = {
  width: 600,
  border: '1px solid black',
}

const SearchResult = ({ title, websiteUrl, description }) =>
  <div style={resultStyles}>
    <div>{title}</div>
    <div>{websiteUrl}</div>
    <div>{description}</div>
  </div>

export default SearchResult
