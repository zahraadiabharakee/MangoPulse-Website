import React from "react"
import { team } from "../../dummydata"
import Heading from "../common/heading/Heading"
const TeamCard = () => {
  return (
    <>
     
      {team.map((val) => (
       
        <div className='items shadow'>
          
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-youtube icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p >{val.work}</p>  
            <h4 >{val.date}</h4>
            <button>{val.button}</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard