import React, { useContext } from "react";
import "./Intro.css";
import Heading from "../common/heading/Heading";
import {constants} from '../../Const';
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export const Intro = (props) => {
 // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  
 if(props.page){
  var image1 ="";
  if(props.page.Intro_background_image_1 && props.page.Intro_background_image_1.data  && props.page.Intro_background_image_1.data.length>0){
   image1 = constants.link+props.page.Intro_background_image_1.data[0].attributes.url ;
  }
   var image2 ="";
   if(props.page.Intro_background_image_2 && props.page.Intro_background_image_2.data  && props.page.Intro_background_image_2.data.attributes){
    image2 = constants.link+props.page.Intro_background_image_2.data.attributes.url ;
   }
    var image3 ="";
    if(props.page.Intro_background_image_3 && props.page.Intro_background_image_3.data  && props.page.Intro_background_image_3.data.attributes){
     image3 = constants.link+props.page.Intro_background_image_3.data.attributes.url ;
    }
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
         
          <div className="about__intro">
              <h2>{props.page.Intro_title}</h2>
              <p>
              {props.page.Intro_description}
              </p>
              <h4>{props.page.Intro_directory} <i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
            </div>
           
        </div>
        <Link to="contact" smooth={true} spy={true}>
        
        </Link>
        {/* social icons */}
        <div className="i-icons">
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
       
      <img src={image1} alt="" />
        <img src={image3} alt="" /> 
        {/* animation */}
        <motion.img
          initial={{ left: "-30%" }}
          whileInView={{ left: "-10%" }}
          className="Crown"
          transition={transition}
          src={image2}
          alt=""
        />

    
    
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={star}/>
        </motion.div> */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
        }
};

