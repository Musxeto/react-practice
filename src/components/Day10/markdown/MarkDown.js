import React,{useState} from 'react'
import MarkDownRenderer from './MarkDownRenderer'

function MarkDown() {
  const [content, setContent] = useState('');

  const renderContent = () => {
    setContent(e.target.value);
  }
  
    return (
    <div>
      <input classname='input-markdown' type="text" placeholder='Enter Markdown...' onChange={renderContent} />
        <MarkDownRenderer content={content} />
    </div>
  )
}

export default MarkDown;
