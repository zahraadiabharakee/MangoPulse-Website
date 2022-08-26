import React from "react";

import { Container, Row, Col } from "reactstrap";
import cmsClientsImg from "../../assets/img/secure-5.png";
import CountUp from "react-countup";
import "./cmsclients.css";
import Image from "../../assets/img/illustration.png";
import {constants} from "../../Const" ;
export const CmsClients = (props) =>  {
  if(props.page){
  
  return (
    <section className='clients'>
      
      <Container >
        <Row>
        <Col lg="6" md="6">
            <div className="cmsClients__content">
        
              <h3>Headless when you need it</h3>
              <p>You can choose to create standard Umbraco CMS projects for .NET development or spin up Umbraco Heartcore, our headless solution, at the click of a button. All your projects, headless or not, are managed in the same place.</p>
         
              
            </div>
          </Col>

          <Col lg="6" md="6">
          <div className="cmsClients__img">
              <img src={cmsClientsImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};


