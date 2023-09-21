import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <header>
        <nav className="nav bg-gray-900 text-white flex justify-between items-stretch gap-8 p-4">
            <a className="site-title text-2xl"href="/#">
              JJJDB
            </a>
            <ul className="flex gap-4">
              <li>
              <Link to = '/about'>About</Link>
              </li>
              <li>
              <Link to = '/favorites'>Favorites</Link>
              </li>
              <li>
              <Link to = '/search'>Search</Link>
              </li>
            </ul>       
            <button>
                <FaTimes/>
            </button>
        </nav>
        <button>
           <FaBars/>
        </button>
      </header>  
    )
}

export default NavBar;