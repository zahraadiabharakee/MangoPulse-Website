import React from "react";
import "./cmsexperience.css";
import { Container, Row, Col } from "reactstrap";
import CmsExperienceImg from "../../assets/img/mikkel-the-happy-umbraco-user-8.jpg";
import CountUp from "react-countup";
import {constants} from "../../Const"
export const CmsExperience = (props) =>  {
  if(props.page){
    var image ="";
    if(props.page.A_cardImage && props.page.A_cardImage.data && props.page.A_cardImage.data.length>0){
     image = constants.link+props.page.A_cardImage.data[0].attributes.url ;
    }
  return (
    <section className="containerz">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="CmsExperience__img">
              <img src={CmsExperienceImg} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="CmsExperience__content">
              <h2>Empowering developer experience</h2>
              <p>
              Umbraco empowers developers to deliver a customized editing experience for any type of content. Built on the .NET (ASP.NET Core) framework, Umbraco leverages the latest in web development technology.

A powerful API and service layer works in tandem with flexible content models to ensure it's not only easy to get started but also to scale with any solution. Use Umbraco’s routing pipeline and Models Builder to render content in no time. Enhanced MVC and WebAPI controllers make it easy to work with Umbraco-generated content.

There are out-the-box tools to cover most common scenarios and a fully-fledge extension APIs for customizing the backend to more specific needs. Anything from custom editing UI to dashboards is built with extendability and flexibility in mind.
              </p>
            </div>
          </Col>
          <div style={{textAlign:"center", alignItems:'center'}} >
          <h5>See Umbraco's functions and features - book a personalized live demo and get answers to all your questions!</h5>
          <button className="experience-button">Book A Live Demo</button>
          </div>
        </Row>
      </Container>
    </section>
  );
  }
};


