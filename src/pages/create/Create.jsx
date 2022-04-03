import { useState } from 'react'

//styles

import './create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])

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

  const handleAdd = e => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }

    setNewIngredient('')
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
          <span>Ingredients: </span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={e => setNewIngredient(e.target.value)}
              value={newIngredient}
            />
            <button className="btn" onClick={handleAdd}>add</button>
          </div>
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