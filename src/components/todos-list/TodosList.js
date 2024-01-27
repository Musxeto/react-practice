import React from 'react'
import { useState } from 'react'
function TodosList() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    setTasks([...tasks, {description: newTask, completed: false}])
  };
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  
  return (
    <div>
      <h2>Todos List</h2>
    <form onSubmit = {(event) =>{
      event.preventDefault();
      addTask(event.target.description.value);
      event.target.description.value = '';
    }}>
      <input type="text" name="description"/>
      <button type="submit">Add Task</button>
    </form>
    <div>
      <ul>
        {tasks.map((task,index)=>(
          <li key = {index}>
            <input type='checkbox'
            checked = {task.completed}
            onChange={()=>completeTask(index)}></input>
            <h3>{task.description}</h3>
          <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default TodosList
