import React from 'react';
import logo1 from '../assets/img/mangopulse.png';
export const Footer = (props) =>  {
  if(props.page){
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{props.page.footer_section_1_title}</h2>
            <a to='/sign-up'>{props.page.footer_section_1_a}</a>
            <a to='/'>{props.page.footer_section_1_b}</a>
            <a to='/'>{props.page.footer_section_1_c}</a>
            <a to='/'>{props.page.footer_section_1_d}</a>
           
          </div>
          <div className='footer-link-items'>
          <h2>{props.page.footer_section_2_title}</h2>
            <a to='/sign-up'>{props.page.footer_section_2_a}</a>
            <a to='/'>{props.page.footer_section_2_b}</a>
            <a to='/'>{props.page.footer_section_2_c}</a>
            <a to='/'>{props.page.footer_section_2_d}</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          <h2>{props.page.footer_section_3_title}</h2>
            <a to='/sign-up'>{props.page.footer_section_3_a}</a>
            <a to='/'>{props.page.footer_section_3_b}</a>
            <a to='/'>{props.page.footer_section_3_c}</a>
            <a to='/'>{props.page.footer_section_3_d}</a>
          </div>
          <div className='footer-link-items'>
          <h2>{props.page.footer_section_4_title}</h2>
            <a to='/'><i className='fab fa-instagram' />{props.page.footer_section_4_a}</a>
            <a to='/'><i className='fab fa-youtube' />{props.page.footer_section_4_b}</a>
            <a to='/'><i className='fab fa-facebook' />{props.page.footer_section_4_c}</a>
            <a to='/'><i className='fab fa-twitter' />{props.page.footer_section_4_d}</a>
            <a to='/'><i className='fab fa-linkedin' />{props.page.footer_section_4_e}</a>
            
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>{props.page.footer_copyrights}</small>
          
        
        </div>
      </section>
    </div>
  );
  }
}

