import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './components/Counter.js';
import TodosList from './components/todos-list/TodosList.js';
import ParentComponent from './components/controlled-input/ParentComponent.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <TodosList/>
    <ParentComponent />
  </React.StrictMode>
);
