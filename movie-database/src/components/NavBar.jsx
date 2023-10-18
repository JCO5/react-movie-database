
import { Link } from 'react-router-dom';
import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

    return (
    <header className='sticky top-0 z-50 min-[480px]: flex-col items-center'>
      <nav className='
      md:flex 
      items-center 
      justify-between 
      bg-gradient-to-b from-transparent via-transparent to-black py-4 md:px-10 px-7 
      nav bg-gray-900 text-white flex justify-between items-stretch gap-8 p-4 align-middle bg-gradient-to-b from-transparent via-transparent to-black'>
      <div className='font-bold text-2xl cursor-pointer flex items-center  
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'></span>
        <Link className="site-title text-5xl flex items-center text-white" to = "/#">
              JJJ Movies
         </Link>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:bg-transparent justify-center md:pb-0  absolute md:static  bg-black  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to = '/about'>About</Link>
              </li>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to = '/favorites'>Favorites</Link>
              </li>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to = '/search'><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg></Link>
              </li>
      </ul>
      </nav>
    </header>
  )
}

export default NavBar;
