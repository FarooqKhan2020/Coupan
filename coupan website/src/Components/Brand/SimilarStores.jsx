import React from 'react';
import './SimilarStores.css';
import { Link } from 'react-router-dom';



const SimilarStores = ({featureStoreNames}) => {
  
  return (
    <div className="similar-stores">
      <h3>Similar stores</h3>
      <div className="tags-container">
        {featureStoreNames.map((store, index) => (
          <Link
            key={index}
            // to={store.url}
            to={`/brand/${store}`}
            // target="_blank"
            rel="noopener noreferrer"
            className="store-tag"
          >
            {store}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarStores;
