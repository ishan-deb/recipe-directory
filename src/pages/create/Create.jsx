import { useState } from 'react'

//styles

import './create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(title, method, cookingTime)


    formReset()
  }

  const formReset = () => {
    setTitle('')
    setMethod('')
    setCookingTime('')
  }

  return (
    <div className='create'>
      <div className="page-title">Add a New Recipe</div>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title: </span>
          <input 
            type="text" 
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Method: </span>
          <textarea 
            type="text"
            onChange={e => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes): </span>
          <input 
            type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
            required  
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}