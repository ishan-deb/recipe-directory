import { useFetch } from '../../hooks/useFetch'
import { useParams, Link } from 'react-router-dom'

//styles
import './recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data:recipe, isPending, error} = useFetch(url)

  return (
    <div>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && 
        <div className="recipe">
          <h1>{recipe.title}</h1>
          <p>Cooking Time: {recipe.cookingTime}</p>
          {recipe.ingredients.map(ingredient => (
            <p>- {ingredient}</p>
          ))}
          <div>{recipe.method}</div>
        </div>
      }
    </div>
  )
}