import meter1 from "../assets/img/ucommerce-no-bg.webp";
import meter2 from "../assets/img/umarketingsuite-logo-no-bg.webp";
import meter3 from "../assets/img/uskinned-logo-no-bg.webp";
import meter4 from "../assets/img/qbank-transparent-bg.webp";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {constants} from "../Const"
export const Skills = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  if(props.page){
      var image1 ="";
      if(props.page.img1 && props.page.img1.data  && props.page.img1.data.attributes){
       image1 = constants.link+props.page.img1.data.attributes.url ;
      }
      var image2 ="";
      if(props.page.img2 && props.page.img2.data   && props.page.img2.data.attributes){
       image2 = constants.link+props.page.img2.data.attributes.url ;
      }
      var image3 ="";
      if(props.page.img3 && props.page.img3.data  && props.page.img3.data.attributes){
       image3 = constants.link+props.page.img3.data.attributes.url ;
      }
      var image4 ="";
      if(props.page.img4 && props.page.img4.data  && props.page.img4.data.length>0){
       image4 = constants.link+props.page.img4.data[0].attributes.url ;
      }
  return (
    <section className="" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{props.page.Title}</h2>
                        <p>{props.page.Description}</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={image1} alt="Image" />
                                <h5>{props.page.client1} </h5>
                            </div>
                            <div className="item">
                                <img src={image2} alt="Image" />
                                <h5>{props.page.client4} </h5>
                            </div>
                            <div className="item">
                                <img src={image3} alt="Image" />
                                <h5>{props.page.client2} </h5>
                            </div>
                            <div className="item">
                                <img src={image4} alt="Image" />
                                <h5>{props.page.client3} </h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
  }
}

