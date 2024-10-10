import React from "react";
import "./SimilarStores.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const SimilarStores = ({ featureStoreNames, simlarcoupons }) => {
  // console.log(simlarcoupons,"simlarcoupons");
  const apiUrl = import.meta.env.VITE_API_URL;
  const { t } = useTranslation();
  return (
    <div className="similar-stores">
      <h3>{t("similar_stores")}</h3>
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
