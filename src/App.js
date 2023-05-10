import React, {useState} from 'react'
import './App.css';
import Form from './components/Form.js'
import Categories from './components/Categories';
import Task from './components/Task';
import TaskList from './components/TaskList';


function App() {

const [toDo, setToDo] = useState([])

const addTask = (input) => {
  setToDo([...toDo,
  {id: toDo.length + 1,
  text: input,
  completed: false}])
 }

 const recieveData = (data) => {
  setToDo(data)
 }

 const deleteTask = (id) => {
  setToDo(toDo.filter((task) => task.id !== id));
 }

 const editTask = (id) => {
  const editedTask = toDo.filter((task) => task.id === id)
  setToDo(editedTask.id, editedTask.text, editedTask.completed)
 }

  return (
    <div className="App">
      <header>
        <h1> To Do List </h1>
      </header>
      <Form addTask={addTask}/>
      <Categories putCat ={toDo} />
      <Task putTask={toDo} deleteTask = {deleteTask}/>
    </div>
  );
}

export default App;
