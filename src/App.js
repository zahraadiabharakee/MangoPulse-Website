// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { Cards } from "./components/Cards" ;
import { MailchimpForm } from "./components/MailchimpForm" ;
import Qualification from './components/qualification/Qualification';
import {Chooseus} from "./components/Chooseus/ChooseUs";
import {Aboutus} from "./components/Aboutus/AboutUs";
import {Cms} from "./components/cms/Cms";
import {Demo} from "./components/demo/Demo";
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import {Features} from "./components/AllFeatures/Features"
import {Article} from "./components/articles/Article";
import {Products } from "./components/products/Products";
import Team from "./components/team/Team";
// import {Stuff} from "./components/productsPage/Stuff";
// import {StuffTwo} from "./components/productsPage/StuffTwo";
// import {FeatureProducts} from "./components/productsPage/FeatureProducts";
import {Ad} from "./components/productsPage/Ad";
import {Intro} from "./components/Intro/Intro";

import Services from "./components/Services/Services";
// import {CmsBanner} from "./components/cms-product-page/CmsBanner" ;
// import {CmsProducts} from "./components/cms-product-page/CmsProducts" ;
// import {CmsExperience} from "./components/cms-product-page/CmsExperience" ;
// import {CmsIntegrate} from "./components/cms-product-page/CmsIntegrate";
// import {CmsDemo} from "./components/cms-product-page/CmsDemo";
// import {CmsResources} from "./components/cms-product-page/CmsResources";
// import ProductsPage from "./components/cms-product-page/ProductsPage";
import Cards from "./components/Cards";
import {constants} from './Const';
function App() {

  const [error, setError] = useState(null);
  const [homePage, setHomePage] = useState({});
  useEffect(() => {
    console.log(homePage, homePage.Navbar);
    axios
      .get(constants.link3)
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
      <Qualification />
      <Demo page={homePage.demo}/>
      <Products page={homePage.products}/>
   
     <Services />
      <Article page={homePage.Team}/>
      <Features page={homePage.features} />
     
      <Cms page={homePage.cms} />
      {/* <FeatureProducts />  */}
      <Projects page={homePage.projects}/>
      
      <Contact page={homePage.contactbox} />
      <Footer page={homePage.Footer}/>
   
      {/* <Ad page={homePage.cards} /> */}
      

      
    
    
     
{/*       
      <StuffTwo page={homePage.cards}/>
      <Stuff page={homePage.cards}/>
      <StuffTwo page={homePage.cards}/>
      <Stuff page={homePage.cards}/>
  
      <FeatureProducts page={homePage.features} />
      <MailchimpForm />
      <Footer page={homePage.Footer}/>
      
      <CmsBanner page={homePage.cards}/>
      <CmsProducts page={homePage.products} />
      <CmsExperience page={homePage.cards}/>
      <CmsIntegrate page={homePage.features}/>
      
      <CmsDemo page={homePage.products} />
      <MailchimpForm />
      <Footer page={homePage.Footer}/> */}
      
    </div>
  );
}

export default App;




// const Checkbox = ({ category, isChecked, onAddCategory, onRemoveCategory }) => (
//   <div key={category.id}>
//     <label htmlFor={category.id}>{category.name}</label>
//     <input
//       type="checkbox"
//       checked={isChecked}
//       onChange={isChecked ? onAddCategory : onRemoveCategory}
//       name="categories"
//       id={category.id}
//     />
//   </div>
// );

 