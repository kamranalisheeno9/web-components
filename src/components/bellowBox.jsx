import React, {useState} from 'react'
import {CheckOutlined,SearchOutlined} from '@ant-design/icons';
import './components.css'



const BellowBox =()=> {
  return (
    <div className="bellow-box">
    <h5>Experiences are</h5>
    <h5> <CheckOutlined /> Private</h5>
    <p>No strangers, Just you and your local host</p>
       
    <h5> <CheckOutlined /> Personalized</h5>
    <p>Let your local host tailor this for you</p>
       
    <h5> <CheckOutlined /> Handpicked by locals</h5>
    <p>Verified by withlocals</p>
       
        </div>
  );
}

export default BellowBox;
