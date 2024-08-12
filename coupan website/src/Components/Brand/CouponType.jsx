import React from "react";
import "./CouponType.css";

const CouponType = ({ selectedType, handleRadioChange, counts }) => {
  console.log('type', selectedType)
  return (
    <div className="main-coupon">
      <div className="coupon-type">
        <h3>Coupon Type:</h3>
        <label
          className={`radio-label ${selectedType == 0 ? "selected" : ""}`}
        >
          <input
            type="radio"
            value="all"
            checked={selectedType == 0}
            onChange={() => handleRadioChange(0)}
          />
          All ({counts.all})
        </label>
        <label
          className={`radio-label ${selectedType == 1 ? "selected" : ""}`}
        >
          <input
            type="radio"
            value="featured"
            checked={selectedType == 1}
            onChange={() => handleRadioChange(1)}
          />
          Featured ({counts.featured})
        </label>
        <label
          className={`radio-label ${
            selectedType == 2 ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            value="verified"
            checked={selectedType === 2}
            onChange={() => handleRadioChange(2)}
          />
          Verified ({counts.verified})
        </label>
        <label
          className={`radio-label ${
            selectedType == 3 ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            value="exclusive"
            checked={selectedType === 3}
            onChange={() => handleRadioChange(3)}
          />
          Exclusive ({counts.exclusive})
        </label>
      </div>
    </div>
  );
};

export default CouponType;
