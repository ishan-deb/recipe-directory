import { Link } from 'react-router-dom'

//components
import SearchBar from './SearchBar'

//styles
import './navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cook</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>
          Create Recipe
        </Link>

      </nav>
    </div>
  )
}