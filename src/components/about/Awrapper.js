import React from "react"
import { awrapper } from "../../dummydata";
import image from '../../assets/img/ezgif-3-f67c9c556f.webp' ;
import BackAnimation from "../BackAnimation";
import { Container, Row, Col } from "reactstrap";
const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <BackAnimation />
        <section className="Ad"> 
      <Container>
        <Row>
       
          <Col Lg="6" md="3" className="section">
            <h1 className="Stat">Number of active installs </h1>
            <h4 className="values">731,438</h4>
            </Col>
            <Col Lg="6" md="3" className="section">
            <h1 className="Stat">Number of active members </h1>
            <h4 className="values">221,745</h4>
            </Col>
            <Col  Lg="6" md="3" className="section">
            <h1 className="Stat">Known free Umbraco packages available</h1>
            <h4 className="values">1,211</h4>

          </Col>
          <Col  Lg="6" md="3">
             <img className="world-ad" src={image} />
          </Col>
       
        </Row>
        
      </Container>
    </section>
        
      </section>
    </>
  )
}

export default Awrapper