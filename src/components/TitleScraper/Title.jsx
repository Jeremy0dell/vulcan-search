import React from 'react'

const Title = ({ title, loading, visible }) =>
  <div style={{ visibility: !visible && 'hidden' }}>
    {
      loading ?
      <div>Loading...</div> :
      <div>Website title is: {title}</div>
    }
  </div>

export default Title
