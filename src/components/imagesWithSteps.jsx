import React, {useState} from 'react'
import Pic1 from './images/pic1.jpg'
import Pic2 from './images/pic2.jpg'
import Pic3 from './images/pic3.jpg'
import Pic4 from './images/pic4.jpg'
import TravelesReview from "./review";
import AboutRide from "./aboutRide";

import {StarFilled,CodepenCircleFilled} from '@ant-design/icons';
import './components.css'



const ImagesWithSteps =(props)=> {
  return (
    <div className="carrouselBoxSteps">
        <div className="set-row">

        <div id={props.stop} className="pic-container">
            <p className="step-number">1</p>
            <img src={Pic1} alt=""/>
            <p className="heading-description">Acropolis Area</p>
            <p className="paragraph-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illo veniam
                 autem ducimus saepe cum perspiciatis ea </p>
        </div>
        <div className="pic-container">
        <p className="step-number">2</p>

            <img src={Pic2} alt=""/>
            <p className="heading-description">Acropolis Area</p>
            <p className="paragraph-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illo veniam
                 autem ducimus saepe cum perspiciatis ea </p>
        </div>
        </div>
        <div className="set-row">

        <div className="pic-container">
        <p className="step-number">3</p>

            <img src={Pic4} alt=""/>
            <p className="heading-description">Acropolis Area</p>
            <p className="paragraph-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illo veniam
                 autem ducimus saepe cum perspiciatis ea </p>
        </div>
        <div className="pic-container">
        <p className="step-number">4</p>

            <img src={Pic3} alt=""/>
            <p className="heading-description">Acropolis Area</p>
            <p className="paragraph-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illo veniam
                 autem ducimus saepe cum perspiciatis ea </p>
        </div>
        </div>
        <div className="stopBtn" >
       <a href="">
         All Stops

         </a> 
    </div>
    <hr className="line" />
    <AboutRide about={props.about} id={props.id} />
    <TravelesReview review={props.review} question={props.question} id2={props.id2} />
    </div>
    
  );
}

export default ImagesWithSteps;
