import React from 'react';
import './SecondCardComponent.css';
import { Link } from "react-router-dom";
const SecondCardComponent = ({storepageBannerOne}) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    // <div className="second-card">
    <Link to={storepageBannerOne.link} target='_blank'>
    <div
    className="second-card"
    style={{
      backgroundImage: `url(${apiUrl + storepageBannerOne.background_image})`,  // Dynamically sets the background image from the API
      backgroundSize: 'cover',                   // Ensures the image covers the entire area
      backgroundPosition: 'center',              // Centers the image
      padding: '20px',                           // Adds padding inside the card
      borderRadius: '8px',                       // Rounds the corners
      color: '#fff',                             // Ensures text is readable
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  // Adds a subtle shadow
      height: '180px',
    }}
  >
      <h3></h3>
      <p></p>
      {/* <Link to ='/'><button className="see-offers-button">SEE THE OFFERS</button></Link> */}
    </div>
    </Link>
  );
};

export default SecondCardComponent;
