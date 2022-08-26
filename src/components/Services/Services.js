import React, { useState } from 'react';
import "./Services.css";
import Heading from "../common/heading/Heading";
const Services = () => {
  const [toggleState, setToggleState]= useState(0);
      const toggleTab = (index) => {
        setToggleState(index);
      }
 
  return (
    <section className="services section" id="services">
      <Heading subtitle="Services" title="Open Source! However, Mangopulsegot Everythings That You Needs For Your Website / Application!" />
    <div className="services__containerr containerr gridd">
        <div className="services__content">
            <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Product <br />Designer</h3>
        </div>

        <span className="services__buttonn" onClick={ () => toggleTab(1)}>View More{" "}
         <i className="uil uil-arrow-right services__buttonn-icon"></i>
        </span>
        <div className= {toggleState === 1 ? "services__modal active-modal": "services__modal"}>
           <div className="services__modal-content">
             <i onClick={ () => toggleTab(0)} className="uil uil-times services__modal-close"></i>
             <h3 className="services__modal-title">Web Designer</h3>
            <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality worj to clients and companies.</p>
           
           </div>
        </div>
    </div>
    <div className="services__content">
            <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Product <br />Designer</h3>
        </div>

        <span className="services__buttonn" onClick={ () => toggleTab(1)}>View More{" "}
         <i className="uil uil-arrow-right services__buttonn-icon"></i>
        </span>
        <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
           <div className="services__modal-content">
             <i onClick={ () => toggleTab(0)} className="uil uil-times services__modal-close"></i>
             <h3 className="services__modal-title">Web Designer</h3>
            <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality worj to clients and companies.</p>
         
           </div>
        </div>
    </div>
    <div className="services__content">
            <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Product <br />Designer</h3>
        </div>

        <span className="services__buttonn" onClick={ () => toggleTab(1)}>View More {" "}
         <i className="uil uil-arrow-right services__buttonn-icon"></i>
        </span>
        <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
           <div className="services__modal-content">
             <i onClick={ () => toggleTab(0)} className="uil uil-times services__modal-close"></i>
             <h3 className="services__modal-title">Web Designer</h3>
            <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality worj to clients and companies.</p>
           
           </div>
        </div>
    </div>
 </div>
</section>
  )
}

export default Services
