import React from "react";
import "./cmsbanner.css";
import { Container, Row, Col } from "reactstrap";
import CmsBannerImg from "../../assets/img/illustration.png";
import CountUp from "react-countup";
import {constants} from "../../Const"
export const CmsBanner = (props) =>  {
  if(props.page){
    var image ="";
    if(props.page.A_cardImage && props.page.A_cardImage.data && props.page.A_cardImage.data.length>0){
     image = constants.link+props.page.A_cardImage.data[0].attributes.url ;
    }
  return (
    <section className="CmsBanner__content">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div >
              <h2>Mangopulse CMS</h2>
              <p>
              Mangopulse, the world's leading open-source content management system built on the latest .NET (ASP.NET Core) technology, offers all you need to create a powerful, user-friendly website.

Flexible building blocks and rich integration possibilities let developers spin up truly customized solutions that are a joy for content editors to manage thanks to an intuitive user interface.

Try Mangopulse and see for yourself why the CMS is loved by thousands of developers and content editors around the world!
              </p>
              <button>Book A Live Demo</button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="CmsBanner__img">
              <img src={CmsBannerImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};


