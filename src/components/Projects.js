import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import CardItem from './CardItem';
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import {constants} from "../Const"
export const Projects = (props) => {

 
  if(props.page){
   
    
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""} style={{textAlign:"center", alignItems:'center'}}>
                <h2>{props.page.Title}</h2>
                <p>{props.page.Description_A}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
   
                      <Nav.Link eventKey="first">{props.page.tab1}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <div className="circle"></div>
                      <Nav.Link eventKey="second">{props.page.tab2}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <div className="circle"></div>
                      <Nav.Link eventKey="third">{props.page.tab3}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>{props.page.Description1}</p>
                      <button className="buttonProject">View More !</button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>{props.page.Description2}</p>
                      <button className="buttonProject">how it's simple</button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>{props.page.Description3}</p>
                      <button className="buttonProject">how to integrate</button>
                       
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
}