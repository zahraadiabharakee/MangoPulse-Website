import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assets/img/kx-hp-2_acgyai.webp";
import "./choose-us.css";

import ReactPlayer from "react-player";

export const Chooseus = (props) =>  {
  const [showVideo, setShowVideo] = useState(false);
  if(props.page){
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>{props.page.B_cardTitle}</h2>
              <p>
              {props.page.B_cardDescription}
              </p>
              <h4>{props.page.B_cardLabel}<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                   className='far fa-play-circle'
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
              }
};

