import React from 'react';
import CardItem from './CardItem';
import gif1 from "../assets/img/kx-hp-5_oxzumy.webp";
import gif2 from "../assets/img/kx-hp-3_nqby39.webp";
import gif3 from "../assets/videos/giphy.gif";
export const Cards = (props) => {
  if(props.page){
  return (

    <div className='cards'>
      
         <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={gif1}
                    text={props.page.card1description}
                    label={props.page.card1button}
                    path='/services'
                   
                    />
                     <CardItem
              src={gif2}
              text={props.page.card3button}
              label={props.page.card3description}
              path='/services'
            />
            
                </ul>
            </div>
         </div>
    </div>
  )
  }
}


