import React from "react";

import { Container, Row, Col } from "reactstrap";
import CmsProductsImg from "../../assets/videos/cell-and-image-with-alt-text.mp4";
import Image from "../../assets/img/v8_language_variants.png";

import CountUp from "react-countup";
import "./cmsproducts.css";
import {constants} from "../../Const" ;
export const CmsProducts = (props) =>  {
  if(props.page){
   
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="CmsProducts__img">
              
              <video src={CmsProductsImg} autoPlay loop muted />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="CmsProducts__content">
              <h3>World-class content management</h3>
              <p>Umbraco CMS is content management at its finest. Editors can fulfill daily tasks, preview and publish content, schedule campaigns, and much more. All with a simple and intuitive interface optimized for creating and managing content.

But we know that content is not just text. In Umbraco, you can upload and crop images, add videos and documents, and use it all to make your content pop without leaving the page you're working on. The Media Library lets you organize and manage your media items, and even keeps track of where each item is used across the project.</p>
              <button> {props.page.product_1_label1}</button>
       
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Col lg="6" md="6">
            <div className="CmsProducts__content">
        
              <h3>{props.page.product_2_title}</h3>
              <p> Umbraco is more than a Web CMS. It’s possible for editors to create and manage content in multiple languages, for multiple channels, and reuse content where needed. So whether you want to write blog posts and news for the web, manage data for a mobile app or promote campaigns on digital signage, Umbraco will deliver.

Take a look at all of Umbraco's Content Management features - or let us show you around!

See for yourself how Umbraco works and what features it can offer your team. Book a live, 1-on-1, no-strings-attached demo of Umbraco, and let our specialists take you on a personalized tour! </p>
              <button> {props.page.product_2_label1}</button>
              
            </div>
          </Col>

          <Col lg="6" md="6">
          <div className="CmsProducts__img">
              
              <img src={Image}  />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};


