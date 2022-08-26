import React from 'react';
import CardItem from './CardItem';
import Heading from "./common/heading/Heading";

import {constants} from "../Const"
export const Cards = (props) => {
  if(props.page){
    var image1 ="";
    if(props.page.D_cardImage && props.page.D_cardImage.data &&props.page.D_cardImage.data.length>0 ){
     image1 = constants.link+props.page.D_cardImage.data[0].attributes.url ;
    }
    var image2 ="";
    if(props.page.E_cardImage && props.page.E_cardImage.data  && props.page.E_cardImage.data.length>0){
     image2 = constants.link+props.page.E_cardImage.data[0].attributes.url ;
    }
    var image3 ="";
    if(props.page.F_cardImage && props.page.F_cardImage.data  && props.page.F_cardImage.data.attributes){
     image3 = constants.link+props.page.F_cardImage.data.attributes.url ;
    }
  return (

    <div className='cards'>
        
         <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={image1}
                    text="No limitations - develop and extend your website"
                    label={props.page.card1button}
                    path='/services'
                   
                    />
                     <CardItem
              src={image3}
              text="With a user-friendly editing experience, editors"
              label={props.page.card2button}
              path='/services'
            />
              <CardItem
              src={image2}
              text="Make your web site personal for each user"
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


