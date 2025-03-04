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
  { name: "Football", img: "/images/image 13.png" }, 
  { name: "Football", img: "/images/image 13.png" }, 

  
];
const Navbar = () => {
   const [formData, setFormData] = useState({ email: "" });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch("https://api.logixai.ca/api/turflow/subscription", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert("Thanks for subscribed!");
          setFormData({email: "" });
        } else {
          alert("Failed to submit form.");
           
          
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
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
          <li  ><a href="#missionvission">About</a> </li>
          <li> <a href="#our-service">Services</a></li>
          <li> <a href="#faq-ques">FAQs</a></li>
          <li>  <a href="#contactus"> <button className="contact-button2">Contact Us</button></a></li>
        </ul>
      )}
         <div className="gradint-back"></div>
          <div className="gamevalaclass"> <p className="para3">The Game Starts Here.</p></div>
          <div className="cta-text">Get In Touch Now!</div>
          <form onSubmit={handleSubmit}> 
          <div className="email-container">
            <input type="email" placeholder="Enter Your Email" className="email-input" onChange={handleChange} name ="email"  value={formData.email}  required/>
            {/* <button className="email-submit"> <img src="images/Frame 6.png"/></button> */}
            <div className="emait-button"> <button type="submit" className="email-submit"> <img src="images/Frame 6.png"/></button></div>
          </div></form>
        <marquee> <div className="sports-container">
            
      {sports.map((sport, index) => (
        <div key={index} className="sport-card">
          <img src={sport.img} alt={sport.name} className="sport-image" />
          <div className="sport-name"><span className="sp-name">{sport.name}</span> </div>
        </div>
      ))}
    
    </div></marquee> 
     
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
