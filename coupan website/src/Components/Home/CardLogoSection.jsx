import React from 'react';
import './CardLogoSection.css';
import Loader from '../Loader/Loader';
import { Link } from "react-router-dom";


const CardLogoSection = ({data}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  if (data.length === 0) {
    return <Loader />;
  }
  return (
    <div className="mainLogo">
    <div className="card-logo-section">
      <h2>Where do you want to save?</h2>
      <div className="card-logo-container">
        {data.map((logo, index) => (
          <Link to={"/brand/"+logo.name} key={index} className="card-logo">
            <img src={apiUrl+logo.banner} alt={logo.alt} className="card-logo-image" />
            <p>{logo.coupons_count+" vouchers"}</p>
          </Link>
        ))}
      </div>
      
      <Link to="/store" className="card-logo-button">All Stores</Link>
    </div>
    </div>
  );
};

export default CardLogoSection;
