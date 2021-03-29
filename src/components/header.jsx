import React, {useState} from 'react'
import {DownloadOutlined,DownOutlined,UserOutlined} from '@ant-design/icons';
import './components.css'



const Header =(props)=> {
    
    const [display, setdisplay]=useState(true)
    const [transers, settransers]=useState(true)
    const [sight ,setsight]=useState(false)
    const trans =()=>{
        settransers(!transers)
        setsight(false)

    }
    const sightseeing =()=>{
        setsight(!sight)
        settransers(false)

    }
  return (
    <div className="changed-nav">
        <div className="nav-bar-main">
            <ul>
                <li>
                    <a onClick={trans} className={transers ? "active" : "" } href="#">
                        Transers
                    </a>
                </li>
                <li>
                    <a onClick={sightseeing} className={sight ? "active" : "" }  href="#">
                        Sightseeing rides
                    </a>
                </li>
            </ul>
        </div>

        <div className="nav-buttons">
        <div style={{alignSelf:"center",marginLeft:25}}>

<h2 className="h2-title" onClick={()=>{setdisplay(!display)}} > <span style={{backgroundColor:"rgba(172, 172, 172, 0.637)",borderRadius:50,width:40,height:30,padding:4}}><UserOutlined  /></span>  Asas <DownOutlined />
        <DownloadOutlined />
Share
        
        </h2>
</div>
<div>
 
</div>

        </div>

















{/*         
      <div className="logo">
<img src={logo} alt=""/>
      </div>
      <div className="nav-bar" > 
        <ul className={ toggle ? "nav-bar-style" :"hide"   }>
            <li>
                <a onClick={()=>{setToggle(false)}} href={`#${props.home}`}>
                    Home
                </a>
            </li>
            <li>
                <a onClick={()=>{setToggle(false)}}  href={`#${props.about}`}>
                    About
                </a>
            </li>
            <li>
                <a onClick={()=>{setToggle(false)}}  href={`#${props.question}`}>
                    Questions
                </a>
            </li>
            <li>
                <a onClick={()=>{setToggle(false)}}  href={`#${props.other}`}>
                    Other Rides
                </a>
            </li>
            
        </ul>
      </div>
    <div onClick={togglefunc} className="menu"><MenuOutlined size="large" /></div> */}

    </div>
  );
}

export default Header;
