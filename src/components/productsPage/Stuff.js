import React from "react";
import "./stuff.css";
import { Container, Row, Col } from "reactstrap";
import {constants} from "../../Const";
import cmsImg from "../../assets/img/umbraco_cloud.png";
export const Stuff = (props) =>  {
  if(props.page){
    var image ="";
    if(props.page.A_cardImage && props.page.A_cardImage.data && props.page.A_cardImage.data.length>0){
     image = constants.link+props.page.A_cardImage.data[0].attributes.url ;
    }
  return (
    <section className='stuffone'>
      <Container >
        <Row>
          <Col lg="6" md="6">
            <div className="stuff__img">
              <img src={cmsImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="stuff__content">
              <h2>Mangopulse Heartcore</h2>
              <p>
              The headless CMS offering. Connect the friendly backoffice to any platform, device, application you want. Includes Managed APIs, CDN, media storage and much more.
              </p>
              <button>the friendly cms</button>
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
  }
};


