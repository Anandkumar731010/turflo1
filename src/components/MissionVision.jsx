import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    
    <div className="container">
      {/* Mission Section */}
      
      <div className="card">
        
        <div className="image-missionsymbol">
          
        <img src="images/1.png"  className = "imageset1" alt="our mission sym"/>
        </div>
        <div className=" 9"> <img src="images/Vector 2.png" className="ourmistringle" alt="" /><img src="images/Vector 1.png" className="card-header mission-header"/><span className="ourmis">Our Mission</span> </div>
        <p className="highlight">Changing the Game, One Play at a Time!</p>
        <p className="text">
          At <span className="bold1">Turflo</span>, we believe that playing sports should be as easy as scrolling through your phone.
          No more excuses, no more empty courts—just pure play, anytime, anywhere. Our mission is to bring people together
          through sports, make it easier than ever to organize teams, find teammates, and turn every match into a experience.
        </p>
        <p className="text">Because in our world, everyone deserves a chance to play!</p>
      </div>

      {/* Vision Section */}
      <div className="card2">
        <div className="ourvisn"> 
      <div className="image-missionsymbol2">
        <img src="images/(1).png"  className = "imageset1" alt="our vission sym"/>
        </div>
        <div className="tringlevisionvala"><img className="card-header vision-header" src="images/Vector 5.png"/> <span className="ourvis">Our Vision</span><img src="images/Vector 6.png" className="ourvistringle"/></div>
         </div>
        <p className="highlight1">A World Where Everyone Plays More & Scrolls Less!</p>
        <p className="text2">
        Imagine a world where every empty sports venue is buzzing with energy, every player finds a match, and every game is just a tap away. That’s the future we’re building—a global sports ecosystem that connects, engages, and inspires people to move. We see a future where:</p>
        <p className="text2">More people choose sports over screens  ✅ <br/> Communities grow stronger through play  ✅<br/>Sports venues are always filled with action  ✅</p>
        <p className="text2">
        Because sports is not just a game—it’s a lifestyle. And we’re here to make sure you never stop playing! Would you like to tweak this further or add any personal story behind the idea?
        </p>
      </div>
      
    </div>
    
  );
};

export default MissionVision;
