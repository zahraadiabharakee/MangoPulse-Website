import React from "react"
import { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {constants} from "../Const";
import axios from "axios";
export const Contact = (props) => {
const [error, setError] = useState(null);
const [modifiedData, setModifiedData] = useState({ firstName: '', lastName: '', number: '',email:'', message:'' });

const handleInputChange = useCallback(({ target: { name, value } }) => {
  setModifiedData((prevData) => ({ ...prevData, [name]: value }));
}, []);
const handleSubmit = async (e) => {
  e.preventDefault();

  await axios
    .post(constants.link2,{data: modifiedData})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      setError(error);
    });
};
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   await fetch
// };
  if(props.page){
   var image ="";
   if(props.page.image && props.page.image.data && props.page.image.data.length>0){
    image = constants.link+props.page.image.data[0].attributes.url ;
   }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
             <img src={image} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
                <h2>{props.page.Title}</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input required
                      type="text"  
                      name="firstName"
                      placeholder={props.page.nameinput} 
                      onChange={handleInputChange}
                      value={modifiedData.firstName}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required
                      type="text" 
                      name="lastName"
                      placeholder={props.page.lastnameinput} 
                      onChange={handleInputChange}
                      value={modifiedData.lastName}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required
                      type="email" 
                      name="email"
                      placeholder={props.page.Email} 
                      onChange={handleInputChange}
                      value={modifiedData.email}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required
                      type="text"
                      name="number"
                      placeholder={props.page.number} 
                      onChange={handleInputChange}
                      value={modifiedData.number}
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  
                      name="message"
                      placeholder={props.page.messageinput} 
                      onChange={handleInputChange}
                      value={modifiedData.message}
                      >
                      </textarea>
                      <button id="send" type="submit"><span>Submit</span></button>
                    </Col>
                  </Row>
                </form>
    
          </Col>
          <Col size={12} md={6}>
           
          </Col>
        </Row>
      </Container>
    </section>
  )
  
  }
}





  
      

