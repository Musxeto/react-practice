import React from 'react'
import { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>This is a Counter</h2>
      <div>Counter = {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
