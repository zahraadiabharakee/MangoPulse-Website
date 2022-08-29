import React from "react"
import { Container, Row, Col } from "reactstrap";
import Heading from "../common/heading/Heading"
import contactImg from "../../assets/img/marketing.svg";
import "./article.css";
import {constants} from "../../Const";
export const Article = (props) => {
  if(props.page){
    var image1 ="";
    if(props.page.img1 && props.page.img1.data  && props.page.img1.data.attributes){
     image1 = constants.link+props.page.img1.data.attributes.url ;
    }
    var image2 ="";
    if(props.page.img2 && props.page.img2.data  && props.page.img2.data.attributes){
     image2 = constants.link+props.page.img2.data.attributes.url ;
    }
    var image3 ="";
    if(props.page.img3 && props.page.img3.data  && props.page.img3.data.length>0){
     image3 = constants.link+props.page.img3.data[0].attributes.url ;
    }
  return (
    <>
     <section className="blog">
      <Heading subtitle={props.page.section_title} title="Creating your web from scratch with the dedicated experience development team can be very expensive. "/>
      <Container>
        <Row className="align-items-center">
          <Col size={9} md={4}>
          <div className='items '>
          
          <div className='img'>
            <img src={image1} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-youtube icon'></i>
            </div>
          </div>
          <div className='details'>
          <h2>{props.page.title_1}</h2>
            <p >{props.page.subtitle_1}</p>  
            <h4 >{props.page.date_1}</h4>
            <button>{props.page.button_label_1}</button>
          </div>
        </div>
      
          </Col>
          <Col size={9} md={4}>
       
          <div className='items '>
          
          <div className='img'>
            <img className="Image2" src={image2} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-youtube icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{props.page.title_2}</h2>
            <p >{props.page.subtitle_2}</p>  
            <h4 >{props.page.date_2}</h4>
            <button>{props.page.button_label_2}</button>
          </div>
        </div>
      
    
          </Col>
          <Col size={9} md={4}>
       
       <div className='items '>
       
       <div className='img'>
         <img src={image3} alt='' />
         <div className='overlay'>
           <i className='fab fa-facebook icon'></i>
           <i className='fab fa-twitter icon'></i>
           <i className='fab fa-youtube icon'></i>
         </div>
       </div>
       <div className='details'>
       <h2>{props.page.title_3}</h2>
            <p >{props.page.subtitle_3}</p>  
            <h4 >{props.page.date_3}</h4>
            <button>{props.page.button_label_3}</button>
       </div>
     </div>
   
 
       </Col>
        </Row>
      </Container>
    </section>
      
    </>
  )
}
}


