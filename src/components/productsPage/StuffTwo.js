import React from "react";
import "./stufftwo.css";
import cmsImg from "../../assets/img/illustration.png";
import { Container, Row, Col } from "reactstrap";
import {constants} from "../../Const"
export const StuffTwo = (props) =>  {
  if(props.page){
    var image ="";
    if(props.page.A_cardImage && props.page.A_cardImage.data && props.page.A_cardImage.data.length>0){
     image = constants.link+props.page.A_cardImage.data[0].attributes.url ;
    }
  return (
    <section className="stuff">
      <Container>
        <Row>
        <Col lg="6" md="6">
            <div className="stuffTwo__content">
              <h2>Mangopulse CMS</h2>
              <p>
              Freedom and flexibility for developers. Smiles on editors' lips. Yeses to all your clients' wishes and needs. Oh, and Open Source.
              </p>
              <button>the heartcore</button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="stuffTwo__img">
              <img src={cmsImg} alt="" className="w-100" />
            </div>
          </Col>

       
        </Row>
        
      </Container>
    </section>
  );
  }
};


