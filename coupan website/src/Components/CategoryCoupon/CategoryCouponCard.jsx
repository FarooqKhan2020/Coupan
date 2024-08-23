// import React from "react";
import React, { useState } from "react"
// import { FaHeart, FaCheckCircle } from "react-icons/fa";
import "./CategoryCouponCard.css";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaCrown, FaStar } from 'react-icons/fa';

const CategoryCouponCard = ({ coupons }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="coupon-card">
      <div className="coupon-card-image">
        <img src={apiUrl + coupons.banner} alt={coupons.title} />
        {/*<div className="coupon-card-heart">*/}
        {/*    <FaHeart />*/}
        {/*</div>*/}
        {coupons.offer !== null && (
          <div className="coupon-card-offer">{coupons.offer}% off</div>
        )}
      </div>
      {/* <div className="coupon-card-tags">
                {coupons.highlight && <span className="coupon-card-verified"><FaCheckCircle /> {coupons.highlight}</span>}
                <span className="coupon-card-category">{coupons.category.name}</span>
            </div> */}
      <div className="coupon-card-tags">
        {coupons.highlight === 1 && (
          <span className="coupon-card-verified">
            <FaStar /> Featured
          </span>
        )}
        {coupons.highlight === 2 && (
          <span className="coupon-card-verified">
            <FaCheckCircle /> Verified
          </span>
        )}
        {coupons.highlight === 3 && (
          <span className="coupon-card-verified">
            <FaCrown /> Exclusive
          </span>
        )}
        <span className="coupon-card-category">{coupons.category.name}</span>
      </div>
      <div className="coupon-card-content">
        <h3>{coupons.title}</h3>
        {/* <p>{coupons.description}</p> */}
        <p className={`coupon-card-description ${isExpanded ? "expanded" : ""}`}>
          {coupons.description}
        </p>
        {coupons.description.length > 100 && (
          <button className="toggle-description" onClick={toggleDescription}>
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
      <div className="coupon-card-footer">
        {/* {coupons.expire_date !== null && (
        <span>Expire: {coupons.expire_date}</span>
        )} */}
        {coupons.expire_date && (
          <span>Expire: {coupons.expire_date}</span>
        )
        }
            {/* <span>Expire: {coupons.expire_date}</span> */}
        <Link to="/" className="coupon-card-action">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default CategoryCouponCard;
