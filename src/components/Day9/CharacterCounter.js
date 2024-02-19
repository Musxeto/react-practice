import React,{useState} from 'react'

function CharacterCounter() {
    const [charCount, setCharCount] = useState(0);
    
    const handleInput = (e) => {
      setCharCount(e.target.value.length);
    }
  return (
    <div>
      <input type='text' placeholder='Enter text here...' className='input-funny' onChange={handleInput}/>
        <p>Character Count: {charCount}</p>
    </div>
  )
}

export default CharacterCounter
