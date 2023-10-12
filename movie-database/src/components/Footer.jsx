import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer>
        <nav className="nav bg-gray-900 text-white flex justify-between items-center gap-8 p-4  bg-gradient-to-b from-transparent via-transparent to-black">
            <Link className="site-title text-2xl" to="/#">
              <p>JJJ Movies</p>
            </Link>
            <p>&copy; 2023, Coded and Designed with Love by Jet, Joaquin, & Josh</p>   
        </nav>
      </footer>  
    )
}

export default Footer;