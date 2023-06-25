import React, {useState} from 'react'

import {BsPlusCircleFill} from "react-icons/bs";

export default function Form (props){
  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(input)
    setInput("")
  }

  return (
  <div className="form-all">
    <form action="/" method="get" onSubmit={handleSubmit}>
      <input
      type="text"
      id="form"
      autoComplete="off"
      name="form"
      className="form-input"
      placeholder="Write your task..." required
      value= {input}
      onChange= {handleChange}
      />
      <button type="submit" className="invisible-button" id="plus-form"><BsPlusCircleFill className="invisible-plus"></BsPlusCircleFill></button>
    </form>
  </div>)
}
