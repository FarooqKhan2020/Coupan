import React from "react";
import "./asideLogoCard.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const asideLogoCard = ({ logo, averageRating, totalReviews }) => {
  // Generate stars based on rating
  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  

  return (
    <div className="main-aside">
      <div className="logo-card">
        <img src={logo} alt="Brand Logo" className="brand-logo" />
        <div className="rating-stars">
          {Array(fullStars).fill(<FaStar className="star full-star" />)}
          {halfStar && <FaStarHalfAlt className="star half-star" />}
          {Array(emptyStars).fill(<FaRegStar className="star empty-star" />)}
        </div>
        <p>
          Average of {averageRating} out of {totalReviews} reviews.
        </p>
      </div>
    </div>
  );
};

export default asideLogoCard;
