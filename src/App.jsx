import React from "react";
import Navbar from "./components/Navbar";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/metropolis"; 
import '@fontsource/metropolis/400.css'; // Regular
import '@fontsource/metropolis/500.css';
import '@fontsource/metropolis/300.css';
import '@fontsource/metropolis/600.css'; // Regular
import '@fontsource/metropolis/800.css'; // Regular
import '@fontsource/metropolis/700.css'; // Bold
import '@fontsource/metropolis/400-italic.css'; // Italic
import '@fontsource/metropolis/700-italic.css';
import '@fontsource/metropolis/600-italic.css';
import MissionVision from "./components/MissionVision";
import WhyChooseUs from "./components/WhyChooseUs";
import WhoIsItFor from "./components/WhoIsItFor";
import UserReviews from "./components/UserReviews";
import FAQ from "./components/FAQ";
import Contact2 from "./components/Contact2";
const App = () => {
  return (
    <div>
         <Navbar/>
         {/* <MissionVision/>
         <WhyChooseUs/>
         <WhoIsItFor/>
         <UserReviews/>
         <FAQ/>
         <Contact2/> */}
    </div>
  );
};

export default App;
