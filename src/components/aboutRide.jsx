import React, {useState} from 'react'
import {CheckOutlined,SearchOutlined} from '@ant-design/icons';
import './components.css'



const AboutRide =(props)=> {
  return (
    <div id={props.about} className="about-ride">
       <h2 id={props.id}>About the ride</h2>
       <div className="meeting-info">
           <ul>
               <li>
                  <h6>Meeting Point</h6>
                  <p>Penepistimo - Athens</p> 
               </li>
               <li>
                  <h6>Any Text - Text</h6>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p> 
               </li>
               <li>
                  <h6>All About Anything</h6>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum </p> 
               </li>
           </ul>
           <p className="info-about">Start the tour with a general modal (not linked to any element) for a general introduction.
Imagine the most basic task possible and write to that. Don’t try to cover every use case.
Remember that your audience is a new user, so assume no Drupal knowledge.
If possible, keep the tour to fewer than 8 tips.
If possible, keep to a single sentence per tip of less than 25 words.
A tour tip is not UI text. Don’t duplicate the UI text.
A tour is not documented. You can link to documentation at the end if you think it’s useful.</p>
       </div>
        </div>
  );
}

export default AboutRide;
