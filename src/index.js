import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ResponsiveLayout from './components/Day4/ResponsiveLayout';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
    <ResponsiveLayout />
  </React.StrictMode>
);
