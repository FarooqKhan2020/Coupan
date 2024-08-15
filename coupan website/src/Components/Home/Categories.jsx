import React from 'react';
import './Categories.css';

import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Categories = ({data}) => {
    console.log('data',data);
  return (
    <div className="categories-container">
      <h2>Browse the categories</h2>
      <div className="categories-grid">
        {data.map((category, index) => (
            <Link to={`/brand/${category.slug}`} key={index} className="category-card">
                <div className='category-icon'>
                    <i className={category.icon}></i>
                </div>

                <div className="category-name">{category.name}</div>
            </Link>
        ))}
      </div>
        <a href="#" className="all-categories-button">All Categories</a>
    </div>
  );
};

export default Categories;
