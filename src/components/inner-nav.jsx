import React, {useState} from 'react'
import {DownloadOutlined} from '@ant-design/icons';
import './components.css'


const InnerNav =(props)=> {

  const [stop, setstop]=useState(true)
    const [about ,setabout]=useState(false)
    const [reviews ,setreviews]=useState(false)
    const [questions ,setquestions]=useState(false)
    const funcstop =()=>{
      setstop(!stop)
      setabout(false)
      setreviews(false)
      setquestions(false)

    }
    const funcabout =()=>{
        setstop(false)
        setabout(!about)
        setreviews(false)
        setquestions(false)

    }
    const funcreviews =()=>{
      setstop(false)
      setabout(false)
      setreviews(!reviews)
      setquestions(false)

    }
    const funcquestions =()=>{
      setstop(false)
      setabout(false)
      setreviews(false)
      setquestions(!questions)

    }

  return (
    <div className="navbar-inner">
    <div className="inner-nav">

      <div className="navbar-inner">
        <ul>
          <li>
            <a onClick={funcstop} className={stop ? "active" : "" } href={`#${props.stop}`}>
              Stops
            </a>
          </li>
          <li>
            <a onClick={funcabout} className={about ? "active" : "" } href={`#${props.about}`}>
              About
            </a>
          </li>
          <li>
            <a onClick={funcreviews} className={reviews ? "active" : "" }  href={`#${props.review}`}>
              Reviews
            </a>
          </li>
          <li>
            <a onClick={funcquestions} className={questions ? "active" : "" }  href={`#${props.question}`}>
              Questions
            </a>
          </li>
        </ul>
      </div>
<div className="save-icon">

      <DownloadOutlined />
    Share
</div>
    </div>
<hr  className="line3"/>   
  </div>
  );
}

export default InnerNav;
