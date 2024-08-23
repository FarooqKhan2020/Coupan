import React from 'react';
import './ShopsComponent.css';
import { Link } from 'react-router-dom';

// const shops = [
//   { name: "Amazon", url: "/" },
//   { name: "ASOS", url: "/" },
//   { name: "Cdiscount", url: "/" },
//   { name: "Etam", url: "/" },
//   { name: "Groupon", url: "/" },
//   { name: "H&M", url: "/" },
//   { name: "Nike", url: "/" },
//   { name: "Orange", url: "/" },
//   { name: "PrettyLittleThing", url: "/" },
//   { name: "Rakuten", url: "/" },
//   { name: "Revolution Beauty", url: "/" },
//   { name: "Sephora", url: "/" },
//   { name: "SFR", url: "/" },
//   { name: "SNCF Connect", url: "/" },
//   { name: "Uber Eats", url: "/" }
// ];

const ShopsComponent = ({featureStoreNames}) => {
  return (
    <div className="main-shop">    <div className="shops-container">
      <h2>Shops of the moment</h2>
      <div className="shops-list">
        {featureStoreNames.map((shop, index) => (

          <Link
          key={index}
          className="shop-link"
          // to={store.url}
          to={`/brand/${shop}`}
          rel="noopener noreferrer"
        >
          {shop}
        </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShopsComponent;
