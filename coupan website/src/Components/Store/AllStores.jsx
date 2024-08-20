import React, { useState, useEffect } from 'react';
import './AllStores.css';

import { Link } from "react-router-dom";


const AllStores = ({heading}) => {
  const [stores, setStores] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(`${apiUrl}api/stores`);
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  return (
    <div className="mainStoreLogo">
    <div className="card-store-section">
      <h2>{heading}</h2>
      <div className="card-store-container">
        {stores.map((logo, index) => (
          <Link to={"/brand/"+logo.name} key={index} className="store-logo">
            <img src={apiUrl+logo.banner} alt={logo.name} className="store-logo-image" />
            <p>{logo.name}</p>
          </Link>
        ))}
      </div>
      {/*<Link to="/brand" className="store-logo-button">Shops & brands from A-Z</Link>*/}
    </div>
    </div>
  );
};

export default AllStores;
