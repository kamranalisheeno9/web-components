import React, {useState} from 'react'
import {FieldTimeOutlined,CalendarOutlined,CaretDownOutlined ,PlusOutlined ,UserAddOutlined,SearchOutlined} from '@ant-design/icons';
import BellowBox from "./bellowBox";
import './components.css'



const BookingWidget =()=> {
  return (
      <div className="main-booking-container">

    <div className="booking-widget">
        <h3 className="booking-header">

        Book this ride
        </h3>
        <p className="label">DATE</p>
        <p className="inputBox" ><CalendarOutlined  className="booking-icons"/> 12/12/2020</p>
        <p className="label">DURATION</p>
        <p className="inputBox" >   <FieldTimeOutlined  className="booking-icons"  /> 3 Hours</p>
        
        <p className="label">PICKUP TIME</p>
        <p className="inputBox" ><CaretDownOutlined  className="booking-icons"  />12:00 </p>
        
        <p className="label">PEOPLE</p>
        <p className="inputBox"  ><UserAddOutlined className="booking-icons"   /> 6</p>
        
        <p className="label">PICKUP POINT </p>
        <p className="inputBox" ><SearchOutlined className="booking-icons"  />Hotel , Place , Address</p>
        <div className="total-price-layout">
        <div className="price-heading">
            Total Price
        </div>
        <p className="total-price">€130 </p>

        </div>
        <p className="total-price-description">1 to 4 people cost €130  </p>
        <p className="bookingBtn" >Continue Booking</p>
        </div>

{/* <BellowBox /> */}
      </div>

  );
}

export default BookingWidget;
