import React, {useState} from 'react'

export default function TaskList({id, text, completed, deleteTask, editTask, completedTask, showTask}){

const [isEditing, setIsEditing] = useState(false);
const [edit, setEdit] = useState(text)

const handleEditClick = () => {
  console.log("I clicked")
  setIsEditing(true)
}

const handleEditing = (event) => {
  setEdit(event.target.value)
}

const handleSubmit = (event) => {
event.preventDefault();
  editTask(id, edit)
  setEdit('')
  setIsEditing(false)
}

const falseEdit = () => {
  setIsEditing(false)
}

const toggleComplete = () => {
  completedTask(id, completed)
}


return(
<div>
  <div key={id} className="listItem">
    {isEditing === false ? text : edit}
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
    onClick = {handleEditClick}
    >
    </button>
    {isEditing === true ?
    <form className="edit-form" action="/" method ="get" onSubmit= {handleSubmit}>
      <input
        type="text"
        id="editing"
        placeholder={"Edit your task..."}
        value = {edit}
        onChange = {handleEditing}
        onClick = {()=> editTask(id)}
       />
       <button type="submit">Edit</button>
       <button onClick={falseEdit}> x</button>
    </form> : null}
  </div>
</div>
  )
}
