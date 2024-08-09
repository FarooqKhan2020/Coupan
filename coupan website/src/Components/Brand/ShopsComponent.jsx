import React from 'react';
import './ShopsComponent.css';
import { Link } from 'react-router-dom';

const shops = [
  { name: "Amazon", url: "/" },
  { name: "ASOS", url: "/" },
  { name: "Cdiscount", url: "/" },
  { name: "Etam", url: "/" },
  { name: "Groupon", url: "/" },
  { name: "H&M", url: "/" },
  { name: "Nike", url: "/" },
  { name: "Orange", url: "/" },
  { name: "PrettyLittleThing", url: "/" },
  { name: "Rakuten", url: "/" },
  { name: "Revolution Beauty", url: "/" },
  { name: "Sephora", url: "/" },
  { name: "SFR", url: "/" },
  { name: "SNCF Connect", url: "/" },
  { name: "Uber Eats", url: "/" }
];

const ShopsComponent = () => {
  return (
    <div className="main-shop">    <div className="shops-container">
      <h2>Shops of the moment</h2>
      <div className="shops-list">
        {shops.map((shop, index) => (
          // <div key={index} className="shop-link">
          //   <a href={shop.url} rel="noopener noreferrer">
          //     {shop.name}
          //   </a>
          // </div>

          <Link
          key={index}
          className="shop-link"
          to={shop.url}
          rel="noopener noreferrer"
        >
          {shop.name}
        </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShopsComponent;
