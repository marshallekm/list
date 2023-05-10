import React, {useState} from 'react'

export default function TaskList({id, text, completed, deleteTask, editTask}){

const toggleComplete = () => {

}

return(
<div>
  <div key={id} className="listItem">
    {text}
    <input
    type="checkbox"
    value="check"
    onChange= {toggleComplete}
    />
    <button
    type="button"
    onClick = {() => deleteTask(id)}
    >x</button>
    <button
    onClick = {()=> editTask(id)}>

    </button>
  </div>
</div>
  )
}
