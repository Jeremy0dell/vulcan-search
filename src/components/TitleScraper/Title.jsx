import React from 'react'

const Title = ({ title, isError }) =>
  <div>
    {console.log('tit', title, 'err', isError)}
    This is Title { isError ? 'You have error' : title }
  </div>

export default Title
