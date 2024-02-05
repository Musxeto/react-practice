import './App.css';
import Counter from './components/Counter/Counter.js';
import TodosList from './components/todos-list/TodosList.js';
import ParentComponent from './components/controlled-input/ParentComponent.js';
import DataFetcher from './components/fetch-data/DataFetcher.js';
import ToggleSwitch from './components/Day 4/ToggleSwtich.js'
import NavigationBar from './components/Day 4/NavigationBar.js';
import Modal from './components/Day 4/Modal.js';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Counter />
      <Modal />
      <TodosList />
      <ParentComponent />
      <DataFetcher />
      <ToggleSwitch />
    </div>
  );
}

export default App;
