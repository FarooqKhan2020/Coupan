import React, { useState, useEffect } from "react";
import "./CardComponent.css";
import { Link } from "react-router-dom";
import OfferPopup from "../Brand/OfferPopup";
import CodePopup from "../Brand/CodePopup";
// import Loader from "../Loader/Loader";


const CardComponent = ({ data, popupModal }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [rotatingCategoryId, setRotatingCategoryId] = useState(null);
  const [expandedCouponIndex, setExpandedCouponIndex] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedCodeOffer, setSelectedCodeOffer] = useState(null);
  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
    setRotatingCategoryId(categoryId);
    setTimeout(() => {
      setRotatingCategoryId(null);
    }, 500); // Adjust this to match your rotation duration
  };
  // State to manage expanded description

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
        return "Featured";
      case 2:
        return "Verified";
      case 3:
        return "Exclusive";
      default:
        return "";
    }
  };

  const toggleDescription = (index) => {
    setExpandedCouponIndex(expandedCouponIndex === index ? null : index);
  };

  const handleViewOffer = (coupon) => {
    if (coupon.code === null) {
      setSelectedOffer(coupon);
    } else {
      setSelectedCodeOffer(coupon);
    }
  };

  const handleClosePopup = () => {
    setSelectedOffer(null);
    setSelectedCodeOffer(null);
  };

  return (
    <div className="maincard">
      <div className="container card-container">
        <h1 className="card-heading">Promo codes and discounts of the week!</h1>
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
                {coupon.highlight && (
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
                  src={apiUrl + `public/${coupon.banner}`}
                  // alt="Coupon Banner"
                  alt={coupon.highlight}
                  className="card-logoImg"
                />
              </Link>
              {/* {coupon.offer !== null && (
                <div className="card-title">{coupon.offer}%</div>
              )} */}

                {coupon.offer !== null ?(
                  <div className="card-title">{coupon.offer}%</div>
                ) : (
                  <div className="card-title">Offer</div>
                )}

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
                  {expandedCouponIndex === index ? "Show Less" : "Read More"}
                </button>
              )}


               {/* Conditional Rendering for Buttons */}
               {coupon.code === null ? (
                // this is *****link-tag****
                <Link to={coupon.link} rel="noopener noreferrer" target="_blank">   
                  <button className="card-button"
                  onClick={() => handleViewOffer(coupon)}
                  >
                    See the promo
                  </button>
                </Link>
                // this is *****link-tag-end****
              ) : (
                // this is *****link-tag****
                <Link to={coupon.link} rel="noopener noreferrer" target="_blank">
                  <button className="coupon-code-button"
                  onClick={() => handleViewOffer(coupon)}
                  >
                    <span className="coupon-inner-text">{coupon.code}</span>
                    <span className="coupon-blue-wrap">
                      View code
                      <span className="coupon-fold"></span>
                    </span>
                  </button>
                </Link>
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
          {selectedOffer && (
        <OfferPopup offer={selectedOffer} popupModal={popupModal} onClose={handleClosePopup} />
      )}

      {selectedCodeOffer && (
        <CodePopup code={selectedCodeOffer} onClose={handleClosePopup}  popupModal={popupModal}/>
      )}
    </div>
  );
};

export default CardComponent;
