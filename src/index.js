import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './components/Counter/Counter.js';
import TodosList from './components/todos-list/TodosList.js';
import ParentComponent from './components/controlled-input/ParentComponent.js';
import DataFetcher from './components/fetch-data/DataFetcher.js';
import ToggleSwitch from './components/Day 4/ToggleSwtich.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Counter />
    <TodosList />
    <ParentComponent />
    <DataFetcher />
    <ToggleSwitch />
  </React.StrictMode>
);
