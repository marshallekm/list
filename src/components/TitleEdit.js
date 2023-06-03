import React, {useState} from 'react'

export default function TitleEdit(){

  const [editableForm, setEditableForm] = useState(false);
  const [form, setForm] = useState("My List");

  const editTitle = () => {
  setEditableForm(true)
  }

  const handleSubmit = (event) => {
  event.preventDefault();
  setEditableForm(false)
  }

  const handleOnchange = (event) => {
    setForm(event.target.value)
  }

  return (
    <div>
     <h1 onClick={editTitle}>{form}</h1>
     {editableForm ?
    <form action="/" method="get" onSubmit={handleSubmit}>
      <input
      type= "text"
      name= "title"
      placeholder = "Write your title here"
      onChange ={handleOnchange}
      />
      <button type="submit">Submit</button>
    </form>
    : void(0)}
    </div>
  )
}
