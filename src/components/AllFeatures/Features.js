import React from "react"
import "./features.css"
import { Container, Row, Col } from "reactstrap";
import Heading from "../common/heading/Heading";
import {constants} from "../../Const" ;

export const Features = (props) =>  {
  
  if(props.page){
      var image1 ="";
      if(props.page.feature_1_image && props.page.feature_1_image.data && props.page.feature_1_image.data.length>0){
       image1 = constants.link+props.page.feature_1_image.data[0].attributes.url ;
      }
      var image2 ="";
      if(props.page.feature_2_image && props.page.feature_2_image.data && props.page.feature_2_image.data.length>0){
       image2 = constants.link+props.page.feature_2_image.data[0].attributes.url ;
      }
      var image3 ="";
      if(props.page.feature_3_image && props.page.feature_3_image.data && props.page.feature_3_image.data.attributes){
       image3 = constants.link+props.page.feature_3_image.data.attributes.url ;
      }
      var image4="";
      if(props.page.feature_4_image && props.page.feature_4_image.data && props.page.feature_4_image.data.attributes){
       image4 = constants.link+props.page.feature_4_image.data.attributes.url ;
      }
      var image5 ="";
      if(props.page.feature_5_image && props.page.feature_5_image.data && props.page.feature_5_image.data.length>0){
       image5 = constants.link+props.page.feature_5_image.data[0].attributes.url ;
      }
      var image6 ="";
      if(props.page.feature_6_image && props.page.feature_6_image.data && props.page.feature_6_image.data.attributes){
       image6 = constants.link+props.page.feature_6_image.data.attributes.url ;
      }
      return (
        <>
          <section className='online'>
            <Container>
            <Row className="align-items-center">
              <Heading subtitle={props.page.features_title} title={props.page.features_p} />
                  <Col size={9} md={2}>
                  <div className='box'>
                    <div className='img'>
                      <img src={image1} />
                    </div>
                    <h1 className="CourseName">{props.page.feature_1_title}</h1>
                    <p>{props.page.feature_1_description}</p>
                  </div>
                  </Col>
                  <Col size={9} md={2}>
                  <div className='box'>
                    <div className='img'>
                      <img src={image2} alt='' />
                    </div>
                    <h1 className="CourseName">{props.page.feature_2_title}</h1>
                    <p>{props.page.feature_2_description}</p>
                  </div>
                  </Col>
                  <Col size={9} md={2}>
                  <div className='box'>
                    <div className='img'>
                      <img src={image3} alt='' /*className='show' */ />
                    </div>
                    <h1 className="CourseName">{props.page.feature_3_title}</h1>
                    <p>{props.page.feature_3_description}</p>
                  </div>
                  </Col>
                  <Col size={9} md={2}>
                  <div className='box'>
                    <div className='img'>
                      <img src={image4} alt='' />
                    </div>
                    <h1 className="CourseName">{props.page.feature_4_title}</h1>
                    <p>{props.page.feature_4_description}</p>
                  </div>
                  </Col>
                  <Col size={9} md={2}>
                  <div className='box'>
                    <div className='img'>
                      <img src={image5} alt=''  />
                    </div>
                    <h1 className="CourseName">{props.page.feature_5_title}</h1>
                    <p>{props.page.feature_5_description}</p>
                  </div>
                  </Col>
                  <Col size={9} md={2}>
                  <div className='box'>
                    <div className='img'>
                      <img src={image6} alt='' />
                    </div>
                    <h1 className="CourseName">{props.page.feature_6_title}</h1>
                    <p>{props.page.feature_6_description}</p>
                  </div>
                  </Col>
                   {/* <Col size={9} md={3}>
                  <div className='box'>
                    <div className='img'>
                      <img src={image6} alt='' />
                    </div>
                    <h1 className="CourseName">{props.page.feature_6_title}</h1>
                    <p>{props.page.feature_6_description}</p>
                  </div>
                  </Col>  */}
                  {/* <Col size={9} md={3}>
                  <div className='box'>
                    <div className='img'>
                      <img src={image6} alt='' />
                    </div>
                    <h1 className="CourseName">{props.page.feature_6_title}</h1>
                    <p>{props.page.feature_6_description}</p>
                  </div>
                  </Col> */}
                  
              </Row>
            </Container>
          </section>
        </>
        );
  }
}