import React from 'react'

const SearchResult = ({ title, websiteUrl, description }) =>
  <div id="search-result">
    <div id="result-1" className="result">{title}</div>
    <div id="result-2" className="result">
      {websiteUrl}
      { websiteUrl && <span style={{ fontSize: 8 }}>&nbsp;&nbsp;▼</span> }
    </div>
    <div id="result-3" className="result">{description}</div>
  </div>

export default SearchResult
