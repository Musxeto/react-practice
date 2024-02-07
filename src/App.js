import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter/Counter.js';
import TodosList from './components/todos-list/TodosList.js';
import ParentComponent from './components/controlled-input/ParentComponent.js';
import DataFetcher from './components/fetch-data/DataFetcher.js';
import ToggleSwitch from './components/Day4/ToggleSwtich.js';
import NavigationBar from './components/Day4/NavigationBar.js';
import Modal from './components/Day4/Modal.js';
import DropdownMenu from './components/Day4/DropdownMenu.js';
import Pagination from './components/Day5/Pagination.js';
import Timer from './components/Day6/Timer.js';

function App() {
  const options = ['kENDRICK LAMAR', 'UZI', 'Carti', 'YE'];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <NavigationBar />
      <Pagination/>
      <Timer />
      <Counter />
      <Modal />
      <TodosList />
      <ParentComponent />
      <DataFetcher />
      <ToggleSwitch />
      <DropdownMenu options={options} onSelect={handleSelect} />
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
