import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import logo from "../assets/img/mangopulse.png";

export const NavBar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    console.log(props)

    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  if(props.page){

   return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" />
         
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a to='/' className='nav-links' onClick={closeMobileMenu}>
                {props.page.Tab3}
              </a>
            </li>
            <li className='nav-item'>
              <a
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {props.page.Tab1}
              </a>
            </li>
            <li className='nav-item'>
              <a
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {props.page.Tab2}
              </a>
            </li>

            <li>
              <a
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
              Sign Up
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
   }
}

