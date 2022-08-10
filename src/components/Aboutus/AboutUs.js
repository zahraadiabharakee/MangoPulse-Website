import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/img/kx-hp-1_jicion.webp";
import CountUp from "react-countup";
import "./about.css";

export const Aboutus = (props) =>  {
  if(props.page){
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>{props.page.A_cardTitle}</h2>
              <p>
              {props.page.A_cardDescription}
              </p>
              <h4>{ props.page.A_cardLabel} <i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};


