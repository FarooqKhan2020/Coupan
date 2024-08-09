import React from 'react';
import './Categories.css';
import fashionImg from '../../assets/CategoriesImg/cat1.webp';
import mobileInternetImg from '../../assets/CategoriesImg/cat2.webp';
import leisureSportsImg from '../../assets/CategoriesImg/cat3.webp';
import moviesGamesMusicImg from '../../assets/CategoriesImg/cat4.webp';
import computersSoftwareImg from '../../assets/CategoriesImg/cat5.webp';
import booksMagazinesImg from '../../assets/CategoriesImg/cat6.webp';
import { Link } from "react-router-dom";
const categories = [
  { name: 'Fashion', image: fashionImg, link: '/brand' },
  { name: 'Mobile & Internet', image: mobileInternetImg, link: '/brand' },
  { name: 'Leisure & Sports', image: leisureSportsImg, link: '/brand' },
  { name: 'Movies, Games & Music', image: moviesGamesMusicImg, link: '/brand' },
  { name: 'Computers & Software', image: computersSoftwareImg, link: '/brand' },
  { name: 'Books & Magazines', image: booksMagazinesImg, link: '/brand' },
];

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Browse the categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <div className="category-name">{category.name}</div>
          </Link>
        ))}
      </div>
      <a href="#" className="all-categories-button">All Categories</a>
    </div>
  );
};

export default Categories;
