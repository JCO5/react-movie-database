import {FaBars, FaTimes} from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <header className="sticky top-0 z-50">
        <nav className="nav sticky top-0 bg-gray-900 text-white flex justify-between items-stretch gap-8 p-4 align-middle bg-gradient-to-b from-transparent via-transparent to-black">
            <Link className="site-title text-5xl flex items-center" to = "/#">
              JJJ Movies
            </Link>
            <div className="absolute flex top-12 right-8 flex-col justify-between w-36 h-32 " >
              <span className="h-6.4 w-full bg-white rounded-[3.2px] "></span>
              <span className="h-6.4 w-full bg-white rounded-[3.2px] "></span>
              <span className="h-6.4 w-full bg-white rounded-[3.2px] "></span>
            </div>
            <ul className="flex items-center gap-4">
              <li>
              <NavLink to = '/about'>About</NavLink>
              </li>
              <li>
              <NavLink to = '/favorites'>Favorites</NavLink>
              </li>
              <li>
              <NavLink to = '/search'>Search</NavLink>
              </li>
            </ul>       
        </nav>
      </header>  
    )
}

export default NavBar;