import React from 'react';

function ControlledInput({ value, onChange }) {
  const handleInput = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInput}
    />
  );
}

export default ControlledInput;
