import React from "react";

import { Container, Row, Col } from "reactstrap";
import cmsdemoImg from "../../assets/img/cloud_1-1.png";
import CountUp from "react-countup";
import "./cmsdemo.css";
import Image from "../../assets/img/illustration.png";
import {constants} from "../../Const" ;
export const CmsDemo = (props) =>  {
  if(props.page){
  
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="cms-demo__img">
              <img src={Image} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="cms-demo__content">
              <h3>{props.page.product_1_title}</h3>
              <p> <i className="fa fa-check-square"></i> {props.page.product_1_p1}</p>
              <p><i className="fa fa-check-square"></i> {props.page.product_1_p2}</p>
              <p><i className="fa fa-check-square"></i> {props.page.product_1_p3}</p>
              <p> <i className="fa fa-check-square"></i>  {props.page.product_1_p4}</p>
              <p> <i className="fa fa-check-square"></i> {props.page.product_1_p5}</p>
              <p> <i className="fa fa-check-square"></i>  {props.page.product_1_p6}</p>
              <button> {props.page.product_1_label1}</button>
              <button>{props.page.product_1_label2}</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Col lg="6" md="6">
            <div className="cms-demo__content">
        
              <h3>{props.page.product_2_title}</h3>
              <p> <i className="fa fa-check-square"></i> {props.page.product_2_p1}</p>
              <p><i className="fa fa-check-square"></i> {props.page.product_2_p2}</p>
              <p><i className="fa fa-check-square"></i> {props.page.product_2_p3}</p>
              <p> <i className="fa fa-check-square"></i>  {props.page.product_2_p4}</p>
              <p> <i className="fa fa-check-square"></i> {props.page.product_2_p5}</p>
              <p> <i className="fa fa-check-square"></i>  {props.page.product_2_p6}</p>
              <button> {props.page.product_2_label1}</button>
              <button>{props.page.product_2_label2}</button>
            </div>
          </Col>

          <Col lg="6" md="6">
          <div className="cms-demo__img">
              <img src={cmsdemoImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};


