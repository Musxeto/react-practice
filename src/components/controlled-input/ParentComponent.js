import React, { useState } from 'react';
import ControlledInput from './ControlledInput';

function ParentComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div>
      <p>Parent Component State: {inputValue}</p>
      <ControlledInput value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

export default ParentComponent;