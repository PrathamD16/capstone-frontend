import React from 'react'
import Logo from '../Images/Logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="top-0 fixed w-full z-10 bg-gradient-to-l from-blue-600 to-purple-700 shadow-lg">
      <nav className='text-white md:flex justify-between px-7 py-3'>
        <ul className='hidden md:flex space-x-5 items-center'>
          <img className='h-16 hover:cursor-pointer' src={Logo} alt="" />
        </ul>
        <ul className='flex space-x-6 items-center'>
          <Link to="/patient-dashboard">
            <p className='hover:underline hover:cursor-pointer hover:font-semibold'>FIND DOCTOR</p> {/*Link to search bar */}
          </Link>
          <p className='hover:underline hover:cursor-pointer hover:font-semibold'>SECURITY-HELP</p>
          <Link to="/login">
            <button className='mt-2 xl:mt-0 bg-white text-blue-600 px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300'>Login</button>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
