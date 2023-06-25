import React, {useState} from 'react'
import {BsFillPencilFill, BsXCircleFill, BsCheckCircleFill} from 'react-icons/bs';

export default function TitleEdit({title, setTitle}){

  const [editableForm, setEditableForm] = useState(false);
  // const [form, setForm] = useState("My List");

  const editTitle = () => {
  setEditableForm(true)
  }

  const handleSubmit = (event) => {
  event.preventDefault();
  setEditableForm(false)
  }

  const handleOnchange = (event) => {
  setTitle(event.target.value)
  }

  const falseEdit = () => {
  setEditableForm(false)
  }

  return (
    <div>
     <h1 className="title" onClick={editTitle}>{title} <BsFillPencilFill className="title-icon" onClick={editTitle}/></h1>
    <div className="invisible-form">
     {editableForm ?
    <form action="/" method="get" onSubmit={handleSubmit}>
      <input
      type= "text"
      name= "title"
      placeholder = "Write your title here"
      onChange ={handleOnchange}
      />
      <button type="submit" className="invisible-button"> <BsCheckCircleFill /> </button>
       <button className="invisible-button"><BsXCircleFill onClick={falseEdit} /></button>
    </form>
    : void(0)}
    </div>
    </div>
  )
}
