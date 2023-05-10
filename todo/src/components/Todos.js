import React, { useState } from "react";
import Todo from "./Todo";
import Form from "./Form";
import FilterButton from "./FilterButton";
import { nanoid } from "nanoid";

function Todos(props) {
  const DATA = [
    { id: "todo-0", name: "Live", completed: true },
    { id: "todo-1", name: "Die", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

  const [tasks, setTasks] = useState(DATA);

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map((task) => {
      if(id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.length > 0 && tasks.map((task) => (
    <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed} 
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
    />
  ))  

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask = {addTask}/>
      <div className="filters btn-group stack-exception">        
        <FilterButton/>
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}                
      </ul>
    </div>
  );  
}


export default Todos;