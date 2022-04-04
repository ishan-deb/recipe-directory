import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

//styles

import './create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = e => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes'})
    formReset()
  }

  useEffect(()=> {
    if (data) {
      history.push('/')
    }
  },[data])

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
    ingredientInput.current.focus()
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
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(ing => (
          <em key={ing}>{ing}, </em>
        ))}</p>

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