import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import {constants} from "../Const";

export const Banner = (props) => {

   
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Manage Content Easily, Design APIs" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  if(props.page) {
    var image ="";
    if(props.page.Image && props.page.Image.data  && props.page.Image.data.attributes){
     image = constants.link+props.page.Image.data.attributes.url ;
    }
  return (
    <section className="banner" id="home" style={{backgroundImage:`url(${image})`}}>
    
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              
                <h1> {props.page.Title} <span className="txt-rotate" dataperiod="1000" data-rotate='[ {props.page.movingcontent1}]'><span className="wrap">{text}</span></span></h1>
                 
                <p>{props.page.Description}</p>
                  <button id="hi"onClick={() => console.log('connect')}>{props.page.SubTitle}<ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              
                </div>}
            </TrackVisibility>
        
          </Col>
          
        </Row>
        <a href={"https://as-mangopulse-admin.azurewebsites.net/Account/logon?ReturnUrl=%2F"} target="_blank"><span className="tagline" id="x" >{props.page.admin}</span></a>
        <a href={"https://as-mangopulse-front.azurewebsites.net/"} target="_blank"><span className="tagline" id="y" >{props.page.front}</span></a>
      </Container>

    </section>
  )

  
}
}