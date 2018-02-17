import React from 'react'

const Form = ({ title, websiteUrl, description, onChange }) =>
  <div>
    <div>
      <div>Website Title</div>
      <input
        className="search-input"
        value={title}
        name="title"
        onChange={onChange}
        placeholder="Website Title..."
      />
    </div>
    <div>
      <div>Website URL</div>
      <input
        className="search-input"
        value={websiteUrl}
        name="websiteUrl"
        onChange={onChange}
        placeholder="Website URL..."
      />
    </div>
    <div>
      <div>Website Description</div>
      <textarea
        className="search-input"
        value={description}
        name="description"
        onChange={onChange}
        placeholder="Website Description..."
      />
    </div>
  </div>

export default Form
