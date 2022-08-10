import React from "react";
import "./demo.css";
import { Container, Row, Col } from "reactstrap";
import demoImg from "../../assets/videos/cms.mp4";
import CountUp from "react-countup";
import "./demo.css";

export const Demo = (props) =>  {
  if(props.page){
  return (
    <section className="Zal">
      <Container >
        <Row>
          <Col lg="6" md="6">
            <div className="demo__img">
            <video src='/videos/CMS.mp4' autoPlay loop muted />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="demo__content">
              <h2>{props.page.demo_title}</h2>
              <p id="paragraph">
                {props.page.demo_description}
              </p>
              <button id="demo-btn">{props.page.demo_label} </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};


