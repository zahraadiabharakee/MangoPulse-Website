import React from 'react';
import "./cmsintegrate.css"
import CmsExperienceImg from "../../assets/img/integrations.png";
export const CmsIntegrate = (props) =>  {
  return (
    <div className="Section_content">
      <h1 className="title-integration">Integrate with anything</h1>
       <p className="paragraph-integration">
       Umbraco’s intuitive UI, great developer experience, and flexibility provide the perfect basis for a truly 
       <a href='#'> composable digital experience platform (DXP)</a>
        Create a tech stack that fits you, not the other way around, and enrich your digital content and online presence.

Whether it’s with custom integrations or the extensive list of pre-built components for a wide range of popular vendors - it can all be done with Umbraco. 

Take a look at <a href="#">Umbraco's Integrations and Extensibility features</a> or<a href="#"> visit Umbraco Marketplace for ready-to-use Umbraco integrations.</a>
       </p>
       <img className="image-integration" src={CmsExperienceImg} />
    </div>
  )
}

