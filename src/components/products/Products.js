import React from "react";

import { Container, Row, Col } from "reactstrap";
import productsImg from "../../assets/videos/cms-development.gif";
import CountUp from "react-countup";
import "./products.css";
import {constants} from "../../Const" ;
export const Products = (props) =>  {
  if(props.page){
    var gif ="";
    if(props.page.products_media && props.page.products_media.data && props.page.products_media.data.length>0){
     gif = constants.link+props.page.products_media.data[0].attributes.url ;
    }
  return (
    <section id="products">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="products__img">
              <img src={productsImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="products__content">
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
            <div className="products__content">
        
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
            <div className="products__content">
            <h3>{props.page.product_3_title}</h3>
              <p> <i className="fa fa-check-square"></i> {props.page.product_3_p1}</p>
              <p><i className="fa fa-check-square"></i> {props.page.product_3_p2}</p>
              <p><i className="fa fa-check-square"></i> {props.page.product_3_p3}</p>
              <p> <i className="fa fa-check-square"></i>  {props.page.product_3_p4}</p>
              <p> <i className="fa fa-check-square"></i> {props.page.product_3_p5}</p>
              <p> <i className="fa fa-check-square"></i>  {props.page.product_3_p6}</p>
              <button> {props.page.product_3_label1}</button>
              <button>{props.page.product_3_label2}</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};


