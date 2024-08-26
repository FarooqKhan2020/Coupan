import React from 'react';
import './ShopsComponent.css';
import { Link } from 'react-router-dom';

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
