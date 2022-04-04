import { useState } from 'react'
import { useHistory } from 'react-router-dom'

//styles
import './searchBar.css'

export default function SearchBar() {
  const [term, setTerm] = useState('')
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()

    history.push(`/search?q=${term}`)
  }
  
  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>search</label>
        <input 
            type="text" 
            id='search'
            onChange={e => setTerm(e.target.value)}
            value={term}
            required
          />
      </form>
    </div>
  )
}