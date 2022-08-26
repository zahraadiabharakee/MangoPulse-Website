import React from 'react';
import logo1 from '../assets/img/mangopulse.png';
export const Footer = (props) =>  {
  if(props.page){
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{props.page.Section_1_title}</h2>
            <a to='/sign-up'>{props.page.Section_1_paragraph_1}</a>
            <a to='/'>{props.page.Section_1_paragraph_2}</a>
            <a to='/'>{props.page.Section_1_paragraph_3}</a>
            <a to='/'>{props.page.Section_1_paragraph_4}</a>
           
          </div>
          <div className='footer-link-items'>
          <h2>{props.page.Section_2_title}</h2>
            <a to='/sign-up'>{props.page.Section_2_paragraph_1}</a>
            <a to='/'>{props.page.Section_2_paragraph_2}</a>
            <a to='/'>{props.page.Section_2_paragraph_3}</a>
            <a to='/'>{props.page.Section_2_paragraph_4}</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          <h2>{props.page.Section_3_title}</h2>
            <a to='/'>{props.page.Section_3_paragraph_1}</a>
            <a to='/'><i className="fab fa-github" />{props.page.Section_3_paragraph_2}</a>
            <a to='/'>{props.page.Section_3_paragraph_3}</a>
            <a to='/'>{props.page.Section_3_paragraph_4}</a>
          </div>
          <div className='footer-link-items'>
          <h2>{props.page.Section_4_title}</h2>
            <a to='/'><i className='fab fa-instagram' />{props.page.Section_4_paragraph_1}</a>
            <a to='/'><i className='fab fa-youtube' />{props.page.Section_4_paragraph_2}</a>
            <a to='/'><i className='fab fa-facebook' />{props.page.Section_4_paragraph_3}</a>
            <a to='/'><i className='fab fa-twitter' />{props.page.Section_4_paragraph_4}</a>
            <a to='/'><i className='fab fa-linkedin' />{props.page.Section_4_paragraph_5}</a>
            
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

