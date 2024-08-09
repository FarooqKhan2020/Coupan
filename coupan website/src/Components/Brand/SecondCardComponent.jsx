import React from 'react';
import './SecondCardComponent.css';
import { Link } from "react-router-dom";
const SecondCardComponent = () => {
  return (
    <div className="second-card">
      <h3>Summer sales</h3>
      <p>Take advantage of the best offers and coupons</p>
      <Link to ='/'><button className="see-offers-button">SEE THE OFFERS</button></Link>
    </div>
  );
};

export default SecondCardComponent;
