import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/'>
          <h1>Cook</h1>
        </Link>
        <Link to='/create'>
          Create Recipe
        </Link>

      </nav>
    </div>
  )
}