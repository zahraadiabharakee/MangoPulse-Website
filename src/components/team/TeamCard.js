import React from "react"
import { Container, Row, Col } from "reactstrap";
import Heading from "../common/heading/Heading"
import contactImg from "../../assets/img/marketing.svg";
const TeamCard = (props) => {
  return (
    <>
     <section>
      <Container>
        <Row className="align-items-center">
          <Col size={9} md={4}>
         
          
       
            <img src={contactImg} alt='' />
            
              <i className='fab fa-facebook icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-youtube icon'></i>
            
          
          <div className='details'>
            <h2>How to choose the best cms for your business</h2>
            <p >mangopulse team</p>  
            <h4 >May 2022</h4>
            <button>ebboks and guides</button>
          </div>
      
      
          </Col>
          <Col size={9} md={4}>
       
          <div className='items '>
          
          <div className='img'>
            <img src={contactImg} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-youtube icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>How to choose the best cms for your business</h2>
            <p >mangopulse team</p>  
            <h4 >May 2022</h4>
            <button>ebboks and guides</button>
          </div>
        </div>
      
    
          </Col>
          <Col size={9} md={4}>
       
       <div className='items '>
       
       <div className='img'>
         <img src={contactImg} alt='' />
         <div className='overlay'>
           <i className='fab fa-facebook icon'></i>
           <i className='fab fa-twitter icon'></i>
           <i className='fab fa-youtube icon'></i>
         </div>
       </div>
       <div className='details'>
         <h2>How to choose the best cms for your business</h2>
         <p >mangopulse team</p>  
         <h4 >May 2022</h4>
         <button>ebboks and guides</button>
       </div>
     </div>
   
 
       </Col>
        </Row>
      </Container>
    </section>
      
    </>
  )
}

export default TeamCard
