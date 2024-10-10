import React, { useState, useEffect } from "react";
import "./AllStores.css";
import Loader from "../Loader/Loader";
import { Link, useLoaderData } from "react-router-dom"; // Import useLoaderData to access route loader data
import NotFound from "../NotFound/NotFound";
import { useTranslation } from 'react-i18next';
const AllStores = ({ heading }) => {
  const { search } = useLoaderData(); // Retrieve 'search' parameter using useLoaderData
  const [stores, setStores] = useState([]);
  const { category } = useLoaderData();
  const [loading, setLoading] = useState(true); // Add a loading state
  const apiUrl = import.meta.env.VITE_API_URL; // Your API base URL
  const [currentPage, setCurrentPage] = useState(0); // For pagination
  const storesPerPage = 14; // Number of stores to show per page
  const { t } = useTranslation(); // Hook to get the translation functions
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(
          `${apiUrl}api/stores?search=${encodeURIComponent(
            search || ""
          )}&category=${encodeURIComponent(category || "")}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch stores");
        }

        const data = await response.json();
        setStores(data); // Update stores state with fetched data
      } catch (error) {
        console.error("Error fetching stores:", error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchStores();
  }, [search]); // Re-run the effect whenever the 'search' parameter changes

  // Pagination logic to display a subset of stores
  const displayedStores = stores.slice(
    currentPage * storesPerPage,
    (currentPage + 1) * storesPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * storesPerPage < stores.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mainStoreLogo">
      <div className="card-store-section">
        <h2>{t('store')}</h2>
        <div className="card-store-container">
          {loading ? ( // Display loader while fetching data
            <Loader />
          ) : displayedStores.length === 0 ? ( // Show message if no stores are found
            <NotFound />
          ) : (
            displayedStores.map((logo, index) => (
              <Link
                to={"/brand/" + logo.name}
                key={index}
                className="store-logo"
              >
                <img
                  src={apiUrl + logo.banner}
                  alt={logo.name}
                  className="store-logo-image"
                />
                <p>{logo.name}</p>
              </Link>
            ))
          )}
        </div>
        {stores.length > storesPerPage && (
          <div className="pagination-buttons">
            {/* Show Previous button only if we are not on the first page */}
            {currentPage > 0 && (
              <button
                onClick={handlePrevious}
                className="pagination-btn previous-btn"
              >
                {t('previous')}
              </button>
            )}

            {/* Show Next button only if there are more stores to show */}
            {(currentPage + 1) * storesPerPage < stores.length && (
              <button onClick={handleNext} className="pagination-btn next-btn">
                {t('next')}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllStores;
