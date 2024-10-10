import React, { useState, useEffect } from "react";
import "./CardComponent.css";
import { Link } from "react-router-dom";
import OfferPopup from "../Brand/OfferPopup";
import CodePopup from "../Brand/CodePopup";
// import Loader from "../Loader/Loader";
import { useTranslation } from 'react-i18next';

const CardComponent = ({ data, popupModal }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [rotatingCategoryId, setRotatingCategoryId] = useState(null);
  const [expandedCouponIndex, setExpandedCouponIndex] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedCodeOffer, setSelectedCodeOffer] = useState(null);
  const { t } = useTranslation(); // Hook to get the translation function
  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
    setRotatingCategoryId(categoryId);
    setTimeout(() => {
      setRotatingCategoryId(null);
    }, 500); // Adjust this to match your rotation duration
  };
  // State to manage expanded descriptions
  useEffect(() => {
    if (data && data.length > 0) {
      setActiveCategoryId(data[0].id);
    }
  }, [data]);

  // if (!data || data.length === 0) {
  //   return <Loader/>
  // }

  // Find the active category based on the activeCategoryId
  const activeCategory = data.find(
    (category) => category.id === activeCategoryId
  );

  // if (!activeCategory) {
  //   return <div>No data found.</div>;
  // }

  const getHighlightLabel = (highlight) => {
    switch (highlight) {
      case 1:
        return t("featured");
      case 2:
        return t("verified");
      case 3:
        return t("exclusive");
      default:
        return "";
    }
  };

  const toggleDescription = (index) => {
    setExpandedCouponIndex(expandedCouponIndex === index ? null : index);
  };

  const [isModalOpencode, setIsModalOpenCode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const modalState = localStorage.getItem("isModalOpen");
    
    let savedCoupons;
    try {
      // Parse localStorage and ensure it's an array
      savedCoupons = JSON.parse(localStorage.getItem("coupon")) || [];
      if (!Array.isArray(savedCoupons)) {
        savedCoupons = [savedCoupons]; 
      }
    } catch (error) {
      savedCoupons = []; 
    }
 
  
    if (modalState === "true") {
      const savedCoupon = savedCoupons.find((coupon) => {
        return coupon.code;
      });

  
      if (savedCoupon) {
        setSelectedCodeOffer(savedCoupon);
        setIsModalOpenCode(true);
      } else {
        setIsModalOpen(true);
      }
    }
  }, []);
  


  const handleViewOffer = (coupon) => {
    localStorage.setItem('coupon', JSON.stringify(coupon)); // Store the entire coupon object
    localStorage.setItem("isModalOpen", "true");

    if (!coupon.code) {
      setSelectedOffer(coupon);
      setIsModalOpen(true);
    } else {
      setSelectedCodeOffer(coupon);
      setIsModalOpenCode(true);
    }

    // Open a new tab
    let newTab = window.open(window.location.href, "_blank", "noopener,noreferrer");
    if (newTab) {
      newTab.onload = () => {
        localStorage.setItem("isModalOpen", "true");
      };
    }

    // Redirect to the coupon link in the current window
    if (coupon.link) {
      window.location.href = coupon.link;
    } else {
      console.error("Coupon link is missing or invalid");
    }
  };

  const handleOffer = (coupon) => {
  
    if (!coupon.code) {
      setSelectedOffer(coupon); 
    }
  };
  

  const handleClosePopup = () => {
    setSelectedOffer(null);
    setSelectedCodeOffer(null);
    localStorage.setItem("isModalOpen", "false");
  };


  return (
    <div className="maincard">
      <div className="container card-container">
        <h1 className="card-heading">{t('Promo_code_of_week')}</h1>
        <div className="group-buttons">
          {data.map((category) => (
            // <button
            //   key={category.id}
            //   className={activeCategoryId === category.id ? "active" : ""}
            //   onClick={() => setActiveCategoryId(category.id)}
            // >
            //   <i className={category.icon}></i>
            //   {" " + category.name}
            // </button>
            <button
              key={category.id}
              className={activeCategoryId === category.id ? "active" : ""}
              onClick={() => handleCategoryClick(category.id)}
            >
              <i
                className={`${category.icon} ${
                  rotatingCategoryId === category.id ? "rotate" : ""
                }`}
              ></i>
              {" " + category.name}
            </button>
          ))}
        </div>
        <div className="cards-section">
          {activeCategory?.coupons.map((coupon, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                {/* Display the category icon for each coupon */}
                <i className={activeCategory.icon}></i>
                {coupon.highlight != 0 && (
                  <span className="highlight-label">
                    {getHighlightLabel(coupon.highlight)}
                  </span>
                )}
              </div>
              {/* {coupon.highlight && (
                <span className="highlight-label">
                  {getHighlightLabel(coupon.highlight)}
                </span>
              )} */}
              <Link to={coupon.link} rel="noopener noreferrer" target="_blank">
                <img
                  src={apiUrl + `public/${coupon.store.banner}`}
                  // alt="Coupon Banner"
                  alt={coupon.highlight}
                  className="card-logoImg"
                />
              </Link>
              {/* {coupon.offer !== null && (
                <div className="card-title">{coupon.offer}%</div>
              )} */}

              {/* {coupon.offer !== null ? (
                <div className="card-title">{coupon.offer}%</div>
              ) : (
                <div className="card-title">Offer</div>
              )} */}
                {coupon.offer !== null ? (
                <div className="card-title">{coupon.offer}%</div>
              ) : null}

              {/* <div className="card-description-home">{coupon.description}</div> */}
              <div
                className={`card-description-home ${
                  expandedCouponIndex === index ? "expanded" : ""
                }`}
              >
                {coupon.description}
              </div>
              {coupon.description.length > 100 && (
                <button
                  className="toggle-description-button"
                  onClick={() => toggleDescription(index)}
                >
                  {expandedCouponIndex === index ? t('show_less') : t('read_more')}
                </button>
              )}

              {/* Conditional Rendering for Buttons */}
              {coupon.code === null ? (
                // this is *****link-tag****
                <Link
                  to={coupon.link}
                  target="_blank"
                >
                  <button
                    className="card-button"
                    onClick={() => handleOffer(coupon)}
                  >
                   {t('see_the_promo')}
                  </button>
                </Link>
              ) : (
                // this is *****link-tag-end****
                // this is *****link-tag****
                // <Link to={coupon.link} rel="noopener noreferrer" target="_blank">
                //   <button className="coupon-code-button"
                //   onClick={() => handleViewOffer(coupon)}
                //   >
                //     <span className="coupon-inner-text">{coupon.code}</span>
                //     <span className="coupon-blue-wrap">
                //       View code
                //       <span className="coupon-fold"></span>
                //     </span>
                //   </button>
                // </Link>

                <div>
                  <button
                    className="coupon-code-button"
                    onClick={() => handleViewOffer(coupon)}
                  >
                    <span className="coupon-inner-text">{coupon.code}</span>
                    <span className="coupon-blue-wrap">
                      {t('view_code')}
                      <span className="coupon-fold"></span>
                    </span>
                  </button>
                </div>

                // this is *****link-tag-end****
                // <Link
                //   to={coupon.link}
                //   rel="noopener noreferrer"
                //   target="_blank"
                // >
                //   <button
                //     className="coupon-code-button"
                //     onClick={(e) => {
                //       e.preventDefault(); // Prevent default Link behavior

                //       handleViewOffer(coupon); // Call your existing function to handle the offer view

                //       // Create a synthetic MouseEvent to simulate Ctrl + Click (or Cmd + Click on macOS)
                //       const newTabEvent = new MouseEvent("click", {
                //         bubbles: true,
                //         cancelable: true,
                //         view: window,
                //         ctrlKey: true, // For Windows/Linux to open the link in a new tab
                //         metaKey: true, // For macOS to open the link in a new tab
                //       });

                //       // Create a temporary anchor element to simulate the click
                //       const anchor = document.createElement("a");
                //       anchor.href = coupon.link;
                //       anchor.target = "_blank";
                //       anchor.rel = "noopener noreferrer";
                //       anchor.dispatchEvent(newTabEvent); // Dispatch the event

                //       // The following ensures the link is opened correctly
                //       anchor.click();
                //     }}
                //   >
                //     <span className="coupon-inner-text">{coupon.code}</span>
                //     <span className="coupon-blue-wrap">
                //       View code
                //       <span className="coupon-fold"></span>
                //     </span>
                //   </button>
                // </Link>

                // this is *****link-tag-end****
              )}

              {/* <Link to={coupon.link} rel="noopener noreferrer">
                <button className="card-button">
                  {coupon.code ? `Use Code: ${coupon.code}` : "See the promo"}
                </button>
              </Link>

              <Link to={coupon.link} rel="noopener noreferrer">
                <button class="coupon-code-button">
                  <span class="coupon-inner-text">{coupon.code}</span>
                  <span class="coupon-blue-wrap">
                    View code
                    <span class="coupon-fold"></span>
                  </span>
                </button>
              </Link> */}
            </div>
          ))}
        </div>
      </div>

      {/* Offer Popups */}
      { selectedOffer && (
        <OfferPopup
          offer={selectedOffer}
          popupModal={popupModal}
          onClose={handleClosePopup}
        />
      )}

      {isModalOpencode && selectedCodeOffer && (
        <CodePopup
          code={selectedCodeOffer}
          onClose={handleClosePopup}
          popupModal={popupModal}
        />
      )}
    </div>
  );
};

export default CardComponent;
