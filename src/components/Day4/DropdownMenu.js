import React, { useState } from 'react';

function DropdownMenu({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='custom-dropdown'>
      <div className='dropdown-toggle-button' onClick={handleToggle}>
        {selectedOption ? selectedOption : 'Select an Option'}
      </div>
      {isOpen && (
        <ul className='dropdown-options-list'>
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}

      {selectedOption && (
        <div className='selected-option'>
          <p>{selectedOption}</p>
          <p className='funny-instructions'>Remove all, close all options, and enjoy!</p>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
