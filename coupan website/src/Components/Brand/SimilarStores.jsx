import React from 'react';
import './SimilarStores.css';
import { Link } from 'react-router-dom';
// import mini from '../../assets/cardsImg/hilfiger.webp';
import mini from '../../assets/dropdown/ddh.jpg';
const SimilarStores = ({featureStoreNames}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
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
            <img src={mini} alt="" />
            <p>{store}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarStores;
