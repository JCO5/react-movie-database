import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">Home</Link>
        <ul className="nav-links">
            <li>
                <Link to="/favorites">Favorites</Link>
            </li>
        </ul>
      </div>
    </header>
  )
}
