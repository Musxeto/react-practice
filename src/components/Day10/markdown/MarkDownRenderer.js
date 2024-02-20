import React from 'react'
import ReactMarkdown from 'react-markdown';

function MarkDownRenderer({ content }) {
  return (
    <div className='markdown-container'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default MarkDownRenderer
