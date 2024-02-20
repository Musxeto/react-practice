import React from 'react'

function Tab({label, content}) {
  return (
    <div>
      <h2>{label}</h2>
      <div>{content}</div>
    </div>
  )
}

export default Tab
