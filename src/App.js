import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form.js'
import Task from './components/Task';
import TitleEdit from './components/TitleEdit'


function App() {

const [toDo, setToDo] = useState(()=> {
  const storedTodo = localStorage.getItem('todo');
  return storedTodo ? JSON.parse(storedTodo): [];
})

const [title, setTitle] = useState(localStorage.getItem('title') || 'My list');

useEffect(() => {
localStorage.setItem('title', title);
}, [title]);

useEffect(() => {
  localStorage.setItem('todo', JSON.stringify(toDo))
}, [toDo]);

useEffect(() => {
const storedTodo = localStorage.getItem('todo')
  if(storedTodo){
    setToDo(JSON.parse([storedTodo]))
  }
}, [])

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

 const editTask = (id, edit) => {
  const editedTask = toDo.find((task) => task.id === id)
  const newEdit = toDo.map(task =>
    task.id === editedTask.id ? {...task,
      text: edit
    }: task)
    return setToDo(newEdit)
 }

 const completedTask = (id, completed) => {
  const findTask = toDo.find((task) => task.id === id)
  // if (findTask) {
  const newComplete = toDo.map(task =>
    task.id === findTask.id ? {...task,
    completed: !completed} : task)
      console.log(newComplete)
  return setToDo(newComplete)
 }

 useEffect(()=> {
 }, [toDo, title])


  return (
    <div className="App">
      <header>
        <TitleEdit title={title} setTitle={setTitle} />
      </header>
      <Form addTask={addTask}/>
      <Task putTask={toDo} deleteTask = {deleteTask} editTask ={editTask} completedTask = {completedTask}/>
    </div>
  );
}

export default App;
