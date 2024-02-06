import React, { useState } from 'react';

function ToggleSwitch({ initialState = false, onToggle }) {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <div>
      <label>Toggle Switch</label>
      <input type='checkbox' checked={isOn} onChange={handleToggle} />
      <span>{isOn ? 'on' : 'off'}</span>
    </div>
  );
}

export default ToggleSwitch;
