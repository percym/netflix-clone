import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
         <div className='navbar-right'>
            <img src={logo} alt='logo '/>
         </div>

      </div>
    </div>
  )
}

export default Navbar