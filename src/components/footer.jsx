import React, {useState} from 'react'
import {EuroCircleOutlined} from '@ant-design/icons';
import './components.css'



const Footer =()=> {
  return (
    <div className="footer">
<div className="iconFooter">
<EuroCircleOutlined />


</div>
<div className="navFooter">
<ul>
    <li>Company</li>
    <li>Term of Use</li>
    <li>Privacy Policy</li>
</ul>

</div>
<div className="footer-btn">
    Help and Center
</div>
    </div>
  );
}

export default Footer;
