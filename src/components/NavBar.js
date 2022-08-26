import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import {constants} from '../Const';

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
    var image ="";
    if(props.page.logo && props.page.logo.data && props.page.logo.data.length>0){
     image = constants.link +props.page.logo.data[0].attributes.url ;
    }
   return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={image} alt="Logo" />
         
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href="#home" className='nav-links' onClick={closeMobileMenu}>
                {props.page.Tab1}
              </a>
            </li>
            <li className='nav-item'>
              <a
                href= "#products"
                className='nav-links'
                onClick={closeMobileMenu}
              >
              {props.page.Tab2}
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="./components/Aboutus/AboutUs"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {props.page.Tab3}
              </a>
            </li>
          
           
            <li>
              <a
                href={"../components/MailchimpForm"}
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
             {props.page.navbar_button_label}
              </a>
            </li>
          </ul>
          <a href="#connect" style={{fontWeight:"700"}}>{button && <Button buttonStyle='btn--outline'>Contact Us</Button>}</a>
        </div>
      </nav>
    </>
  );
   }
}

