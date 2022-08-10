import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

console.log('you reached hero')
export const HeroSection = (props) => {
  return (
    <div className='hero-container'>
     <video src='/videos/CMS.mp4' autoPlay loop muted />
      <h1>Content Managment System
      </h1>
      
      <div className='hero-btns'>
        <Button
          
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         ADMIN ARERA 
        </Button>
        <Button
         
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          
        >
          FRONT AREA <i className='far fa-play-circle' />
          
        </Button>
       
      </div>
    </div>
  );
}
