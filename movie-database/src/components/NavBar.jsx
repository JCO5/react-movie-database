
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
              <Link to = '/search'>Search</Link>
              </li>
      </ul>
      </nav>
    </header>
  )
}

export default NavBar;
