import React, {useState} from 'react'
import TravelPic1 from "./images/travellogo.png"
import TravelPic2 from "./images/travellogo2.png"
import Face from "./images/face.jpg"
import {StarFilled,DownOutlined} from '@ant-design/icons';
import './components.css'



const TravelesReview =(props)=> {
    const [display, setdisplay]=useState(true)
  return (
    <div id={props.review} className="TravelesReview">
        <h2>Travelers' Review</h2>
        <div className="companyName">
            <div className="boxes">
                <img src={TravelPic1} alt="logo"/>
            </div>
            <div className="boxes">

                <img src={TravelPic2} alt="logo"/>
            </div>
        </div>
        <div className="travel-description">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores tempora voluptate molestiae minus rerum sed officia voluptatibus</p>
        <div className="traveler-description">
           <div className="facestyle">

            <img src={Face} alt="traveler"/>
           </div>
           <div className="feedback">
               <h5>Arial
                   <br />
                   <StarFilled style={{color:"#26a69a",fontSize:10}} /><StarFilled style={{color:"#26a69a",fontSize:10}} /><StarFilled style={{color:"#26a69a",fontSize:10}} /><StarFilled style={{color:"#26a69a",fontSize:10}} /><StarFilled style={{color:"#26a69a",fontSize:10}} />
                   <br /> <span style={{fontSize:10,fontWeight:"700"}}>
                       5 June 2020
                       </span> 
               </h5>
               
           </div>
        </div>
           <p className="moreDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur mollitia, eaque dolores necessitatibus quod maiores laboriosam modi dolore id, corporis iure eum! Consequuntur in laborum velit recusandae aut voluptatum accusamus.</p>
           <p className="moreDescription1">Fun Morning</p>
       
        </div>
        <hr className="line1" />
        <div className="package">
            <div className="included">
                <h3>Included in the price</h3>
                <ul>
                    <li>Hotel pickup and dropoffwell-maintained car with an English-speaking driver</li>
                    <li>Personal English-speaking profesional driver</li>
                    <li>Free wifi onboard</li>
                    <li>Fuel and Tolls</li>
                    <li>All taxes,fees and handling charges</li>
                </ul>
            </div>
        <div className="not-included">
        <h3>Not Included</h3>
        <ul>
                    <li>Entrance fees for all Attractions</li>
                    <li>Offical tour guide- our diver are english speaking</li>
                    <li>Beverages and meals</li>
                    <li>Fuel and Tolls</li>
                    <li>Tips and gratuities</li>
                </ul>
        </div>
        </div>
        <hr className="line1" />
    <div className="frequently-asked-questions">
        <h2 id={props.id2}>Frequently Asked Questions <span onClick={()=>{setdisplay(!display)}} style={{fontSize:14,float:"right",color:"rgb(155, 155, 155)",paddingTop:8}} >Expand <DownOutlined className="icon-drop"  />
        
        
        </span> </h2>
        
        <hr className="line1" />
        <h4>Title Text -- Title Text </h4>
        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quo itaque sapiente eaque veritatis iusto tempora ex illo non perferendis. Molestias praesentium perspiciatis possimus! Similique, asperiores et! A, consectetur accusamus.</p>
    </div>
    </div>
    
  );
}

export default TravelesReview;
