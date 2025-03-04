import React from "react";
import { useState } from "react";
import "./Contact2.css";

const Contact2 = () => {
  const [formData, setFormData] = useState({ full_name: "", email: "" , phone: "" , message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://api.logixai.ca/api/turflow/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your Details have been records, our team will get back to you soon.!');
        setFormData({full_name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };




  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent default form submission
  //   alert('Your Details have been records, our team will get back to you soon.!');
  //   // You can also handle your form submission logic here
  // };

  return (
    <div className="baharvala">
    <div className="contact-container">
      
      <div  className="contact-form"><form onSubmit={handleSubmit}  >
        <div className="contact-heading6">Contact Us</div>
        <div className="formvalainput">
        <input type="text" className="contact-input" placeholder="Full Name (Required)" onChange={handleChange} name ="full_name" value={formData.full_name} required/>
        <input type="email" className="contact-input" placeholder="Email Address (Required)" onChange={handleChange} name ="email"  value={formData.email} required />
        <input type="tel" className="contact-input" placeholder="Phone Number" onChange={handleChange} name ="phone"  value={formData.phone} required/>
        <textarea className="contact-textarea" placeholder="Message / Inquiry Details (Required)" onChange={handleChange} name ="message"  value={formData.message} required></textarea>
        </div>
        <button type="submit" className="submit-btn"><div className="submittext1">Submit</div></button>
      </form>
      </div>
      {/* </div> */}
      <div className="formkesidevaladiv">
      <div className="forlink">
  <div className="link-heading">Quick Link </div>
  <div className="link-heading2">Other Link</div>
  </div>
  <div className="linksectionpart">
  <div className="link-section">
        
          <ul className="link-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">FAQ’s</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        {/* <div className="link-heading2">Other Link</div> */}
        <div className="link-section2">
          
          <ul className="link-list2">
            <li ><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        </div>
      {/* Quick Links & Other Links */}
      <div className="logopartturflow">
      <div className="footerpart">
       <div className="logofooter">  
       <img src="images/logo.png" alt="turflo" className="imglogo1" />
       </div>
       <div className="sociallogo">
       <div className="follow-text">Follow Us On :</div>
       <div className="social-box">
    <i className="fab fa-facebook"></i>
    <i className="fab fa-twitter"></i>
    <i className="fab fa-instagram"></i>
    <i className="fab fa-linkedin"></i>
  </div>
  </div>
  </div>
  <div className="nichekapart">
  <div className="contact-details">+91 98903 95020, +91 70171 14277<div className="phoneimg"><img src="images/Vectorph.png"/></div></div>
  <div className="parag">turflo2024@gmail.com<div className="phoneimg2"><img src="images/Vectorsms.png"/></div></div>
  </div>
  </div>
  </div>
        
    </div>
    <div className="footer-line">
    <div className="foot-line"><img src="images/Line 7.png" /></div>
    <div className="footup"><span><img src="images/VectorCopy.png" className="copyimg"/></span> <span className="fottext">  All. Rights are reserved to Turflo.</span></div>
    </div>
     </div>
  );
};
export default Contact2