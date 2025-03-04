
import React from "react";
import "./UserReviews.css";

const reviews1 = [
  
  {
    name: "Daksh Lohmod",
    gender: "M",
    age: 23,
    sport: "Basketball",
    rating: 4.2,
    review: "I love Turflo community, made so many new connections while playing football!! "
  },
   
  {
    name: "Md Hafiz Qays",
    gender: "M",
    age: 26,
    sport: "Cricket",
    rating: 4.5,
    review: "We could make a Turflo team for tournaments or championships around Mumbai. There’s 40+ members, so it should be enough for a full squad - Starting 11, Subs, Reserves and a B team as well. "
  },
  {
    name: "Utkarsh",
    gender: "M",
    age: 27,
    sport: "Football",
    rating: 4.4,
    review: "Turflo, once an idea in a video call, now shapes the city’s gaming scene. It stands out by providing honest feedback to players, ensuring high-quality games. With the assurance that each match features skilled players, it brings excitement and hope to the community."
  },
  {
    name: "Lord Bhuvan",
    gender: "M",
    age: 24,
    sport: "Badminton",
    rating: 4.3,
    review: "The best in the business "
  },
   
  {
    name: "Vijay",
    gender: "M",
    age: 37,
    sport: "Bollyball",
    rating: 4.2,
    review: "Amazing platform to book a turf. User friendly and easily accessible. "
  }, 
];


const reviews2 = [
  {
    name: "Akhil Goyal",
    gender: "M",
    age: 26,
    sport: "Football",
    rating: 4.1,
    review: "Finally, someone who is able to understand sports well! This is a state-of-the-art platform for a revolution in sports - tech. "
  },
   
  {
    name: "Manish Jain",
    gender: "M",
    age: 31,
    sport: "Badminton",
    rating: 4.2,
    review: "Moving from Delhi to Bombay, I struggled for two months to find badminton groups. Then I discovered Turflo’s Host a Game feature. Now, we’re a growing family, even competing in tournaments. Kudos to Turflo! ❤️"
  },
   
  {
    name: "Ansh razdan ",
    gender: "M",
    age: 26,
    sport: "Cricket",
    rating: 4.4,
    review: "What a wonderful platform to connect with outdoor sports enthusiasts, easy connect ups and very responsive team. Kudos to you guys "
  },
  {
    name: "Ankit Sharma",
    gender: "M",
    age: 26,
    sport: "Football",
    rating: 4.3,
    review: "Most reasonable charges compared to other platform."
  },
  {
    name: "Mohit",
    gender: "M",
    age: 25,
    sport: "Cricket",
    rating: 4.5,
    review: "It's quite good. Nice UI and easy to maneuver across various sections. Would recommend."
  }  
];

const UserReviews = () => {
  return (
    
     <div className="reviews-container">
      <div className="heading2"> What Our Users Say About Turflo?</div>
       
      <div className="fadevalaimg"> 
      <div  className="rectanglefade"><img src=" images/Rectangle 20.png" /></div>
     <div  className="rectanglefade2"> <img src=" images/Rectangle 21.png"   alt="fad2"/></div>
      </div>
      <div className="reviews-grid">
        {reviews1.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <h3 className="reviewer-name">{review.name}</h3>
              <div className="review-rating"><img src="images/star.png"className="rat-img"/><div className="rew-rating">{review.rating}</div></div>
            </div>
            <div className="reviewer-info">{review.gender} • {review.age} • {review.sport}</div>
            <div className="review-text">{review.review}</div>

          </div>
        ))}
      </div>
      <div className="reviews-grid2">
        {reviews2.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <h3 className="reviewer-name">{review.name}</h3>
              <div className="review-rating"><img src="images/star.png"className="rat-img"/><div className="rew-rating">{review.rating}</div></div>
            </div>
            
            <div className="reviewer-info">{review.gender} • {review.age} • {review.sport}</div>
            <div className="review-text">{review.review}</div>
          
          </div>
        ))}
      </div>
    
    </div>
    
  );
};

export default UserReviews; 