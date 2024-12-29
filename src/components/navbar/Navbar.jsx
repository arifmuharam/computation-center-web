import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#access">Access</a></p>
  <p><a href="#manual">Manual Usage</a></p>
  <p><a href="#service">Service Status</a></p>
  <p><a href="#training">Training</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='comp__navbar'>
      <div className='comp__navlinks'>
        <div className='comp__navlinks_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='comp__navlinks_container'>
          <Menu />
        </div>
      </div>
      <div className='comp__navbar_sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='comp__navbar_menu'>
        {toggleMenu
          ? <RiCloseLine color='#102abe' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#102abe' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='comp__navbar-menu_container scale-up-center'>
            <div className='comp__navbar-menu_container-links'>
            <Menu />
            <div className='comp__navbar-menu_container-links-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar