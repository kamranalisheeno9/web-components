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



const MainCarrousel =(props)=> {
  return (
    <div className="carrousel-title">
       <h2 id={props.id}>What Do You Expect</h2>
       <div className="carrousel2-style">
       <div className="carrousel2">

<Carousel autoPlay={true} interval={3000} useKeyboardArrows={true} dynamicHeight={true} showArrows={true} >
         
         <div>
                  <img src={c5} />
                  
         </div>
         <div>
         <img src={c4} />
         </div>
         <div>
         <img src={c3} />
         </div>
         <div>
         <img src={c6} />
         </div>
         <div>
         <img src={c2} />
         </div>
         
         
         
     </Carousel>
     <p>Lorem ipsum  consectetur, adipisicing elit.Lorem ipsum  consectetur, adipisicing elit.Lorem ipsum  consectetur, adipisicing elit. Quibusdam ..... <span > <a href="" style={{color:"purple",textDecoration:"none"}} >  read more</a></span></p>
    </div>
       
    </div>
    </div>
    
  );
}

export default MainCarrousel;
