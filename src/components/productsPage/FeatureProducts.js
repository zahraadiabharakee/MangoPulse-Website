import React from "react"
import "./featureProducts.css"
import { Container, Row, Col } from "reactstrap";
import Heading from "../common/heading/Heading";
import {constants} from "../../Const" ;

export const FeatureProducts = (props) =>  {
  
  if(props){
   
      return (
        <>
          <section className='online' style={{textAlign:"center", alignItems:'center'}}>
            <Container>
            <Row className="align-items-center">
           
               
                  <Col size={9} md={4}>
                  <div className='box'>
                    <h1 className="CourseName">{props.products_section_1_title}</h1>
                    <p>{props.products_section_1_description}</p>
                     <button>{props.props.page.products_section_1_button_label}</button>
                  </div>
                  </Col>
                  {/* <Col size={9} md={4}>
                  <div className='box'>
                  <h1 className="CourseName">{props.page.products_section_2_title}</h1>
                    <p>{props.page.products_section_2_description}</p>
                     <button>{props.page.props.page.products_section_2_button_label}</button>
                  </div>
                  </Col>
                  <Col size={9} md={4}>
                  <div className='box'>
                  <h1 className="CourseName">{props.page.products_section_3_title}</h1>
                    <p>{props.page.products_section_3_description}</p>
                     <button>{props.page.props.page.products_section_3_button_label}</button>
                  </div>
                  </Col> */}
                
                  
              </Row>
            </Container>
          </section>
        </>
        );
  }
}