import React from 'react';
import logo1 from '../assets/img/mangopulse.png';
export const Footer = (props) =>  {
  if(props.page){
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{props.page.Section1}</h2>
            <a to='/sign-up'>{props.page.section1a}</a>
            <a to='/'>{props.page.section1b}</a>
            <a to='/'>{props.page.section1c}</a>
            <a to='/'>{props.page.section1d}</a>
            <a to='/'>{props.page.section1e}</a>
          </div>
          <div className='footer-link-items'>
            <h2>{props.page.Section2}</h2>
            <a to='/'>{props.page.section2a}</a>
            <a to='/'>{props.page.section2b}</a>
            <a to='/'>{props.page.section2c}</a>
            <a to='/'>{props.page.section2d}</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{props.page.Section3}</h2>
            <a to='/'>{props.page.section3a}</a>
            <a to='/'>{props.page.section3b}</a>
            <a to='/'>{props.page.section3c}</a>
            <a to='/'>{props.page.section3d}</a>
          </div>
          <div className='footer-link-items'>
          <h2>{props.page.Section4}</h2>
            <a to='/'><i className='fab fa-instagram' />{props.page.section4a}</a>
            <a to='/'><i className='fab fa-youtube' />{props.page.section4b}</a>
            <a to='/'><i className='fab fa-facebook' />{props.page.section4c}</a>
            <a to='/'><i className='fab fa-twitter' />{props.page.section4d}</a>
            <a to='/'><i className='fab fa-linkedin' />LinkedIn</a>
            
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>{props.page.footer_p}</small>
          
        
        </div>
      </section>
    </div>
  );
  }
}

