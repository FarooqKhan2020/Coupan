import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import NotFound from "../NotFound/NotFound";
import { useTranslation } from 'react-i18next';
import "./AllCategories.css";

export default function AllCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state to handle fetch errors
  const [currentPage, setCurrentPage] = useState(0); // For pagination
  const categoriesPerPage = 14; // Number of categories to show per page
  const { t } = useTranslation(); // Hook to get the translation function
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}api/categories`);
        if (!response.ok) {
          throw new Error("Failed to fetch categories."); // Throw error for non-2xx responses
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError(error.message); // Set error message in state
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [apiUrl]);

  const displayedCategories = categories.slice(
    currentPage * categoriesPerPage,
    (currentPage + 1) * categoriesPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * categoriesPerPage < categories.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // if (loading) {
  //   return <Loader />; // Display loader while fetching data
  // }

  // if (error) {
  //   return <div className="error-message">{error}</div>; // Display error message if fetching fails
  // }

  // if (categories.length === 0) {
  //   return <NotFound />; // Display 'NotFound' component if no categories are found
  // }


  return (
    <div className="all-categories-container">
      <h2 className="categories-heading">{t('all_categories')}</h2> 
      <div className="categories-grid">
        {loading ? (
          <Loader />
        ) : displayedCategories.length === 0 ? (
          <NotFound />
        ) : (
        displayedCategories.map((category, index) => (
          <Link
            className="category-box"
            key={index}
            to={`/store?category=${category.id}`} // Use template literals for cleaner code
          >
            <img
              src={apiUrl + category.category_image}
              alt={category.name}
              className="category-image"
            />
            <p className="category-name">{category.name}</p>
          </Link>
        ))
      )}
      </div>

      {/* Pagination Controls */}
      {categories.length > categoriesPerPage && (
        <div className="pagination-buttons">
          {/* Show Previous button only if we are not on the first page */}
          {currentPage > 0 && (
            <button onClick={handlePrevious} className="pagination-btn previous-btn">
              {t('previous')}
            </button>
          )}

          {/* Show Next button only if there are more categories to show */}
          {(currentPage + 1) * categoriesPerPage < categories.length && (
            <button onClick={handleNext} className="pagination-btn next-btn">
              {t('next')}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
