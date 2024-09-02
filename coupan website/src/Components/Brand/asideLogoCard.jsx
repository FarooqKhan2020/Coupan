// AsideLogoCard.jsx

import React, { useState, useEffect } from "react";
import "./asideLogoCard.css";
import { FaStar, FaStarHalfAlt, FaRegStar, FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const AsideLogoCard = ({ logo, averageRating, totalReviews, storeId }) => {
  const [isReviewPopupVisible, setReviewPopupVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(1);
  const [comment, setComment] = useState("");
  const [reviewerId, setReviewerId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  // Generate or retrieve the unique reviewer ID
  useEffect(() => {
    let storedReviewerId = localStorage.getItem("reviewer_id");
    if (!storedReviewerId) {
      storedReviewerId = uuidv4();
      localStorage.setItem("reviewer_id", storedReviewerId);
    }
    setReviewerId(storedReviewerId);
  }, []);

  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const toggleReviewPopup = () => {
    setReviewPopupVisible(!isReviewPopupVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure selectedRating is a number
    const ratingNumber = parseInt(selectedRating, 10);

    const data = {
      rating: ratingNumber,
      store_id: storeId,
      comment,
      reviewer_id: reviewerId,
    };
    setIsSubmitting(true); // Start submitting

    try {
      const response = await fetch(apiUrl + "api/subscribe-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.status === 1) {
        alert("Review submitted successfully");
        // Optionally, reset the form
        setSelectedRating(1);
        setComment("");
      } 
      else {
        alert(result.message || "Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // End submitting
      setReviewPopupVisible(false); // Close the popup
    }
  };

  return (
    <div className="main-aside">
      <div className="logo-card">
        <img src={logo} alt="Brand Logo" className="brand-logo" />
        <div className="rating-stars">
          {Array.from({ length: fullStars }).map((_, index) => (
            <FaStar key={`full-${index}`} className="star full-star" />
          ))}
          {halfStar && <FaStarHalfAlt key="half-star" className="star half-star" />}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <FaRegStar key={`empty-${index}`} className="star empty-star" />
          ))}
        </div>
        <p>
          Average of {averageRating} out of {totalReviews} reviews.
        </p>
        <button className="btn btn-primary mt-3" onClick={toggleReviewPopup}>
          Submit Review
        </button>
      </div>

      {/* Review Popup */}
      {isReviewPopupVisible && (
        <div className="review-popup">
          <div className="popup-content">
            <button className="close-popup" onClick={toggleReviewPopup}>
              <FaTimes />
            </button>
            <h2>Write A Review</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  required
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {`${star} ${'★'.repeat(star)}${'☆'.repeat(5 - star)}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your review here..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsideLogoCard;
