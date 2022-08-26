import React from "react";
import "./contact.css";
import { Container, Row, Col } from "reactstrap";
import contactImg from "../../assets/img/kx-hp-1_jicion.webp";
import CountUp from "react-countup";
import "./contact.css";
import {constants} from "../../Const"
export const ContactUs = (props) =>  {
  if(props.page){
    var image ="";
    if(props.page.A_cardImage && props.page.A_cardImage.data && props.page.A_cardImage.data.length>0){
     image = constants.link+props.page.A_cardImage.data[0].attributes.url ;
    }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="contact__img">
            <iframe width="738" height="508" id="gmap_canvas" src="https://maps.google.com/maps?q=beirut%20sin%20el%20fil%20mazloum%20center&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="contact__content">
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


