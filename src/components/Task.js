import React, {useState, useEffect} from 'react'
import TaskList from './TaskList.js';

export default function Task({putTask, deleteTask, editTask, completedTask}){
const [showTasks, setShowTasks] = useState([])

const findActive = () => {
  const activeTasksButton = putTask.filter((task) => task.completed === false);
  setShowTasks(activeTasksButton)
}

const findComplete = () => {
  const completedTasks = putTask.filter((task) => task.completed === true);
  setShowTasks(completedTasks)
}

const findAll = () => {
 setShowTasks(putTask)
}

useEffect(() => {
setShowTasks(putTask)
}, [putTask])

  return(
    <div>
    <button className="active-button" onClick={() => findActive(putTask)}>Active</button>


    <button className="completed-button" onClick={()=> findComplete(putTask)}> Completed </button>


    <button className="all-button" onClick = {()=> findAll(putTask)}> All</button>

     {showTasks.map(({id, text, completed})=>
      <TaskList
      id = {id}
      text = {text}
      completed = {completed}
      deleteTask ={deleteTask}
      editTask = {editTask}
      completedTask = {completedTask}
      putTask = {putTask}
      />
      )}
   </div>
  )
}
