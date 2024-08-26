import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './AllCategories.css'; // You can style this component with a separate CSS file


export default function AllCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${apiUrl}api/categories`);
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
            finally {
                setLoading(false); // Set loading to false once the fetch is complete
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="all-categories-container">
            <h2 className="categories-heading">All Categories</h2>
            <div className="categories-grid">
                {!categories || categories.length === 0 ? (
                    <Loader />
                ) : (
                    categories.map((category, index) => (
                        <Link to={`/categorycoupon/${category.name}`} className="category-box" key={index}>
                            {/* <i className={`category-icon ${category.icon}`} /> */}
                            <img src={apiUrl +category.category_image} alt={category.name} className='category-image' />
                            <p className="category-name">{category.name}</p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
