import React from "react";

import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/img/kx-hp-1_jicion.webp";
import CountUp from "react-countup";
import "./choose-us.css";
import {constants} from "../../Const"
export const Chooseus = (props) =>  {
  if(props.page){
    var image ="";
    if(props.page.B_cardImage && props.page.B_cardImage.data && props.page.B_cardImage.data.attributes){
     image = constants.link+props.page.B_cardImage.data.attributes.url ;
    }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
          <div className="about__content">
              <h2>{props.page.A_cardTitle}</h2>
              <p>
              {props.page.A_cardDescription}
              </p>
              <h4>{ props.page.A_cardLabel} <i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
            </div>
          </Col>

          <Col lg="6" md="6">
          <div className="about__img">
              <img src={image} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};


