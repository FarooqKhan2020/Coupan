import React from "react";
import "./Categories.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const apiUrl = import.meta.env.VITE_API_URL;
const Categories = ({ data }) => {
  // if (!data || data.length === 0) {
  //   return <Loader/>
  // }

  const { t } = useTranslation(); // Hook to get the translation function
  return (
    <div className="categories-container">
      <h2>{t('browse_the_categories')}</h2>
      <div className="categories-home">
        {data.map((category, index) => (
          <Link
            key={index}
            className="category-card-home"
            to={{
              pathname: "/store", // base path for the CategoryCouponPage
              search: `?category=${category.id}`, // constructing the query parameters
            }}
          >
            {/* <div className='category-icon'>
                    <i className={category.icon}></i>
                </div> */}

            <img
              src={apiUrl + category.category_image}
              alt={category.category_image}
            />

            <div className="category-name-home">{category.name}</div>
          </Link>
        ))}
      </div>
      <Link to={"/category"} className="all-categories-button">
        {t('all_categories')}
      </Link>
    </div>
  );
};

export default Categories;
