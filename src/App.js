import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cards } from "./components/Cards" ;
import { MailchimpForm } from "./components/MailchimpForm" ;
import {Chooseus} from "./components/Chooseus/ChooseUs";
import {Aboutus} from "./components/Aboutus/AboutUs";
import {Cms} from "./components/cms/Cms";
import {Demo} from "./components/demo/Demo";
import axios from 'axios';
import { useEffect, useState } from 'react';
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import {Products } from "./components/products/Products"



function App() {
  const [error, setError] = useState(null);
  const [homePage, setHomePage] = useState({ 
    Description: "",
    Title: "",
    SubTitle:"",
    Image:"",
    Tab1:"",
    Tab2:"",
    Tab3:"",
    nameinput:"",
    lastnameinput:"",
    messageinput:"",
    Email:"",
    number:"",
    Section1:"",
    section1a:"",
    sectiob1b:"",
    section1c:"",
    section1d:"",
    section1e:"",
    Section2:"",
    section2a:"",
    sectiob2b:"",
    section2c:"",
    section2d:"",
    Section3:"",
    section3a:"",
    sectiob3b:"",
    section3c:"",
    section3d:"",
    Section4:"",
    section4a:"",
    sectiob4b:"",
    section4c:"",
    Description_A:"",
    section4d:"",
    footer_p:"",
    tab1:"",
    tab2:"",
    tab3:"",
    linkAdmin:"",
    admin:"",
    front:"",
    linkFront:"",
    card1button:"",
    card1description:"",
    card2button:"",
    card2description:"",
    card3button:"",
    card3description:"",
    client1:"",
    client2:"",
    client3:"",
    client4:"",
    movingcontent1:"",
    sendbutton:"",
    A_cardDescription:"",
    A_cardLabel:"",
    B_cardTitle:"",
    B_cardLabel:"",
    B_cardDescription:"",
    C_cardTitle:"",
    C_cardDescription:"",
    C_cardLabel:"",
    demo_title:"",
    demo_description:"",
    demo_label:"",
    demo_link:"",
    product_1_title:"",
    product_1_p1:"",
    product_1_p2:"",
    product_1_p3:"",
    product_1_p4:"",
    product_1_p5:"",
    product_1_p6:"",
    product_1_label1:"",
    product_1_label2:"",
    product_2_title:"",
    product_2_p1:"",
    product_2_p2:"",
    product_2_p3:"",
    product_2_p4:"",
    product_2_p5:"",
    product_2_p6:'',
    product_2_label1:"",
    product_2_label2:"",
    product_3_p1:"",
    product_3_p2:"",
    product_3_p3:"",
    product_3_p4:"",
    product_3_p5:"",
    product_3_p6:'',
    product_3_label1:"",
    product_3_label2:"",
    features_title:"",
    features_p:"",
    feature_1_title:"",
    feature_1_description:"",
    features_2_title:"",
    features_2_description:"",
    feature_3_title:"",
    feature_3_description:"",
    feature_4_title:"",
    feature_4_description:"",
    features_5_title:"",
    features_5_description:"",
    feature_6_title:"",
    feature_6_description:"",
    cms_title:"",
    cms_description:"",
    cms_label:"",
    email_title1:"",
    email_title2:"",
    email_placeholder:"",
    email_button_label:""
  
  
  });
  useEffect(() => {
    console.log(homePage, homePage.Navbar);
    axios
      .get('http://localhost:1337/api/home-page?populate=deep')
      .then(({ data }) => setHomePage(data.data.attributes))
      .catch((error) => setError(error))
  }, [])
  

  

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className="App">
      
      <NavBar page={homePage.Navbar}/>
      <Banner page={homePage.BannerLayout} />
      <Skills page={homePage.clients}/>
      <Aboutus page={homePage.cards}/>
      <Chooseus page={homePage.cards} />
      <Aboutus page={homePage.cards}/>
      <Cards page={homePage.cards} />
      <Demo page={homePage.demo}/>
      <Products page={homePage.products}/>
      <CourseHome page={homePage.features} />
      <Team />
      <Cms page={homePage.cms}/>
      <Projects page={homePage.projects}/>
      <Contact page={homePage.contactbox} />
   
      <Footer page={homePage.Footer}/>
       
     
        
     
    </div>
  );
}

export default App;