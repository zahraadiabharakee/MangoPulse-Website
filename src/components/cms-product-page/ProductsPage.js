import React from "react"
import {CmsClients} from "./CmsClients";
import {CmsBanner} from "./CmsBanner";
import {CmsDemo} from "./CmsDemo";
import {CmsExperience} from "./CmsExperience";
import {CmsIntegrate} from "./CmsIntegrate";
import {CmsProducts} from "./CmsProducts";
import {CmsResources} from "./CmsResources";
import {Footer} from "../Footer";
import {MailchimpForm}  from "../MailchimpForm";

const ProductsPage = () => {
  return (
    <>
      <CmsClients />
      <CmsBanner />
      <CmsDemo />
      <CmsExperience />
      <CmsIntegrate />
      <CmsProducts />
      <CmsResources />
      <Footer />
      <MailchimpForm />
      
      
    </>
  )
}

export default ProductsPage