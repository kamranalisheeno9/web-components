import React, {useState} from 'react'
import {StarFilled,CodepenCircleFilled} from '@ant-design/icons';
import Navbar from './header'
import './components.css'



const CarrouselImage =(props)=> {
  return (
    <div id={props.id} className="carrouselBox">
        <div className="navbar-container">

        <Navbar  />
        </div>
    <div className="image-background">

        <div className="description">
            <p style={{textTransform:"uppercase"}}>Upto 6 Stops <StarFilled style={{color:"#26a69a"}} /><StarFilled style={{color:"#26a69a"}} /><StarFilled style={{color:"#26a69a"}} /><StarFilled style={{color:"#26a69a"}} /><StarFilled style={{color:"#26a69a"}} /></p>
            <h2>Athens By Night Tour </h2>
            <p>Fall in love with athens as personalized evening ride of its <br /> famous sites and illuminated landmarks</p>
        </div>
        <div className="price-description">
            <p>From</p>
            <h1>€130</h1>
            <p>For 1-4 persons</p>
            <div className="card">
            <div>
               
                <CodepenCircleFilled style={{fontSize:30,paddingTop:5,paddingRight:5}} />
                </div>
                
                <div style={{fontSize:13,opacity:1}}> 
                We are rated Excellent ob <br />
                Tripidvisor <span style={{opacity:0.7}}> 4000+ reviews</span>
                </div>
            </div>
            <div className="btn">
               <a href="">
                   see the route
                   </a> 
            </div>
        </div>
        
    </div>
    </div>
  );
}

export default CarrouselImage;
