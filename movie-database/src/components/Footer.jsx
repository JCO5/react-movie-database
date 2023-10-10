import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer>
        <nav className="nav bg-gray-900 text-white flex  items-center gap-8 p-4  bg-gradient-to-b from-transparent via-transparent to-black">
            <Link className="site-title text-2xl" to="/#">
              <p>JJJ Movies</p>
            </Link>
            <ul className="flex items-center  justify-end  gap-4">
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
        </nav>
      </footer>  
    )
}

export default Footer;