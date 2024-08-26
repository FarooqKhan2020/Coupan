import React from "react";
import "./SimilarStores.css";
import { Link } from "react-router-dom";

const SimilarStores = ({ featureStoreNames }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div className="similar-stores">
      <h3>Similar stores</h3>
      <div className="tags-container">
        {featureStoreNames.map((store, index) => (
          <Link
            key={index}
            // to={store.url}
            to={`/brand/${store.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="store-tag"
          >
            <img src={apiUrl + store.banner} alt="" />
            {/* <p>{store}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarStores;
