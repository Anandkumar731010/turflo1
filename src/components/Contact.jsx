import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Contact Form Section */}
        <div className="contact-form">
          <h2 className="contact-heading">Contact Us</h2>
          <input type="text" className="contact-input" placeholder="Full Name (Required)" />
          <input type="email" className="contact-input" placeholder="Email Address (Required)" />
          <input type="tel" className="contact-input" placeholder="Phone Number" />
          <textarea className="contact-textarea" placeholder="Message / Inquiry Details (Required)"></textarea>
          <button className="submit-btn">Submit</button>
        </div>

        {/* Quick Links & Other Links */}
        <div className="links-container">
          <div className="link-section">
            <h3 className="link-heading">Quick Links</h3>
            <ul className="link-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">FAQ’s</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="link-section">
            <h3 className="link-heading">Other Links</h3>
            <ul className="link-list">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Vision</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="social-icons">
          <img src="images/logo.png" alt="turflo" className="imglogo" />
          <h3 className="follow-text">Follow Us On:</h3>
          <div className="icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="contact-details">
          <p>📞 +91 98903 95020, +91 70171 14277</p>
          <p>✉️ Support@turflo.com</p>
        </div>
      </div>
      <div className="foot">
        <hr className="footer-line" />
        <p className="footp">© All Rights are reserved to Turflo.</p>
      </div>
    </div>
  );
};

export default Contact;
