import React, { useState, useEffect } from "react";
import "./CardComponent.css";
import { Link } from "react-router-dom";

const CardComponent = ({ data }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  // State to manage expanded description
  const [expandedCouponIndex, setExpandedCouponIndex] = useState(null);
  useEffect(() => {
    if (data && data.length > 0) {
      setActiveCategoryId(data[0].id);
    }
  }, [data]);

  if (!data || data.length === 0) {
    return <div>No categories available.</div>;
  }

  // Find the active category based on the activeCategoryId
  const activeCategory = data.find(
    (category) => category.id === activeCategoryId
  );
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

  return (
    <div className="maincard">
      <div className="container card-container">
        <h1 className="card-heading">Promo codes and discounts of the week!</h1>
        <div className="group-buttons">
          {data.map((category) => (
            <button
              key={category.id}
              className={activeCategoryId === category.id ? "active" : ""}
              onClick={() => setActiveCategoryId(category.id)}
            >
              <i className={category.icon}></i>
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
              </div>
              {coupon.highlight && (
                <span className="highlight-label">
                  {getHighlightLabel(coupon.highlight)}
                </span>
              )}
              <Link to={coupon.link} rel="noopener noreferrer">
                <img
                  src={apiUrl + `public/${coupon.banner}`}
                  alt="Coupon Banner"
                  className="card-logoImg"
                />
              </Link>
              {coupon.offer !== null && (
                <div className="card-title">{coupon.offer}%</div>
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
              {/* <Link to={coupon.link} rel="noopener noreferrer">
                    <button className="card-button">
                      {coupon.code ? `Use Code: ${coupon.code}` : "View Deal"}
                    </button>
                  </Link> */}

              <Link to={coupon.link} rel="noopener noreferrer">
                <button class="coupon-code-button">
                  <span class="coupon-inner-text">SECRET CODE</span>
                  <span class="coupon-blue-wrap">
                    View code
                    <span class="coupon-fold"></span>
                  </span>
                </button>
              </Link>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
