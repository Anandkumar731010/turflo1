import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      image: "images/image 7.png",
      title: "Venue Booking",
      description: "No more calls or back-and-forth messages. Book and play in just a few taps."
    },
    {
      image: "images/image 8.png",
      title: "Play with Like-Minded People",
      description: "Whether you're a beginner or a pro, our community helps you connect with players at your skill level."
    },
    {
      image: "images/image 9.png",
      title: "Gamified Sports Experience",
      description: "Track your performance with your Turflo score. Who said sports can't be rewarding?"
    },
    {
      image: "images/image 10.png",
      title: "Last-Minute? No Problem!",
      description: "Book on the go and find venues available instantly near you."
    }
  ];

  return (
    <div className="why-choose-us-container">
      <h2 className="heading1">Why Choose Us?</h2>
      <p className="subheading1">The Game Starts Here. </p>
      <div className="description1">
      Because Booking a Sports Venue Should Be as Fun as Playing! <p>We’re not just another venue listing platform—we’re changing the game for sports lovers.</p> Here’s why  <span className="highlight3">Turflo</span> is your ultimate playmate:
      </div><br/>
       
      <div className="features-grid">

        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
         
      </div>
    
      <br/>
    </div>
    
  );
};

export default WhyChooseUs;
