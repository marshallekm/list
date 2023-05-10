import React, {useState} from 'react'
import TaskList from './TaskList.js';

export default function Task({putTask, deleteTask, editTask}){

  return(
    <div>
     {putTask.map(({id, text, completed})=>
      <TaskList
      id = {id}
      text = {text}
      completed = {completed}
      deleteTask ={deleteTask}
      editTask = {editTask}
      />
      )}
   </div>
  )
}
