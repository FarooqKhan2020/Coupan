import React from 'react';
import './Categories.css';
import Loader from '../Loader/Loader';
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const apiUrl = import.meta.env.VITE_API_URL;
const Categories = ({data}) => {

  if (!data || data.length === 0) {
    return <Loader/>
  }
  return (
    <div className="categories-container">
      <h2>Browse the categories</h2>
      <div className="categories-home">
        {data.map((category, index) => (
            <Link to={`/categorycoupon/${category.slug}`} key={index} className="category-card-home">
          
                {/* <div className='category-icon'>
                    <i className={category.icon}></i>
                </div> */}
                
                    <img src={apiUrl +category.category_image} alt={category.category_image} />
               

                <div className="category-name-home">{category.name}</div>
            </Link>
        ))}
      </div>
        <Link to={"/category"} className="all-categories-button">
        All Categories
        </Link>
    </div>
  );
};

export default Categories;
