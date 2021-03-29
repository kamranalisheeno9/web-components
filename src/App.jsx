import React from 'react'
import './App.css';
import Header from "./components/header"
import CarrouselImage from "./components/carrouselBoxedImage"
import BookingWidget from "./components/bookingWidget"
import ImagesWithSteps from "./components/imagesWithSteps"
import RidesCarrousel from "./components/otherRidesCarrousel"
import Footer from "./components/footer"
import InnerNav from "./components/inner-nav"
import BellowBox from "./components/bellowBox";
import MainCarrousel from "./components/mainCarrousel";

function App() {
  return (
    <div className="App">
     <CarrouselImage id="home" />
     <div className="inner-nav-sticky" >

     <InnerNav  stop="stop" about="about" review="review" question="question" />
     </div>
     <div className="about-and-booking">
       <div className="stepsImages">

         <ImagesWithSteps stop="stop" about="about" review="review" question="question"  id="about" id2="question" />
       </div>
       <div className="booking-container"  >
        <div className="booking">

         <BookingWidget />
        </div>
         <div>
           <BellowBox />
         </div>

       </div>
     </div>
     <MainCarrousel />
     <RidesCarrousel id="other" />

     <Footer />
    </div>
  );
}

export default App;
