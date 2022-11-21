import React from 'react'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import { useState } from 'react';
import logo from '../../assets/logo-1.svg'

// Menu component
const Menu = () =>{
  return(

    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#web3">What ist web3?</a></p>
    <p><a href="#home">Open web3</a></p>
    <p><a href="#home">Develoment env</a></p>
    <p><a href="#home">Library</a></p>
  </>
  )
}

const Navbar = () => {

  // Iplementando el usestate hoock
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='web3__navbar'>
      <div className='web3__navbar-links'>
          <div className='web3__navbar-links_logo'>
            <a href='/'>

            <img src={logo} alt='Logo'/>
            </a>
          </div>
          <div className='web3__navbar-links_container' >
         
            < Menu />
          </div>
      </div>

      <div className='web3__navbar-sing' >
        <p>Sing in</p>
        <button type='button'>Sing up</button>
      </div>

      {/* Par la parter mobile. Implementando los incono con usestate */}
      <div className='web3__navbar-menu' >
          {toggleMenu 
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='web3__navbar-nenu_container slit-in-vertical' >
              <div className='web3__navbar-menu_container-links'>
                
                {<Menu />}

                <div className='web3__navbar-menu_container-links-sing web3__navbar-sing' >
                <p>Sing in</p>
                <button type='button'>Sing up</button>
              </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar