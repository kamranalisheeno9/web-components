import React, {useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import c2 from "./images/c2.jpg"
import c3 from "./images/c3.jpg"
import c4 from "./images/c4.jpg"
import c5 from "./images/c5.jpg"
import c6 from "./images/c6.jpg"
import {StarFilled,CodepenCircleFilled} from '@ant-design/icons';
import './components.css'



const RidesCarrousel =(props)=> {
  return (
    <div className="other-rides-carrousel">
       <h2 id={props.id}>Other Rides in Athens</h2>
       <div className="carrousel-style">
       <div className="carrousel1">

<Carousel autoPlay={true} interval={3000} useKeyboardArrows={true} dynamicHeight={true} showArrows={true} >
         
         <div>
                  <img src={c5} />
                  
         </div>
         <div>
         <img src={c3} />
         </div>
         <div>
         <img src={c4} />
         </div>
         <div>
         <img src={c2} />
         </div>
         
         <div>
         <img src={c6} />
         </div>
         
         
     </Carousel>
     <h5>Example Text Put Here</h5>
     <p>Lorem ipsum  consectetur, adipisicing elit. Quibusdam</p>
    </div>
       <div className="carrousel1">

<Carousel  autoPlay={true} interval={1000} dynamicHeight={true} useKeyboardArrows={true} showArrows={true} >
         
         <div>
              <img src={c3} />
         </div>
         <div>
         <img src={c2} />
         </div>
         <div>
         <div>
         <img src={c6} />
         </div>
         <img src={c4} />
         </div>
         <div>
         <img src={c5} />
         </div>
         
         
         
     </Carousel>
     <h5>The best of 2 hours in Athens</h5>
     <p>Lorem ipsum  consectetur, adipisicing elit. Quibusdam</p>

    </div>

       <div className="carrousel1">

<Carousel autoPlay={true} interval={2000} useKeyboardArrows={true} dynamicHeight={true} showArrows={true} >
         
         <div>
              <img src={c2} />
         <div>
         <img src={c6} />
         </div>
         
         </div>
         <div>
         <img src={c3} />
         </div>
         <div>
         <img src={c4} />
         </div>
         <div>
         <img src={c5} />
         </div>
         
         
     </Carousel>
     <h5>Any Text That You Put Here</h5>
     <p>Lorem ipsum  consectetur, adipisicing elit. Quibusdam</p>

    </div>
       </div>
       <div className="allRides">
                   
                    All Rides
            </div> 
        <hr className="line2"/>
        <h2>Questions Left</h2>
        <div className="allRides">
                   
                   Contact Support
           </div>
    </div>
    
  );
}

export default RidesCarrousel;
