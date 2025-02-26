import React, { useState } from "react";
import "./Navbar.css";
import MissionVision from "./MissionVision";
import WhyChooseUs from "./WhyChooseUs";
import WhyisItFor from "./WhoIsItFor";
import UserReviews from "./UserReviews";
import FAQ from "./FAQ";
import Contact2 from "./Contact2";
const sports = [
 { name: "Football", img: "/images/image 13.png" }, 
  { name: "Badminton", img: "/images/image 14.png" },
  { name: "Cricket", img: "/images/image.png" },
  { name: "Basketball", img: "/images/image 16 .png" },
  
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="navbar-container">
      <nav className="navbar"> 
        <img src="/images/logo.png" alt="Turflo Logo" className="logo" />
        
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li  ><a href="#missionvission">About</a> </li>
          <li> <a href="#our-service">Services</a></li>
          <li> <a href="#faq-ques">FAQs</a></li>
          <li>  <a href="#contactus"><button className="contact-button">Contact Us</button></a></li>
        </ul>
        
         <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          <img src="images/Vector.png"/>
        </button>
        
        {/* {menuOpen && (<button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)}> *</button>)} */}
      </nav>
      {menuOpen && (
        <ul className="mobile-menuopen">
          <li>About</li>
          <li>Services</li>
          <li>FAQs</li>
          <button className="contact-button2">Contact Us</button>
        </ul>
      )}
         <div className="gradint-back"></div>
          <p className="para3">The Game Starts Here.</p>
          <div className="cta-text">Get In Touch Now!</div>
          <div className="email-container">
            <input type="email" placeholder="Enter Your Email" className="email-input" />
            {/* <button className="email-submit"> <img src="images/Frame 6.png"/></button> */}
            <div className="emait-button"> <button className="email-submit"> <img src="images/Frame 6.png"/></button></div>
          </div>
          <div className="sports-container">
      {sports.map((sport, index) => (
        <div key={index} className="sport-card">
          <img src={sport.img} alt={sport.name} className="sport-image" />
          <div className="sport-name"><span className="sp-name">{sport.name}</span> </div>
        </div>
      ))}
    </div>
     
     </div>
     <section id="missionvission"> <MissionVision/> </section>
     <section id="our-service">  <WhyChooseUs/> </section>
     <section id="whyisitfor">     <WhyisItFor/> </section>
     <section id="userreview">    <UserReviews/> </section>
     <section id="faq-ques">   <FAQ/>  </section>
     <section id="contactus">    <Contact2/> </section>
     
</>
  );
};

export default Navbar;
