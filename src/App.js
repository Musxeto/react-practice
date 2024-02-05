import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter/Counter.js';
import TodosList from './components/todos-list/TodosList.js';
import ParentComponent from './components/controlled-input/ParentComponent.js';
import DataFetcher from './components/fetch-data/DataFetcher.js';
import ToggleSwitch from './components/Day 4/ToggleSwtich.js';
import NavigationBar from './components/Day 4/NavigationBar.js';
import Modal from './components/Day 4/Modal.js';
import DropdownMenu from './components/Day 4/DropdownMenu.js';

function App() {
  const options = ['kENDRICK LAMAR', 'UZI', 'Carti', 'YE'];

  // State to track the selected option in the App component
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle the selection of an option
  const handleSelect = (option) => {
    // Update the selected option in the state
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <NavigationBar />
      {/* Pass options and handleSelect function as props */}
      <DropdownMenu options={options} onSelect={handleSelect} />
      <Counter />
      <Modal />
      <TodosList />
      <ParentComponent />
      <DataFetcher />
      <ToggleSwitch />

      <div className="selected-option">
        <p>
          {selectedOption ? `You selected: ${selectedOption}` : 'Select an option'}
        </p>
        <p className="funny-instructions">YOU GOT SOME TASTE</p>
      </div>
    </div>
  );
}

export default App;
