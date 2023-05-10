import React, {useState} from 'react'

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
  <div>
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
      <button type="submit">Add task!</button>
    </form>
  </div>)
}
